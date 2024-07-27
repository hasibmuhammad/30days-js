const { title, author } = {
  title: "An unnamed book",
  author: "An unnamed author",
  year: 2024,

  // getBookInfo: () => `${book.title} ${book.author}`,
  setYear: (year) => (book.year = year),
  getBookInfo: function () {
    return `${this.title} ${this.year}`;
  },
};

console.log(title, author);
