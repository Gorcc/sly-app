import React from "react";
import Leaderboard from "./Leaderboard";
const PointComponent = () => {
  return (
    <div className="content leaderboard-content">
      <h1>Bi-Week #1 Point Standings</h1>
      <div className="leaderboard">
        <Leaderboard name="Name" points="Points" />
        <Leaderboard name="Easy (Lorenzo)" points="156" />
        <Leaderboard name="LS (Loid)" points="141" />
        <Leaderboard name="Ghost (Rian)" points="75" />
        <Leaderboard name="T1 (Tyrone)" points="33" />
        <Leaderboard name="Vettel (Dante)" points="18" />
        <Leaderboard name="Creamer (Richard)" points="15" />
      </div>
    </div>
  );
};

export default PointComponent;
