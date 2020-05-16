const pizza = (toppings: string[]) => {
  return toppings;
};

// @ts-expect-error
const noType = (something) => {
  return "jam";
};
