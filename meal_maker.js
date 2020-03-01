//In this project, I used JavaScript to randomly create a three-course meal based on what is available on a menu. You  can keep running it until you are satisfied with the generated meal!
const menu = {
_courses: {
    appetizers: [],
    mains: [],
    desserts: [],
 },
get appetizers() {
    return this._courses.appetizers;
  },
set appetizers(appetizersIn) {
      this._appetizers = appetizersIn;
    },
get mains() {
    return this._courses.mains;
  },
set mains(mainsIn) {
      this._mains = mainsIn;
    },
get desserts() {
    return this._courses.desserts;
  },
set desserts(dessertsIn) {
      this._desserts = dessertsIn;
    },
get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
       };
    },

addDishToCourse (courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
  return this._courses[courseName].push(dish);
},
getRandomDishFromCourse (courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
  return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}. The price is $${totalPrice.toFixed(2)}.`;
  },
};

menu.addDishToCourse('appetizers', 'Ceasar Salad', 4.25);
menu.addDishToCourse('appetizers', 'fries', 4.25);
menu.addDishToCourse('appetizers', 'Garlic Bread', 3.50);

menu.addDishToCourse('mains', 'Lasagna', 10.75);
menu.addDishToCourse('mains', 'Ribeye Steak', 14.95);
menu.addDishToCourse('mains', 'Rice', 12.95);

menu.addDishToCourse('desserts', 'Ice Cream', 4.50);
menu.addDishToCourse('desserts', 'Coffee', 3.00);
menu.addDishToCourse('desserts', 'Banana Bread', 3.25);

let meal = menu.generateRandomMeal();

console.log(meal);
