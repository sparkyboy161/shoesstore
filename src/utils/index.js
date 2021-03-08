function currencyFormatter(value) {
    return `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

export {
    currencyFormatter,
    getBase64
}