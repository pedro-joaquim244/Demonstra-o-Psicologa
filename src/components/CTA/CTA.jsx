
import { images, site } from '../../config/site';
import Photo from '../Shared/Photo';
import WhatsAppLink from '../Shared/WhatsAppLink';
import CircularBadge from '../Shared/CircularBadge';
import SectionLabel from '../Shared/SectionLabel';
import '../../styles/cta.css';

const formats = [
  { value: 'online', label: 'Online', icon: 'bi-laptop', detail: 'Por videochamada, em um espaço reservado de sua escolha.', message: 'Olá! Tenho interesse no atendimento online. Gostaria de saber sobre horários, valores e como funciona a primeira sessão.' },
  { value: 'presencial', label: 'Presencial', icon: 'bi-door-open', detail: `Um encontro presencial em ${site.location}.`, message: `Olá! Tenho interesse no atendimento presencial em ${site.location}. Gostaria de saber sobre horários, valores e como funciona a primeira sessão.` },
  { value: 'conversar', label: 'Quero conversar', icon: 'bi-chat-text', detail: 'Tudo bem ter dúvidas. Podemos conversar sobre as possibilidades.', message: 'Olá! Gostaria de conversar sobre as possibilidades de atendimento e tirar algumas dúvidas antes de agendar.' },
];

export default function CTA() {

  return (
    <section id="contato" className="cta-section" aria-labelledby="cta-title">
      <div className="page-container cta-grid">
        <div className="cta-copy">
        <SectionLabel number="10" data-reveal>ANTES DE RESERVAR</SectionLabel>
        <h2 id="cta-title" data-reveal>Prefere conversar<br />antes de <em>reservar?</em></h2>
        <p className="cta-description" data-reveal>Tire dúvidas sobre formatos, disponibilidade e como funciona o primeiro encontro. Sem compromisso.</p>
        <div className="contact-options" data-reveal><p className="format-description">Atendimentos online e presenciais. Um espaço para conversar, esclarecer dúvidas e conhecer as possibilidades.</p><WhatsAppLink className="arrow-link button button-dark cta-button"><span>Conversar pelo WhatsApp</span><i className="bi bi-whatsapp" aria-hidden="true" /></WhatsAppLink></div>
        <span className="cta-note">A CONVERSA TAMBÉM PODE SER O PRIMEIRO PASSO.</span>
        </div>
        <div className="cta-visual"><figure className="cta-photo" data-image-reveal><Photo image={images.closing} sizes="(max-width: 650px) 90vw, (max-width: 1600px) 36vw, 520px" /></figure><CircularBadge /><p className="cta-photo-note">Seu próximo capítulo<br /><em>pode começar aqui.</em></p></div>
      </div>
    </section>
  );
}
