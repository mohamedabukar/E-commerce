DROP DATABASE IF EXISTS ecommerce_db;

CREATE DATABASE ecommerce_db;

CREATE TABLE category(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    category_name VARCHAR NOT NULL,
)
CREATE TABLE product(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock INT NOT NULL DEFAULT 10,
    category_id INT REFERENCES category(id),
)
CREATE TABLE tag(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    tag_name VARCHAR,
)
CREATE TABLE productTag(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    product_id INT REFERENCES product(id),
    tag_id INT REFERENCES tag(id),
)