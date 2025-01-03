/*const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

//Destructuring
const books = getBook(4);
// const auth = book.author;
// auth;
const { author, title, pages, publicationDate, genres, hasMovieAdaptation } =
  book;
console.log(author, title, genres);

// //Destructuring using arrays
// // const primaryGenre = genres[0];
// // const secondaryGenre = genres[1];
// const [primary, secondary] = genres;
// console.log(primary);

// //rest operator (,... etc)
// const [prime, second, ...others] = genres;
// console.log(prime, others);

// //Arrow functions() -> mostly used for writing one line functions
// // function getYear(str) {
// //   return str.split("-")[0];
// // }

// const getYear = (str) => str.split("-")[0];
// console.log(getYear(publicationDate));

// //Template literals :- `${expressions(any)}`
// const summary = `${title} is a book published in ${getYear(publicationDate)}`;
// summary;

// //Ternary operators(basically has 3 operands : condition,? -->if,: -->else)
// const pagesrange = pages > 1000 ? "over a thousand" : "less than 1000";
// console.log(pagesrange);

// //Short Circuiting(returning the first false without even looking for the second arg (uses &&  and ||))
// console.log(true && "hello");
// console.log(false && "hello");
// //falsy values: 0 , null , undefined , " ".
// console.log(true || "hello");
// console.log(false || "hello");

// //Optional Chaining(it allows to cancel the unrequired components --> ?.)
// // function getReviewCount(book) {
// //   const goodreads = book.reviews.goodreads.reviewsCount;
// //   const librarything = book.review.librarything.reviewsCount;
// //   return goodreads + librarything;
// // }

// // console.log(getReviewCount(book));

// //Array Methods(Map,Filter and Reduce)
// //Mapping(creating a single element or operation that will be applicable for all the elements in array)
// const x = [1, 2, 3, 4, 5, 6, 7].map((el) => el * 2);
// console.log(x);

// const adventureBooks = books
//   .filter((books) => books.genres.includes("adventure"))
//   .map((books) => books.title);
// console.log(adventureBooks);

//Working with immutable elements
//add new book obj in array
const newBook = {
  id: 6,
  title: "piyush",
  author: "piyush",
};
const bookAfterAdd = [...book, newBook];
bookAfterAdd;
*/

// Asynchronous JavaScript :Promises
// console
//   .log(fetch("https://jsonplaceholder.typicode.com/todos"))
//   .then((res) => res.json())
//   .then((data) => console.log(data));

//Async and Await

async function getTodo() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
}
getTodo();
