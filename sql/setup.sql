-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS authors;
DROP TABLE IF EXISTS books;

CREATE TABLE authors (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    first_name VARCHAR,
    last_name VARCHAR,
    dob INT NOT NULL,
    pob VARCHAR

);

CREATE TABLE books (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title VARCHAR NOT NULL,
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
    first_name,
    last_name,
    dob,
    pob

)

VALUES
('Bob', 'Bob', 1492, 'Space'),
('Phil', 'Hartman', 1952, 'California');


INSERT INTO books (
    title,
    published 
)
VALUES
('Bob is great', 2022);