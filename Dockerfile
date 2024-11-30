# Nutze das offizielle nginx-Image als Basis
FROM nginx:alpine

# Entferne den Standard-Inhalt der nginx-Konfiguration
RUN rm -rf /usr/share/nginx/html/*

# Kopiere die Website-Dateien in das Standardverzeichnis von nginx
COPY . /usr/share/nginx/html/

# Exponiere den Standard-Port von nginx
EXPOSE 80

# Starte nginx
CMD ["nginx", "-g", "daemon off;"]
