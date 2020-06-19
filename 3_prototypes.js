// jokhon kuno object er specific kuno function ba property
// shob shomoi use krte chacchi na, jokhn use krte chai tokhn call
// kre niye kaj  krte chai tokhn prototype use krte hoi .
// prototype function ba property object er proto property te thake

function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
}

Book.prototype.getSummery = function(){
    return `"${this.title}" was written by ${this.author} in ${this.year}`;
}
Book.prototype.getAge = function(){
    const year = new Date().getFullYear() - this.year;
    return `"${this.title}" is written ${year} years ago.`
}
Book.prototype.revise = function(newYear){
    this.year = newYear;
    this.revise = true;
}

const book1 = new Book('Book One', 'John Doe', '2013');
const book2 = new Book('Book Two', 'Jane Doe', '2016');
console.log(book2);
console.log(book1.getAge());
console.log(book2.getSummery());
book2.revise(2018);
console.log(book2);