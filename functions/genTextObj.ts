import { randomWords } from "./getWord";

export interface charBox {
  char: string;
  completed: boolean;
  typedWrong: boolean
}

const genTextObj = (
  noOfWords: number | "random",
): Array<charBox> => {
  function genCharBox(char: string): charBox {
    let newBox: charBox = {
      char: char,
      completed: false,
      typedWrong: false
    };
    return newBox;
  }
  function getWord(): Array<charBox> {
    const newText: Array<charBox> = []; 
    const word = randomWords[Math.floor(Math.random() * randomWords.length)]
    for (let char of word) {
      newText.push(genCharBox(char));
    }
    return newText;
  }

  let text: Array<charBox> = [];
  const numberOfWords =
    noOfWords == "random" ? 5 + Math.floor(Math.random() * 30) : noOfWords;

  for (let i = 0; i < numberOfWords; i++) {
    text.push(
      ...getWord(),
      genCharBox(" ")
    );
  }

  text.pop();
  const fullStop = genCharBox(".");
  text.push(fullStop);

  return text;
};

export default genTextObj;
