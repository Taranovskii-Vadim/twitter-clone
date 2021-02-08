export interface IUser {
  name: String;
  email: string;
  nickname: string;
  password: string;
  confirmedHash: string;
  confirmed?: boolean;
}
