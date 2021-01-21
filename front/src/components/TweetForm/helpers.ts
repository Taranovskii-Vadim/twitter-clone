export const getRandomPlaceholder = (): string => {
  const variants: string[] = [
    "Что происходит?",
    "Поделитесь своими впечатлениями",
    "Расскажите друзьям, что у вас нового",
    "Что нового?",
  ];
  const idx: number = Math.floor(Math.random() * variants.length);
  return variants[idx];
};
