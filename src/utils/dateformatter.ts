export const dateFormatter = (
  date: Date,
  dotted?: boolean,
  withTime?: boolean
) => {
  const inputDate = new Date(date);

  const day = inputDate.getDate().toString().padStart(2, "0");
  const month = (inputDate.getMonth() + 1).toString().padStart(2, "0");
  const year = inputDate.getFullYear().toString();

  const hours = inputDate.getUTCHours();
  const minutes = inputDate.getUTCMinutes();
  const amPM = hours >= 12 ? "PM" : "AM";

  if (dotted) {
    if (withTime) {
      const formattedMinutes = String(minutes).padStart(2, "0");
      return `${month}.${day}.${year} ${
        hours % 12 || 12
      }:${formattedMinutes} ${amPM}`;
    }
    return `${month}.${day}.${year}`;
  }

  if (withTime) {
    const formattedMinutes = String(minutes).padStart(2, "0");
    return `${day}/${month}/${year}, ${
      hours % 12 || 12
    }:${formattedMinutes} ${amPM}`;
  }

  const formattedDate = `${month} / ${day} / ${year}`;

  return formattedDate;
};
