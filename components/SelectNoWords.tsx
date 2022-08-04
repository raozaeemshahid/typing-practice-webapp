import { NextPage } from "next";
import { ChangeEventHandler } from "react";

const SelectNoOfWords: NextPage<{
  selectNoOfWords: ChangeEventHandler<HTMLSelectElement>;
}> = ({ selectNoOfWords }) => {
  const numbers1to100 = [];
  for (let i = 1; i <= 100; i++) numbers1to100.push(i);
  return (
    <div className="flex">
      <pre>No Of Words: </pre>
      <select name="NoOfWords" id="noofwords" onChange={selectNoOfWords}>
        <option value="random">Random</option>
        {numbers1to100.map((num) => {
          return (
            <option value={`${num}`} key={num}>
              {num}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectNoOfWords;
