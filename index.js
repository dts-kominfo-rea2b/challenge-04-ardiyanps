// ! JANGAN DIMODIFIKASI
const dates = [
  "2019-01-02", // 1546387200 (epoch time, dalam detik)
  "2022-05-06 00:00:00 UTC-2", // 1651802400 (epoch time, dalam detik)
  "2021-03-04 07:00:00 UTC", // 1614841200 (epoch time, dalam detik)
  "2021-04-05 00:00:00 UTC+2", // 1617573600 (epoch time, dalam detik)
  "2020-02-03 UTC+7", // 1580662800 (epoch time, dalam detik)
];

// TODO: Buatlah fungsi createDate
const parse = (number) => {
  parseDate = Date.parse(number) / 1000;
  stringDate = parseDate;
  return stringDate;
}

const createDate = (x, number) => {
  let sorting = x.sort();
  for (const i of sorting) {
    if (number == 0) {
      parse(number);
      break;
    } else if (number == 1) {
      parse(number);
      break;
    } else if (number == 2) {
      parse(number);
      break;
    } else if (number == 3) {
      parse(number);
      break;
    } else if (number == 4) {
      parse(number);
      break;
    } else {
      joinDate = [];
      for (const i of x) {
        parseDate = Date.parse(i) / 1000;
        stringDate = parseDate.toString();
        joinDate.push(stringDate);
      }
      joinedData = joinDate.join("-");
      return joinedData;
    }
  }
}

createDate(dates);


// ! JANGAN DIMODIFIKASI
(() => {
  // IIFE

  // '1546387200-1580662800-1614841200-1617573600-1651802400' (dalam string)
  console.log(createDate?.(dates));

  // '1614841200' (dalam string)
  console.log(createDate?.(dates, 2));
})();

module.exports = {
  dates,
  createDate,
};
