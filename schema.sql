DROP DATABASE IF EXISTS bamazon_db;

-- Create the database day_planner_db and specified it for use.
CREATE DATABASE bamazon_db;

USE bamazon_db;

-- Create the table plans.
CREATE TABLE products (
  item_id int NOT NULL AUTO_INCREMENT,
  product_name varchar(255) NOT NULL,
  department_name varchar(255) NOT NULL,
  price decimal (10, 2) NOT NULL,
  stock_quantity int (10) NOT NULL,
  PRIMARY KEY (item_id)
);
SELECT * from products;

-- Insert a set of records.
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES 
('shirt', 'clothing', 20.00, 5),
('pants', 'clothing', 30.00, 6),
('shoes', 'clothing', 22.00, 4);