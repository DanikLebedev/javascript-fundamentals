describe("Numbers", () => {
  it("Should use remainder operator '%' ", () => {
    const a = 15;
    const b = 10;

    expect(a % b).toBe(5);
    expect(b % b).toBe(0);
  });

  //done

  test("Should get average of 3 numbers", () => {
    function average(a, b, c) {
      return (a + b + c) / 3;
    }

    expect(average(2, 4, 6)).toBe(4);
    expect(average(-5, 12, -7)).toBe(0);
  });

  //done

  test("Should get a last digit of the number", () => {
    function last(num) {
      return num % 10;
    }

    expect(last(123)).toBe(3);
    expect(last(3982)).toBe(2);
  });

  //done

  test("Should sum the digits of a given number", () => {
    function sumDigits(num) {
      let sum = 0;
      let arr = num.toString().split('');
      for (let i = 0; i < arr.length; i++) {
        sum += parseInt(arr[i]);
      }
      return sum;
    }

    expect(sumDigits(123)).toBe(6);
    expect(sumDigits(53)).toBe(8);
  });

  //done



  test("Should return true if specified number is prime", () => {
    function isPrime(num) {
      for(let i = 2; i <= num; i++) {
        if (num % i === 0) {
          return false
        } return true
      }
    }

    expect(isPrime(7)).toBe(true);
    expect(isPrime(4)).toBe(false);
    // TODO: Write additional tests
    expect(isPrime(13)).toBe(true);
    expect(isPrime(20)).toBe(false);
  });

  //done

  test("Should convert string to number", () => {
    function convert(str) {
      return parseInt(str);
    }

    expect(convert('234')).toBe(234);
  });

  //done

  test("Should find highest value", () => {
    function max(...arg) {
        return Math.max(...arg);
    }

    function max2(...args) {
      let max = args[0];
      for (let i = 0; i < args.length; i++) {
        if (args[i] > max) {
          max = args[i]
        }
      }  return max;
    }
    // TODO: Write 2 functions max and max2. Only one of them should use Math
    expect(max(1, 2)).toBe(2);
    expect(max2(1, 7, 2, 8, 5)).toBe(8);
  });

  //done

  test("Should find lowest value", () => {
    function min(...arg) {
      return Math.min(...arg);
    }

    function min2(...arg) {
      let min = arg[0];
      for (let i = 0; i < arg.length; i++) {
        if (arg[i] < min) {
          min = arg[i];
        }
      }  return min;
    }

    expect(min(2, 3, 9, 4, 1, 5)).toBe(1);
    expect(min2(2, 3, 9, 4, 1, 5)).toBe(1);
    // TODO: Write additional tests
    expect(min(5,124,45,678,64)).toBe(5);
    expect(min2(5,124,45,678,64)).toBe(5);
  });

  //done

  test("Should round up a value to the nearest integer", () => {
    let positiveNum = 1.2;
    let negativeNum = -1.2
    expect(Math.round(1.2)).toBe(1);
    expect(Math.round(1.8)).toBe(2);
    expect(Number(positiveNum.toFixed())).toBe(1);
    expect(Number(negativeNum.toFixed())).toBe(-1);
  });

  //done

  test("Should get the largest integer less than or equal to a given number.  ", () => {
    expect(Math.floor(1)).toBe(1);
    expect(Math.floor(1.2)).toBe(1);
    expect(Math.floor(1.8)).toBe(1);
    // TODO: Write additional tests
    expect(Math.floor(32.9)).toBe(32)
    expect(Math.floor(22.1)).toBe(22);
  });

  //done

  test("Should return the base10 representation of a binary string", function() {
    expect(Number(parseInt(11000000, 2).toString(10))).toBe(192);
  });

  //done

  test("Should convert an eight-bit string number to a binary string", function() {
    expect(parseInt(127,8).toString(2)).toBe("1010111");
    expect(parseInt(65,8).toString(2)).toBe("110101");
  });
});

//done
