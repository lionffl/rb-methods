function useArrayMethods() {
  Object.defineProperty(Array.prototype, "max", {
    get: function () {
      let max = 0;
      for (let i = 0; i < this.length; i++) {
        if (typeof this[i] !== "number")
          throw new Error("Must be an array of numbers");
        if (this[i] > max) {
          max = this[i];
        }
      }
      return max;
    },
  });

  Object.defineProperty(Array.prototype, "min", {
    get: function () {
      let min = this[0];
      for (let i = 0; i < this.length; i++) {
        if (typeof this[i] !== "number")
          throw new Error("Must be an array of numbers");
        if (this[i] < min && this[i]) {
          min = this[i];
        }
      }
      return min;
    },
  });

  Object.defineProperty(Array.prototype, "sum", {
    get: function () {
      let sum = 0;
      for (let i = 0; i < this.length; i++) {
        if (typeof this[i] !== "number")
          throw new Error("Must be an array of numbers");
        sum = sum + +this[i];
      }
      return sum;
    },
  });

  Object.defineProperty(Array.prototype, "average", {
    get: function () {
      let sum = 0;
      for (let i = 0; i < this.length; i++) {
        if (typeof this[i] !== "number")
          throw new Error("Must be an array of numbers");
        sum = sum + +this[i];
      }
      return sum / this.length;
    },
  });

  Object.defineProperty(Array.prototype, "empty", {
    get: function () {
      return this.length === 0;
    },
  });

  Object.defineProperty(Array.prototype, "deepDup", {
    get: function () {
      const deepDup = [];
      for (let i = 0; i < this.length; i++) {
        const element = this[i];
        deepDup.push(element);
      };
      return deepDup;
    },
  });

  Object.defineProperty(Array.prototype, "first", {
    get: function () {
      const first = this[0];
      return first;
    },
  });

  Object.defineProperty(Array.prototype, "last", {
    get: function () {
      const last = this[this.length - 1];
      return last;
    },
  });

  Object.defineProperty(Array.prototype, "clear", {
    get: function () {
      if (this.length === 0) return this;
      for (let i = 0; this.length !== 0; i++) {
        this.pop();
      }
      return this;
    },
  });
}

module.exports = useArrayMethods;