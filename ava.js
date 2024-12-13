function b_n_h() {
  background(0);

  for (let i = 0; i < DataArray.length; i++) {
    if (DataArray[i].nm == "Ava") {
      Ava++;
      console.log(DataArray[i].cnt);
      console.log(DataArray[i].rnk);
    }
  }

  noStroke();
  fill(255, 0, 0, 90);
  for (let j = 0; j < 4; j++) {
    ellipse(random(0, 200), random(0, 200), 53);
  }
  fill(0, 255, 0);
  ellipse(random(200, 400), random(0, 200), 69);

  fill(0, 0, 255, 50);
  for (let k = 0; k < 10; k++) {
    ellipse(random(0, 200), random(200, 400), 94);
  }
  fill(255, 255, 0, 50);
  for (let l = 0; l < 15; l++) {
    ellipse(random(200, 400), random(200, 400), 100);
  }
}
