describe("Data types", () => {
  describe("Boolean", () => {
    it("Should define False and True boolean variables", () => {
      let a = false;
      let b = true;

      expect(a).toBeFalsy();
      expect(typeof a).toBe("boolean");
      expect(b).toBeTruthy();
      expect(typeof b).toBe("boolean");
    });

    // Done

    it("Should use different logical operators with 2 boolean operands", () => {
      const FALSE = false;
      const TRUE = true;

      let useLogicalAnd = FALSE && TRUE;
      let useLogicalOr = FALSE || TRUE;
      let useLogicalNot = !FALSE;
      let useDoubleLogicalNot = !!FALSE;

      expect(FALSE && TRUE).toBe(false);
      expect(FALSE || TRUE).toBe(true);
      expect(FALSE !== TRUE).toBe(true);
      expect(!!FALSE).toBe(false);
    });

    //done

    it("Should use different logical operators with at least 3 boolean operands", () => {
      const a = false;
      const b = false;
      const c = true;
      const d = true;

      let cond1 = (a || c) && d;
      let cond2 = a || (c && d);
      let cond3 = (!c && !d) || a;
      let cond4 = !!b || !!a && c;

      expect(cond1).toBe(true);
      expect(cond2).toBe(true);
      expect(cond3).toBe(false);
      expect(cond4).toBe(false);
    });
  });

  // done

  describe("Number", () => {
    it("Should define different numbers", () => {
      let a = 10;
      let b = 1 / 0  ;
      let c = 20.5 ;
      let d = -(Math.pow(2, 53) - 1);
      let nan = 'Nan' / 2;

      expect(a).toBe(10);
      expect(!Number.isFinite(b)).toBe(true);
      expect(c).toBeGreaterThan(20);
      expect(c).toBeLessThan(21);
      expect(d).toBeLessThan(0);
      expect(nan).toBeNaN();
    });

    // done

    it("Should use base operators", () => {
      const a = 10;
      const b = 30;

      expect(a + b).toBe(40);
      expect(a - b).toBe(-20);
      expect(b - a).toBe(20);
      expect(a * b).toBe(300);
      expect(b / a).toBe(3);
      expect(a / b).toBeCloseTo(0.333);
    });

    // done

    it("Should combine base operators", () => {
      const a = 10;
      const b = 30;
      const c = 100;

      expect(a + b + c).toBe(140);
      expect(((a + b) * c )/ a).toBe(400);
      expect((b - a) * c).toBe(2000);
      expect(((c + a) * b)).toBe(3300);
      // TODO: write 3 own test
      expect((c - b) + a).toBe(80);
      expect((b + c) / a).toBe(13);
      expect((a + b) * c).toBe(4000);
    });

    //done

    it("Should convert to number", () => {
      expect(Number("123")).toBe(123);
      expect(Number("12.3")).toBe(12.3);

      expect(Number(parseInt("1100", 2))).toBe(12);
      expect(Number(parseFloat("12.3"))).toBe(12.3);
      expect(Number(false)).toBe(0);
      expect(Number(" ")).toBe(0);
      expect(Number("0b11")).toBe(3);
      expect(Number("foo")).toBe(NaN);
      expect(Number("Nan"/2)).toBe(NaN);
      expect(Number(-1 / 0)).toBe(Number.NEGATIVE_INFINITY);
    });
  });

  //done

  describe("String, object, null, undefined and symbols", () => {
    it("String", () => {
      let str1 = 'string'; // Use single quote
      let str2 = String('string'); // Use String(???)
      let str3 = new String('string'); // Use new String(???)
      let str4 = `${str1}`; // Use template string and str1 variable

      expect(str1).toBe("string");
      expect(str1 === str2).toBeTruthy();
      expect(str1 === str3).toBeFalsy();
      expect(str1 === str4).toBeTruthy();
      expect(typeof str3).toBe("object");
    });

    // done

    it("Should define object with 2 props", () => {
      let obj = {
        a : 2,
        b : 3
      }; // Define object with 2 props

      expect(typeof obj).toBe("object");
      expect(Object.keys(obj).length).toBe(2);
      // TODO: write 2 own tests
      expect(obj.a).toBe(2);
      expect(obj.b - obj.a).toBe(1);
    });

    // done

    it("Should define variable with Null and undefined values", () => {
      let nullVar = null; // Set null
      let undefinedVar = undefined; // Set undefined
      let someVar; // Do not define it!!!

      expect(nullVar).toBeNull();
      expect(undefinedVar).toBe(undefinedVar);
      expect(someVar).toBe(undefined);
      expect(typeof nullVar).toBe("object");
      expect(typeof undefinedVar).toBe("undefined");
    });

    //done

    it("Should define 2 Symbol variable with the same description", () => {
      const smbl1 = Symbol("test");
      const smbl2 = Symbol("test");

      expect(typeof smbl1).toBe("symbol");
      expect(typeof smbl2).toBe("symbol");
      expect(smbl1 == smbl2).toBe(false);
    });
  });
});


