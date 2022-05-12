export type Team = {
  id: number;
  name: string;
  crestUrl: string;
}

export type Squad = {
  name: string;
  position: string;
  dateOfBirth: string;
  nationality: string;
}

export type SelectedTeam = {
  name: string;
  founded: number;
  phone: string;
  venue: string;
  clubColors: string;
  address: string;
  website: string;
  squad: Squad;
}

export type Season = {
  startDate: string;
  endDate: string;
  currentMatchday: number;
}

export type StandingInfo = {
  position: number;
  team: Team;
  playedGames: number;
  won: number;
  draw: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
}

export type Player = {
  name: string;
  nationality: string;
}

export type Scorer = {
  player: Player;
  team: Team;
  numberOfGoals: number;
}

export type ScorerTeam = {
  id: string;
  crestUrl: string;
}

export type Winner = {
  startDate: string;
  endDate: string;
  winner: Team;
}

export type Goals = {
  homeTeam: number;
  awayTeam: number;
}

export type Score = {
  winner: string;
  fullTime: Goals;
}

export type Match = {
  season: Season;
  utcDate: string;
  status: string;
  matchday: number;
  score: Score;
  homeTeam: Team;
  awayTeam: Team;
}

export interface State {
  loadingStatus: string;
  teams: Team[];
  selectedTeam: SelectedTeam;
  table: {
    season: Season,
    standings: StandingInfo[],
  };
  scorers: Scorer[];
  winners: Winner[];
  matches: Match[];
}

export interface Common {
  loadingStatus: string;
}

export type WeekDates = {
  startDate: string;
  endDate: string;
}

export interface SeasonDates extends WeekDates {
  years: string;
}
