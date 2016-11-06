DROP DATABASE IF EXISTS globallocal;
CREATE DATABASE globallocal;

\c globallocal

CREATE TABLE subscribers (
  id SERIAL PRIMARY KEY,
  email VARCHAR NOT NULL
);

