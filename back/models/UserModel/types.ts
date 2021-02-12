export interface IUser {
  readonly _id?: string;
  name: String;
  email: string;
  nickname: string;
  password: string;
  confirmedHash: string;
  confirmed?: boolean;
}
