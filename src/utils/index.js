function currencyFormatter(value) {
  return `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

function calculateBySource(source, config, price) {
  const { exchangeRate, shipFee } = config;
  switch (source) {
    case "monokabu":
      return (price + 1000) * exchangeRate + shipFee;
    case "snkrdunk":
      return price * exchangeRate + shipFee;
    case "goat":
      return (price + 12) * exchangeRate + shipFee;
    case "kream":
      return price * exchangeRate + shipFee;
    case "adidas":
      return (price + 330) * exchangeRate + shipFee;
    case "nike":
      return price * exchangeRate + shipFee;
    case "dewu":
      return (price + 6) * exchangeRate + shipFee;
    default:
      return 0;
  }
}



export { currencyFormatter, getBase64 , calculateBySource};
