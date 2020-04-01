CREATE SCHEMA security;

CREATE TABLE security.feature (
    id      BIGSERIAL PRIMARY KEY,
    feature TEXT
                              );

CREATE TABLE security.user (
    id           BIGSERIAL PRIMARY KEY,
    username     TEXT,
    passwordHash TEXT
                           );