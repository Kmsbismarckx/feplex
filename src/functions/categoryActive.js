export const categoryActive = (index, categories) => {
  return [
    ...categories.map((item, i) => {
      item.isSelected = i === index;
      return item;
    }),
  ];
};
