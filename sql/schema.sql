CREATE TABLE parks (
    id serial PRIMARY KEY,
    name varchar(200),
    address varchar(200),
    street varchar(200),
    city varchar(200),
    state varchar(50),
    picture varchar(500)
);

CREATE TABLE users (
    id serial PRIMARY KEY,
    first_name varchar(100),
    last_name varchar(100),
    email varchar(200),
    password varchar(2000)
);

CREATE TABLE reviews (
    id serial PRIMARY KEY,
    score integer,
    content text,
    park_id integer REFERENCES parks (id),
    user_id integer REFERENCES users (id)
);

