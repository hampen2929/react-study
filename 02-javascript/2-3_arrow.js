// function plusOne(n) {
//     return n + 1;
// }

// const plusOne = (n) => {return n + 1;}

// const plusOne = n => n + 1;

const obj1 = {
    num: 444,
    fn: function() {
        console.log(this.num);
    }
};

const obj2 = {
    num: 888,
    fn: () => {
        console.log(this.num);
    }
};

obj1.fn();
obj2.fn();

const plusOne = (n = 0) => n + 1;

console.log(plusOne(5));
console.log(plusOne());
