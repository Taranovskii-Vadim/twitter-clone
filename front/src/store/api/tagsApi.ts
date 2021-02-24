import axios from "axios";

import { IState as ITagsState, ITag } from "../models/tags/types";
import { IResponse } from "../types";

export const tagsApi = {
  async fetchData(): Promise<ITagsState["items"]> {
    const { data } = await axios.get<IResponse<ITag[]>>("/tags");
    return await data.result;
  },
};
