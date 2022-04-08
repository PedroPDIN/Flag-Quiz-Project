import React, { Component } from "react";
import { connect } from "react-redux";
import HeaderPlay from "./components/header/HeaderPlay";
import ButtonNext from "./components/ButtonNext/ButtonNext";
import Loading from "../Loading/Loading";
import { addResult } from "../redux/actions";
import { flags } from "../../services/fetchApi";
import "./Play.css";

class Play extends Component {
  constructor() {
    super();

    this.updateValues = this.updateValues.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.clickNext = this.clickNext.bind(this);

    this.state = {
      index: 0, // será responsável por pegar as indexe das perguntas.
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
    const flagsRandom = flagsApi.sort(()=> Math.random() - 0.5)
    let elements = [];

    if (!dataFlags) {
      const valueRandom = () => Math.floor(Math.random() * flagsRandom.length);
      const flagsNameRandom = flagsRandom.map((v) => v.name);

      for (let i = 0; i < number; i += 1) {
        const alternative0 = flagsRandom[i];
        const alternativeName0 = alternative0.name;

        const newFilter1 = flagsNameRandom.filter((name) => name !== alternativeName0);
        const alternative1 = newFilter1[valueRandom()];
      
        const newFilter2 = newFilter1.filter((name) => name !== alternative1);
        const alternative2 = newFilter2[valueRandom()];

        const newFilter3 = newFilter2.filter((name) => name !== alternative2);
        const alternative3 = newFilter3[valueRandom()];


        elements.push({
          id: i,
          optionCorrect: alternative0,
          options: [
            alternativeName0,
            alternative1,
            alternative2,
            alternative3,
          ],
        });
      }
      this.setState({ valuesFlag: elements.sort(()=> Math.random() - 0.5) });
    } else {
      const flagsRandom = dataFlags.sort(()=> Math.random() - 0.5);
      const flagsNameRandom = flagsRandom.map((v) => v.name);
      const valueRandom = () => Math.floor(Math.random() * flagsRandom.length);
      

      for (let i = 0; i < number; i += 1) {
        const alternative0 = flagsRandom[i];
        const alternativeName0 = alternative0.name;

        const newFilter1 = flagsNameRandom.filter((name) => name !== alternativeName0);
        const alternative1 = newFilter1[valueRandom()];
      
        const newFilter2 = newFilter1.filter((name) => name !== alternative1);
        const alternative2 = newFilter2[valueRandom()];

        const newFilter3 = newFilter2.filter((name) => name !== alternative2);
        const alternative3 = newFilter3[valueRandom()];

        elements.push({
          id: i,
          optionCorrect: alternative0,
          options: [
            alternativeName0,
            alternative1,
            alternative2,
            alternative3,
          ],
        });
      }
      this.setState({ valuesFlag: elements });
    }
  }

  handleClick(event) {
    const { valuesFlag, score, index, hits, wrong } = this.state;
    const objectCorrect = valuesFlag.filter((question) => question.id === index)[0];
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

  clickNext() {
    const { index, score, hits, wrong } = this.state;
    const { dataNumber, history, resultDispatch } = this.props;
    if(score < dataNumber) {
    this.setState({ 
      index: index + 1,
      isDisable: false,
    });
  } else {
    this.setState({
      isDisable: false,
    });
    resultDispatch(hits, wrong);
    history.push("/result")
  }
  }

  render() {
    const { dataNumber } = this.props;
    const { score, valuesFlag, isDisable, index } = this.state;
    const numbers = [0, 1, 2, 3];
    const NRN =  numbers.sort(()=> Math.random() - 0.5); // NVN => "New Random Numbers"
    const MIN_OBJ_LENGTH = 1;

    return (
      <main>
        {valuesFlag.length <= MIN_OBJ_LENGTH ? (
          <Loading />
        ) : (
          <section>
            <HeaderPlay number={dataNumber} score={score} />

            <div className="container-play">
              <h3 className="title-play">Qual é essa bandeira?</h3>
              {valuesFlag.filter((question) => question.id === index).map(({ id, optionCorrect, options }) => (
                <div className="container-options-play" key={ id }>
                  <img
                   className="img-play"
                   src={optionCorrect.svg}
                   alt={optionCorrect.name}
                 /> 
        
                  <button
                    disabled={isDisable}
                    type="button"
                    value={!options[NRN[0]] ? 'Marley' : options[NRN[0]]}
                    className="button-alt-play"
                    onClick={(event) => this.handleClick(event.target.value)}
                  >
                    {!options[NRN[0]] ? 'Marley' : options[NRN[0]]}
                  </button>

                  <button
                    disabled={isDisable}
                    type="button"
                    value={!options[NRN[1]] ? 'Atlântida' : options[NRN[1]]}
                    className="button-alt-play"
                    onClick={(event) => this.handleClick(event.target.value)}
                  >
                    {!options[NRN[1]] ? 'Atlântida' : options[NRN[1]]}
                  </button>

                  <button
                    disabled={isDisable}
                    type="button"
                    value={!options[NRN[2]] ? 'Wakanda' : options[NRN[2]]}
                    className="button-alt-play"
                    onClick={(event) => this.handleClick(event.target.value)}
                  >
                    {!options[NRN[2]] ? 'Wakanda' : options[NRN[2]]}
                  </button>

                  <button
                    disabled={isDisable}
                    type="button"
                    value={!options[NRN[3]] ? 'Eldia' : options[NRN[3]]}
                    className="button-alt-play"
                    onClick={(event) => this.handleClick(event.target.value)}
                  >
                    {!options[NRN[3]] ? 'Eldia' : options[NRN[3]]}
                  </button>
                </div>
              ))}

              { isDisable && <ButtonNext 
              next={this.clickNext} 
              buttonWord={ score === Number(dataNumber) ? "VER RESULTADO" : "PRÓXIMO" } /> }

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
