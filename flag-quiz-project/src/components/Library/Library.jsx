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
    const response = await fetch('https://restcountries.com/v2/all')
    const data = await response.json();
    
    const countries = data
    .map((data) => ({ 'name': data.name, 'image': data.flag }))
   
    this.setState({ infoFlags: countries })
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