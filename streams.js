const {createReadStream} = require('fs')


const stream = createReadStream('./content/subfolder/bigFile.txt')

stream.on('data', (result)=>{
    console.log(result)
});