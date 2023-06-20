import React, { Component } from "react";
import { connect } from "react-redux";
import * as components from "../../components";
import { addData } from "../../redux/actions";
import { fetchApi } from "../../services/fetchApi";
import "./index.css";

class Options extends Component {
  constructor() {
    super();

    this.flagsApi = this.flagsApi.bind(this);
    this.validButton = this.validButton.bind(this);
    this.onChangeValue = this.onChangeValue.bind(this);
    this.defineClickAfrica = this.defineClickAfrica.bind(this);
    this.defineClickAmerica = this.defineClickAmerica.bind(this);
    this.defineClickAsia = this.defineClickAsia.bind(this);
    this.defineClickEuropa = this.defineClickEuropa.bind(this);
    this.defineClickOceania = this.defineClickOceania.bind(this);

    this.state = {
      defineAfrica: true,
      defineAmerica: true,
      defineAsia: true,
      defineEuropa: true,
      defineOceania: true,
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

  defineClickAfrica() {
    this.setState({ defineAfrica: !this.state.defineAfrica });
    const { defineAfrica, flags, flagsAfrica } = this.state;
    if (defineAfrica === true) {
      this.setState({ flags: flags.filter((value) => value.region !== "Africa") });
    } else {
      this.setState((prevState) => ({
        flags: [...prevState.flags, ...flagsAfrica],
      }));
    }
  }

  defineClickAmerica() {
    this.setState({ defineAmerica: !this.state.defineAmerica });
    const { defineAmerica, flags, flagsAmericas } = this.state;
    if (defineAmerica === true) {
      this.setState({ flags: flags.filter((value) => value.region !== "Americas") });
    } else {
      this.setState((prevState) => ({
        flags: [...prevState.flags, ...flagsAmericas],
      }));
    }
  }

  defineClickAsia() {
    this.setState({ defineAsia: !this.state.defineAsia });
    const { defineAsia, flags, flagsAsia } = this.state;
    if (defineAsia === true) {
      this.setState({ flags: flags.filter((value) => value.region !== "Asia") });
    } else {
      this.setState((prevState) => ({
        flags: [...prevState.flags, ...flagsAsia],
      }));
    }
  }

  defineClickEuropa() {
    this.setState({ defineEuropa: !this.state.defineEuropa });
    const { defineEuropa, flags, flagsEurope } = this.state;
    if (defineEuropa === true) {
      this.setState({ flags: flags.filter((value) => value.region !== "Europe") });
    } else {
      this.setState((prevState) => ({
        flags: [...prevState.flags, ...flagsEurope],
      }));
    }
  }

  defineClickOceania() {
    this.setState({ defineOceania: !this.state.defineOceania });
    const { defineOceania, flags, flagsOceania } = this.state;
    if (defineOceania === true) {
      this.setState({ flags: flags.filter((value) => value.region !== "Oceania") });
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
         Números de bandeiras não selecionado
         ou Números de bandeiras não corresponde
         com a quantidade de bandeiras selecionado!
         `);
    }
  }

  onChangeValue({ target }) {
    this.setState({ numberValue: target.value });
  }

  render() {
    const {
      defineAfrica,
      defineAmerica,
      defineAsia,
      defineEuropa,
      defineOceania,
    } = this.state;
    return (
      <main>
        <components.Headers typeHeader="options" />

        <form className="container-form-options">
          <components.AmountFlags onChangeValue={this.onChangeValue} />

          <components.FlagsOptions
            defineAfrica={defineAfrica}
            defineAmerica={defineAmerica}
            defineAsia={defineAsia}
            defineEuropa={defineEuropa}
            defineOceania={defineOceania}
            defineClickAfrica={this.defineClickAfrica}
            defineClickAmerica={this.defineClickAmerica}
            defineClickAsia={this.defineClickAsia}
            defineClickEuropa={this.defineClickEuropa}
            defineClickOceania={this.defineClickOceania}
          />

          <components.BtnOption validationEvent={this.validButton} />
        </form>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  funcDispatch: (a, b) => dispatch(addData(a, b)),
});

export default connect(null, mapDispatchToProps)(Options);
