import { createStore } from 'vuex';
import common from '@/store/modules/common';
import teams from '@/store/modules/teams';
import stats from '@/store/modules/stats';

// TODO: add vuex modules
// stats module (table, scorers, winners)
// matches module (matches)
export default createStore({
  modules: {
    common,
    teams,
    stats,
  },
  // state: {
  //   scorers: [],
  //   winners: [],
  //   matches: [],
  // },
  // mutations: {
  //   SET_SCORERS(state, scorers) {
  //     state.scorers = scorers;
  //   },
  //   SET_WINNERS(state, winners) {
  //     state.winners = winners;
  //   },
  //   SET_MATCHES(state, matches) {
  //     state.matches = matches;
  //   },
  // },
  // actions: {
  //   async fetchScorers({ commit }) {
  //     try {
  //       commit('SET_LOADING_STATUS', 'loading');
  //       const scorersData = await EventService.getScorers(10);
  //
  //       scorersData.data.scorers
  //         .map(async (scorer: { team: ScorerTeam }) => {
  //           // eslint-disable-next-line no-param-reassign
  //           scorer.team.crestUrl = getCrestUrl(scorer.team.id);
  //         });
  //       commit('SET_SCORERS', scorersData.data.scorers);
  //     } catch (error) {
  //       console.log('error');
  //     } finally {
  //       commit('SET_LOADING_STATUS', 'notLoading');
  //     }
  //   },
  //   async fetchWinners({ commit }) {
  //     try {
  //       commit('SET_LOADING_STATUS', 'loading');
  //       const leagueData = await EventService.getLeagueInfo();
  //       // eslint-disable-next-line array-callback-return
  //       leagueData.data.seasons.map((season: SeasonDates) => {
  //         // eslint-disable-next-line no-param-reassign
  //         season.years = getSeasonYears(season.startDate, season.endDate);
  //       });
  //       commit('SET_WINNERS', leagueData.data.seasons.slice(1, 29));
  //     } catch (error) {
  //       console.log('error');
  //     } finally {
  //       commit('SET_LOADING_STATUS', 'notLoading');
  //     }
  //   },
  //   async fetchMatches({ commit }, dates: WeekDates) {
  //     try {
  //       commit('SET_LOADING_STATUS', 'loading');
  //       const matches = await EventService.getMatches(dates.startDate, dates.endDate);
  //
  //       matches.data.matches
  //         .map(async (match: Match) => {
  //           // eslint-disable-next-line no-param-reassign
  //           match.homeTeam.crestUrl = getCrestUrl(match.homeTeam.id);
  //           // eslint-disable-next-line no-param-reassign
  //           match.awayTeam.crestUrl = getCrestUrl(match.awayTeam.id);
  //         });
  //       commit('SET_MATCHES', matches.data.matches);
  //     } catch (error) {
  //       console.log('error');
  //     } finally {
  //       commit('SET_LOADING_STATUS', 'notLoading');
  //     }
  //   },
  // },
});
