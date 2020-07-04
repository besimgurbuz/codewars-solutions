function formatDuration(seconds) {
  // years, days, hours, minutes and seconds.
  if (seconds < 0) {
    return '';
  } else if (seconds === 0) {
    return 'now';
  }

  let result = '';
  const sDevider = 1,
        mDevider = 60,
        hDevider = mDevider * 60,
        dDevider = hDevider * 24,
        yDevider = dDevider * 365;
  let checker = [
    { name: 'year', res: 0, devider: yDevider },
    { name: 'day', res: 0, devider: dDevider },
    { name: 'hour', res: 0, devider: hDevider },
    { name: 'minute', res: 0, devider: mDevider },
    { name: 'second', res: 0, devider: sDevider }
  ];

  for(let i = 0; i < checker.length; i++) {
    const checkObj = checker[i];

    if (seconds / checkObj.devider >= 1) {
      const result = Math.floor(seconds / checkObj.devider);
      seconds -= result * checkObj.devider;
      checker[i].res = result;
    }
  }

  checker = checker.filter(check => {
    return check.res > 0;
  });

  checker.forEach(checkRes => {
    const index = (checker.length - 1) - checker.indexOf(checkRes);
    let diveder = '';
    if (index > 1) diveder = ',';
    else if (index === 1) diveder = ' and';
    console.log('index', index, 'diveder', diveder);
    if (checkRes.res > 1) checkRes.name += 's';
    result += ` ${checkRes.res} ${checkRes.name}${diveder}`;
  });

  return result.trim();
}



console.log(formatDuration(1), "1 second");
console.log(formatDuration(62), "1 minute and 2 seconds");
console.log(formatDuration(120), "2 minutes");
console.log(formatDuration(3600), "1 hour");
console.log(formatDuration(3662), "1 hour, 1 minute and 2 seconds");
