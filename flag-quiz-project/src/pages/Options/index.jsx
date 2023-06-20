import React, { Component } from "react";
import { connect } from "react-redux";
import * as components from "../../components";
import NumbersFlags from "../../components/NumbersFlags";
import FilterFlag from "../../components/FilterFlag";
import Button from "../../components/ButtonOptions";
import { addData } from "../../redux/actions";
import { fetchApi } from "../../services/fetchApi";
import "./index.css";

class Options extends Component {
  constructor() {
    super();

    this.flagsApi = this.flagsApi.bind(this);
    this.validButton = this.validButton.bind(this);
    this.onChangeValue = this.onChangeValue.bind(this);
    this.toDefineClick1 = this.toDefineClick1.bind(this);
    this.toDefineClick2 = this.toDefineClick2.bind(this);
    this.toDefineClick3 = this.toDefineClick3.bind(this);
    this.toDefineClick4 = this.toDefineClick4.bind(this);
    this.toDefineClick5 = this.toDefineClick5.bind(this);

    this.state = {
      define1: true,
      define2: true,
      define3: true,
      define4: true,
      define5: true,
      flags: [], // passar via props para o componente "Play".
      flagsAfrica: [],
      flagsAmericas: [],
      flagsAsia: [],
      flagsEurope: [],
      flagsOceania: [],
      numberValue: "20", // passar via props para para o componente "Play".
    };
  }

  componentDidMount() {
    this.flagsApi();
  }

  async flagsApi() {
    const data = await fetchApi();
    const dataFiltering = data.filter((data) => data.region !== "Polar");
    const countries = dataFiltering.map((data) => ({
      name: data.name,
      svg: data.flag,
      region: data.region,
    }));
    this.setState({
      flags: countries,
      flagsAfrica: countries.filter((v) => v.region === "Africa"),
      flagsAmericas: countries.filter((v) => v.region === "Americas"),
      flagsAsia: countries.filter((v) => v.region === "Asia"),
      flagsEurope: countries.filter((v) => v.region === "Europe"),
      flagsOceania: countries.filter((v) => v.region === "Oceania"),
    });
  }

  toDefineClick1() {
    this.setState({ define1: !this.state.define1 });
    const { define1, flags, flagsAfrica } = this.state;
    if (define1 === true) {
      this.setState({
        flags: flags.filter((value) => value.region !== "Africa"),
      });
    } else {
      this.setState((prevState) => ({
        flags: [...prevState.flags, ...flagsAfrica],
      }));
    }
  }

  toDefineClick2() {
    this.setState({ define2: !this.state.define2 });
    const { define2, flags, flagsAmericas } = this.state;
    if (define2 === true) {
      this.setState({
        flags: flags.filter((value) => value.region !== "Americas"),
      });
    } else {
      this.setState((prevState) => ({
        flags: [...prevState.flags, ...flagsAmericas],
      }));
    }
  }

  toDefineClick3() {
    this.setState({ define3: !this.state.define3 });
    const { define3, flags, flagsAsia } = this.state;
    if (define3 === true) {
      this.setState({
        flags: flags.filter((value) => value.region !== "Asia"),
      });
    } else {
      this.setState((prevState) => ({
        flags: [...prevState.flags, ...flagsAsia],
      }));
    }
  }

  toDefineClick4() {
    this.setState({ define4: !this.state.define4 });
    const { define4, flags, flagsEurope } = this.state;
    if (define4 === true) {
      this.setState({
        flags: flags.filter((value) => value.region !== "Europe"),
      });
    } else {
      this.setState((prevState) => ({
        flags: [...prevState.flags, ...flagsEurope],
      }));
    }
  }

  toDefineClick5() {
    this.setState({ define5: !this.state.define5 });
    const { define5, flags, flagsOceania } = this.state;
    if (define5 === true) {
      this.setState({
        flags: flags.filter((value) => value.region !== "Oceania"),
      });
    } else {
      this.setState((prevState) => ({
        flags: [...prevState.flags, ...flagsOceania],
      }));
    }
  }

  validButton() {
    const { flags, numberValue } = this.state;

    if (flags.length > Number(numberValue)) {
      const { history, funcDispatch } = this.props;
      funcDispatch(numberValue, flags);
      history.push("/home");
    } else {
      alert(`
         Erro:
         Números de bandeiras não selecionado,
         ou Números de bandeiras não corresponde
         com a quantidade de bandeiras selecionado!
         `);
    }
  }

  onChangeValue({ target }) {
    this.setState({ numberValue: target.value });
  }

  render() {
    const { define1, define2, define3, define4, define5 } = this.state;
    return (
      <main>
        <components.Headers typeHeader="options" />
        <form className="container-form-options">
          <NumbersFlags onChangeValue={this.onChangeValue} />
          <FilterFlag
            define1={define1}
            define2={define2}
            define3={define3}
            define4={define4}
            define5={define5}
            toDefineClick1={this.toDefineClick1}
            toDefineClick2={this.toDefineClick2}
            toDefineClick3={this.toDefineClick3}
            toDefineClick4={this.toDefineClick4}
            toDefineClick5={this.toDefineClick5}
          />
          <Button filter={this.validButton} />
        </form>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  funcDispatch: (a, b) => dispatch(addData(a, b)),
});

export default connect(null, mapDispatchToProps)(Options);
