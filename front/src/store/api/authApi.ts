import { axios } from "../../core/axios";
import { IResponse } from "../types";

export interface IAuthData {
  email: string;
  password: string;
}

export const authApi = {
  async signIn(payload: IAuthData): Promise<any> {
    const { data } = await axios.post<IResponse<any>>("/auth/signIn", {
      username: payload.email,
      password: payload.password,
    });
    return await data.result;
  },
};
