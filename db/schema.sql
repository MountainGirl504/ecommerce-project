CREATE TABLE customers (
    "id" serial,
    "user_name" text NOT NULL,
    "email" text NOT NULL,
    "img" text,
    "auth_id" text,
    PRIMARY KEY ("id")
);