
// 1. Funcion power
function power(base, exponent) {
    if (exponent === 0) {
      return 1;
    } else {
      let result = 1;
      for (let i = 0; i < Math.abs(exponent); i++) {
        result *= base;
      }
      if (exponent < 0) {
        return 1 / result;
      } else {
        return result;
      }
    }
  }
console.log(power(2,3));

// 2. Funcion etLargerInt
  function getLargerInt(number1, number2) {
    if (number1 > number2) {
      return number1;
    } else {
      return number2;
    }
  }
  console.log(getLargerInt(33, 2134));

// 3. Funcion fibonacciSequence(limit) 
function fibonacciSequence(limit) {
  const sequence = [1, 1]; // Inicia con los dos primeros elementos de la serie

  if (limit === 1) {
    return [1]; // Caso especial: Si limit es 1, se retorna solo el primer elemento
  } else if (limit === 2) {
    return sequence; // Caso especial: Si limit es 2, ae retorna los dos primeros elementos
  } else {
    for (let i = 2; i < limit; i++) {
      const nextNumber = sequence[i - 1] + sequence[i - 2];
      sequence.push(nextNumber);
    }
    return sequence;
  }
}
console.log(fibonacciSequence(16));

// 4. Funcion calculateAverage

function calculateAverage(numbers) {
  if (numbers.length === 0) {
    return 0; // Manejo del caso especial: arreglo vacío.
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }

  const average = sum / numbers.length;
  return average;
}
console.log(calculateAverage([23, 12, 6]));
  
  