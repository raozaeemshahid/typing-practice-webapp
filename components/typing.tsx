import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Head from "next/head";
import SelectNoOfWords from "./SelectNoWords";
import TypingArea from "./TypingArea";
import SpeedAndAccuracy, { TypingData } from "./SpeedAndAccuracy";
import ProblemKeys from "./ProblemKeys";

const Typing: NextPage<{ keyPressed: string[] }> = ({ keyPressed }) => {
  const [NoParagraphCompleted, changeCompleted] = useState(-1);
  const [noOfWords, changeNoOfWords] = useState<"random" | number>("random");
  const [typingData, changeTypingData] = useState<TypingData[]>([])
  const [problemKeys, changeProblemKeys] = useState<any>({})

  useEffect(() => {
    changeCompleted(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [noOfWords]);

  const paragraphTyped = (data: TypingData) => {
    changeCompleted(NoParagraphCompleted + 1)
    typingData.push(data)
    changeTypingData([...typingData])
  }

  return (
    <div className="pl-4 pt-4">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Practice Typing to type like a pro" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SelectNoOfWords changeNoOfWords={changeNoOfWords} />
      <h1>Completed: {NoParagraphCompleted}</h1>

      <SpeedAndAccuracy data={typingData} />

      <TypingArea
        keyPressed={keyPressed}
        noOfWords={noOfWords}
        taskCompleted={paragraphTyped}
        problemKeys={problemKeys}
        changeProblemKeys={changeProblemKeys}
      />

      <ProblemKeys ProblemKeys={problemKeys} />
    </div>
  );
};

export default Typing;
