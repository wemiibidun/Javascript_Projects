//The aim was to create and extract information about your favorite sports team. Basketball, soccer, tennis, or water polo, etc using JavaScript data structures such as arrays, objects, etc.
const team = {
_players:[
    {firstName: "Teddy",lastName: "Stanowski",age: 31},
    {firstName: 'Roger',lastName: 'Federer',age: 39},
    {firstName: 'Novak',lastName: 'Djokovic',age: 32}
  ],

  _games:[
    {opponent: 'Rangers',teamPoints: 3,opponentPoints: 2},
    {opponent: 'Dimitrov',teamPoints: 2,opponentPoints: 3},
    {opponent: 'Sock',teamPoints: 3,opponentPoints: 0}
    ],

    get players(){
     return this._players;
  	},
    get games(){
      return this._games;
    },

   addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
  };
    this.players.push(player);
   },

addGame(opponent, teamPoints, opponentPoints) {
    let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    };

    this.games.push(game);
  },
};

team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);
//console.log (team.players);

team.addGame('Blues', 2, 4);
team.addGame('Sabres', 5, 2);
team.addGame('Devils', 3, 1);
console.log (team.games);
