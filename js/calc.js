$( "#area_info" ).tooltip({
  position: { my: "left+15 center", at: "right center" }
});

$( "#area_info_2" ).tooltip({
  position: { my: "left+15 center", at: "right center" }
});

$( "#area_info_3" ).tooltip({
  position: { my: "left+15 center", at: "right center" }
});

/*pixel size Calculations*/

function calc_pix_size(){
    var sensor_width = document.getElementById("sensor_width").value;
    var sensor_height = document.getElementById("sensor_height").value;
    var image_width = document.getElementById("image_width").value;
    var image_height = document.getElementById("image_height").value;

    var px_size = Math.sqrt((sensor_width * sensor_height) / (image_width * image_height));

    var pixel_size = math.round(px_size, 6);
    document.getElementById("px").value = pixel_size;
    document.getElementById("px2").value = pixel_size;
}

var GSD_button = document.getElementById("GSD_select");
GSD_button.onclick = calc_pix_size;

var AGL_select = document.getElementById("AGL_select");
AGL_select.onclick = calc_pix_size;

$( "#GSD_select" ).click(function() {
  $( "#AGL_column" ).hide("fast");
  $( "#GSD_column" ).show("fast");
});

$( "#AGL_select" ).click(function() {
  $( "#GSD_column" ).hide("fast");
  $( "#AGL_column" ).show("fast");
});

/*GSD Calculations*/
function calc_gsd(){
  var px = document.getElementById("px").value;
  var altitude = document.getElementById("AGL_known").value;
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

/*Altitude Calculations*/

function calc_agl(){
  var px = document.getElementById("px2").value;
  var gsd = document.getElementById("GSD_known").value;
  var flength = document.getElementById("focal_length2").value;

  var aglur = (gsd * flength / px) / 100;
  var agl = math.round(aglur, 2);

  document.getElementById("agl").value = agl;
}

var AGL_button = document.getElementById("AGL_button");
AGL_button.onclick = calc_agl;
