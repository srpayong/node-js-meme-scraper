// import fs from 'node:fs';
// import path from 'node:path';
// import * as cheerio from 'cheerio';
// import fetch from 'node-fetch';

// const response = await fetch(
//   'https://memegen-link-examples-upleveled.netlify.app/',
// );
// const body = await response.text();

// const $ = cheerio.load(body);

// const listItems = $('a').find('img');

// console.log(listItems[0].attribs.src);

// const arrayImages = [];

// for (let i = 0; i <= 9; i++) {
//   arrayImages.push(listItems[i].attribs.src);
// }

// console.log(arrayImages);

// arrayImages.forEach((image, index) => {
//   const imageURL = image;

//   const dirPath = './memes';

//   let fileName = `0${index + 1}.jpg`;

//   if (index === 9) {
//     fileName = `${index + 1}.jpg`;
//   }

//   if (!fs.existsSync(dirPath)) {
//     fs.mkdirSync(dirPath);
//   }

//   fetch(imageURL)
//     .then((resp) => resp.arrayBuffer())
//     .then((buffer) => {
//       const arrBuffer = buffer;
//       const nodeBuffer = Buffer.from(arrBuffer);

//       fs.writeFile(path.join(dirPath, fileName), nodeBuffer, (err) => {
//         if (err) {
//           console.error(err);
//         } else {
//           console.log('Download sucessful');
//         }
//       });
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// });

import fs from 'node:fs';
import path from 'node:path';
import * as cheerio from 'cheerio';
import fetch from 'node-fetch';

const response = await fetch(
  'https://memegen-link-examples-upleveled.netlify.app/',
);
const body = await response.text();

const $ = cheerio.load(body);

const listItems = $('a').find('img');

console.log(listItems[0].attribs.src);

const arrayImages = [];

for (let i = 0; i <= 9; i++) {
  arrayImages.push(listItems[i].attribs.src);
}

console.log(arrayImages);

arrayImages.forEach((image, index) => {
  const imageURL = image;

  const dirPath = './memes';

  let fileName = `0${index + 1}.jpg`;

  if (index === 9) {
    fileName = `${index + 1}.jpg`;
  }

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
  }

  fetch(imageURL)
    .then((resp) => resp.arrayBuffer())
    .then((buffer) => {
      const arrBuffer = buffer;
      const nodeBuffer = Buffer.from(arrBuffer);

      fs.writeFile(path.join(dirPath, fileName), nodeBuffer, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log('Download successful');
        }
      });
    })
    .catch((error) => {
      console.error(error);
    });
});
