const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const localFilePath = process.argv[3];

request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('Request failed with status code:', response.statusCode);
  } else {
    fs.writeFile(localFilePath, body, (error) => {
      if (error) {
        console.error('Error saving the file:', error);
      } else {
        const fileSize = body.length;
        console.log(`Downloaded and saved ${fileSize} bytes to ${localFilePath}`);
      }
    });
  }
});
