export const getWhatsappLink = (message: string) => {
  const url = `https://wa.me/6283821821625?text=${encodeURIComponent(message)}`;
  return url;
}

export const openWhatsappLink = (message: string) => {
  const url = getWhatsappLink(message);
  window.open(url, '_blank');
}