/* It returns the value of an object regardless of how nested 
the specific property is.
ARGUMENTS:
  - collection: original object to be searched
  - path: array of strings to represent, in order, how these 
  properties should be navigated through
*/

function refine(collection, path) {
  return path.reduce(function(refinement, element) {
    try {
      return refinement[element];
    } catch (ignore) { }
  }, collection);
}

/* Returns a function that compares two element taking into account
the order of properties 'keys' provided. The values returned follow
the convention on array 'sort()' function */
function by(...keys) {
  const paths = keys.map(function(element) {
    return element.toString().split('.');
  });

  return function compare(first, second) {
    let firstValue;
    let secondValue;

    if (paths.every(function(path) {
      firstValue = refine(first, path);
      secondValue = refine(second, path);
      return firstValue === secondValue;
    })) {
      return 0;
    }

    return (
      (
        typeof firstValue === typeof secondValue
          ? firstValue < secondValue
          : typeof firstValue < typeof secondValue
      )
        ? -1
        : 1
    );
  }
}

/*
---------------------------
    TESTS START FROM HERE 
---------------------------
*/


/* 1. Testing the 'refine' factory.  
  - Input: 
    - collection: an ARRAY of OBJECTs 
    - path: an ARRAY of STRINGs
*/
const collection = [{ name: 'Lucas', age: 26 }, { name: 'Amanda', age: 25 }];
console.log(refine(collection[0], ['name']));


/* 2. Testing the 'refine' factory.  
  - Input: 
    - collection: an ARRAY of nested OBJECTs 
    - path: an ARRAY of STRINGs
*/
const collectionWithNestedObjects = [{ name: 'Lucas', age: 26, address: { home: 'Casa' } }, { name: 'Amanda', age: 25, address: { home: 'Trabalho' } }];
console.log(refine(collectionWithNestedObjects[1], ['address', 'home']));


/* 3. Testing the 'by' factory 
 - Attention to the last test: a nested property is provided as input 'address.home'.
 That leads to search for the home property, inside address object. This the first field
 that will be sorted
*/

const collectionForBy = [{ name: 'Lucas', age: 26, address: { home: 'Residencial' } }, { name: 'Amanda', age: 26, address: { home: 'Casa' } }, { name: 'João', age: 21, address: { home: 'Casa' } }];
console.log('age first: ', by('age', 'name')(collectionForBy[1], collectionForBy[2]));
console.log('name first: ', by('name', 'age')(collectionForBy[1], collectionForBy[2]));

console.log('sorting by age first', [...collectionForBy].sort(by('age', 'name')));
console.log('sorting by name first', [...collectionForBy].sort(by('name', 'age')));
console.log('sorting by address first', [...collectionForBy].sort(by('address.home', 'age')));



