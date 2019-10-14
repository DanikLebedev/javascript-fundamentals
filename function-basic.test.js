describe("Function basic", () => {
  it("Should be function declarations", () => {
    function funcDeclaration() {
     return "I am a function declarations"
    }
    expect(funcDeclaration()).toBe("I am a function declarations");
  });

  //done

  it("Should be function expression", () => {
    const funcExpression = function() {
      return "I am a function expression"
    };

    expect(funcExpression()).toBe("I am a function expression");
  });

  //done


  it("Should get sum of 2 numbers", () => {
    function sum(a,b) {
      return a + b;
    }


    expect(sum(5, 7)).toBe(12);
    expect(sum(10, 1000)).toBe(1010);
    expect(sum(-10, 10)).toBe(0);
  });

  //done

  test("Should get arguments length", () => {
    function withoutArguments() {
      return arguments.length;
    }

    function withOneArgument(a) {
      return arguments.length;
    }

    function withTwoArguments(a, b) {
      return arguments.length;
    }


    // TODO: Declare 3 functions (withoutArguments, withOneArgument, withTwoArguments ) with different quantity of named arguments
    expect(withoutArguments()).toBe(0);
    expect(withOneArgument(1)).toBe(1);
    expect(withTwoArguments(1, 2)).toBe(2);
    expect(withOneArgument(1)).toBe(1);
    expect(withoutArguments(1, 2, 3, 4, 5)).toBe(5);
  });

  // done

  test("Should find argument at N position", () => {
    function fn(n) {
      return arguments[n];
    }

    // Write function fn. First argument should be position (N) of argument
    expect(fn(1)).toBe(undefined);
    expect(fn(1, "a")).toBe("a");
    expect(fn(3, "a", "b")).toBe(undefined);
    expect(fn(1, "a", "b", "c")).toBe("a");
    expect(fn(2, "a", "b", "c")).toBe("b");
    expect(fn(3, "a", "b", "c")).toBe("c");
  });

  // done

  it("Should return string of wrapped arguments", () => {
    function wrap(...args) {
      let str = '|';
      for (let arg of args) {
        str += `${arg}|`;
      }
      return str;
    }

    expect(wrap("a", "b")).toBe("|a|b|");
    expect(wrap("a", "b", "c", "d", "e")).toBe("|a|b|c|d|e|");
  });

  //done




  test("Should use Function as argument", () => {
    function logCalculationResult(fn,a) {
      return "Result is " + fn(a)
    }

    // Write logCalculationResult function. Function should accept 2 arguments
    // First is calculation function
    // Second is argument for calculation function
    // Return value is message 'Result is ###'

    function add10(a) {
      return a + 10;
    }

    function mul3(a) {
      return a * 3;
    }

    expect(logCalculationResult(add10, 7)).toBe("Result is 17");
    expect(logCalculationResult(mul3, 7)).toBe("Result is 21");
  });
});

//done
