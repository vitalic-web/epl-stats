import { DateTime } from 'luxon';
import { WeekDates } from '@/common/types';
import { LocationQueryValue } from 'vue-router';

const getSeasonYears = (start: string, end: string) => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  return `${startDate.getFullYear()} - ${endDate.getFullYear()}`;
};

const toDate = (value: LocationQueryValue | LocationQueryValue[]) => new Date(String(value));

const getDatesForQuery = (dates: Date[]) => {
  const startDate = DateTime.fromJSDate(dates[0]).toISODate();
  const endDate = DateTime.fromJSDate(dates[1]).toISODate();

  return {
    startDate,
    endDate,
  };
};

const getCurrentWeekDates = (): WeekDates => {
  const currentDate = DateTime.now();
  const nextWeekDate = currentDate.plus({ days: 6 });
  return {
    startDate: currentDate.toISODate(),
    endDate: nextWeekDate.toISODate(),
  };
};

export {
  getSeasonYears,
  toDate,
  getDatesForQuery,
  getCurrentWeekDates,
};
