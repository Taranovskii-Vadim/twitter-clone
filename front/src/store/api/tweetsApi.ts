import axios from "axios";
import { IState } from "../models/tweets/types";

export const tweetsApi = {
  async fetchData(): Promise<IState["items"]> {
    const response = await axios.get("/tweets");
    return await response.data;
  },
};
