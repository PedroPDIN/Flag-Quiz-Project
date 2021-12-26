import React, { Component } from "react";
import { Link } from 'react-router-dom';
import NumbersFlags from "./NumbersFlags/NumbersFlags";
import FilterFlag from "./FilterFlag/FilterFlag";

class Options extends Component {
  constructor() {
    super();

    this.flagsApi = this.flagsApi.bind(this);
    /* this.filterFlags = this.filterFlags.bind(this); */

    this.state = {
      amountFlags: [true, true, true, true, true],
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

  /*  filterFlags() {
     const { flags } = this.state;
   }; */

  render() {
    /* const { amountFlags } = this.state; */
    return (
      <main>

        <header>
          <Link to="/menu">Menu</Link>
          <span>Options</span>
        </header>

        <form>
          <NumbersFlags />
          <FilterFlag />
        </form>

      </main>
    )
  }
}

export default Options;