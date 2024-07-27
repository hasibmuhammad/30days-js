const library = {
  name: "A Library",
  books: [
    {
      title: "An unnamed book",
      author: "An unnamed author",
      year: 2024,
    },
    {
      title: "An unnamed book 2",
      author: "Another author",
      year: 2023,
    },
  ],
};

console.log("name:", library.name);
library.books.map((bk) => console.log(bk.title));
