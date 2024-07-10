CREATE DATABASE riles;

\c riles;

CREATE TABLE applicant_info (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  fun_fact TEXT
);

INSERT INTO applicant_info (name, fun_fact)
VALUES ('Your Name', 'A fun fact about yourself');
