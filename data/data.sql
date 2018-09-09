create table articles(
 article_id bigserial primary key,
 headline varchar(255) not null unique,
 main_picture text not null,
 picture_reference text not null,
 created_the timestamp default now()
 );
 create table paragraphs(
 p_id bigserial primary key,
 content text not null,
article int references article(id) on delete cascade,
 added_the timestamp default now()
 );

create table elevate_users(
id bigserial primary key,
username varchar(255) not null unique,
email varchar(255) not null unique,
password_digest varchar(255) not null,
created_the timestamp default now()
)
create table messages(
id bigserial primary key,
name varchar(255) not null,
email varchar(255) not null,
content text not null ,
sent_the timestamp default now()
);

create table article(
  id bigserial primary key,
 head varchar(255) not null unique,
 main text not null,
 reference text not null,
 created_the timestamp default now()
 );
