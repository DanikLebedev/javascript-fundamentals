describe("Strings", () => {
  it("Should join two strings with a space.", () => {
    // TODO: write 2 function with different way for join string
    function combine1(a, b) {
      return a + ' ' + b;
    }

    function combine2(a, b) {
      return a.concat(" ", b);
    }

    expect(combine1("hello", "world")).toBe("hello world");
    expect(combine2("hello", "world")).toBe("hello world");
  });

  //done

  it("Should get string length", () => {
    function getLength(str) {
      return str.length
    }

    expect(getLength("")).toBe(0);
    expect(getLength("word")).toBe(4);
  });

  //done

  it("Should create greeting message from template", () => {
    function greeting(person) {
      return `Hello, ${person}!`;
    }

    expect(greeting("Ivan")).toBe("Hello, Ivan!");
  });

  //done

  it("Should strip leading and trailing spaces from a string", () => {
    expect(' aaaa bbb   '.trim()).toBe("aaaa bbb");
  });

  //done

  it("Replace all word occurence in the sentences", () => {
    expect('aaa bbb ccc aaa bb'.replace(/aaa/g,"eeeee")).toBe(
      "eeeee bbb ccc eeeee bb"
    );
    expect('aaa sasdas aaa asdsa vcv aaa'.replace(/aaa/g,"eeeee")).toBe("eeeee sasdas eeeee asdsa vcv eeeee");
  });

  //done

  it("Should validate string length", () => {
    function validateLength(str, min, max) {
      let len = str.length;
      if (len > max || len < min) {
        return false
      }
      return true
    }
    expect(validateLength('abcde', 1, 5)).toBe(true);
    expect(validateLength('a', 1, 5)).toBe(true);
    expect(validateLength('ab', 1, 5)).toBe(true);
    expect(validateLength('', 1, 5)).toBe(false);
    expect(validateLength('abcdef', 1, 5)).toBe(false);
  });

  //done

  it("Should do case insensitive strings comparison", () => {
    expect(/* compare('aBc', 'ABC') */).toBe(true);
    expect(/* compare('abc' 'abc') */).toBe(true);
  });

  it("Should trim string according symbols limit", () => {
    function trim(str, max) {
      if (str.length > max) {
        return str.slice(0, max).trim();
      } return str
    }

    expect(trim('Lorem ipsum dolor sit amet', 7)).toBe("Lorem i");
    expect(trim('Lorem ipsum dolor sit amet', 12)).toBe("Lorem ipsum");
    expect(trim('Lorem ipsum dolor sit amet', 11)).toBe("Lorem ipsum");
    expect(trim('Lorem ipsum dolor sit amet', 100)).toBe(
      "Lorem ipsum dolor sit amet"
    );
  });
});

//done
