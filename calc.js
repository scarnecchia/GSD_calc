

function calc_pix_size() {
    var sensor_width = document.getElementById("sensor_width").value;
    var sensor_height = document.getElementById("sensor_height").value;
    var image_width = document.getElementById("image_width").value;
    var image_height = document.getElementById("image_height").value;

    var px_size = Math.sqrt((sensor_width * sensor_height) / (image_width * image_height));

    var pixel_size = math.round(px_size, 6);

    document.getElementById("pixel_size").value = pixel_size;
    document.getElementById("px").value = pixel_size;
}

var button = document.getElementById("button");
button.onclick = calc_pix_size;

function calc_gsd() {
  var px = document.getElementById("px").value;
  var altitude = document.getElementById("altitude").value;
  var flength = document.getElementById("focal_length").value;

  var gsdur = (px * altitude / flength) * 100;
  var gsd = math.round(gsdur, 4);

  document.getElementById("gsd").value = gsd;
}

function calc_photo_area() {
  var image_width = document.getElementById("image_width").value;
  var image_height = document.getElementById("image_height").value;
  var gsd_math = (document.getElementById("gsd").value) /100;

  var gsd_width = image_width * gsd_math;
  var gsd_height = image_height * gsd_math;
  var gsd_area = math.round((gsd_width * gsd_height), 3);

  document.getElementById("gsd_area").value = gsd_area;
}

function todo() {
  calc_gsd();
  calc_photo_area();
}

var gsd_button = document.getElementById("gsd_button");
gsd_button.onclick = todo;
