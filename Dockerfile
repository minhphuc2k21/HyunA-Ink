FROM ubuntu:20.04
# Update Ubuntu Software repository
RUN apt-get update
# Install nginx, php-fpm and supervisord from ubuntu repository
RUN apt-get install -y nginx
COPY /HyunA-Ink /var/www/html
EXPOSE 80
