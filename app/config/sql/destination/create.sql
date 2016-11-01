INSERT INTO destinations (email, password) VALUES($1, $2) RETURNING *;
