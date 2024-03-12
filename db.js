// for using mongo db

// for current db type = db
// for making db = type anyname with add dbs  exple = mydbs , schooldbs

//for collection = db.student.insertOne({"name": "piyush", "age":50, "city":"delhi"})
//for see collection = type show collection       output => student
// Retrieve all db collection = db.student.find()
// for multi collection = db.stundent.insertMany = ([{"name": "piyush", "age":50, "city":"delhi},{"name": "piyush", "age":50, "city":"delhi}])
// Retrieve file with limit = db.student.find().limit(3)
// Retrieve specific file = db.student.find({'age':50})      we can search by specific data like city, name

// for updating db

//db.student.updateOne({'age':44},{'name':'dada'})

// for deleting

// db.student.deleteOne({'age':44},{'name':'piyush'})