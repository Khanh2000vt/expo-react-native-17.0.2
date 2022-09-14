export const formatTime = (value: string): string => {
  const date = new Date(value);
  return `${date.getDate()} ${convertMonthToText(
    date.getMonth()
  )} ${date.getFullYear()}, ${getTime(date)}`;
};

const getTime = (date: Date): string => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let minutesText = minutes < 10 ? `0${minutes}` : `${minutes}`;
  let endTime = "AM";
  if (hours > 12) {
    hours = hours - 12;
    endTime = "PM";
  } else if (hours === 12) {
    endTime = "PM";
  }
  return `${hours}:${minutesText} ${endTime}`;
};

const convertMonthToText = (value: number) => {
  let month = "Jan";
  switch (value) {
    case 0:
      month = "Jan";
      break;
    case 1:
      month = "Feb";
      break;
    case 2:
      month = "Mar";
      break;
    case 3:
      month = "Apr";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "Jun";
      break;
    case 6:
      month = "Jul";
      break;
    case 7:
      month = "Aug";
      break;
    case 8:
      month = "Sep";
      break;
    case 9:
      month = "Oct";
      break;
    case 10:
      month = "Nov";
      break;
    case 11:
      month = "Dec";
      break;
  }
  return month;
};
