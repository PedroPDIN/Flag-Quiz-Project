import React, { Component } from "react";
import { connect } from "react-redux";
import * as components from "../../components";
import { addResult } from "../../redux/actions";
import { flags } from "../../services/fetchApi";
import "./index.css";

class Play extends Component {
  constructor() {
    super();

    this.updateValues = this.updateValues.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.eventConfirm = this.eventConfirm.bind(this);

    this.state = {
      iQuestions: 0, // será responsável por pegar as indexe das perguntas.
      isDisable: false,
      next: false,
      score: 0,
      valuesFlag: [],
      validButtonWord: false,
      hits: 0,
      wrong: 0,
    };
  }

  componentDidMount() {
    this.updateValues();
  }

  async updateValues() {
    const { dataFlags, dataNumber } = this.props;
    const number = Number(dataNumber);
    const flagsApi = await flags();
    const flagsRandom = flagsApi.sort(() => Math.random() - 0.5);
    let elements = [];

    if (!dataFlags) {
      const valueRandom = () => Math.floor(Math.random() * flagsRandom.length);
      const flagsNameRandom = flagsRandom.map((v) => v.name);

      for (let i = 0; i < number; i += 1) {
        const alternative0 = flagsRandom[i];
        const alternativeName0 = alternative0.name;

        const newFilter1 = flagsNameRandom.filter(
          (name) => name !== alternativeName0
        );
        const alternative1 = newFilter1[valueRandom()];

        const newFilter2 = newFilter1.filter((name) => name !== alternative1);
        const alternative2 = newFilter2[valueRandom()];

        const newFilter3 = newFilter2.filter((name) => name !== alternative2);
        const alternative3 = newFilter3[valueRandom()];

        elements.push({
          id: i,
          optionCorrect: alternative0,
          options: [alternativeName0, alternative1, alternative2, alternative3],
        });
      }

      this.setState({ valuesFlag: elements.sort(() => Math.random() - 0.5) });
    } else {
      const flagsRandom = dataFlags.sort(() => Math.random() - 0.5);
      const flagsNameRandom = flagsRandom.map((v) => v.name);
      const valueRandom = () => Math.floor(Math.random() * flagsRandom.length);

      for (let i = 0; i < number; i += 1) {
        const alternative0 = flagsRandom[i];
        const alternativeName0 = alternative0.name;

        const newFilter1 = flagsNameRandom.filter(
          (name) => name !== alternativeName0
        );
        const alternative1 = newFilter1[valueRandom()];

        const newFilter2 = newFilter1.filter((name) => name !== alternative1);
        const alternative2 = newFilter2[valueRandom()];

        const newFilter3 = newFilter2.filter((name) => name !== alternative2);
        const alternative3 = newFilter3[valueRandom()];

        elements.push({
          id: i,
          optionCorrect: alternative0,
          options: [alternativeName0, alternative1, alternative2, alternative3],
        });
      }

      this.setState({ valuesFlag: elements });
    }
  }

  handleClick(event) {
    const { valuesFlag, score, iQuestions, hits, wrong } = this.state;
    const objectCorrect = valuesFlag.filter((question) => question.id === iQuestions)[0];
    const { optionCorrect: { name } } = objectCorrect;

    if (event === name) {
      this.setState({
        score: score + 1,
        hits: hits + 1,
        isDisable: true,
      });
    } else {
      this.setState({
        score: score + 1,
        wrong: wrong + 1,
        isDisable: true,
      });
    }
  }

  eventConfirm() {
    const { iQuestions, score, hits, wrong } = this.state;
    const { dataNumber, history, resultDispatch } = this.props;

    if (score < dataNumber) {
      this.setState({
        iQuestions: iQuestions + 1,
        isDisable: false,
      });
    } else {
      this.setState({
        isDisable: false,
      });
      resultDispatch(hits, wrong);
      history.push("/result");
    }
  }

  render() {
    const { dataNumber } = this.props;
    const { score, valuesFlag, isDisable, iQuestions } = this.state;
    const MIN_OBJ_LENGTH = 1;

    return (
      <main>
        {valuesFlag.length <= MIN_OBJ_LENGTH ? (
          <components.Loading />
        ) : (
          <section>
            <components.Headers
              typeHeader="play"
              score={score}
              numbersFlags={dataNumber}
            />

            <div className="container-play">
              <h3 className="title-play">Qual é essa bandeira?</h3>

              <components.BtnSelection
                valuesFlags={valuesFlag}
                handleClick={this.handleClick}
                isDisable={isDisable}
                iQuestions={iQuestions}
              />

              {isDisable && (
                <components.BtnPlay
                  eventConfirm={this.eventConfirm}
                  buttonWord={ score === Number(dataNumber) ? "VER RESULTADO" : "PRÓXIMO" }
                />
              )}
            </div>
          </section>
        )}
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  dataNumber: state.data.number,
  dataFlags: state.data.flags,
});

const mapDispatchToProps = (dispatch) => ({
  resultDispatch: (a, b) => dispatch(addResult(a, b)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Play);
