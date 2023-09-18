import { connection } from "database/database-connection";
import { Game, NewGame } from "../protocols/game-protocol";

async function getGames() {
  const gamesList = await connection.query<Game> (`SELECT * FROM games;`);
  return gamesList.rows;
}

async function createGame(game: NewGame) {
  return await connection.query<NewGame>(
    `INSERT INTO games (title, platform) VALUES ($1, $2);`, [game.title, game.platform]);
}

async function getGameByTitleAndPlatform(game: Game) {
  const gameSelected = await connection.query<Game> 
  (`SELECT * FROM games WHERE title = $1 AND platform = $2;`, [game.title, game.platform]);
  return gameSelected.rows;
}

const gamesRepository = {
  getGames,
  getGameByTitleAndPlatform,
  createGame
}

export default gamesRepository;