const { readFile, writeFile } = require("fs");

readFile("./content/subfolder/text.txt", "utf-8", (error, result) => {
  if (error) {
    console.log(error);
    return;
  } else {
    console.log(result);
  }
});
writeFile(
  "./content/subfolder/newAsync.txt",
  "this is async file......",
  (error, result) => {
    if (error) {
      console.log(error);
      return;
    } else {
      console.log(result);
    }
  }
);
