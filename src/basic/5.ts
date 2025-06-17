enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: DayOfWeek): boolean => {
  return !!(day === DayOfWeek.Sunday || day === DayOfWeek.Saturday);
};
console.log("------------Basic 5------------");
console.log(
  "🚀 ~ isWeekend(DayOfWeek.Saturday);:",
  isWeekend(DayOfWeek.Saturday)
);
