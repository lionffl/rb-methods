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

module.exports = useStringMethods;