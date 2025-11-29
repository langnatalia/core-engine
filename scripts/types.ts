// types.ts

export type GameId = string;
export type PlayerId = string;
export type TeamId = number;
export type MatchId = string;

export type Player = {
  id: PlayerId;
  name: string;
  team: TeamId;
};

export type Team = {
  id: TeamId;
  name: string;
  players: PlayerId[];
};

export type Match = {
  id: MatchId;
  team1: TeamId;
  team2: TeamId;
  game: GameId;
  date: Date;
  result: { team1: number; team2: number };
};

export type Game = {
  id: GameId;
  name: string;
  matches: MatchId[];
};