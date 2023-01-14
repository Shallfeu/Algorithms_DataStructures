// LIFO FIFO
function flatten(...stack) {
  const result = [];
  while (stack.length) {
    const el = stack.shift();
    if (Array.isArray(el)) {
      stack.unshift(...el);
      continue;
    }

    result.push(el);
  }

  return result;
}

function calculate(expression) {
  const arr = expression.split(' ');
  const stack = [];
  while (arr.length) {
    const el = arr.pop();
    const numberedEl = Number(el);
    if (!isNaN(numberedEl)) {
      stack.push(numberedEl);
      continue;
    }

    const firstNum = stack.pop();
    const secondNum = stack.pop();

    switch (el) {
      case '+':
        stack.push(firstNum + secondNum);
        break;
      case '-':
        stack.push(firstNum - secondNum);
        break;
      case '*':
        stack.push(firstNum * secondNum);
        break;
      case '/':
        stack.push(firstNum / secondNum);
        break;
    }
  }

  return stack[0];
}

function queueTime(customers, n) {
  if (!customers.length) return 0;
  const queue = [...customers];
  const tills = Array(Math.min(n, customers.length)).fill(0);

  while (queue.length) {
    const customer = queue.shift();
    const tillMinId = tills.indexOf(Math.min(...tills));
    tills[tillMinId] += customer;
  }

  return Math.max(...tills);
}
