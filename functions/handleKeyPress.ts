import { Dispatch, SetStateAction } from "react";
import { charBox } from "./genText";

interface argsToHandleKeyPress {
  text: charBox[];
  currentWriter: number;
  keyPressed: string[];
  changeText: Dispatch<SetStateAction<charBox[]>>;
  changeCurrentWriter: Dispatch<SetStateAction<number>>;
  changeErrorAtIndex: Dispatch<SetStateAction<number[]>>;
  errorsAtIndex: number[];
  startingTime: number | null;
  changeStartingTime: Dispatch<SetStateAction<number | null>>;
  problemKeys: any;
  changeProblemKeys: Dispatch<any>;
}

const handleKeyPress = (args: argsToHandleKeyPress) => {
  const {
    currentWriter,
    text,
    keyPressed,
    changeText,
    changeCurrentWriter,
    changeStartingTime,
    startingTime,
    changeErrorAtIndex,
    errorsAtIndex,
    changeProblemKeys,
    problemKeys,
  } = args;
  const previousCharIndex =
    currentWriter > 0 ? currentWriter - 1 : currentWriter;

  const currentCharBox = text[currentWriter]
  const previousCharBox = text[previousCharIndex]

  if (keyPressed[0].length > 1) {
    if (keyPressed[0] == "Backspace") {
      currentCharBox.completed = false;
      currentCharBox.typedWrong = false;
      previousCharBox.typedWrong = false;
      previousCharBox.completed = false;
      changeText([...text]);
      changeCurrentWriter(previousCharIndex);
    }
    return;
  }

  const char = currentCharBox.char;
  if (startingTime == null) {
    changeStartingTime(Date.now());
  }
  if (keyPressed[0] === char) {
    currentCharBox.typedWrong = false;
    currentCharBox.completed = true;
  } else {
    errorsAtIndex[currentWriter] = (errorsAtIndex[currentWriter] || 0) + 1;
    changeErrorAtIndex([...errorsAtIndex]);

    problemKeys[currentCharBox.char] = (problemKeys[currentCharBox.char] || 0) + 1
    changeProblemKeys({...problemKeys})

    if (previousCharBox.typedWrong) return;
    currentCharBox.typedWrong = true;
  }

  changeText([...text]);
  changeCurrentWriter(currentWriter + 1);
};

export default handleKeyPress;
