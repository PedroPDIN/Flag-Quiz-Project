import React, { Component } from "react";
import Header from "./Header/Header";
import NumbersFlags from "./NumbersFlags/NumbersFlags";
import FilterFlag from "./FilterFlag/FilterFlag";
import Button from "./Button/Button";
import './Options.css';

class Options extends Component {
  constructor() {
    super();

    this.flagsApi = this.flagsApi.bind(this);
    this.filterFlags = this.filterFlags.bind(this);
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
      flags: [],
      flagsAfrica: [],
      flagsAmericas: [],
      flagsAsia: [],
      flagsEurope: [],
      flagsOceania: [],
      totalPlay: [], // passar via props para para o componente "Play".
      numberValue: '20', // passar via props para para o componente "Play".
    }
  }

  componentDidMount() {
    this.flagsApi()
  };

  async flagsApi() {
    const response = await fetch('https://restcountries.com/v2/all')
    const data = await response.json();
    const countries = data.map((data) => ({ 'name': data.name, 'image': data.flag, 'region': data.region }))
    this.setState({
      flags: countries,
      flagsAfrica: countries.filter((v) => v.region === 'Africa'),
      flagsAmericas: countries.filter((v) => v.region === 'Americas'),
      flagsAsia: countries.filter((v) => v.region === 'Asia'),
      flagsEurope: countries.filter((v) => v.region === 'Europe'),
      flagsOceania: countries.filter((v) => v.region === 'Oceania'),
    })
  };

  toDefineClick1() {
    this.setState({ define1: !this.state.define1 })
  };

  toDefineClick2() {
    this.setState({ define2: !this.state.define2 })
  };

  toDefineClick3() {
    this.setState({ define3: !this.state.define3 })
  };

  toDefineClick4() {
    this.setState({ define4: !this.state.define4 })
  };

  toDefineClick5() {
    this.setState({ define5: !this.state.define5 })
  };

  filterFlags() {
    const {
      flags,
      flagsAfrica,
      flagsAmericas,
      flagsAsia,
      flagsEurope,
      flagsOceania,
      define1,
      define2,
      define3,
      define4,
      define5,
    } = this.state;
    const total = [];
    if (define1 === false) total.push(...flagsAfrica);
    if (define2 === false) total.push(...flagsAmericas);
    if (define3 === false) total.push(...flagsAsia)
    if (define4 === false) total.push(...flagsEurope)
    if (define5 === false) total.push(...flagsOceania)
    total.push(flags)
    this.setState({
      totalPlay: total.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      }),
    });
  };

  onChangeValue({ target }) {
    this.setState({ numberValue: target.value })
  }

  render() {
    const { define1, define2, define3, define4, define5 } = this.state;
    return (
      <main>
        <Header />
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
          <Button filter={this.filterFlags} />
        </form>

      </main>
    )
  }
}

export default Options;