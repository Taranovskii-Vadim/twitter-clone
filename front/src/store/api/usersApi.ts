import axios from "axios";
import { IState as IUsersState } from "../models/users/types";

export const usersApi = {
  async fetchData(): Promise<IUsersState["items"]> {
    const response = await axios.get("/users");
    return await response.data;
  },
};
