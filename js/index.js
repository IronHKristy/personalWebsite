jQuery(document).ready(function($) {
    var MQL = 1170;

    //primary navigation slide-in effect
    if ($(window).width() > MQL) {
        var headerHeight = $('.navbar-custom').height();
        $(window).on('scroll', {
                previousTop: 0
            },
            function() {
                var currentTop = $(window).scrollTop();
                //check if user is scrolling up
                if (currentTop < this.previousTop) {
                    //if scrolling up...
                    if (currentTop > 0 && $('.navbar-custom').hasClass('is-fixed')) {
                        $('.navbar-custom').addClass('is-visible');
                    } else {
                        $('.navbar-custom').removeClass('is-visible is-fixed');
                    }
                } else if (currentTop > this.previousTop) {
                    //if scrolling down...
                    $('.navbar-custom').removeClass('is-visible');
                    if (currentTop > headerHeight && !$('.navbar-custom').hasClass('is-fixed')) $('.navbar-custom').addClass('is-fixed');
                }
                this.previousTop = currentTop;
            });
    }
});



// set up text to print, each item in array is new line
var aText = new Array(
"never tell", "me the", "odds"
);
var iSpeed = 80; // time delay of print out
var iIndex = 0; // start printing array at this position
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

// setTimeout(function() { your_func(); }, 5000);

function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");

 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos);
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 100);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}


// typewriter();

setTimeout(typewriter,1000);




// google maps api
function initMap() {
  var Orleans = {lat: 29.952722, lng: -90.071663};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    scrollwheel: false,
    center: Orleans,
    styles: [
  {
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#c7dcd0"
            }
        ]
    }
]
  });
  var marker = new google.maps.Marker({
    position: Orleans,
    map: map
  });
}






// Contact Form Scripts

// $(function() {
//
//     $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
//         preventSubmit: true,
//         submitError: function($form, event, errors) {
//             // additional error messages or events
//         },
//         submitSuccess: function($form, event) {
//             event.preventDefault(); // prevent default submit behaviour
//             // get values from FORM
//             var name = $("input#name").val();
//             var email = $("input#email").val();
//             var phone = $("input#phone").val();
//             var message = $("textarea#message").val();
//             var firstName = name; // For Success/Failure Message
//             // Check for white space in name for Success/Fail message
//             if (firstName.indexOf(' ') >= 0) {
//                 firstName = name.split(' ').slice(0, -1).join(' ');
//             }
//             $.ajax({
//                 url: "././mail/contact_me.php",
//                 type: "POST",
//                 data: {
//                     name: name,
//                     phone: phone,
//                     email: email,
//                     message: message
//                 },
//                 cache: false,
//                 success: function() {
//                     // Success message
//                     $('#success').html("<div class='alert alert-success'>");
//                     $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
//                         .append("</button>");
//                     $('#success > .alert-success')
//                         .append("<strong>Your message has been sent. </strong>");
//                     $('#success > .alert-success')
//                         .append('</div>');
//
//                     //clear all fields
//                     $('#contactForm').trigger("reset");
//                 },
//                 error: function() {
//                     // Fail message
//                     $('#success').html("<div class='alert alert-danger'>");
//                     $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
//                         .append("</button>");
//                     $('#success > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!");
//                     $('#success > .alert-danger').append('</div>');
//                     //clear all fields
//                     $('#contactForm').trigger("reset");
//                 },
//             });
//         },
//         filter: function() {
//             return $(this).is(":visible");
//         },
//     });
//
//     $("a[data-toggle=\"tab\"]").click(function(e) {
//         e.preventDefault();
//         $(this).tab("show");
//     });
// });
//
//
// /*When clicking on Full hide fail/success boxes */
// $('#name').focus(function() {
//     $('#success').html('');
// });
