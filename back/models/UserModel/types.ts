export interface IUser {
  readonly id?: string;
  name: String;
  email: string;
  nickname: string;
  password: string;
  confirmedHash: string;
  confirmed?: boolean;
}
