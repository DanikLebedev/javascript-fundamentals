describe('Array', () => {
  it('Should find the position of the first occurrence', () => {
    const arr1 = [1, 5, 8, 3, 2];
    expect(arr1.indexOf(5)).toBe(1);
    expect(arr1.indexOf(3)).toBe(3);
    expect(arr1.indexOf(2)).toBe(4);
    expect(arr1.indexOf(1)).toBe(0);

    // TODO: Write additional its
  });

  //done

  it('Should return the specified array twice', () => {
    let double = [1, 2, 3];

    expect(double.concat(double)).toStrictEqual([1, 2, 3, 1, 2, 3]);
    expect([...double, ...double]).toStrictEqual([1, 2, 3, 1, 2, 3]);

    // TODO: Write additional its
  });

  //done

  it('Convert the number array to  the array of string values', () => {
    function convertToStringArr(arr) {
      return arr.map(str => String(str));
    }

    expect(convertToStringArr([1, 2, 3])).toStrictEqual(['1', '2', '3']);

    // TODO: Write additional its
  });

  //done

  it('Should return the number of all occurrences of specified item in an array', () => {
    function calculateOccurences(arr, value) {
      let count = 0;
      arr.forEach((item) => {
        item === value ? count++ : count;

      });
      return count
    }

    expect(calculateOccurences([1, 2, 1, 4, 1], 1)).toBe(3);
    expect(calculateOccurences([1, 4, 1, 4, 1], 4)).toBe(2);

    // TODO: Write additional its
  });

  //done

  it('Should convert strings from specified array to uppercase', () => {
    function toUppercase(arr) {
      return arr.map(item => item.toUpperCase())
    }

    expect(toUppercase(["aaaa", "abc"])).toStrictEqual(['AAAA', 'ABC']);
    expect(toUppercase(["bbbb", "cccc"])).toStrictEqual(['BBBB', 'CCCC']);
  });

  //done

  it('Insert an item at specified position', () => {
    function insert(arr, pos, item) {
      arr.splice(pos, 0, item);
      return arr
    }

    expect(insert([1, 2, 4], 2, 3)).toStrictEqual([1, 2, 3, 4]);
  });

  //done

  it('Should return the n last items from the specified array', () => {
    function last(arr, index) {
      return arr.slice(index + 1);
    }

    expect(last([1, 2, 3, 4, 5, 6, 7], 3)).toStrictEqual([5, 6, 7]);
  });

  it('Return the 3 largest items from integer array', () => {
    function find3Largest(arr) {
      let largestNumbers = arr.slice();
      for(let i=0; i<=arr.length-4; i++){
        const minNumber = largestNumbers.indexOf(Math.min(...largestNumbers));
        largestNumbers.splice(minNumber, 1)
      }
      return largestNumbers;
    }

    //done


    expect(find3Largest([1, 3, 8, 3, 29, 11, 2, 17, 9, 1])).toStrictEqual(
        [29, 11, 17]
    );
  });

  it('Sort numbers array by using array method', () => {
    function sort(arr) {
      arr.sort((a, b) => b - a);
      return arr;
    }

    function bubbleSort(arr) {
      for (let i = 0, endI = arr.length - 1; i < endI; i++) {
        for (let j = 0, endJ = endI - i; j < endJ; j++) {
          if (arr[j] > arr[j + 1]) {
            let swap = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = swap;
          }
        }
      }
      return arr.reverse();
    }

    expect(sort([2, 3, 1, 8, 4, 5])).toStrictEqual([8, 5, 4, 3, 2, 1]);
    expect(bubbleSort([2, 3, 1, 8, 4, 5])).toStrictEqual([8, 5, 4, 3, 2, 1]);
  });

  //done

  it('Should summarize of all items of numbers array', () => {
    function sum(arr) {
      return arr.reduce((index, item) => item + index);
    }

    expect(sum([1, 5, 7, 9, 3])).toBe(25);
  });

  //done

  it('Should return the numbers of falsy value in the specified array', () => {
    function getNumberOfFalsy(arr) {
      let count = 0;
      arr.map((item) => item ? count++ : count);
      return count
    }

    expect(getNumberOfFalsy([1, 0, "", null, "hello", "0"])).toBe(3);
  });

  //done

  it('Should return an array of unique items from the specified array', () => {
    function unique(arr) {
      return [...new Set(arr)]
    }

    expect(unique(["a", "b", "a", "c", "e", "b", "o"])).toStrictEqual([
      'a',
      'b',
      'c',
      'e',
      'o'
    ]);
  });

  // done

  it('Should return a map of grouped data by key and value selector', function () {
    function expect(arr, key) {

    }

    let arr = [
      {country: 'Belarus', city: 'Brest'},
      {country: 'Russia', city: 'Omsk'},
      {country: 'Russia', city: 'Samara'},
      {country: 'Belarus', city: 'Grodno'},
      {country: 'Belarus', city: 'Minsk'},
      {country: 'Poland', city: 'Lodz'}
    ];





    expect((arr,'country')).toStrictEqual([
      ['Belarus', ['Brest', 'Grodno', 'Minsk']],
      ['Russia', ['Omsk', 'Samara']],
      ['Poland', ['Lodz']]
    ]);
  });

  it('Should creates an array with all falsy values removed.', () => {
    function compact (arr) {
      arr.map((item, index) => (item) ? item : arr.splice(index, index + 1));
      return arr
    }

    expect(compact([1, 0, null, "a"])).toStrictEqual([1, 'a']);
  });

  //done

  it('Should flattens array a single level deep', () => {
    const flatten = (arr) => arr.flat(1);

    expect(flatten([1, [2, [3, [4]], 5]])).toStrictEqual([
      1,
      2,
      [3, [4]],
      5
    ]);
  });

  //done

  it('Should recursively flattens array.', () => {
    const flattenDeep = (arr) => arr.reduce((acc ,val) => Array.isArray(val) ? acc.concat(flattenDeep(val)): acc.concat(val),[]);
    expect(flattenDeep([1, [2, [3, [4]], 5]])).toStrictEqual([
      1,
      2,
      3,
      4,
      5
    ]);
  });

  //done

  it('Should creates an array of unique values that are included in all given', () => {
    const intersection = (arr1,arr2) => {
      return arr1.filter(value => -1 !== arr2.indexOf(value));
    };
    expect(intersection([1, 2, 3, 4], [8, 3, 1, 0, 9])).toStrictEqual([
      1,
      3
    ]);
  });

  //done

  it('Should remove all elements from array that predicate returns truthy for and returns an array of the removed elements. The predicate is invoked with two arguments: (value, index).', () => {
    const arr = [1, 7, 5, 2, 8];
    const gt5 = v => v > 5;
    const remove = (arr, fn) => arr.filter((item, index) => fn(item) ? arr.splice(index, 1): fn(item));
    let removed = remove(arr ,gt5);
    expect(arr).toStrictEqual([1, 5, 2]);
    expect(removed).toStrictEqual([7, 8]);
  });
});

//done

// Create Stack and Queue




