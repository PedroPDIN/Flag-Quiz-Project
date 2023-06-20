import React, { Component } from "react";
import { connect } from "react-redux";
import * as component from "../../components";
import {
  result1,
  result2,
  result3,
  result4,
  result5,
} from "../../services/message";
import "./index.css";

class Result extends Component {
  constructor() {
    super();

    this.resultMessage = this.resultMessage.bind(this);
  }

  resultMessage() {
    const { dataHits, dataWrong, dataNumber } = this.props;
    const totalAmount = Number(dataNumber);
    const average = totalAmount / 2;
    const sumResults = dataHits + dataWrong;
    const ZERO = 0;

    if (sumResults === ZERO) return result5;
    if (dataHits < average) return result1;
    if (dataHits === average) return result2;
    if (dataHits === totalAmount) return result4;
    if (dataHits > average) return result3;
  }

  render() {
    const { dataHits, dataWrong } = this.props;
    const { phrase, image, alt, reference, referencePhrase, referencePerson } = this.resultMessage();
    
    return (
      <main>
        <component.Headers typeHeader="result" />

        <div className="container-result-screen">
          <h1 className="h1-result-screen">Resultado do Quiz</h1>
          <h2 className="h2-result-screen">{`Acertos: ${dataHits}`}</h2>
          <h2 className="h2-result-screen">{`Erros: ${dataWrong}`}</h2>
          {reference ? (
            <div className="container-result-quiz">
              <p className="p-phrase-result">{phrase}</p>
              <p className="p-phrase-person">{referencePhrase}</p>
              <p className="p-person-result">{referencePerson}</p>
              <img src={image} alt={alt} className="img-result-screen" />
            </div>
          ) : (
            <div className="container-result-quiz-false">
              <p>{phrase}</p>
              <img src={image} alt={alt} className="img-result-screen" />
            </div>
          )}
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  dataHits: state.result.hits,
  dataWrong: state.result.wrong,
  dataNumber: state.data.number,
});

export default connect(mapStateToProps)(Result);
