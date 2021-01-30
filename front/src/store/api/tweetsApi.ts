import axios from "axios";

import { IState as ITweetsState } from "../models/tweets/types";
import { IState as ITweetState, ITweet } from "../models/tweet/types";

export const tweetsApi = {
  async fetchData(): Promise<ITweetsState["items"]> {
    const response = await axios.get("/tweets");
    return await response.data;
  },
  async fetchTweet(id: string): Promise<ITweetState["tweet"]> {
    const response = await axios.get(`/tweets?id=${id}`);
    return await response.data[0];
  },
  async addTweet(text: string): Promise<ITweet> {
    const data = {
      id: "600aed5a12f05d452aef26546",
      text,
      user: {
        name: "Vadim",
        nickname: "@ПiчэнькО",
        avatarUrl:
          "https://twizz.ru/wp-content/uploads/2020/10/1601624395_8c7dd922ad47494fc02c388e12c00eac.jpg",
      },
    };
    const response = await axios.post("/tweets", data);
    return await response.data;
  },
};
