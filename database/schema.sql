DROP DATABASE IF EXISTS articleplatform;
CREATE DATABASE articleplatform;
USE articleplatform;

CREATE TABLE articles (
    id SERIAL,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    price INTEGER NOT NULL,
    CONSTRAINT "articles_pkey" PRIMARY KEY (id ASC)
);

CREATE INDEX articles_name on articles(name);
CREATE INDEX articles_price on articles(price);
