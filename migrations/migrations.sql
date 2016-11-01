DROP DATABASE IF EXISTS globallocal;
CREATE DATABASE globallocal;

\c globallocal

CREATE TABLE currators (
  id SERIAL PRIMARY KEY,
  email VARCHAR NOT NULL,
  password VARCHAR NOT NULL
);

CREATE TABLE destinations (
  id SERIAL PRIMARY KEY,
  city_name VARCHAR NOT NULL,
  currator_id INTEGER REFERENCES currators (id)
);
