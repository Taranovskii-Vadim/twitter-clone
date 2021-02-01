const path = require("path");
const fs = require("fs");
const moment = require("moment");
const { v4: uuidv4 } = require("uuid");

class Tweet {
  constructor(text) {
    this.id = uuidv4();
    this.text = text;
    this.date = moment().format();
    this.user = {
      name: "Vadim",
      nickname: "@ПiчэнькО",
      avatarUrl:
        "https://twizz.ru/wp-content/uploads/2020/10/1601624395_8c7dd922ad47494fc02c388e12c00eac.jpg",
    };
  }

  static setData(data) {
    return new Promise((resolve, reject) => {
      fs.writeFile(
        path.join(__dirname, "..", "data", "tweets.json"),
        JSON.stringify(data),
        err => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        }
      );
    });
  }

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

  async save() {
    const data = await Tweet.getData();
    data.unshift({
      id: this.id,
      text: this.text,
      user: this.user,
      date: this.date,
    });
    await Tweet.setData(data);
  }
}

module.exports = Tweet;
