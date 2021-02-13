const path = require('path');

const string = __filename;

console.log('path.sep:', path.sep);
console.log('path.delimiter:', path.delimiter);
console.log('-------------------------------------------');
console.log('path.dirname():', path.dirname(string));
console.log('path.extname():', path.extname(string));
console.log('path.basename():',path.basename(string));
console.log('path.basename - extname:', path.basename(string, path.extname(string)));
console.log('-------------------------------------------');
console.log('path.parse():', path.parse(string));
console.log('path.format():', path.format({
    dir: 'C:/users/zerocho',
    name: 'path',
    ext: '.js',
}));
console.log('path.nomalize():', path.normalize('c://users////zerocho////path.js'));
console.log('-------------------------------------------');
console.log('path.isAbsolute(/Users/):', path.isAbsolute('/Users/'));
console.log('path.isAbsolute(./node):', path.isAbsolute('./node'));
console.log('-------------------------------------------');
console.log('path.relative():', path.relative('C:\\users\\zerocho\\path.js', 'c:\\'));
console.log('path.join():', path.join(__dirname, '..', '..', '/Users', '.', '/zerocho'));
console.log('path.resolve():', path.resolve(__dirname, '..', 'users', '.', 'zerocho'));