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
      return this._isCheckedOut;
    }
  
    get ratings() {
      return this._ratings;
    }
  
    set isCheckedOut(value) {
      this._isCheckedOut = value;
    }
  
    toggleCheckedOutStatus() {
  this.isCheckedOut = !this.isCheckedOut;
    }
  
    getAverageRating() {
      let ratingsSum = this.ratings.reduce((accumulator, currentValue) => accumulator + currentValue);
      return ratingsSum / this.ratings.length;
    }
  
    addRating(ratingAdd) {
      this.ratings.push(ratingAdd);
    }
  
    };
  
    class Book extends Media {
      constructor(auth, title, pages) {
        super(title);
        this._auth = auth;
        this._pages = pages;
        
      }
  
      get auth() {
        return this._auth;
      }
  
      get pages() {
        return this._pages;
      }
    };
  
    class Movie extends Media{
      constructor(director, title, runTime) {
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
    };
  
    const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', '544');
    
    historyOfEverything.toggleCheckedOutStatus();
    console.log(historyOfEverything.isCheckedOut);
    historyOfEverything.addRating(4);
    historyOfEverything.addRating(5);
    historyOfEverything.addRating(5);
  
    console.log(historyOfEverything.getAverageRating());
  
  
    const speed = new Movie('Jan de bont', 'Speed', '116');
  
    speed.toggleCheckedOutStatus();
    console.log(speed.isCheckedOut);
    speed.addRating(1);
    speed.addRating(1);
    speed.addRating(5);
    console.log(speed.getAverageRating());
    