INSERT INTO currators (email, password) VALUES($1, $2) RETURNING *;
