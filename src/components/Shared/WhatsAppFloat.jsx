import WhatsAppLink from './WhatsAppLink';
import '../../styles/whatsapp-float.css';

export default function WhatsAppFloat() {
  return <WhatsAppLink className="whatsapp-float" aria-label="Conversar pelo WhatsApp"><i className="bi bi-whatsapp" aria-hidden="true" /></WhatsAppLink>;
}
