/*
  We expect homeCriteria to be a function - PASSING
  We expect homeCriteria to reutrn a string - PASSSING
  We expect homeCriteria to accept string arguments - PASSING
  We expect homeCriteria to folow the string pattern: `I am looking for a ${size} bedroom ${type} in ${city}.` - PASSING
*/

// ----MY TEST-SPECS:
// const size = '3';
// const type = 'aparment'
// const city = 'Jearsy City' 


// const  isFunction = typeof homeCriteria === 'function';
// const  expectedReturnValueString = typeof homeCriteria() === 'string';
// const  typeOfarguments = typeof size === 'string' && typeof  type === 'string' && typeof city === 'string';
// const  returnedString = homeCriteria(size,type,city) === `I am looking for a ${size} bedroom ${type} in ${city}.`;


// console.log(`We expect homeCriteria to be a function:${isFunction}`);
// console.log(`We expect homeCriteria to reutrn a string: ${expectedReturnValueString}`);
// console.log(`We expect homeCriteria to accept string arguments:${typeOfarguments }`);
// console.log(`We expect homeCriteria to folow the string pattern: I am looking for a ${size} bedroom ${type} in ${city}.: ${returnedString}`);


describe('homeCriteria', function() {
  it('is a function', function() {
  // typeof homeCriteria === 'function';
    expect(typeof homeCriteria).toBe('function')
  })

  it('returns a string', function() {
    expect(typeof homeCriteria()).toBe('string')
  })
  const size = '3';
  const type = 'aparment';
  const city = 'Jearsy City';

  it('accept string arguments', function() {
    expect(typeof size, typeof apartment, typeof city).toBe('string');
  })

  it('follow sting pattern', function() {
    expect(homeCriteria(size, type, city)).toBe(`I am looking for a ${size} bedroom ${type} in ${city}.`
    )
  })
})

// -----TEST CASE 2: 
  // describe('reverseString', function() {
  //   it('returns the string argument in reverse order', function() {
  //     expect(reverseString('StrangerThings')).toBe('sgnihTregnartS');
  //     expect(reverseString('chicago')).toBe('ogacihc');
  //   });
  // })


  // ----TEST CASE 3: 
  // describe('arithmetic functions', function(){
  //   let total;
  //   // reassign total for each testcase to avoid radom failures: 
  //   beforeEach(function() {
  //     total = 100;
  //     console.log("before each ran")
  //   })

  //   it('returns the difference of two numbers', function(){    
  //     expect(subtract(total, 8)).toBe(92);
  //   });
    
  //   it('returns the sum of two numbers', function() {    
  //     expect(add(total, 2)).toBe(102);
  //   });
      
  // });