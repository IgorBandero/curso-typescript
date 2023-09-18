export type Game = {
  id: number;
  title: string;
  platform: string;
}

export type NewGame = Omit<Game, "id">;