const coding = ["java", "cpp", "python", "html", "css"];

const value = coding.forEach((val) => {
  // => this do not return any value neither implicitly nor explicitly
  // console.log(val)
  return val;
});

// console.log(value)

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter((num) => num > 4); // implicit return

console.log(newNums);

const newNums2 = myNums.filter((num) => {
  return num > 4; // explicit return  due to opening a scope
});

const NumsNew = []; // empty array

myNums.forEach((num) => {
  if (num > 4) {
    NumsNew.push(num);
  }
});

console.log(NumsNew);

const Books = [
  {
    title: "Book One",
    genre: "fiction",
    publish: "1992",
    edition: 2004,
  },
  {
    title: "Book two",
    genre: "Non-fiction",
    publish: "1993",
    edition: 2008,
  },
  {
    title: "Book three",
    genre: "history",
    publish: "1995",
    edition: 2010,
  },
  {
    title: "Book four",
    genre: "science",
    publish: "1997",
    edition: 2007,
  },
  {
    title: "Book five",
    genre: "Non-fiction",
    publish: "1999",
    edition: 2009,
  },
  {
    title: "Book six",
    genre: "fiction",
    publish: "1993",
    edition: 2008,
  },
  {
    title: "Book seven",
    genre: "Non-fiction",
    publish: "1994",
    edition: 2004,
  },
  {
    title: "Book eight",
    genre: "history",
    publish: "1996",
    edition: 2012,
  },
];

const UserBook = Books.filter((bk) => bk.genre === "history");

const UserBook1 = Books.filter((bk) => {
  return bk.publish >= 1995;
});

console.log(UserBook1);
