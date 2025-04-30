FROM httpd:2.4
COPY httpd.conf /usr/local/apache2/conf/httpd.conf
COPY ./perl524 /opt/perl524
RUN openssl req -x509 -newkey rsa:4096 -keyout /etc/ssl/private/rb3.localdev.key -out /etc/ssl/certs/rb3.localdev.crt -sha256 -days 36500 -nodes -subj "/C=CA/ST=ONTARIO/L=TORONTO/O=INTERAD/OU=IT/CN=DEVLOCAL"