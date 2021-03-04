export function currencyFormatter(value) {
    return `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}