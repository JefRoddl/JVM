

const Footer = () => {


  return (
    <div className="containerFooter" >

      <h2 className='h2OndeEstamos'>Onde estamos</h2>

      <div className='divMaps'>
        <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.7024891437486!2d-49.175443205422994!3d-25.614800560151956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dc587627f7bed5%3A0xa3842acafc14148c!2sR.%20Dr.%20Joel%20Tesserolli%2C%20114%20-%20Miringuava%2C%20S%C3%A3o%20Jos%C3%A9%20dos%20Pinhais%20-%20PR%2C%2083090-450!5e0!3m2!1spt-BR!2sbr!4v1729452729820!5m2!1spt-BR!2sbr" frameborder="0" allowfullscreen=""></iframe>
      </div>

      <h2 className="h2OndeEstamos">Email de contato</h2>
      <p className="h2OndeEstamos">Joaomaciel615@gmail.com</p>

    </div>
  )
}

export default Footer