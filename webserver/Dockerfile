FROM php:7.2.34-apache

RUN apt-get update \
&& apt-get install -y \
libfreetype6-dev \
libjpeg62-turbo-dev \
libpng-dev \
libzip-dev \
mc \
#&& pecl install xdebug \
&& a2enmod rewrite \
&& a2enmod headers

#RUN docker-php-ext-configure gd --with-freetype --with-jpeg
RUN docker-php-ext-install opcache gd pdo_mysql zip
#RUN docker-php-ext-enable opcache gd xdebug zip

RUN docker-php-ext-install mysqli
RUN docker-php-ext-enable mysqli
RUN apachectl restart

RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf
RUN service apache2 restart

WORKDIR /var/www/html
COPY --chown=1000:www-data ./content/web /var/www/html