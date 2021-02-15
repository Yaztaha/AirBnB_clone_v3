const $ = window.$;
$(document).ready(() => {
  let amenityDict = {};
  $('input:checkbox').change(() => {
    let amenityString = '';
    if ($(this).is(':checked')) {
      $('li > input:checkbox:checked').map(function () {
        amenityDict[$(this).attr('data-id')] = ' ' + $(this).attr('data-name');
      }).get();
      Object.values(amenityDict).forEach((amenity) => {
        amenityString += amenity;
        amenityString += ' ';
      });
      $('div.amenities > h4').text(amenityString);
    } else {
      amenityDict = {};
      $('li > input:checkbox:checked').map(function () {
        amenityDict[$(this).attr('data-id')] = $(this).attr('data-name');
      }).get();
      Object.values(amenityDict).forEach((amenity, i) => {
        amenityString += amenity;
        if (i !== Object.values(amenityDict).length - 1) {
          amenityString += ', ';
        }
      });
      $('div.amenities > h4').text(amenityString);
    }
  });
});
