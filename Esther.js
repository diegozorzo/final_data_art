function w_n_h() {
  background(0);
  for (let i = 0; i < DataArray.length; i++) {
    if (DataArray[i].nm == "Esther") {
      Esther++;
      console.log(DataArray[i].cnt);
      console.log(DataArray[i].rnk);
    }
  }

  fill(0, 0, 255);
  ellipse(200, 200, 210);
  for (let k = 0; k < 52; k++) {
    fill(0, 255, 0, 80);
    ellipse(random(0, 390), random(0, 390), 22);
  }
  for (let j = 0; j < 31; j++) {
    fill(255, 0, 0, 90);
    ellipse(random(10, 390), random(0, 390), 10);
  }
}
