INSERT INTO products (name, description, quantity, price, product_image)
VALUES ($1, $2, $3, $4, $5)
RETURNING *;