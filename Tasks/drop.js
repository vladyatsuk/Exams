// Delete listed keys from dictionary
'use strict';
const drop=(obj,...keysToDrop)=>{
  const allKeys = Object.keys(obj);
  allKeys.forEach((keyObj) => {
  if (keysToDrop.includes(keyObj)) {
delete obj[keyObj];
    }
    })
return obj};

const result = drop({ a: 'uno', b: 'due', c: 'tre' }, 'b', 'f');
console.log(result);
