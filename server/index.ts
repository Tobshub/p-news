import fs from "fs";
import Reader from "word-extractor";

const fileLocation = "C:/Users/HP/Documents/actual reflection.docx";

fs.readFile(fileLocation, (err, data) => {
  if (err) throw err;

  const docReader = new Reader();
  docReader
    .extract(data)
    .then(val => console.log(val.getBody()))
    .catch(e => console.error(e));
});
