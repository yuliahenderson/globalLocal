DROP DATABASE IF EXISTS globallocal;
CREATE DATABASE globallocal;

\c globallocal

CREATE TABLE currators (
  id SERIAL PRIMARY KEY,
  email VARCHAR NOT NULL,
  password VARCHAR NOT NULL
);
