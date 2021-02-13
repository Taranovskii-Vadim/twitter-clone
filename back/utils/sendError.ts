interface IError {
  message: string | Error;
}

export const sendError = (message: string | Error): IError => ({
  message,
});

export const unknownError = (): IError => ({
  message: "Неизвестная ошибка на сервере",
});
