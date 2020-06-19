class Book{
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary(){
        return `"${this.title}" was written by ${this.author} in ${this.year}`;

    }
    getAge(){
        const year = new Date().getFullYear() - this.year;
        return `"${this.title}" is written ${year} years ago.`
    }
    revise(newYear){
        this.year = newYear;
        this.revise = true;
    }
    //static function can be use without instantiate the object. That
    // That means notun kun object create krleu static func use krte parbe na
    
    static topBookStore(){
        return 'Barnes & Noble';
    }
}
const book1 = new Book('Book One', 'John Doe', '2013');

console.log(book1);
book1.revise(2020);
console.log(book1);

console.log(Book.topBookStore());