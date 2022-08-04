import { NextPage } from "next";
import genText, { charBox } from "../functions/genText";
import { v4 as uuid } from "uuid";
import { Dispatch, useEffect, useState } from "react";
import handleKeyPress from "../functions/handleKeyPress";
import { TypingData } from "./SpeedAndAccuracy";

interface propsForTypingArea {
  noOfWords: number | "random";
  keyPressed: string[];
  taskCompleted: Function;
  problemKeys: any;
  changeProblemKeys: Dispatch<any>;
}

const TypingArea: NextPage<propsForTypingArea> = (props) => {
  const {
    keyPressed,
    noOfWords,
    taskCompleted,
    problemKeys,
    changeProblemKeys,
  } = props;

  const [currentWriter, changeCurrentWriter] = useState<number>(0);
  const [text, changeText] = useState<Array<charBox>>([]);
  const [startingTime, changeStartingTime] = useState<number | null>(null);
  const [errorsAtIndex, changeErrorAtIndex] = useState<number[]>([]);

  useEffect(() => {
    changeCurrentWriter(0);
    const text = genText(noOfWords);
    changeText(text);
    changeStartingTime(null);
    changeErrorAtIndex(Array<number>(text.length).fill(0));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [noOfWords]);

  useEffect(() => {
    if (text[currentWriter] == undefined) return;

    handleKeyPress({
      changeCurrentWriter,
      changeText,
      currentWriter,
      keyPressed,
      text,
      changeStartingTime,
      startingTime,
      changeErrorAtIndex,
      errorsAtIndex,
      problemKeys,changeProblemKeys
    });

    if (text[text.length - 1].completed || text[text.length - 1].typedWrong) {
      const noChars = text.length;
      const timeTaken = Date.now() - (startingTime || Date.now());

      const data: TypingData = {
        accuracy: Math.round(
          ((noChars - errorsAtIndex.filter((item) => item > 0).length) /
            noChars) *
            100
        ),
        speed: Math.round((12000 * noChars) / timeTaken),
      };
      const newText = genText(noOfWords);
      changeText(newText);
      changeCurrentWriter(0);
      taskCompleted(data);
      changeStartingTime(null);
      changeErrorAtIndex(new Array(newText.length).fill(0));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyPressed]);
  return (
    <div className="flex flex-wrap mt-6">
      {text?.map((box, index) => {
        return (
          <pre
            className={`
          ${box.completed && !box.typedWrong ? "text-green-600" : ""} 
          ${box.typedWrong && box.char != " " ? "text-red-600" : ""}
          ${box.typedWrong && box.char == " " ? "bg-red-300" : ""}
          ${index === currentWriter ? "text-blue-500" : ""}
          ${index === currentWriter ? "underline" : ""}
           border border-solid border-opacity-50 px-1 text-2xl
          `}
            key={uuid()}
          >
            {box.char}
          </pre>
        );
      })}
    </div>
  );
};

export default TypingArea;
