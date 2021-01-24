import axios from "axios";

import { IState } from "../models/tags/types";

export const tagsApi = {
  async fetchData(): Promise<IState["items"]> {
    const response = await axios.get("/favTags");
    return await response.data;
  },
};
