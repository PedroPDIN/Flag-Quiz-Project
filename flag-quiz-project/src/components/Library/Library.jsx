import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading'
import { fetchApi } from "../../services/fetchApi";
import './Library.css';

class Library extends Component {
  constructor() {
    super();

    this.countriesApi = this.countriesApi.bind(this)

    this.state = {
      infoFlags: [],
      loading: false
    }
  }

  componentDidMount() {
    this.countriesApi()
  }

  async countriesApi() {
    const data = await fetchApi()
    const countries = data.map((data) => ({ 'name': data.name, 'image': data.flag }))

    this.setState({ infoFlags: countries, loading: true })
  }

  render() {
    const { infoFlags, loading } = this.state;
    if (!loading) return (<Loading />)
    return (
      <main>

        <header className="conteiner-header-library">
          <Link to="/menu" className="link-library">Menu</Link>
          <h3 className="h3-library">Library</h3>
        </header>

        <section className="conteiner-section-library">
          {infoFlags.map((info) => (
            <div key={ info.name } className="conteiner-info-library">
              <img src={ info.image } alt={ info.name } className="img-library" />
              <span className="span-info-library">{ info.name }</span>
            </div>
          ))}
        </section>

      </main>
    )
  }
}

export default Library;

