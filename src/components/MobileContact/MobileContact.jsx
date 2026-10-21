import WhatsAppLink from '../Shared/WhatsAppLink';
import '../../styles/mobile-contact.css';

export default function MobileContact() {
  return <aside className="mobile-contact" aria-label="Contato rápido"><span>Um tempo<br /><em>para você.</em></span><WhatsAppLink className="arrow-link button button-dark">Entre em contato <i className="bi bi-whatsapp" aria-hidden="true" /></WhatsAppLink></aside>;
}
