const zeller = function zellerCongruence(year, month, day) {
  const daysMapping = {
    0: "Saturday",
    1: "Sunday",
    2: "Monday",
    3: "Tuesday",
    4: "Wednesday",
    5: "Thursday",
    6: "Friday",
  };

  /*
   * Jan and Feb are counted as months 13 and 14 of the previous year
   */
  if (month < 3) {
    month += 12;
    year--;
  }

  const century = Math.floor(year / 100);
  const centuryYear = year % 100;
  const dayOfWeek =
    (day +
      Math.floor((13 * (month + 1)) / 5) +
      centuryYear +
      Math.floor(centuryYear / 4) +
      Math.floor(century / 4) +
      5 * century) %
    7;

  return daysMapping[dayOfWeek];
};
