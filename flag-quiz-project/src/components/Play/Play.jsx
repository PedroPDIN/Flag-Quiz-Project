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
      optionsCorrect:[],
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

      for (let i = 0; i < number; i += 1) {
        elements.push({
          id: i,
          optionCorrect: flagsRandom[i],
          options: [
            flagsRandom[i].name,
            flagsRandom[valueRandom()].name,
            flagsRandom[valueRandom()].name,
            flagsRandom[valueRandom()].name,
          ],
        });
      }
      this.setState({ valuesFlag: elements.sort(()=> Math.random() - 0.5) });
    } else {
      const flagsRandom = dataFlags.sort(()=> Math.random() - 0.5)
      const valueRandom = () => Math.floor(Math.random() * flagsRandom.length);

      for (let i = 0; i < number; i += 1) {
        elements.push({
          id: i,
          optionCorrect: dataFlags[i],
          options: [
            dataFlags[i].name,
            dataFlags[valueRandom()].name,
            dataFlags[valueRandom()].name,
            dataFlags[valueRandom()].name,
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


    return (
      <main>
        {!valuesFlag ? (
          <Loading />
        ) : (
          <section>
            <HeaderPlay number={dataNumber} score={score} />

            <div className="container-play">
              <h3 className="title-play">Qual é essa bandeira?</h3>
              {valuesFlag.filter((question) => question.id === index).map(({ optionCorrect, options }) => (
                <div className="container-options-play">
                  <img
                   className="img-play"
                   src={optionCorrect.svg}
                   alt={optionCorrect.name}
                 /> 
        
                  <button
                    disabled={isDisable}
                    type="button"
                    value={options[NRN[0]]}
                    className="button-alt-play"
                    onClick={(event) => this.handleClick(event.target.value)}
                  >
                    {options[NRN[0]]}
                  </button>

                  <button
                    disabled={isDisable}
                    type="button"
                    value={options[NRN[1]]}
                    className="button-alt-play"
                    onClick={(event) => this.handleClick(event.target.value)}
                  >
                    {options[NRN[1]]}
                  </button>

                  <button
                    disabled={isDisable}
                    type="button"
                    value={options[NRN[2]]}
                    className="button-alt-play"
                    onClick={(event) => this.handleClick(event.target.value)}
                  >
                    {options[NRN[2]]}
                  </button>

                  <button
                    disabled={isDisable}
                    type="button"
                    value={options[NRN[3]]}
                    className="button-alt-play"
                    onClick={(event) => this.handleClick(event.target.value)}
                  >
                    {options[NRN[3]]}
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
