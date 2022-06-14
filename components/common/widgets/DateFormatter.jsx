import dayjs from "dayjs";
import PropTypes from "prop-types";

export const getFormattedDateString = (date) => {
  const timeLapsedInSeconds = getTimeLapsedInSeconds(date);
  const twoDaysInSeconds = 172800;
  if (timeLapsedInSeconds >= twoDaysInSeconds) {
    return getFixedDateString(date);
  } else {
    return getTimeLapsedString(timeLapsedInSeconds);
  }
};

const getTimeLapsedInSeconds = (date) => {
  const milisecondsPerSecond = 1000;
  const timeLapsedInMiliseconds = Date.now() - date;
  return timeLapsedInMiliseconds / milisecondsPerSecond;
};

// Check how it looks when date is for a past year.
const getFixedDateString = (date) =>
  dayjs(date).locale("es").format("D MMM.").toLowerCase();

const getTimeLapsedString = (timeLapsedInSeconds) => {
  const timeInUnits = getTimeInUnits(timeLapsedInSeconds);
  const greaterTimeUnit = getGreaterTimeUnit(timeInUnits);
  return greaterTimeUnit
    ? getStringFromTimeUnit(greaterTimeUnit)
    : "Recientemente";
};

const getTimeInUnits = (seconds) => {
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;
  return { d: days, h: hours, min: minutes };
};

const getGreaterTimeUnit = (timeInUnits) => {
  const unitsInArrayOfEntries = Object.entries(timeInUnits);
  return unitsInArrayOfEntries.find(hasAtLeastOneQuantity);
};

const hasAtLeastOneQuantity = ([, quantity]) => Math.floor(quantity) > 0;

const getStringFromTimeUnit = ([unit, quantity]) => {
  const quantityFloor = Math.floor(quantity);
  const unitFixed = getFixedUnit(quantityFloor, unit);
  return `${quantityFloor}${unitFixed}`;
};

const getFixedUnit = (quantityFloor, unit) => {
  return unit;
  const isPlural = quantityFloor > 1;
  if (isPlural) return unit;
  const unitInSingular = unit.slice(0, -1);
  return unitInSingular;
};

function DateFormatter({ render, date, as: As = "p", ...restProps }) {
  const formattedDate = getFormattedDateString(date);

  return typeof render === "function" ? (
    render(formattedDate, restProps)
  ) : (
    <As {...restProps}>{formattedDate}</As>
  );
}

DateFormatter.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired
};

export default DateFormatter;
