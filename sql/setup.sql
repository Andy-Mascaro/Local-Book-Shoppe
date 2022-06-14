-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS authors;
DROP TABLE IF EXISTS books;

CREATE TABLE authors (
    id BIGINT GENERATED ALWAYS IDENTITY PRIMARY KEY,
    firtst_name VARCHAR,
    last_name VARCHAR
);

CREATE TABLE books (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    title VARCHAR(240) NOT NULL,
    published INT NOT NULL 
);

CREATE TABLE works (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    author_id BIGINT,
    book_id BIGINT,
    FOREIGN KEY (author_id) REFERENCES authors(id),
    FOREIGN KEY (book_id) REFERENCES books(id)
);

INSERT INTO authors (
    firtst_name,
    last_name
)

VALUES
('Bob', 'Bob');

INSERT INTO books (
    title,
    published
)
VALUES
('Bob is great', 2022);