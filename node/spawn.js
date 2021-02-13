const spawn = require('child_process').spawn;

const process = spawn('php',['test.php']);

process.stdout.on('data', function(data){
    console.log(data.toString());
}); // 실행 결과

process.stderr.on('data', function(data){
    console.log(data.toString());
}); // 실행 에러