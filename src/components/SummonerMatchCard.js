import React from "react";
import { Container, Segment } from "semantic-ui-react";

class SummonerMatchCard extends React.Component {
  render() {
    let championPicName;
    const champions = require(`../dragontail-8.14.1/8.14.1/data/en_US/champion.json`);
    const champId = this.props.match.champion;
    const championObjArr = Object.values(champions.data);
    const championPicArr = championObjArr.map(function(element) {
      return element.image.full;
    });

    const championName = Object.values(champions.data).map(function(element) {
      if (element.key == champId) {
        return element.name;
      }
    });

    const championPic = Object.values(champions.data).map(function(element) {
      if (element.key == champId) {
        championPicName = element.image.full;
        // console.log(championPicName);
        return championPicName;
      }
    });

    const championPicSource = require(`../dragontail-8.14.1/8.14.1/img/champion/${championPicName.toString()}`);

    const laneCheck = () => {
      if (this.props.match.lane === "NONE") {
        return "FILL";
      } else {
        return this.props.match.lane;
      }
    };

    // console.log(this.props.matchId);

    return (
      <div
        style={{
          height: 200,
          border: "3px solid blue"
        }}>
        <img src={championPicSource} height="60" width="60" />
        <h4>{championName}</h4>
        <p>Role: {laneCheck()}</p>
      </div>
    );
  }
}

export default SummonerMatchCard;
