// // Object.method()
// const s = 'hello';
// console.log(typeof s);
// // console.log(s.toUpperCase());

// const s2 = new String ('Hello');
// console.log(typeof (s2));

const book1 = {
    title: 'Book One',
    author: 'John Doe',
    year: '2013',
    getSummary:function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};
const book2 = {
    title: 'Book2',
    author: 'Jane Doe',
    year: '2016',
    getSummary: function(){
        return `${this.title} is written by ${this.author} in ${this.year}`;
    }
}
console.log(book2.getSummary());
// console.log(Object.values(book1));
// console.log(Object.keys(book1));