export const getWhatsappLink = (message: string) => {
  const url = `https://wa.me/6282128798554?text=${encodeURIComponent(message)}`;
  return url;
}

export const openWhatsappLink = (message: string) => {
  const url = getWhatsappLink(message);
  window.open(url, '_blank');
}