CREATE TABLE IF NOT EXISTS animals (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  species VARCHAR(50),
  age INTEGER,
  adopted BOOLEAN DEFAULT FALSE
);

INSERT INTO animals (name, species, age, adopted) VALUES
('Bella', 'Chien', 3, false),
('Milo', 'Chat', 2, false),
('Luna', 'Chien', 4, true),
('Simba', 'Chat', 1, false);
