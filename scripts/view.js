'use strict'

$(document).ready(function() {
  // Since '#dashboard' element is measured with vw units
  // and vw units don't account for the width of a scrollbar
  // we'll add an extra class to change '#dashboard's computed
  // size if a scrollbar is detected
  if ($('body').height() > $(window).height()) {
    $('#dashboard').addClass('scrollbar');
  }

  // Create an array of <options>, seeded by a placeholder value
  var html = ['<option value="" disabled selected hidden>Choose skill...</option>'];
  for (let key in Skills) {
    // Add skill name to name and value fields, add description to title for tooltips
    html.push('<option value="' + Skills[key].name + '" title="' + Skills[key].desc + '">' + Skills[key].name + '</option>');
  }

  // Create an array of each <select>'s ID that will receive the
  // 'html' variable we've built for our <options>
  var skillIDs = ["skills1", "skills3-1", "skills3-2", "skills4-1", "skills4-2", "skills4-3"]

  // Adds the 'html' array of <options> to each <select> element
  for (let i = 0; i < skillIDs.length; i++) {
    $('#' + skillIDs[i]).html(html);
  }

}); // end $(document).ready()

// Don't allow duplicate skills to be selected in multiple <select>s
$('select[name^="skills"]').change(function(){

  // Set everything to enabled to start
  $('select[name^="skills"] option').attr('disabled', false);

  // Loop each <select> and set the selected value to disabled in all other <select>s
  $('select[name^="skills"]').each(function(){
    // Set $self to the current iterated <select>
    let $self = $(this);
    $('select[name^="skills"]').not($self).find('option').each(function() {
      if ($(this).attr('value') == $self.val()) {
        $(this).attr('disabled', true);
      }
    });
  });
  // Set $self to changed <select>
  let $self = $(this);
  // Set $selfSelected to currrent selected <option>
  let $selfSelected = $('#' + $self.attr('id') + ' option:selected');
  // Create html string for the name of the currently selected skill
  let selfName = '<strong>' + $selfSelected.val() + ' - </strong>';
  // Set string variable for description of skill
  let selfDescription = $selfSelected.attr('title');
  // Fill matching description <div> with skill name and description
  $('#' + $self.attr('id') + '-description').html(selfName + selfDescription);
});

// On resizing of the window, we'll check to see if it has a scrollbar
// and apply the necessary class, or remove it if the scrollbar is gone
$(window).resize(function() {
  if ($('body').height() > $(window).height()) {
    $('#dashboard').addClass('scrollbar');
  } else {
    $('#dashboard').removeClass('scrollbar');
  }
});
