import axios from "axios";

import { ITweet } from "../models/tweet/types";
import { IResponse } from "../types";

export const tweetsApi = {
  async fetchData(): Promise<ITweet[]> {
    const { data } = await axios.get<IResponse<ITweet[]>>("/tweets");
    return await data.result;
  },
  async fetchTweet(id: string): Promise<ITweet> {
    const { data } = await axios.get<IResponse<ITweet>>(`/tweets/${id}`);
    return await data.result;
  },
  async addTweet(text: string): Promise<ITweet> {
    const payload = {
      text: JSON.stringify(text),
    };
    const { data } = await axios.post<IResponse<ITweet>>("/tweets", payload);
    return await data.result;
  },
};
