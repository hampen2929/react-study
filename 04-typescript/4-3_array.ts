const arr1: number[] = [1,2,3];
const arr2: Array<number> = [1,2,3]

console.log(arr1);
console.log(arr2);

const john: { name: string, age: number } = { name: 'John', age: 25};

interface User {
    name: string;
    age?: number;
}
const jane: User = { name: 'Jane', age: 27 };
const Jack: User = { name: 'Jack'};

type Person = User;
const rick: Person = { name: 'Rick', age: 31};

interface Foo { hoge?: number, fuga: string };
interface Bar { hoge: number };
interface Buz { piyo: string };

type FooBar1 = Foo & Bar;
type Foobar2 = Foo | Bar;
type FooBuz1 = Foo & Buz;
type FooBuz2 = Foo | Buz;
type BarFooBuz = Bar & (Foo | Buz);

const arr = [1, 2, 3];
arr[0] = 7;
console.log(arr)

const obj = { a: 1, b: 2 }
obj.b = 5;
console.log(obj)
