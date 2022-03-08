/*
  A função numbers recebe um array (tamanho variável),
  retornando true se todos os parâmetros forem do tipo 'number' e false caso contrário.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, 'a']; [].
  Comportamento:
    - numbers([2, 3, 4]); // Retorna: true
    - numbers([2, 'errado', 5]); // Retorna: false
*/

const numbers = (numbers) => {
  let countNumbers = 0;

  for (let numberIndex = 0; numberIndex < numbers.length; numberIndex++) {
    if (typeof(numbers[numberIndex]) === "number")
      countNumbers += 1;
    else return false;
  }

  if (countNumbers === numbers.length) return true;
};

module.exports = numbers;
