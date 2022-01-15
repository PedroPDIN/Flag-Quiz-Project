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
      valuesFlags: [],
      valuesNameFlags: [],
    }
  }

  componentDidMount() {
    this.updateValues()
  }

  async updateValues() {
    const { dataFlags } = this.props;
    const flagsApi = await flags();
    !dataFlags ? this.valueFlag(flagsApi) : this.valueFlag(dataFlags)
  }

  valueFlag(flags) {
    const { dataNumber } = this.props;
    const number = Number(dataNumber)
    let elements = [];
    const value = () => Math.floor(Math.random() * flags.length);
    for (let i = 0; i < number; i += 1) elements.push(flags[value()])
    return this.setState({ valuesFlags: elements, valuesNameFlags: this.nameFlags(elements) })
  }

  nameFlags(elements) {
    return elements.map((element) => element.name);
  }

  render() {
    const { dataNumber } = this.props;
    const { score } = this.state;
    return (
      <div>
        <HeaderPlay
          number={dataNumber}
          score={score}
        />
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  dataNumber: state.data.number,
  dataFlags: state.data.flags,
})

export default connect(mapStateToProps)(Play);