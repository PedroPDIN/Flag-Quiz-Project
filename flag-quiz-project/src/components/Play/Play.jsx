import React, { Component } from "react";
import { connect } from "react-redux";
import HeaderPlay from "./components/header/HeaderPlay";
import { flags } from "../../services/fetchApi";
import "./Play.css";

class Play extends Component {
  constructor() {
    super();

    this.updateValues = this.updateValues.bind(this);

    this.state = {
      score: 0,
      valueFlag: {},
      valuesNamesFlags: [],
    }
  }

  componentDidMount() {
    this.updateValues();
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


    this.setState({ valuesNamesFlags: nameFlags.sort(() => Math.random() - 0.5) })
  }

  render() {
    const { dataNumber } = this.props;
    const { score, valueFlag, valuesNamesFlags } = this.state;
    return (
      <main>
        <HeaderPlay
          number={dataNumber}
          score={score}
        />
        <div className="container-play">
          <h3 className="title-play">Qual é essa bandeira?</h3>
          <img className="img-play" src={valueFlag.image} alt={valueFlag.name} />
          {valuesNamesFlags.map((valueName, index) => (
            <button
              type="button"
              key={ index }
              className="button-alt-play"
            >
              { valueName }
            </button>
          ))}
        </div>
      </main>
    )
  }
}

const mapStateToProps = (state) => ({
  dataNumber: state.data.number,
  dataFlags: state.data.flags,
})

export default connect(mapStateToProps)(Play);