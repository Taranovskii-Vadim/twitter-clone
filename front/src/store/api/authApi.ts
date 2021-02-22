import { axios } from "../../core/axios";
import { IAuthData, IUser } from "../models/user/types";
import { IResponse } from "../types";

export const authApi = {
  async signIn(payload: IAuthData): Promise<IUser & { token: string }> {
    const { data } = await axios.post<IResponse<any>>("/auth/signIn", {
      username: payload.email,
      password: payload.password,
    });
    return await data.result;
  },
  async getMe(): Promise<any> {
    const { data } = await axios.get<IResponse<IUser>>("/users/me");
    return await data.result;
  },
};
