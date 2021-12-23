import React, { Component } from "react";
import { Link } from 'react-router-dom'

class Library extends Component {
  constructor() {
    super();

    this.countriesApi = this.countriesApi.bind(this)

    this.state = {
      infoFlags: [],
    }
  }

  componentDidMount() {
    this.countriesApi()
  }

  async countriesApi() {
    const response = await fetch('https://restcountries.com/v3.1/all')
    const datas = await response.json();

    const countries = datas
      .map((data) => ({ 'name': data.altSpellings[1], 'image': data.coatOfArms.png }))
      .filter((value) => value.name !== undefined)
      .filter((value) => value.image !== undefined)
      .sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        } else {
          return 0;
        }
      })

    this.setState({ infoFlags: countries });
  }

  render() {
    const { infoFlags } = this.state;
    return (
      <main>

        <nav>
          <h3>Library</h3>
          <Link to="/">Home</Link>
        </nav>

        {infoFlags.map((info) => (
          <div key={info.name}>
            <img src={info.image} alt="flag" />
            <span>{info.name}</span>
          </div>
        ))}

      </main>
    )
  }
}

export default Library;