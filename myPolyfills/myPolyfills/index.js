module.exports = function () {
  if (!Array.prototype.myMap) {
    Array.prototype.myMap = function (callback) {
      if (!(this instanceof Array || this instanceof String)) {
        throw new TypeError('Array.prototype.myMap was called on wrong type.');
      }

      if (typeof callback !== 'function') {
        throw new TypeError(`Array.prototype.myMap ${callback} is not a function.`);
      }

      const result = [];

      for (let i = 0; i < this.length; i += 1) {
        result.push(callback(this[i], i, this));
      }

      return result;
    };
  }

  if (!Array.prototype.myReduce) {
    Array.prototype.myReduce = function (callback, initValue) {
      if (!(this instanceof Array || this instanceof String)) {
        throw new TypeError('Array.prototype.myMap was called on wrong type.');
      }

      if (typeof callback !== 'function') {
        throw new TypeError(`Array.prototype.myMap ${callback} is not a function.`);
      }

      let acc = arguments.length >= 2 ? initValue : this[0];
      let iStart = arguments.length >= 2 ? 0 : 1;

      for (let i = iStart; i < this.length; i += 1) {
        acc = callback(acc, this[i], i, this);
      }

      return acc;
    };
  }

  if (!Array.prototype.myFlat) {
    Array.prototype.myFlat = function (depth = 1) {
      if (!(this instanceof Array)) {
        throw new TypeError('Array.prototype.myMap was called on wrong type.');
      }

      if (isNaN(depth) || depth <= 0) return this;

      function flatten(arr, depth) {
        let result = [];

        for (let i = 0; i < arr.length; i += 1) {
          const currentEl = arr[i];

          if (Array.isArray(currentEl) && depth > 0) {
            result.push(...flatten(currentEl, depth - 1));
          } else {
            result.push(currentEl);
          }
        }

        return result;
      }

      return flatten(this, depth);
    };
  }
};
