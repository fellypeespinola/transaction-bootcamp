const formatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

function formatCurrency(numberToFormat) {
  return formatter.format(numberToFormat);
}

export { formatCurrency };
