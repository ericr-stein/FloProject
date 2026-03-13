# Betriebshandbuch — GreenSport Graubünden Website

| Feld            | Wert                          |
|-----------------|-------------------------------|
| **Projekt**     | GreenSport Graubünden         |
| **Dokument**    | HERM-09 Betriebshandbuch      |
| **Datum**       | 2026-03-13                    |
| **Autor**       | Eric Rauchentein              |
| **Version**     | 1.0                           |

---

## 1. Zweck

Dieses Betriebshandbuch beschreibt die Installation, den Betrieb und die Wartung der GreenSport-Graubünden-Website. Es richtet sich an Personen, die für den technischen Betrieb der Plattform verantwortlich sind.

## 2. Systemanforderungen

| Anforderung        | Minimum                                         |
|--------------------|------------------------------------------------|
| Betriebssystem     | Windows 10+, macOS 12+, Linux (Ubuntu 20.04+) |
| Docker             | Docker Desktop 4.x oder Docker Engine 24+      |
| Docker Compose     | v2.x (in Docker Desktop enthalten)             |
| Arbeitsspeicher    | 2 GB frei                                       |
| Festplatte         | 500 MB frei                                     |
| Netzwerk           | Port 8080 verfügbar                             |
| Git                | 2.x                                             |

## 3. Installation

### 3.1 Repository klonen

```bash
git clone https://github.com/ericr-stein/FloProject.git
cd FloProject
```

### 3.2 Website starten

```bash
docker compose up -d website
```

### 3.3 Verfügbarkeit prüfen

```bash
docker compose ps
```

Die Website ist unter `http://localhost:8080` erreichbar. Der Root-Pfad `/` leitet automatisch auf `/de/` (deutsche Version) weiter. Die englische Version ist unter `/en/` verfügbar.

## 4. Betrieb

### 4.1 Kommandoübersicht

| Aktion                | Befehl                               |
|-----------------------|--------------------------------------|
| Website starten       | `docker compose up -d website`       |
| Website stoppen       | `docker compose down`                |
| Logs anzeigen         | `docker compose logs website`        |
| Logs live verfolgen   | `docker compose logs -f website`     |
| Status prüfen         | `docker compose ps`                  |
| Tests ausführen       | `docker compose run --rm tests`      |
| Alle Container starten| `make docker-up`                     |
| Alle Container stoppen| `make docker-down`                   |

### 4.2 Architektur

Die Website wird als statische HTML-Seite von einem **Nginx 1.27-alpine** Container ausgeliefert. Es gibt keine Datenbank und keinen Application Server. Der Build-Prozess (Astro SSG) erzeugt statische Dateien, die direkt vom Webserver bedient werden.

```
[Browser] --> [Nginx :8080] --> [Statische HTML/CSS/JS-Dateien]
```

## 5. Fehlerbehebung

| Problem                     | Diagnose                          | Lösung                                                  |
|-----------------------------|-----------------------------------|---------------------------------------------------------|
| Port 8080 bereits belegt    | `lsof -i :8080`                  | Anderen Port in `docker-compose.yml` konfigurieren      |
| Docker nicht gestartet       | `docker info`                    | Docker Desktop starten / `sudo systemctl start docker`  |
| Container startet nicht      | `docker compose logs website`    | Logs prüfen, `docker compose down && docker compose up -d website` |
| Seite lädt nicht             | `curl -I http://localhost:8080`  | Firewall prüfen, Container-Status prüfen                |
| Veralteter Inhalt            | —                                | `git pull && docker compose build --no-cache website`   |

## 6. Update-Prozess

```bash
# 1. Website stoppen
docker compose down

# 2. Neueste Version holen
git pull origin main

# 3. Container neu bauen und starten
docker compose build --no-cache website
docker compose up -d website

# 4. Verfügbarkeit prüfen
docker compose ps
curl -I http://localhost:8080
```

## 7. Backup und Wiederherstellung

Da die Website rein statisch ist und der gesamte Quellcode im Git-Repository liegt, ist kein separates Backup-Verfahren erforderlich. Das Git-Repository dient als vollständige Datensicherung. Im Fehlerfall kann die Website jederzeit aus dem Repository neu aufgebaut werden.

## 8. Sicherheit

- Der Nginx-Container läuft auf Basis des Alpine-Linux-Images (minimale Angriffsfläche).
- Es werden keine sensiblen Daten verarbeitet oder gespeichert.
- Die Website enthält keine serverseitigen Skripte.
- HTTPS-Terminierung muss bei einem produktiven Einsatz über einen vorgelagerten Reverse Proxy erfolgen.
