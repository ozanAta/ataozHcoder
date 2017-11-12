function compare(a, b) {
    if (a._value < b._value) {
      return -1;
    }
    if (a._value > b._value) {
      return 1;
    }
    
    return 0
  }

module.exports = compare