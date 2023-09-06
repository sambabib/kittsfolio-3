export const splitText = (text: string) => {
  let textArray: string[] = [];
  text.split("").forEach((t) => {
    textArray.push(t);
  });
  console.log(textArray);
  return textArray;
};
