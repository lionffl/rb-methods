function useMethods() {
  useArrayMethods();
  useStringMethods();
  useNumberMethods();
}


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
}


function useStringMethods() {
  Object.defineProperty(String.prototype, "first", {
    get: function () {
      return this.charAt(0);
    },
  });

  Object.defineProperty(String.prototype, "last", {
    get: function () {
      return this.charAt(this.length - 1);
    },
  });
}


function useNumberMethods() {

  Object.defineProperty(Number.prototype, "isOdd", {
    get: function () {
      return this % 2 != 0;
    },
  });

  Object.defineProperty(Number.prototype, "isEven", {
    get: function () {
      return this % 2 == 0;
    },
  });
}

module.exports = useMethods()