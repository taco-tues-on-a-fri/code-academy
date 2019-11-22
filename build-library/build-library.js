class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return `This item is taken out: ${this._isCheckedOut}`;
  }

  get ratings() {
    return this._ratings;
  }


  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }
  getAverageRating() {
    return this._ratings.reduce((total, amount, index, array) => {
      total += amount;
      if (index === array.length - 1) {
        return `The average rating is ${total/array.length}`;
      } else {
        return total;
      }
    });
  }

  addRating(rating) {
    this.ratings.push(rating);
  }


  set isCheckedOut(bool) {
    if (typeof bool === 'boolean') {
      this._isCheckedOut = bool;
    } else {
      console.log('Pass in a boolean, please.')
    }
  }
  
} 

class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  } 

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }

} 

class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  } 

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }

} 

class CD extends Media {
  constructor(title, artist, songs) {
    super(title);
    this._artist = artist;
    this._songs = songs;
  } 

  get artist() {
    return this._artist;
  }

  get songs() {
    return this._songs;
  }

  generateRandomTopSong() {
    const randomNumber = Math.floor(Math.random() * this._songs.length + 1);
    return `${this.artist}'s most popular song was ${this._songs[randomNumber]}.`;
  }

  addSong(song) {
    this.songs.push(song);
  }

}


const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544)
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything._isCheckedOut)
historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
historyOfEverything.addRating(5)
console.log(historyOfEverything.getAverageRating())


const speed = new Movie('Speed', 'Jan de Bont', 166)
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut)
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());

const mfDoom = new CD('Beef Rap', 'MF Doom', ["Beef Rapp", "Hoe Cakes", "PotHolders", "Hon Jarne", "Gumbo"])
mfDoom.toggleCheckOutStatus();
console.log(mfDoom.isCheckedOut);
mfDoom.addRating(5)
mfDoom.addRating(5)
mfDoom.addRating(5)
mfDoom.addRating(3)
console.log(mfDoom.getAverageRating())
mfDoom.addSong('One Beer')
console.log(mfDoom.generateRandomTopSong())
console.log(mfDoom.songs)
