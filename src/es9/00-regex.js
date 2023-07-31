const regex = /(\d{4})-(\d{2})-(\d{2})/;
const matchers = regex.exec('2000-01-05');
console.table(matchers);