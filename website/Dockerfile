FROM node:20-alpine AS build
# Placeholder stage — will be replaced with Astro build
WORKDIR /app
COPY index.html /app/index.html

FROM nginx:1.27-alpine
COPY --from=build /app/index.html /usr/share/nginx/html/index.html
EXPOSE 80
