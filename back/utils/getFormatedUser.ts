import { IReturnUser, IUser } from "../models/UserModel/types";

export const getFormatedUser = (
  user: IUser & { token: string }
): IReturnUser => {
  const data = {
    id: user._id,
    name: user.name,
    nickname: user.nickname,
  };

  if (user.token) {
    data["token"] = user.token;
  }

  return data;
};
