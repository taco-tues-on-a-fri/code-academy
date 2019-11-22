class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  //  Getters
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }


  // Setters
  set numberOfStudents(newNumberStudents) {
    if (typeof newNumberStudents === 'number') {
      this._numberOfStudents = newNumberStudents;
    } else {
      console.log(`Invalid input: numberOfStudents must be set to a Number - Instead got: ${typeof newNumberStudents}.`);
    }
  }


  //  Methods
  quickFacts() {
    console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`)
  }


  static pickSubstituteTeacher(substituteTeachers) {
    return substituteTeachers[Math.floor(Math.random() * (substituteTeachers.length - 1))]
  }




}

class Primary extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy() {
    return this._pickupPolicy;
  }
}


class Middle extends School {
  constructor(name, numberOfStudents) {
    super(name, 'middle', numberOfStudents);
  }
}

class High extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, 'high', numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams() {
    console.log(this._sportsTeams);
  }
}

const lorraine_hansbury = new Primary('Lorraine Hansbury', 514, 'Students must be picked up by a parent, or a family member over the age of 13')
lorraine_hansbury.quickFacts()

console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']))

const al_smith = new High('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball'])

al_smith.sportsTeams()
