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
      valueFlags: {},
      valuesNamesFlags: [],
    }
  }

  componentDidMount() {
    this.updateValues()
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
    return this.setState({ valueFlags: elements[score] })
  }

  randomNumber(elements, score) {
    const randomN = () => Math.floor(Math.random() * elements.length);
    const flagTrue = elements[score].name
    const flagFalse1 = elements[randomN()].name;
    const flagFalse2 = elements[randomN()].name;
    const flagFalse3 = elements[randomN()].name;
    const nameFlags = [flagTrue, flagFalse1, flagFalse2, flagFalse3]
    this.setState({ valuesNamesFlags: nameFlags })
  }

  nameFlags(elements) {
    return elements.map((element) => element.name);
  }

  render() {
    const { dataNumber } = this.props;
    const { score, valueFlags } = this.state;
    return (
      <div>
        <HeaderPlay
          number={dataNumber}
          score={score}
        />
        <div>
          <img src={valueFlags.image} alt={valueFlags.name} />
          <button>{valueFlags.name}</button>
          <button>{valueFlags.name}</button>
          <button>{valueFlags.name}</button>
          <button>{valueFlags.name}</button>
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