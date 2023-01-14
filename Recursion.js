function factorial(n) {
  if (n < 3) return n; // base case
  return n * factorial(n - 1);
}

function fibonaci(n) {
  if (n < 3) return 1; // base case
  return fibonaci(n - 1) + fibonaci(n - 2);
}

function flatten(...data) {
  const result = [];

  data.forEach((el) => {
    if (Array.isArray(el)) {
      result.push(...flatten(...el));
    } else {
      result.push(el);
    }
  });

  return result;
}

function flatten(...data) {
  return data.reduce(
    (acc, item) => (Array.isArray(item) ? acc.concat(flatten(...item)) : acc.concat(item)),
    [],
  );
}

console.log(flatten([1, [2, [3, [4]]]]));
