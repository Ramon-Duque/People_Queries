db.people.insertOne({first_name: "Todd", last_name: "Peterson", email: "tpeterson@gmail.com", gender:"Male", age: 30, state: "California", children:[]})
db.people.insertOne({first_name: "Anthony", last_name: "Page", email: "apage@gmail.com", gender:"Male", age: 35, state: "Ohio", children:["Taylor", "Sam"]})
db.people.updateOne({first_name: "Clarence"}, {$set: {state: "South Dakota"}})
db.people.updateOne({first_name: "Rebecca"}, {$set: {email: null}})
db.people.updateMany({state: "Missouri"}, {$inc: {age: 1}})
db.people.replaceOne({first_name:"Jerry"}, { first_name: "Jerry", last_name: "Baker-Mendez", email: "jerry@classic.ly", gender:"Male", age: 28, state: "Vermont", "children": [{name: "Alan", age: 18}, {name: "Jenny", age: 3}] })
db.people.deleteOne({first_name: "Wanda"})
db.people.deleteMany({email: null})