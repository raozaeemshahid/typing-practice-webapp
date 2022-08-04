import { NextPage } from "next";
import { useEffect, useState } from "react";

export interface TypingData {
  speed: number;
  accuracy: number;
}

const SpeedAndAccuracy: NextPage<{ data: TypingData[] }> = ({ data }) => {
  const [speed, changeSpeed] = useState<number>();
  const [averageSpeed, changeAverageSpeed] = useState<number>();
  const [accuracy, changeAccuracy] = useState<number>();
  const [averageAccuracy, changeAverageAccuracy] = useState<number>();

  useEffect(() => {
    if (data.length == 0) return;
    const lastData = data[data.length - 1];
    changeSpeed(lastData.speed);
    changeAccuracy(lastData.accuracy);

    let sumAllAccuracy = 0;
    let sumAllSpeed = 0
    data.forEach((dataSet) => {
      sumAllAccuracy += dataSet.accuracy;
      sumAllSpeed += dataSet.speed
    });

    changeAverageAccuracy(Math.round(sumAllAccuracy / data.length))
    changeAverageSpeed(Math.round(sumAllSpeed / data.length))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.length]);

  return (
    <div className="grid grid-cols-2 mt-4">
      <h4>Last Speed: {speed ? `${speed} wpm` : "N/A"}</h4>
      <h4>Average Speed: {averageSpeed ? `${averageSpeed} wpm` : "N/A"}</h4>
      <h4>Last Accuracy: {accuracy ? `${accuracy} %` : "N/A"}</h4>
      <h4>
        Average Accuracy: {averageAccuracy ? `${averageAccuracy} %` : "N/A"}
      </h4>
    </div>
  );
};

export default SpeedAndAccuracy;
