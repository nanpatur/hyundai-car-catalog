export const getWhatsappLink = (message: string) => {
  const url = `https://wa.me/6283821821625?text=${encodeURIComponent(message)}`;
  return url;
}