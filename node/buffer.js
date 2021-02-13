const buffer = Buffer.from('저를 버퍼로 바꿔보세요^^');

console.log('from()', buffer);
console.log('length:', buffer.length);
console.log('toString():', buffer.toString());

const array = [Buffer.from('띄엄 '), Buffer.from('띄엄 '), Buffer.from('띄엄쓰기')];
const buffer2 = Buffer.concat(array);
console.log('concat():', buffer2.toString());

const buffer3 = Buffer.alloc(7);
console.log('alloc():', buffer3);