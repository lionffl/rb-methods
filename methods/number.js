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

module.exports = useNumberMethods;