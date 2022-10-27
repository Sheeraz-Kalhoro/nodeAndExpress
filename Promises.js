const {readFile, writeFile} = require('fs').promises

const start = async ()=>{
    try {
        const first = await readFile('./content/subfolder/utilFilecreate.txt','utf-8')
        const second = await readFile('./content/subfolder/utilFilecreate.txt','utf-8')
        const third = await readFile('./content/subfolder/promisesFile.txt', 'utf8')

        console.log(first, second, third);
    } catch (error) {
        console.log(error);
    }
}
start()