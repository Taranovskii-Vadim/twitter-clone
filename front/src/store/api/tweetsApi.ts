import axios from "axios";

import { IState as ITweetsState } from "../models/tweets/types";
import { IState as ITweetState } from "../models/tweet/types";

export const tweetsApi = {
  async fetchData(): Promise<ITweetsState["items"]> {
    const response = await axios.get("/tweets");
    return await response.data;
  },
  async fetchTweet(id: string): Promise<ITweetState["tweet"]> {
    const response = await axios.get(`/tweets?id=${id}`);
    return await response.data[0];
  },
};
