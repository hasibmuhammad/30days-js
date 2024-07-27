const book = {
  title: "An unnamed book",
  author: "An unnamed author",
  year: 2024,

  // getBookInfo: () => `${book.title} ${book.author}`,
  setYear: (year) => (book.year = year),
  getBookInfo: function () {
    return `${this.title} ${this.year}`;
  },
};

// console.log("Title: ", book.title);
// console.log("Author: ", book.author);

// console.log(book.getBookInfo());

book.setYear(2025);

console.log(book.getBookInfo());

for (const b in book) {
  console.log(b, book[b]);
}

console.log(Object.keys(book), Object.values(book));
