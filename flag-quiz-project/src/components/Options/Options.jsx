import React, { Component } from "react";
import { Link } from 'react-router-dom';
import NumbersFlags from "./NumbersFlags/NumbersFlags";
import FilterFlag from "./FilterFlag/FilterFlag";

class Options extends Component {
  constructor() {
    super();

    this.flagsApi = this.flagsApi.bind(this);
    /* this.filterFlags = this.filterFlags.bind(this); */
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
    }
  }

  componentDidMount() {
    this.flagsApi()
  };

  async flagsApi() {
    const response = await fetch('https://restcountries.com/v2/all')
    const data = await response.json();
    const countries = data.map((data) => ({ 'name': data.name, 'image': data.flag, 'region': data.region }))
    this.setState({ flags: countries })
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

  /*  filterFlags() {
     const { flags } = this.state;
   }; */

  render() {
    const { define1, define2, define3, define4, define5 } = this.state;
    return (
      <main>

        <header>
          <Link to="/menu">Menu</Link>
          <span>Options</span>
        </header>

        <form>
          <NumbersFlags />
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
        </form>

      </main>
    )
  }
}

export default Options;