import { axios } from "../../core/axios";
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
    const payload = { text };
    const { data } = await axios.post<IResponse<ITweet>>("/tweets", payload);
    return await data.result;
  },
  async deleteTweet(id: string): Promise<string> {
    await axios.delete<IResponse<ITweet>>(`/tweets/${id}`);
    return id;
  },
};
