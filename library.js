//In this project I creatd a parent class named Media with three subclasses: Book, Movie, and CD. These three subclasses also have their own properties and methods
class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
 }
 //creating getters and setters for tittle, isCheckedOut and ratings
  get title(){
    return this._title;
  }
  get isCheckedOut(){
    return this._isCheckedOut;
  }
	get ratings(){
    return this._ratings;
  }
//method that changes the value saved to isCheckedOut property
  toggleCheckOutStatus(){
    this._isCheckedOut = !this._isCheckedOut;
  }
//creating getAverageRating method that returns an average value of ratings array
  getAverageRating(){
    let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0)/this._ratings.length;
     return ratingsSum;
    }
  addRating(ratings){
    this._ratings.push(ratings);
  }
set isCheckedOut(newisCheckedOut) {
this._isCheckedOut = newisCheckedOut;
}
}

//creating a Book class that extends Media
  class Book extends Media {
    constructor(author, title, pages){
     super(title);
      this._author = author;
      this._pages = pages;
    }
    get author(){
      return this._author;
    }

    get pages(){
      return this._pages;
    }
    }
//creating a Movie class that extends Media
class Movie extends Media{
  constructor(director, title, runTime){
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director(){
    return this._director;
  }

  get runTime(){
    return this._runTime;
  }
}
//creating a Book instance with properties
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

//calling .toggleCheckOutStatus() on the historyOfEverything instance
historyOfEverything.toggleCheckOutStatus();

console.log(historyOfEverything.isCheckedOut);

//call .addRating
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

historyOfEverything.getAverageRating();
console.log(historyOfEverything.getAverageRating());

//creating a Movie instance with properties
const speed = new Movie('Jan de Bont', 'Speed', 116);

//Call .toggleCheckOutStatus() on the speed instance.
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);

//call addRating
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

speed.getAverageRating();
console.log(speed.getAverageRating());

//console.log(historyOfEverything);
//console.log(speed);
