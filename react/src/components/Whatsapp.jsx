
import whatsappIcone from "/src/assets/images/whatsappIcon.png";

const Whatsapp = () => {
  
  return (
    <a
      href="https://wa.me/5541999383766?text=Olá,%20gostaria%20de%20mais%20informações"
      className="whatsapp_float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={whatsappIcone} alt="WhatsApp" className="whatsapp-icon" />
    </a>
  )
}

export default Whatsapp