import React, { Component } from "react";
import { connect } from "react-redux";
import HeaderPlay from "./components/header/HeaderPlay";
import { flags } from "../../services/fetchApi";

class Play extends Component {
  constructor() {
    super();

    this.updateValues = this.updateValues.bind(this);

    this.state = {
      score: 0,
      valueFlag: {},
      valuesNamesFlags: [],
      randomFour: [],
    }
  }

  componentDidMount() {
    this.updateValues();
    this.randomNumberFour();
  }

  async updateValues() {
    const { dataFlags } = this.props;
    const flagsApi = await flags();
    !dataFlags ? this.randomValues(flagsApi) : this.randomValues(dataFlags)
  }

  randomValues(flags) {
    const { dataNumber } = this.props;
    const { score } = this.state;
    const number = Number(dataNumber)
    let elements = [];

    const value = () => Math.floor(Math.random() * flags.length);
    for (let i = 0; i < number; i += 1) elements.push(flags[value()]);
    
    this.randomNumber(elements, score)
    return this.setState({ valueFlag: elements[score] })
  }

  randomNumber(elements, score) {
    const flagTrue = elements[score].name

    const flagsResult = elements.filter((element) => element.name !== flagTrue)
    const randomN = () => Math.floor(Math.random() * flagsResult.length);

    const flagFalse1 = flagsResult[randomN()].name;
    const flagFalse2 = flagsResult[randomN()].name;
    const flagFalse3 = flagsResult[randomN()].name;
    const nameFlags = [flagTrue, flagFalse1, flagFalse2, flagFalse3]

    this.setState({ valuesNamesFlags: nameFlags })
  }

  randomNumberFour() {
    const array = [0, 1, 2, 3]
    array.sort(() => Math.random() - 0.5);
    this.setState({ randomFour: array })
  }

  render() {
    const { dataNumber } = this.props;
    const { score, valueFlag, valuesNamesFlags, randomFour } = this.state;
    return (
      <div>
        <HeaderPlay
          number={dataNumber}
          score={score}
        />
        <div>
          <img src={valueFlag.image} alt={valueFlag.name} />
          <button>{valuesNamesFlags[randomFour[0]]}</button>
          <button>{valuesNamesFlags[randomFour[1]]}</button>
          <button>{valuesNamesFlags[randomFour[2]]}</button>
          <button>{valuesNamesFlags[randomFour[3]]}</button>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  dataNumber: state.data.number,
  dataFlags: state.data.flags,
})

export default connect(mapStateToProps)(Play);