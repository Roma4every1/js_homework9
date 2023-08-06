const person = {
    firstName: '',
    lastName: '',
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    set fullName(name) {
      const [firstName, lastName] = name.split(' ');
      this.firstName = firstName;
      this.lastName = lastName;
    }
  };
  
  class Circle {
    constructor(radius) {
      this.radius = radius;
    }
    
    get diameter() {
      return this.radius * 2;
    }
    
    set diameter(diameter) {
      this.radius = diameter / 2;
    }
  }
  
  class Student {
    constructor(firstName, lastName, grades) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.grades = grades;
    }
    
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
    
    set fullName(name) {
      const [firstName, lastName] = name.split(' ');
      this.firstName = firstName;
      this.lastName = lastName;
    }
    
    get averageGrade() {
      const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
      return sum / this.grades.length;
    }
  }
  
  const car = {
    engine: {
      size: '',
      horsepower: '',
      get horsepower() {
        return this._horsepower;
      },
      set horsepower(hp) {
        this._horsepower = hp;
      }
    },
    get horsepower() {
      return this.engine.horsepower;
    },
    set horsepower(hp) {
      this.engine.horsepower = hp;
    }
  };