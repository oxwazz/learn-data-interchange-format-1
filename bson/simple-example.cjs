const { BSON, EJSON, ObjectId } = require('bson');
const Int32 = require('mongodb').Int32;

// ==============================================
console.log('==============================================')

const text = '{ "int32": { "$numberInt": "10" } }';
console.log(text)

// prints { int32: { [String: '10'] _bsontype: 'Int32', value: '10' } }
const a = EJSON.parse(text, { relaxed: false })
console.log(a);

// prints { int32: 10 }
const b = EJSON.parse(text)
console.log(b);

const c = EJSON.stringify(a)
console.log(c);

console.log(EJSON.deserialize(b));


// ==============================================
// console.log('==============================================')

// const doc1 = { int32: new Int32(10) };
//
// // prints '{"int32":{"$numberInt":"10"}}'
// console.log(EJSON.stringify(doc1, { relaxed: false }));
// console.log(333123, doc1)
// // prints '{"int32":10}'
// console.log(EJSON.stringify(doc1));


// ==============================================
// console.log('==============================================')
//
// const bytes = BSON.serialize({ _id: new ObjectId() });
// console.log(bytes);
// const doc2 = BSON.deserialize(bytes);
// console.log(doc2);
// console.log(BSON.serialize(doc2));
// console.log(EJSON.stringify(doc2));
// // {"_id":{"$oid":"..."}}

// ==============================================
console.log('==============================================')

console.log({ _id: new ObjectId() })
const bytes2 = EJSON.serialize({ _id: new ObjectId() });
console.log(bytes2);
const doc3 = EJSON.deserialize(bytes2);
console.log(doc3);


// const tes = { _id: { '$oid': '6544ae98f632a9efcdfa10af' } }
//
//
// console.log(33333444,tes )
// console.log(33333444,JSON.stringify(tes) )

// NOTE:
// 1. parse === deserialize
// 2. stringify === serialize
