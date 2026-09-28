CREATE TABLE users(
    id SERIAL PRIMARY KEY ,
    visitor_id  UUID UNIQUE ,
    focus_on varchar(20) default 'Home'
);