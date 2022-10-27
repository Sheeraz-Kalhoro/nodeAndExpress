const {readFile, writeFile} = require('fs')
const util = require('util')

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)
const start = async()=> {
    try {
        const first = await readFilePromise('./content/subfolder/text.txt','utf-8')
        const second = await readFilePromise('./content/subfolder/secondWritten.txt','utf-8')
        await writeFilePromise('./content/subfolder/utilFilecreate.txt', `New util file Created with old ones ${first}${second}`)
        console.log(first, second);
    } catch (error) {
        console.log(error);
    }
}

start()