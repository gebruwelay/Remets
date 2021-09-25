INSERT into ADDRESS (id, country, state_, city, street_address, zip_code, address_type) VALUES (1, 'Tigray','Mekelle Zone','Mekelle', 'Romanat 11', '16351', 1);
INSERT into ADDRESS (id, country, state_, city, street_address, zip_code, address_type) VALUES (2, 'USA','Iowa','Fairfield', '100 N', '52557', 0);
INSERT into ADDRESS (id, country, state_, city, street_address, zip_code, address_type) VALUES (3, 'Tigray','Eastern','Adigrat', '12 East', '14167', 1);
INSERT into ADDRESS (id, country, state_, city, street_address, zip_code, address_type) VALUES (4, 'Tigray','South','Maichew', '12 East', '21217', 0);

INSERT into ADMIN (id, first_name,last_name, phone_number, user_name, password, email, role_, address_id) VALUES (3, 'admin','admin','6451932117', 'admin', '1234', 'admin@miu.edu','admin',4);

INSERT into PRODUCT(id, product_id, product_name, category, price, quantity, description) VALUES (1, 1, 'Dell', 'Laptop', 1000.00, 3, 'High Performance');
INSERT into PRODUCT(id, product_id, product_name, category, price, quantity, description) VALUES (2, 1, 'Apple', 'Laptop', 1200.00,  2, 'Super-High performance');

INSERT into BUYER (id, first_name,last_name,phone_number, user_name, password, email, role_, address_id, point) VALUES (1, 'Beti','Des','6451932117', 'beti', '1234', 'beti@miu.edu','Buyer',2, 0.50);
INSERT into BUYER (id, first_name,last_name,phone_number, user_name, password, email, role_, address_id, point) VALUES (2, 'Geb','Wel','6451932117', 'geb', '1234', 'geb@miu.edu','Buyer',1, 0.50);

INSERT into RECEIPT( product_name, quantity, total_price) VALUES( 'Laptop', 3, 150.00);
INSERT into RECEIPT( product_name, quantity, total_price) VALUES( 'Mobile', 5, 100);

-- INSERT into PERSON (id, firstName,lastName,phoneNumber, userName, password, email, role_, address_id) VALUES (1, 'Nathy','Geb','6451932117', 'nat', '1234', 'nat@miu.edu','Admin',1);
-- INSERT into PERSON (id, firstName,lastName,phoneNumber, userName, password, email, role_, address_id) VALUES (2, 'Abe','Tek','6451932117', 'abe', '1234', 'abe@miu.edu','Seller',2);
-- INSERT into PERSON (id, firstName,lastName,phoneNumber, userName, password, email, role_, address_id) VALUES (3, 'Beti','Des','6451932117', 'beti', '1234', 'beti@miu.edu','Buyer',3);

INSERT into ORDER_ (order_status, shipping_address_id, billing_address_id) VALUES (2, 1, 1);
INSERT into ORDER_ (order_status, shipping_address_id, billing_address_id) VALUES (1, 2, 3);

INSERT into REVIEW (id, product_review,is_approved) VALUES (1, 'I like it!', true);
INSERT into REVIEW (id, product_review,is_approved) VALUES (2, 'I dont like it!', false );

INSERT into SELLER (id, first_name,last_name,phone_number, user_name, password, email, role_, address_id, is_approved) VALUES (1, 'Kidist','Tse','6451932117', 'kid', '1234', 'kid@miu.edu','Seller',3, true);
INSERT into SELLER (id, first_name,last_name,phone_number, user_name, password, email, role_, address_id, is_approved) VALUES (2, 'Adane','Alm','6451932117', 'ada', '1234', 'ada@miu.edu','Seller',4, false);

INSERT into BUYER_SELLER(BUYER_ID, SELLERS_ID) VALUES (1,1);
INSERT into BUYER_SELLER(BUYER_ID, SELLERS_ID) VALUES (1,2);

INSERT into ORDER_PRODUCT(ORDERS_ID, PRODUCTS_ID) VALUES(1,2);

INSERT into ORDER_PRODUCT(ORDERS_ID, PRODUCTS_ID) VALUES(2,1);

INSERT into SELLER_PRODUCTS(SELLERS_ID,PRODUCTS_ID) VALUES(1,1);
INSERT into SELLER_PRODUCTS(SELLERS_ID,PRODUCTS_ID) VALUES(2,2);
-- INSERT into SELLER_PRODUCTS(SELLERS_ID,PRODUCTS_ID) VALUES(1,2);
-- INSERT into SELLER_PRODUCTS(SELLERS_ID,PRODUCTS_ID) VALUES(2,2);

INSERT into PRODUCT_REVIEW (PRODUCT_ID,ID) VALUES (1,1);
INSERT into PRODUCT_REVIEW (PRODUCT_ID,ID) VALUES (1,2);

-- INSERT into CART_PRODUCTS (CART_ID, PRODUCTS_ID) VALUES (1,1);
-- INSERT into CART_PRODUCTS (CART_ID, PRODUCTS_ID) VALUES (1,2);
INSERT into USER (id, name, username, password, IS_Enabled)  VALUES (111, 'Admin','admin','$2y$12$ZULYuC/Cz4RQhK4DngP8s.SfhJA35gNayrpKGZTHCryBvcnKL8u4a',true);
INSERT into USER (id, name, username, password, IS_Enabled)  VALUES (112, 'Buyer','buyer','$2y$12$ZULYuC/Cz4RQhK4DngP8s.SfhJA35gNayrpKGZTHCryBvcnKL8u4a',true);
INSERT into USER (id, name, username, password, IS_Enabled)  VALUES (113, 'Seller','seller','$2y$12$ZULYuC/Cz4RQhK4DngP8s.SfhJA35gNayrpKGZTHCryBvcnKL8u4a',true);

INSERT INTO ROLE(ROLE_ID, ROLE) VALUES (1, 'Buyer');
INSERT INTO ROLE(ROLE_ID, ROLE) VALUES (2, 'ADMIN');
INSERT INTO ROLE(ROLE_ID, ROLE) VALUES (3, 'SELLER');

insert into USER_ROLES(USER_ID, ROLE_ID) values (111, 2);
insert into USER_ROLES(USER_ID, ROLE_ID) values (112, 1);
insert into USER_ROLES(USER_ID, ROLE_ID) values (113, 3);

INSERT into SELLER_ORDER (ORDERS_ID,SELLER_ID) VALUES (1,1);
INSERT into SELLER_ORDER (ORDERS_ID,SELLER_ID) VALUES (2,2);