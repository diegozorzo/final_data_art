function a_p_i() {
  background(70, 87, 200);
  for (let i = 0; i < DataArray.length; i++) {
    if (DataArray[i].nm == "Chloe") {
      Chloe++;

      console.log(Chloe);
      console.log(DataArray[i].cnt);
      console.log(DataArray[i].rnk);
    }
  }
  var data = [71, 25, 86, 60];
  var rank = [1, 16, 18, 19];
  var width = 200, // canvas width and height
    height = 350,
    margin = 20,
    w = width - 2 * margin, // chart area width and height
    h = height - 2 * margin;

  var barWidth = (h / data.length) * 0.8; // width of bar
  var barMargin = (h / data.length) * 0.2; // margin between two bars

  textSize(14);

  push();
  translate(margin, margin); // ignore margin area

  for (var i = 0; i < data.length; i++) {
    push();
    fill("steelblue");
    noStroke();
    translate(0, i * (barWidth + barMargin)); // jump to the top right corner of the bar
    rect(0, 0, data[i], barWidth); // draw rect

    fill("#FFF");
    text(data[i], 5, barWidth / 2 + 5); // write data
    text(rank[i], data[i] + 10, barWidth / 2 + 5);

    pop();
  }

  pop();
}
