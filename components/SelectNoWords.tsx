import { NextPage } from "next";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

const SelectNoOfWords: NextPage<{
  changeNoOfWords: Dispatch<SetStateAction<number | "random">>;
}> = ({ changeNoOfWords }) => {
  const numbers1to100 = [];
  for (let i = 1; i <= 100; i++) numbers1to100.push(i);
  const selectNoOfWords = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value == "random") {
      changeNoOfWords("random");
    } else changeNoOfWords(parseInt(e.target.value));
  };
  return (
    <div className="flex">
      <pre>No Of Words: </pre>
      <select name="NoOfWords" id="noofwords" onChange={selectNoOfWords}>
        <option value="random">&quot;Random&quot;</option>
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
