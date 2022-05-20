import { DateTime, DateTimeFormatOptions } from 'luxon';
import { computed } from 'vue';

export default function useDates(utcDate: string) {
  const dt = DateTime.fromISO(utcDate).setLocale('en-US');
  const currentDate = DateTime.now().setLocale('en-US');

  const isToday = computed(() => (dt.day === currentDate.day) && (dt.month === currentDate.month));
  const displayedTime = computed(() => dt.toFormat('T'));

  const displayedDate = computed(() => {
    const format: DateTimeFormatOptions = { month: 'long', day: 'numeric' };
    return dt.toLocaleString(format);
  });

  return {
    isToday, displayedTime, displayedDate,
  };
}
