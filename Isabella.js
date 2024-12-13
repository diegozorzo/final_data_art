let size = 10;
let growth = 1;
function H() {
  background(0);

  for (let i = 0; i < DataArray.length; i++) {
    if (DataArray[i].nm == "Isabella") {
      Isabella++;
      x = 25;
      y = 25;
      console.log(DataArray[i].cnt);
      console.log(DataArray[i].rnk);
      for (let x = 25; x <= int(DataArray[i].cnt); x += 50) {
        for (let y = 25; y <= int(DataArray[i].rnk); y += 50) {
          fill(255, 0, 0);
          ellipse(x, y, size);

          if (size > 75 || size < 0) {
            growth *= -1;
          }
        }
      }
      for (let x = 0; x <= width; x += 50) {
      for (let y = 0; y <= height; y += 50) {
        fill(0, 0, 255, 50);
        ellipse(x, y, size);

        size += growth;

        if (size > 75 || size < 0) {
          growth *= -1;
        }
    }

  }
}
  }
}
  