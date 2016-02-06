'use strict'

$(document).ready(function() {
  // Since '#dashboard' element is measured with vw units
  // and vw units don't account for the width of a scrollbar
  // we'll add an extra class to change '#dashboard's computed
  // size if a scrollbar is detected.
  if ($('body').height() > $(window).height()) {
    $('#dashboard').addClass('scrollbar');
  }

  // Create an array of <options>, seeded by a placeholder value.
  var html = ['<option value="" disabled selected hidden>Choose skill...</option>'];
  for (var key in Skills) {
    html.push('<option value="' + Skills[key].name + '">' + Skills[key].name + '</option>');
  }

  // Create an array of each <select>'s ID that will receive the
  // 'html' variable we've built for our <options>.
  var skillIDs = ["skills1", "skills3-1", "skills3-2", "skills4-1", "skills4-2", "skills4-3"]

  // Adds the 'html' array of <options> to each <select> element.
  for (var i = 0; i < skillIDs.length; i++) {
    $('#' + skillIDs[i]).html(html);
  }

}); // end $(document).ready()

// Don't allow duplicate skills to be selected in multiple <select>s.
$('select[name^="skills"]').change(function(){

  // Set everything to enabled to start.
  $('select[name^="skills"] option').attr('disabled', false);

  // Loop each <select> and set the selected value to disabled in all other <select>s.
  $('select[name^="skills"]').each(function(){
    var $this = $(this);
    $('select[name^="skills"]').not($this).find('option').each(function() {
      if ($(this).attr('value') == $this.val()) {
        $(this).attr('disabled', true);
      }
    });
  });

});

// On resizing of a window, we'll check to see if it has a scrollbar
// and apply the necessary class, or remove it if the scrollbar is gone.
$(window).resize(function() {
  if ($('body').height() > $(window).height()) {
    $('#dashboard').addClass('scrollbar');
  } else {
    $('#dashboard').removeClass('scrollbar');
  }
});
