import { computed } from 'vue';
import { useStore } from 'vuex';

export default function useTeamsStats(matchId: number) {
  const store = useStore();
  const currentTeamsStats = computed(() => store.getters.currentTeamsStats(matchId));
  const loadingTeamsStats = computed(() => store.state.matches.isLoading);

  const showTeamsStats = () => {
    if (!currentTeamsStats.value) {
      store.dispatch('fetchMatchTeamsStats', matchId);
    }
  };

  return {
    currentTeamsStats, showTeamsStats, loadingTeamsStats,
  };
}
