export default function formatCurrency(
  e: React.FormEvent<HTMLInputElement>
) {

  let value = e.currentTarget.value;
  value = value.replace(/\D/g, ""); // Remove todos os caracteres não numéricos
  value = value.replace(/(\d)(\d{2})$/, "$1,$2") // Adiciona a vírgula para separar os centavos
  value = value.replace(/(?=(\d{3})+(\D))\B/g, ".") // Adiciona pontos como separadores de milhar
  if (value !== "") {
    value = "$ " + value; // Adiciona o símbolo de dólar na frente do valor
  }
  e.currentTarget.value = value

  return e;
}
