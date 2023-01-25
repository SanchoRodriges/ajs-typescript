import Cart from '../service/Cart';
import Book from '../domain/Book';
import Movie from '../domain/Movie';
import MusicAlbum from '../domain/MusicAlbum';

test('новая корзина пустая', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('добавляем товары', () => {
  const cart = new Cart();
  const result = [
    {
      "id": 1001,
      "name": "War and Piece",
      "author": "Leo Tolstoy",
      "price": 2000,
      "pages": 1225
    },
    {
      "id": 1008,
      "name": "Meteora",
      "author": "Linkin Park",
      "price": 900
    },
    {
      "id": 1009,
      "name": "Мстители",
      "author": "Marvel",
      "price": 500,
      "origName": "The Avengers",
      "year": 2012,
      "country": "США",
      "description": "«Avengers Assemble!»",
      "genres": "фантастика, боевик, фэнтези, приключения",
      "time": 137
    }
  ];

  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(
      1009,
      'Мстители',
      'Marvel',
      500,
      'The Avengers',
      2012,
      'США',
      '«Avengers Assemble!»',
      'фантастика, боевик, фэнтези, приключения',
      137
  ));

  expect(cart.items).toEqual(result);
});


test('удаляем товары', () => {
  const cart = new Cart();
  const result = [
    {
      "id": 1008,
      "name": "Meteora",
      "author": "Linkin Park",
      "price": 900
    }
  ];

  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.remove(1001)

  expect(cart.items).toEqual(result);
});

test('удаляем товары - товар не найден', () => {
  const cart = new Cart();
  const result = [
    {
      "id": 1001,
      "name": "War and Piece",
      "author": "Leo Tolstoy",
      "price": 2000,
      "pages": 1225
    },
    {
      "id": 1008,
      "name": "Meteora",
      "author": "Linkin Park",
      "price": 900
    }
  ];

  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.remove(1000);

  expect(cart.items).toEqual(result);
});

test('считаем стоимость без скидки', () => {
  const cart = new Cart();
  const result = 2900;

  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

  expect(cart.cost()).toEqual(result);
});

test('считаем стоимость со скидкой', () => {
  const cart = new Cart();
  const result = 2400;

  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

  expect(cart.discountCost(500)).toEqual(result);
});