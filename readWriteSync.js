const { readFileSync, writeFileSync } = require("fs");

const firstFile = readFileSync("./content/subfolder/text.txt", "utf-8");
const secondFile = readFileSync(
  "./content/subfolder/secondWritten.txt",
  "utf-8"
);
writeFileSync(
  "./content/subfolder/secondWritten.txt",
  "hello, this is second file......... written through command.."
);
for(var i = 0; i < 1000; i++ ){

  writeFileSync('./content/subfolder/bigFile.txt',`Hello World ${i} \n`,{flag: 'a'})
}
console.log(firstFile, "\n", secondFile);
