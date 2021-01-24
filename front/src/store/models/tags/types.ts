import { Action } from "redux";

// data
export interface ITag {
  readonly id: string;
  title: string;
  count: number;
}

export interface IState {
  items: ITag[];
}

// actions

export enum ETypes {
  SET_TAGS = "/tags/SET_TAGS",
  FETCH_TAGS = "/tags/FETCH_TAGS",
}

export interface ISetTags extends Action<ETypes> {
  type: ETypes.SET_TAGS;
  payload: IState["items"];
}

export interface IFetchTags extends Action<ETypes> {
  type: ETypes.FETCH_TAGS;
}

export type TAction = ISetTags;
