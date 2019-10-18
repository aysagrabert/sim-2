create table houses(
    id serial primary key,
    name varchar(30),
    address varchar(100),
    city varchar(100),
    state varchar(2),
    zip integer,
    img text,
    mortgage decimal,
    rent decimal
)

-- what i added
-- insert into houses
-- (name, address, city, state, zip, img, mortgage, rent)
-- values
-- ('Cottage in the woods', '542 E 2345 N', 'popham', 'MA', 7699, 'http://cdn.goodshomedesign.com/wp-content/uploads/2014/12/historic_log_cabin-6.jpg', 3204.45, 432.34),
-- ('small house in the city', '456 W 3456 N', 'san francisco', 'CA', 3244, 'https://st.hzcdn.com/simgs/f851ad7f01cc4c72_4-3414/home-design.jpg', 8754.56, 533.54),
-- ('house in the big easy', '457 N 1234 S', 'new orleans', 'LA', 7983, 'https://gonola.com/images/2018/11/Bywater_PaulBroussard.jpg', 3678.19, 234.55)