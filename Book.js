class Book {
    constructor(title,author) {
      this.title = title;
      this.author = author;
    }
    getTitle() {
      return "Title: " + this.title;
    }
    getAuthor() {
        return "Author: " + this.author;
    }
  }
  
PP = new Book("Pride and Prejudice","Jane Austen")
H = new Book("Hamlet","William Shakespeare")
WP = new Book("War and Peace","Leo Tolstoy")