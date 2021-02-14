type TResponseStatus = "error" | "success";

interface IError {
  status: TResponseStatus;
  message: string | Error;
}

interface ISuccess {
  status: TResponseStatus;
  result: any;
}

export const sendSuccess = (data: any): ISuccess => ({
  status: "success",
  result: data,
});

export const sendError = (message: string | Error): IError => ({
  status: "error",
  message,
});

export const unknownError = (): IError => ({
  status: "error",
  message: "Неизвестная ошибка на сервере",
});
