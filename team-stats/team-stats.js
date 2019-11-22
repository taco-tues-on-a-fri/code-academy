let team = {
  _players: [{
    firstName: 'Taco',
    lastName: 'Friday',
    age: 18
  }, {
    firstName: 'Fanny',
    lastName: 'Wednesday',
    age: 15
  }, {
    firstName: 'Dough',
    lastName: 'Boi',
    age: 11
  }],
  _games: [{
    opponent: 'Broncos',
    teamPoints: 42,
    opponentPoints: 27
  }, {
    opponent: 'Badgers',
    teamPoints: 22,
    opponentPoints: 12
  }, {
    opponent: 'Diggers',
    teamPoints: 65,
    opponentPoints: 4
  }],
  //  a getter method for _players and _games
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  //  add player method
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this._players.push(player);
  },
  // add game method
  addGame(opponent, teamPoints, opponentPoints) {
    let games = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    };
    this._games.push(games);
  }
}

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Eagle', 22);
team.addPlayer('Fuck', 'You', 33);
team.addGame('pirates', 20, 20);
team.addGame('loggers', 99, 99);
team.addGame('piles', 23, 23);