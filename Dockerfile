FROM ubuntu:20.04
RUN apt-get update
RUN sudo apt install apache2
RUN sudo ufw allow 'Apache'
WORKDIR var/www/html
ADD ./var/www/html/ /var/www/html/
EXPOSE 80