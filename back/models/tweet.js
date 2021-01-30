const path = require("path");
const fs = require("fs");

class Tweet {
  static getData() {
    return new Promise((resolve, reject) => {
      fs.readFile(
        path.join(__dirname, "..", "data", "tweets.json"),
        (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(JSON.parse(data));
          }
        }
      );
    });
  }
}

module.exports = Tweet;
