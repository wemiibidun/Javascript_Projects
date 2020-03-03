//In this project, I created a digital school catalogue for a school. I created classes for primary, middle & high school which inherited from the parent school class. The parent and child classes had getters, setters and other properties
//Creating a parent class for primary, middle and high school
class School{
  constructor(name, level, numberOfStudents){
    this._name=name;
    this._level=level;
    this._numberOfStudents=numberOfStudents;
  }
  //creating getters and setters for name, level & numberOfStudents
  get name(){
    return this._name;
  }

  get level(){
    return this._level;
  }

  get numberOfStudents(){
    return this._numberOfStudents;
  }
  set numberOfStudents(newNumber){
    if (typeof newNumber==='number'){
      this._numberOfStudents=newNumber;
    } else {
    console.log ('Invalid input: numberOfStudents must be set to a Number.');
    }
  }
  //Creating a method with string interpolation
  quickFacts(){
    console.log(`${this.name} educates  ${this.numberOfStudents} students at the ${this.level} school level.`);
  }
  //Creating a static method which takes arrays of strings
  static pickSubstituteTeacher(substituteTeachers){
   const randomTeacher = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[randomTeacher];
 }
}
//Created a PrimarySchool Class
class PrimarySchool extends School {
  constructor(name,numberOfStudents,pickupPolicy){
    super(name,'primary',numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}
//Created HighSchool Class
class HighSchool extends School {
  constructor(name,numberOfStudents,sportsTeams){
    super(name,'high',numberOfStudents);
    this._sportsTeams = sportsTeams;;
  }
  get sportsTeams() {
    console.log(this._sportsTeams);
    return this._sportsTeams;
  }
}
//PrimarySchool Instance with properties
const lorraineHansbury = new PrimarySchool ('Lorraine Hansbury',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();
School.pickSubstituteTeacher(['Jamal Crawford','Lou Williams','J. R. Smith','James Harden','Jason Terry','Manu Ginobli']);

//HighSchool Instance with properties
const alSmith = new HighSchool('Al E. Smith',415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

console.log(alSmith.sportsTeams);

//Testing below
//console.log(' ');
//console.log(' ');
//console.log(School.pickSubstituteTeacher(['teacher1','teacher2','teacher3','teacher4','teacher5'])); // Proof that pickSubstituteTeacher works
//console.log(' ');
//console.log(lorraineHansbury); //Proof that lorraineHansbury exists
//console.log(' ');
//console.log(School.pickSubstituteTeacher(['Jamal Crawford','Lou Williams','J. R. Smith','James Harden','Jason Terry','Manu Ginobli']));//Proof that pickSubstituteTeacher works
//console.log(' ');
//console.log(alSmith);//Proof that alSmith exists
