-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS works;
DROP TABLE IF EXISTS books;
DROP TABLE IF EXISTS authors;


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
('John', 'Grisham', 1955, 'Arkansas US'),
('Ernest', 'Hemingway', 1899, 'Illinois US'),
('John', 'Steinbeck', 1902, 'California US'),
('Vladimir', 'Nabokov', 1899, 'Saint Petersburg'),
('Truman', 'Capote', 1924, 'Louisiana US');


INSERT INTO books (
    title,
    published 
)
VALUES
('A TIME TO KILL', 1989),
('THE SUN ALSO RISES', 1926),
('A FAREWELL TO ARMS', 1929),
('THE GRAPES OF WRATH', 1939),
('PALE FIRE', 1962),
('IN COLD BLOOD', 1966);





INSERT INTO works (
    author_id,
    book_id
)
VALUES
(1,1),
(2,2),
(2,3),
(3,4),
(4,5),
(5,6);

