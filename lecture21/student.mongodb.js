// // use("Collgedb");
// // db.createCollection("students");

// // db.student.insertOne({
// //     "name": "John Doe",
// //     "age": 20
// // });
// // db.student.insertMany([
// //     {
// //         "name": "Jane Smith",   
// //         "age": 22,
// //         "email": "jane.smith@example.com"
// //     },
// //     {
// //         "name": "Bob Johnson",
// //         "age": 21,
// //         "email": "bob.johnson@example.com"
// //     },{
// //         "name": "Alice Williams",
// //         "age": 23,
// //         "email": "alice.williams@example.com"
// //     }
// // ]);

// // db.student.insert({
// //     "name": "Charlie Brown",
// //     "age": 19,
// //     "email": "charlie.brown@example.com"
// // });

// db.student.insert({
//     "name": "David Lee",
//     "age": 24,
//     "email": "david.lee@example.com"
// },{
//     "name": "Emily Davis",
//     "age": 20,
//     "email": "emily.davis@example.com"
// },{
//     "name": "Frank Miller",
//     "age": 22,
//     "email": "frank.miller@example.com"
// },{
//     "name": "Grace Wilson",
//     "age": 21,
//     "email": "grace.wilson@example.com"
// });

// db.student.findOne();  //it finds first one document

db.student.find();  //it finds all documents