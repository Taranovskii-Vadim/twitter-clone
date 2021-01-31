import axios from "axios";

import { IState as ITagsState } from "../models/tags/types";

export const tagsApi = {
  async fetchData(): Promise<ITagsState["items"]> {
    const response = await axios.get("/tags");
    return await response.data;
  },
};
