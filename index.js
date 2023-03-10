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

  Object.defineProperty(String.prototype, "capitalize", {
    get: function () {
      let result = "";
      for (let i = 0; i < this.length; i++) {
        if ((i > 0 && this[i - 1] === " ") || i === 0) {
          result = result + this[i].toUpperCase();
        } else {
          result = result + this[i];
        }
      }
      return result;
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

  Object.defineProperty(Number.prototype, "isPrime", {
    get: function () {
      if (this * -1 === -1) {
        return undefined;
      }
      if (this > 2 && this % 2 === 0) {
        return false;
      }
      let isPrime = true;
      const end = Math.trunc(this / 2);
      for (let i = 2; i < end; i++) {
        if (this % i === 0) {
          isPrime = false;
          break;
        }
      }
      return isPrime;
    },
  });
}

module.exports = useMethods()