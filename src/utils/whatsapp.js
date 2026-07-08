export const SHOP_PHONE = '917567200160'
export const SHOP_PHONE_DISPLAY = '+91 75672 00160'
export const SHOP_EMAIL = 'mangalamwatchco@gmail.com'

/**
 * Build a WhatsApp deep link. If a watch is provided, references it by name;
 * otherwise sends a general availability inquiry per the shop's standard script.
 */
export function getWhatsAppLink(watchName) {
  const message = watchName
    ? `Hello,\n\nI would like to know whether the "${watchName}" is available.\n\nPlease let me know.\n\nThank you.`
    : `Hello,\n\nI would like to know whether this watch is available.\n\nPlease let me know.\n\nThank you.`
  return `https://wa.me/${SHOP_PHONE}?text=${encodeURIComponent(message)}`
}

export function getCallLink() {
  return `tel:+${SHOP_PHONE}`
}

export function getMailLink() {
  return `mailto:${SHOP_EMAIL}`
}
