FROM nginx:1.23.3
COPY ./dist/angular-example-app /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]