import { ETypes, IFetchTags, ISetTags, IState } from "./types";

export const setTags = (payload: IState["items"]): ISetTags => ({
  type: ETypes.SET_TAGS,
  payload,
});

export const fetchTags = (): IFetchTags => ({ type: ETypes.FETCH_TAGS });
