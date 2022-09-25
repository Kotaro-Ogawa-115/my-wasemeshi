DROP SCHEMA IF EXISTS my_wasemeshi;

CREATE DATABASE my_wasemeshi;

USE my_wasemeshi;

CREATE TABLE IF NOT EXISTS my_wasemeshi.shoplist
(
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    genre int NOT NULL,
    registered_at timestamp not null default current_timestamp on update current_timestamp
);

INSERT INTO shoplist (genre) value ('1');

INSERT INTO shoplist (genre) value ('2');

INSERT INTO shoplist (genre) value ('3');

CREATE TABLE IF NOT EXISTS my_wasemeshi.shopdetail
(
    id int NOT NULL,
    shopname varchar(100) NOT NULL,
    address  varchar(100),
    tel varchar(14),
    registered_at timestamp not null default current_timestamp on update current_timestamp
);

INSERT INTO shopdetail (
    id,
    shopname,
    address,
    tel
) value (
    '1',
    'ラーメン屋A',
    '〒123-4567 東京都新宿区1-1',
    '012-3456-7890'
);

INSERT INTO shopdetail (
    id,
    shopname,
    address,
    tel
) value (
    '2',
    '洋食屋B',
    '〒123-4567 東京都新宿区1-2',
    '0120-828-828'
);

INSERT INTO shopdetail (
    id,
    shopname,
    address,
    tel
) value (
    '3',
    '中華屋C',
    '〒123-4567 東京都新宿区1-3',
    '0952-32-2338'
);