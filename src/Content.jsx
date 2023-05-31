import React from "react";
import Table from "./Table";

const Content = () => {
  return (
    <div className="content">
      <h1>Bi-Week #1 Race Stats</h1>
      <Table race="Race 1" first="1. LS (Loid)" second="2. Easy (Lorenzo)" />
      <Table
        race="Race 2"
        first="1. Ghost (Rian)"
        second="2. LS (Loid)"
        third="3. Easy (Lorenzo)"
      />
      <Table
        race="Race 3"
        first="1. Driver 8031"
        second="2. Driver 1821"
        third="3. Loid Suzuki"
      />
      <Table
        race="Race 4"
        first="1. Easy (Lorenzo)"
        second="2. Driver 1821"
        third="3. Driver 8031"
      />
      <Table
        race="Race 5"
        first="1. LS (Loid Suzuki)"
        second="2. Driver 8031"
        third="3. Easy (Lorenzo)"
      />
      <Table
        race="Race 6"
        first="1. Easy (Lorenzo)"
        second="2. Driver 1380"
        third="3. Driver 8081"
      />
      <Table
        race="Race 7"
        first="1. Easy (Lorenzo)"
        second="2. Vettel (Dante)"
        third="3. Lynchh"
      />
      <Table
        race="Race 8"
        first="1. LS (Loid Suzuki)"
        second="2. Driver 7074"
        third="3. Tuko"
      />
      <Table
        race="Race 9"
        first="1. Ghost (Rian Harada)"
        second="2. LS (Loid Suzuki)"
        third="3. Easy (Lorenzo)"
      />
      <Table
        race="Race 10"
        first="1. Ghost (Rian Harada)"
        second="2. T1 (Tyrone)"
        third="3. LS (Loid)"
      />
      <Table
        race="Race 11"
        first="1. T1 (Tyrone)"
        second="2. Easy (Lorenzo)"
        third="3. CramerR (Richard) "
      />
    </div>
  );
};

export default Content;
