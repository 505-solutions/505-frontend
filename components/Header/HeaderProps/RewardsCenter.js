import React from "react";

const RewardsCenter = ({ userPoints }) => {
  return (
    <div className="rewards-center">
      <span className="d-flex justify-content-center">
        My Points: {getTotalPoints(userPoints)}{" "}
      </span>
    </div>
  );
};

export default RewardsCenter;

function getTotalPoints(userPoints) {
  if (!userPoints) {
    return 0;
  }

  const sumOfValues = Object.values(userPoints).reduce(
    (sum, value) => sum + value,
    0
  );

  return sumOfValues;
}
