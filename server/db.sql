drop database if exists test;

create database test;

use test;

create table testtask(
    id int primary key auto_increment,
    description varchar(255) not null
);

insert into testtask (description) values ('Testi1');
insert into testtask (description) values ('Testi2');