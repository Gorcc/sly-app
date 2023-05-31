import React from "react";
import teamsly from "./images/teamsly.png";

const Leaderboard = (props) => {
  return (
    <div className="leaderboard-container">
      <div className="leader-left leaders">{props.name}</div>
      <div className="leader-right leaders">{props.points}</div>
    </div>
  );
};

export default Leaderboard;
