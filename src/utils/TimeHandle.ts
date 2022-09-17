function handleTimeYear(data: Date): string {
  const [time, , date, month, year] = getDateTime(data);
  // return `${time}, ${date}/${month}/${year}`;
  return `${date}/${month}/${year}`;
}

function handleTimeMonth(data: Date): string {
  const [time, , date, month] = getDateTime(data);
  // return `${time}, ${date} THG ${month}`;
  return `${date} THG ${month}`;
}

function handleTimeWeek(data: Date): string {
  const [time, day] = getDateTime(data);
  return `${time}, TH ${day}`;
}

function handleTimeMinutes(minutes: number): string {
  let time = Math.floor(minutes / 10) * 10;
  return "About " + time + " minutes ago";
}

function handleTimeSeconds(seconds: number): string {
  let time = Math.floor(seconds / 5) * 5;
  return "About " + time + " seconds ago";
}

function getDateTime(data: Date) {
  let day: string | number = data.getDay() + 1;
  day = day === 7 ? "CN" : day;
  let month: string | number = data.getMonth() + 1;
  month = month < 10 ? `0${month}` : month;
  let date = data.getDate();
  let year = data.getFullYear();
  let time = data.toLocaleTimeString().slice(0, -3);
  return [time, day, date, month, year];
}

function handleTimeToNow(data: string | undefined): string | undefined {
  if (data === undefined) {
    return undefined;
  }
  // let test = '2022-07-06T18:20:40Z';
  //.toLocaleString()
  const now = new Date();
  const time = new Date(data);
  const year = now.getFullYear() - time.getFullYear();
  const month = now.getMonth() - time.getMonth();
  const day = now.getDate() - time.getDate();
  const hours = now.getHours() - time.getHours();
  const minutes = now.getMinutes() - time.getMinutes();
  const seconds = now.getSeconds() - time.getSeconds();
  if (year !== 0) {
    return handleTimeYear(time);
  } else {
    if (month !== 0) {
      return handleTimeMonth(time);
    } else {
      if (day > 7) {
        return handleTimeMonth(time);
      } else if (day > 2 && day <= 7) {
        return handleTimeWeek(time);
      } else if (day === 2) {
        return "2 days ago";
      } else if (day === 1) {
        return "A day ago";
      } else {
        if (hours !== 0) {
          return "About " + hours + " hours ago";
        } else {
          if (minutes >= 10) {
            return handleTimeMinutes(minutes);
          } else if (minutes < 10 && minutes >= 1) {
            return "About " + minutes + " minutes ago";
          } else {
            if (seconds >= 5) {
              return handleTimeSeconds(seconds);
            } else {
              return "Just finished";
            }
          }
        }
      }
    }
  }
}

function handleTimeCreateAt(data: string | undefined): string | undefined {
  if (data === undefined) {
    return undefined;
  }
  const now = new Date();
  const time = new Date(data);
  const year = now.getFullYear() - time.getFullYear();
  const month = now.getMonth() - time.getMonth();
  const day = now.getDate() - time.getDate();
  const hours = now.getHours() - time.getHours();
  const minutes = now.getMinutes() - time.getMinutes();
  const seconds = now.getSeconds() - time.getSeconds();

  if (year !== 0) {
    return year + " year";
  } else {
    if (month !== 0) {
      return month + " month";
    } else {
      if (day !== 0) {
        return day + " day";
      } else {
        if (hours !== 0) {
          return hours + "h";
        } else {
          if (minutes !== 0) {
            return minutes + "m";
          } else {
            return seconds + "s";
          }
        }
      }
    }
  }
}

export { handleTimeToNow, handleTimeCreateAt };
