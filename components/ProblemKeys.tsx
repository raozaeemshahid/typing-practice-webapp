import { NextPage } from "next";

const ProblemKeys: NextPage<{ ProblemKeys: any }> = ({ ProblemKeys }) => {
  return (
    <div className="mt-4 flex">
      <h4 className="mr-2">Your Problem Keys: </h4>
      <ol className="flex flex-col">
        {Object.keys(ProblemKeys)
          .sort((a, b) => ProblemKeys[b] - ProblemKeys[a])
          .map((char) => {
            return (
              <li className="px-1" key={char}>
                {char === "." ? "[fullstop]" : char === " " ? "[space]" : char} ({ProblemKeys[char]}x),
              </li>
            );
          })}
      </ol>
    </div>
  );
};

export default ProblemKeys;
