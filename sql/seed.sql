INSERT INTO users (first_name, last_name, email)
    VALUES ('Sean', 'Reid', 'sean@digitalcrafts.com');

INSERT INTO parks (name, address, street, city, state, picture)
    VALUES ('SPOA', '4440 Lexington Rd, Athens, GA 30605', '4440 Lexington Rd', 'Athens', 'Georgia', '/images/skatepark.jpg');

INSERT INTO reviews (score, content, park_id, user_id)
    VALUES (4, 'GNARLY DUDE!!!', 1, 1);
