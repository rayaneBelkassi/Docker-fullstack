CREATE TABLE IF NOT EXISTS animals (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  species VARCHAR(50),
  age INTEGER,
  adopted BOOLEAN DEFAULT FALSE
);