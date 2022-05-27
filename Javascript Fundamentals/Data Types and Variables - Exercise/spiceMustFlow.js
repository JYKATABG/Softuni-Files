function spiceMustFlow(startYield) {
  let dayCounter = 0;
  let spicesExtraced = 0;

  while (startYield >= 100) {
    dayCounter++;
    spicesExtraced += startYield - 26;
    startYield -= 10;
  }

  console.log(dayCounter);

  if (dayCounter !== 0) {
    console.log(spicesExtraced - 26);
  } else {
    console.log(spicesExtraced);
  }
}
spiceMustFlow(450);
