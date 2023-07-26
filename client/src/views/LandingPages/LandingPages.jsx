import React from 'react';
import { Link } from 'react-router-dom';
import style from './LandingPages.module.css';

const LandingPages = () => {
  return (
    <div className={ style.LandingPages }>
      <title>PI - Dogs </title>
      <div className={ style.container }>
        <h1>Henry</h1>
        <p>In this project you will find a lot of information about dog breeds and their qualities.</p>

        <Link to="/home">
          <button>Entrar</button>
        </Link>
      </div>
    </div>
  )
}

export default LandingPages;