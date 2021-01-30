import axios from "axios";

import { IState as ITweetsState } from "../models/tweets/types";
import { IState as ITweetState, ITweet } from "../models/tweet/types";

export const tweetsApi = {
  async fetchData(): Promise<ITweetsState["items"]> {
    const response = await axios.get("/tweets");
    return await response.data;
  },
  async fetchTweet(id: string): Promise<ITweetState["tweet"]> {
    const response = await axios.get(`/tweets/${id}`);
    return await response.data;
  },
  async addTweet(text: string): Promise<ITweet> {
    const data = {
      text: JSON.stringify(text),
    };
    const response = await axios.post("/tweets", data);
    return await response.data;
  },
};
