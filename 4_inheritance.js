// jodhi onno kuno object er shob property use krte Chai 
// notun kuno object e, je object e tar nijer o kisu 
// property thakbe tahole inheritance use krte hbe

function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
}

//Books prototype
Book.prototype.getSummery = function(){
    return `"${this.title}" was written by ${this.author} in ${this.year}`;
}

//Magazine Constructor
function Magazine(title, author, year, month){
    Book.call(this, title, author, year);//Inherit Book constructor

    this.month = month;
}

//Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);

const magOne = new Magazine('kishorAlo','Anisul haque', '2018', 'February');
console.log(magOne);
console.log(magOne.getSummery());

//Use Magazine Constructor
Magazine.prototype.constructor = Magazine;
console.log(magOne);