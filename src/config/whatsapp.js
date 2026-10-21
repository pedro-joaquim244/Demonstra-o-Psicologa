// Número profissional em formato internacional: DDI + DDD + número.
export const WHATSAPP_NUMBER = '5516994475790';

export const WHATSAPP_MESSAGE = 'Olá, Dra. Helena! Tudo bem? Conheci seu site e gostaria de saber mais sobre os atendimentos e como funciona a primeira consulta.';

export function getWhatsAppUrl() {
  const number = WHATSAPP_NUMBER.replace(/\D/g, '');
  if (!/^55\d{10,11}$/.test(number)) return null;
  return `https://wa.me/${number}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
}
