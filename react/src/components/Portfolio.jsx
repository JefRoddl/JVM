import React from 'react'
import imgPortfolio1 from "/src/assets/images/imgPortfolio1.png";

const Portfolio = () => {
  return (
    <div id='portfolio' className='containerPortfolio'>
      <img src={imgPortfolio1} alt="" className='imgPortfolio'/>
        <div className='acessPortfolio'>
          <h2>NOSSO TRABALHO  EM AÇÃO</h2>
          <a href="" className='acessPortfolioh2'><h2>ACESSAR PORTFOLIO</h2></a>
        </div>
    </div>
  )
}

export default Portfolio