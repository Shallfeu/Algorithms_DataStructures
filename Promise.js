const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';
const PENDING = 'pending';

class MyPromise {
  constructor(executor) {
    this.state = PENDING;
    this.result = undefined;
    this.onFulfilledFn = [];
    this.onRejectedFn = [];

    const resolve = (value) => {
      if (this.state === PENDING) {
        this.state = FULFILLED;
        this.result = value;
        this.onFulfilledFn.forEach((fn) => fn(value));
      }
    };

    const reject = (error) => {
      if (this.state === PENDING) {
        this.state = REJECTED;
        this.result = error;
        this.onRejectedFn.forEach((fn) => fn(error));
      }
    };

    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      if (this.state === PENDING) {
        if (onFulfilled)
          this.onFulfilledFn.push(() => {
            try {
              const newResult = onFulfilled(this.result);
              if (newResult instanceof MyPromise) {
                newResult.then(resolve, reject);
              } else resolve(newResult);
            } catch (err) {
              reject(err);
            }
          });

        if (onRejected)
          this.onRejectedFn.push(() => {
            try {
              const newResult = onRejected(this.result);
              if (newResult instanceof MyPromise) {
                newResult.then(resolve, reject);
              } else reject(newResult);
            } catch (err) {
              reject(err);
            }
          });
      }

      if (onFulfilled && this.state === FULFILLED) {
        try {
          const newResult = onRejected(this.result);
          if (newResult instanceof MyPromise) {
            newResult.then(resolve, reject);
          } else resolve(newResult);
        } catch (err) {
          reject(err);
        }
      }

      if (onRejected && this.state === REJECTED) {
        try {
          const newResult = onRejected(this.result);
          if (newResult instanceof MyPromise) {
            newResult.then(resolve, reject);
          } else reject(newResult);
        } catch (err) {
          reject(err);
        }
      }
    });
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }
}

// 1. Конструктор на вход которого переходит executor в свойствах которого дву функции,
// которые можно выполнить и изменить состояние
// const myPromise = new MyPromise((resolve, reject) => {
//   resolve('success');
// });

// 2. Используется для отложенного кода
// const myPromise = new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('success');
//   }, 1000);
// });
// setTimeout(() => {
//   console.log(myPromise);
// }, 1500);

// 3. resolve, reject можно вызвать только один раз
// const myPromise = new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     reject('success');
//   }, 100);
//   setTimeout(() => {
//     resolve('success');
//   }, 100);
// });
// setTimeout(() => {
//   console.log(myPromise);
// }, 1000);

// 4. Чтобы перезватить значение используем then
// const myPromise = new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     reject('success');
//   }, 100);
// }).then(null, (value) => {
//   console.log(value);
// });

// 5. Чтобы перехватить ошибку, можно использовать then
// const myPromise = new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('error');
//     reject(new Error('success'));
//   }, 100);
// }).then(
//   (value) => {
//     console.log(value);
//   },
//   (error) => {
//     console.log(error);
//   },
// );

// 6. Чтобы перехватить ошибку, можно использовать метод catch
// const myPromise = new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     reject(new Error('success'));
//   }, 100);
// }).catch((err) => console.log(err));

// 7. Можно сколько угодно раз вызывать then, состояние будет одно
// const myPromise = new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('success');
//   }, 100);
// });
// myPromise.then((value) => console.log(value));
// myPromise.then((value) => console.log(value));
// myPromise.then((value) => console.log(value));
// myPromise.then((value) => console.log(value));

// 8. Можно использовать цепочки методов
// const myPromise = new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('success');
//   }, 100);
// })
//   .then((value) => value + 1)
//   .then((value) => value + 2)
//   .then((value) => value + 3)
//   .then((value) => console.log(value + 4));

// 9. Можно возращать новый промис
// const myPromise = new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('success');
//   }, 100);
// })
//   .then((value) => {
//     console.log(value);
//     return new Promise((res, rej) => {
//       setTimeout(() => {
//         res(value + '123');
//       }, 100);
//     });
//   })
//   .then((value) => console.log(11, value + 4));
