// //jodhi kuno object er moto onek gula object create kte chai tokhn constructor use krte hoi
function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummery = function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    } 
}


const book1 = new Book('Book One', 'John Doe', '2013');
const book2 = new Book('Book Two', 'Jane Doe', '2016');
console.log(book1);