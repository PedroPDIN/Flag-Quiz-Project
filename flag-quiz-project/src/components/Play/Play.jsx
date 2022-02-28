import React, { Component } from "react";
import { connect } from "react-redux";
import HeaderPlay from "./components/header/HeaderPlay";
import ButtonNext from "./components/ButtonNext/ButtonNext";
import { fetchApi, flags } from "../../services/fetchApi";
import "./Play.css";

class Play extends Component {
  constructor() {
    super();

    this.updateValues = this.updateValues.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.clickNext = this.clickNext.bind(this);

    this.state = {
      index: 0, // será responsável por pegar as indece das perguntas.
      isDisable: false,
      next: false,
      score: 0,
      valuesFlag: [],
    };
  }

  componentDidMount() {
    this.updateValues();
  }

  async updateValues() {
    const { dataFlags, dataNumber } = this.props;
    const number = Number(dataNumber);
    const flagsApi = await flags();
    const { index } = this.state;
    let elements = [];

    if (!dataFlags) {
      const valueRandom = () => Math.floor(Math.random() * flagsApi.length);

      for (let i = 0; i < number; i += 1) {
        elements.push({
          id: i,
          optionCorrect: flagsApi[index],
          options: [
            flagsApi[index].name,
            flagsApi[valueRandom()].name,
            flagsApi[valueRandom()].name,
            flagsApi[valueRandom()].name,
          ],
        });
      }
      this.setState({ valuesFlag: elements });
    } else {
      const valueRandom = () => Math.floor(Math.random() * dataFlags.length);

      for (let i = 0; i < number; i += 1) {
        elements.push({
          id: i,
          optionCorrect: dataFlags[index],
          options: [
            dataFlags[index].name,
            dataFlags[valueRandom()].name,
            dataFlags[valueRandom()].name,
            dataFlags[valueRandom()].name,
          ],
        });
      }
      this.setState({ valuesFlag: elements });
    };
  }

  handleClick(event) {
    const { valueFlag, score } = this.state;
    if (event === valueFlag.name) {
      alert("parabéns vc acertou!!!");
      this.setState({
        score: score + 1,
      });
    } else {
      alert("parabéns vc errou!!!");
    }
  }

  clickNext() {
    const { index } = this.state;
    this.setState({ index: index + 1 });
  }

  render() {
    const { dataNumber } = this.props;
    const { score, valuesFlag, isDisable, index } = this.state;
    

    return (
      <main>
        <HeaderPlay number={dataNumber} score={score} />

      </main>

    );
  }
}

const mapStateToProps = (state) => ({
  dataNumber: state.data.number,
  dataFlags: state.data.flags,
});

export default connect(mapStateToProps)(Play);
