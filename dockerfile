FROM nginx:stable-alpine3.24-perl
COPY . /usr/share/nginx/html
EXPOSE 80