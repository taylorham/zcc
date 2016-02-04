'use strict'

$(document).ready(function() {
  if ($('body').height() > $(window).height()) {
    $('#dashboard').addClass('scrollbar');
  }
  var html = "";
  var obj = Skills;
  for (var key in obj) {
    if (!obj[key].hasOwnProperty('name')) {
      for (var subKey in obj[key]) {
        if (!obj[key][subKey].hasOwnProperty('name')) {
          for (var subSubKey in obj[key][subKey]) {
            let value = obj[key][subKey][subSubKey].name;
            if (value !== undefined) {
              html += "<option value=\"" + value + "\">" + value + "</option>";
            }
          }
        }
        let value = obj[key][subKey].name;
        if (value !== undefined) {
          html += "<option value=\"" + value + "\">" + value + "</option>";
        }
      }
    }
    let value = obj[key].name;
    if (value !== undefined) {
      html += "<option value=\"" + value + "\">" + value + "</option>";
    }
  }

  document.getElementById("skills1").innerHTML = html;
  document.getElementById("skills3-1").innerHTML = html;
  document.getElementById("skills3-2").innerHTML = html;
  document.getElementById("skills4-1").innerHTML = html;
  document.getElementById("skills4-2").innerHTML = html;
  document.getElementById("skills4-3").innerHTML = html;
});

$(window).resize(function() {
  if ($('body').height() > $(window).height()) {
    $('#dashboard').addClass('scrollbar');
  } else {
    $('#dashboard').removeClass('scrollbar');
  }
});
