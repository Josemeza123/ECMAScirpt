const regex = /\b(Apple)+\b/g;
const fruit = 'Apple,banana,Apple, kiwi,orange,etc,ect';

for (const match of fruit.matchAll(regex)) {
    console.log(match);
}