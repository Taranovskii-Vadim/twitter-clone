// { "id": "501aed4a12f05d452aef2278", "title": "#Митинги", "count": 19785 },
const path = require("path");
const fs = require("fs");

class Tag {
  static getData() {
    return new Promise((resolve, reject) => {
      fs.readFile(
        path.join(__dirname, "..", "data", "tags.json"),
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

module.exports = Tag;
