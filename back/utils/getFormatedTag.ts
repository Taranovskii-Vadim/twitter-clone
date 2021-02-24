import { IReturnTag, TTag } from "../models/TagModel/types";

export const getFormatedTag = (data: TTag): IReturnTag => ({
  id: data._id,
  title: data.title,
  count: data.count,
});
