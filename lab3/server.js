var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('db.sqlite3');

let date = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

db.serialize(function () {

  // db.run(`CREATE TABLE teachers(
  //   TeacherID INTEGER PRIMARY KEY,
  //   TeacherName TEXT,
  //   SubjectName TEXT,
  //   CountSubject INTEGER,
  //   CountStudents INTEGER
  // );`);

  db.run(`CREATE TABLE subjects(
    SubjectID INTEGER PRIMARY KEY,
    SubjectName TEXT,
    Data TEXT,
    Cabina TEXT
  )`);

  // db.run('DROP TABLE teachers');
  // db.run('DROP TABLE subjects');

  
  // let stmt = db.prepare(`INSERT INTO subjects( SubjectName, Data, Cabina) VALUES (?, ?, ?)`);
  // for (var i = 1; i <= 10; i++) {
  //   stmt.run(null, date[getRandom(0, 6)], getRandom(121, 252));
  // }
  // stmt.finalize();

   let stmt = db.prepare("INSERT INTO teachers(TeacherName, SubjectName, CountSubject, CountStudents) VALUES (?, ?, ?, ?)");
   for (var i = 1; i <= 10; i++) {
       stmt.run("Педагог" + i, "Дисциплин" + i, getRandom(1,4), getRandom(5,20));
   }
   stmt.finalize();

   db.run(`SELECT SubjectName FROM teacher INNER JOIN subjects SubjectName`)

});

db.close();

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}