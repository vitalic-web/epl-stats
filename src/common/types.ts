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

export type selectedTeam = {
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

export interface State {
  loadingStatus: string;
  teams: Team[];
  selectedTeam: selectedTeam;
  table: {
    season: Season,
    standings: StandingInfo[],
  };
  scorers: Scorer[];
}
