//Object of protos
const bookProtos = {
    getSummery: function(){
        return `"${this.title}" was written by ${this.author} in ${this.year}`;
    },
    getAge: function(){
        const year = new Date().getFullYear() - this.year;
        return `"${this.title}" is written ${year} years ago.`;
    }
}
//Create Object
// const book1 = Object.create(bookProtos);
// console.log(book1);

// book1.title = 'Book1';
// book1.author = 'John Doe';
// book1.year = 2013;

// console.log(book1);

// book1.month = 'feb';
// console.log(book1);

const book1 = Object.create(bookProtos,{
    title: {value: 'Book1' },
    author: {value: 'Jhn Doe'},
    year: {value:2013 }
});
console.log(book1);