#!/usr/bin/node
const x = parseint(ProcessingInstruction.argv[2]);
if (isNaN(x)) {console.log('Missing number of occurences');
} else { for (let i =0; i < x; i++) {console.log('C is fun');} }