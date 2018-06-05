const team = {
  _players: [
    {firstName: 'Pete',
     lastName: 'Wheeler',
     age: 54},
    {firstName: 'George',
     lastName: 'Michael',
     age: 34},
    {firstName: 'Kyle',
     lastName: 'Wilbur',
     age: 43}
  ],
  _games: [
    {opponent: 'Broncos',
     teamPoints: 42,
     opponentPoints: 27},
    {opponent: 'Rockets',
     teamPoints: 23,
     opponentPoints: 33},
    {opponent: 'Corgies',
     teamPoint: 27,
     opponentPoints: 45}
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    const player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this.players.push(player);
  }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

team._players.forEach(player => console.log(player));
