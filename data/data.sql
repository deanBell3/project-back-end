-- create table articles(
-- article_id bigserial primary key,
-- headline varchar(255) not null unique,
-- main_picture text not null,
-- picture_reference text not null,
-- created_the timestamp default now()
-- );
-- create table paragraph(
-- p_id bigserial primary key,
-- content text not null,
-- article int references articles(article_id) on delete cascade,
-- added_the timestamp default now()
-- )

create table elevate_users(
id bigserial primary key,
username varchar(255) not null unique,
email varchar(255) not null unique,
password_digest varchar(255) not null,
created_the timestamp default now()
)
