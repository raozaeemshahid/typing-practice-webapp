import { NextPage } from "next";

const ProblemKeys: NextPage<{ ProblemKeys: any }> = ({ ProblemKeys }) => {
  return (
    <div className="mt-4 flex max-h-72 overflow-auto">
      <h4 className="mr-2">Your Problem Keys: </h4>
      <ol>
        {Object.keys(ProblemKeys).length > 0 ?
          Object.keys(ProblemKeys).sort((a, b) => ProblemKeys[b] - ProblemKeys[a])
          .map((char) => {
            return (
              <li className="flex px-1" key={char}>
                <pre className="border border-solid border-opacity-50 px-1">
                  {char === "."
                    ? "[fullstop]"
                    : char === " "
                    ? "[space]"
                    : char} ({ProblemKeys[char]}x)
                </pre>
              </li>
            );
          }): `N/A`}
      </ol>
    </div>
  );
};

export default ProblemKeys;
