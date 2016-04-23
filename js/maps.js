var map;
function initMap() {
  var myLatLng1 = {lat: 35.601196, lng: -82.553858};
  var myLatLng2 = {lat: 35.748264, lng: -81.683067};
  var myLatLng3 = {lat: 36.199305, lng: -81.653333};
  var myLatLng4 = {lat: 35.089433, lng: -84.035948};
  var myLatLng5 = {lat: 35.291092, lng: -81.545069};
  var myLatLng6 = {lat: 35.223901, lng: -80.836298};
  var myLatLng7 = {lat: 36.100741, lng: -79.418116};
  var myLatLng8 = {lat: 35.930203, lng: -79.032608};
  var myLatLng9 = {lat: 35.993652, lng: -78.894270};
  var myLatLng10 = {lat: 35.866550, lng: -78.623306};
  var myLatLng11 = {lat: 35.796904, lng: -78.659700};
  var myLatLng12 = {lat: 34.976071, lng: -79.223635};
  var myLatLng13 = {lat: 34.193156, lng: -77.932290};
  var myLatLng14 = {lat: 35.316242, lng: -82.469461};

map = new google.maps.Map(document.getElementById('map'), {
  center:new google.maps.LatLng(37, -86),
  // center: {lat: 35.930203, lng: -79.032608},
  zoom: 7,
  mapTypeId: google.maps.MapTypeId.ROADMAP
  });

var marker = new google.maps.Marker({
  position: myLatLng1,
  map: map,
  title: 'The Voice',
  icon: 'images/pin.png'
  });
//   marker.addListener('click', function() {
//   infowindow.open(map, marker);
// });

var marker2 = new google.maps.Marker({
  position: myLatLng2,
  map: map,
  title: 'Options Victims Assistance',
  icon: 'images/pin.png'
  });
//   marker2.addListener('click', function() {
//   infowindow2.open(map, marker2);
// });
//
var marker3 = new google.maps.Marker({
  position: myLatLng3,
  map: map,
  title: 'Oasis Inc',
  icon: 'images/pin.png'
  });
//   marker3.addListener('click', function() {
//   infowindow3.open(map, marker3);
// });

var marker4 = new google.maps.Marker({
  position: myLatLng4,
  map: map,
  title: 'Womens Resource Center',
  icon: 'images/pin.png'
  });
//   marker4.addListener('click', function() {
//   infowindow3.open(map, marker4);
// });

var marker5 = new google.maps.Marker({
  position: myLatLng5,
  map: map,
  title: 'Clevelend County Abuse Prevention Council',
  icon: 'images/pin.png'
  });
//   marker5.addListener('click', function() {
//   infowindow3.open(map, marker5);
// });

var marker6 = new google.maps.Marker({
  position: myLatLng6,
  map: map,
  title: 'United Family Services: Rape Crisis Hotline',
  icon: 'images/pin.png'
  });
//   marker6.addListener('click', function() {
//   infowindow3.open(map, marker6);
// });

var marker7 = new google.maps.Marker({
  position: myLatLng7,
  map: map,
  title: 'Crossroads Sexual Assault Response and Resource Center',
  icon: 'images/pin.png'
  });
//   marker7.addListener('click', function() {
//   infowindow3.open(map, marker7);
// });

var marker8 = new google.maps.Marker({
  position: myLatLng8,
  map: map,
  title: 'Orange County Rape Crisis Center',
  icon: 'images/pin.png'
  });

var marker9 = new google.maps.Marker({
  position: myLatLng9,
  map: map,
  title: 'Durham Crisis Response Center',
  icon: 'images/pin.png'
  });

var marker10 = new google.maps.Marker({
  position: myLatLng10,
  map: map,
  title: 'NC Coalition Against Sexual Assault',
  icon: 'images/pin.png'
  });

var marker11 = new google.maps.Marker({
  position: myLatLng11,
  map: map,
  title: 'InterAct',
  icon: 'images/pin.png'
  });

var marker12 = new google.maps.Marker({
  position: myLatLng12,
  map: map,
  title: 'Hoke County Domestic Violence and Sexual Assault',
  icon: 'images/pin.png'
  });

var marker13 = new google.maps.Marker({
  position: myLatLng13,
  map: map,
  title: 'Rape Crisis Center of Coastal Horizons Center',
  icon: 'images/pin.png'
  });

var marker14 = new google.maps.Marker({
  position: myLatLng14,
  map: map,
  title: 'The Healing Place',
  icon: 'images/pin.png'
  });

// creates div event
  // google.maps.event.addListener(marker, 'click', function (marker, i) {
  //   if ($('#div1').css('display') == 'block') {
  //     $('#div1').css('display', 'none');
  //   } else {
  //     $('#div1').css('display', 'block');
  //     $('#div2').hide();
  //     $('#div3').hide();
  //     $('#div4').hide();
  //     $('#div5').hide();
  //     $('#div6').hide();
  //     $('#div7').hide();
  //     $('#div0').hide();
  //   }
  // });
  //
  // google.maps.event.addListener(marker2, 'click', function (marker2, i) {
  //   if ($('#div2').css('display') == 'block') {
  //     $('#div2').css('display', 'none');
  //   } else {
  //     $('#div2').css('display', 'block');
  //     $('#div1').hide();
  //     // $('#div3').hide();
  //     $('#div4').hide();
  //     $('#div5').hide();
  //     $('#div6').hide();
  //     $('#div7').hide();
  //     $('#div0').hide();
  //   }
  // });
  //
  // google.maps.event.addListener(marker3, 'click', function (marker3, i) {
  //   if ($('#div3').css('display') == 'block') {
  //     $('#div3').css('display', 'none');
  //   } else {
  //     $('#div3').css('display', 'block');
  //     $('#div1').hide();
  //     $('#div2').hide();
  //     $('#div4').hide();
  //     $('#div5').hide();
  //     $('#div6').hide();
  //     $('#div7').hide();
  //     $('#div0').hide();
  //   }
  // });
  //
  // google.maps.event.addListener(marker4, 'click', function (marker4, i) {
  //   if ($('#div4').css('display') == 'block') {
  //     $('#div4').css('display', 'none');
  //   } else {
  //     $('#div4').css('display', 'block');
  //     $('#div1').hide();
  //     $('#div2').hide();
  //     // $('#div3').hide();
  //     $('#div5').hide();
  //     $('#div6').hide();
  //     $('#div7').hide();
  //     $('#div0').hide();
  //   }
  // });
  //
  // google.maps.event.addListener(marker5, 'click', function (marker5, i) {
  //   if ($('#div5').css('display') == 'block') {
  //     $('#div5').css('display', 'none');
  //   } else {
  //     $('#div5').css('display', 'block');
  //     $('#div1').hide();
  //     $('#div2').hide();
  //     // $('#div3').hide();
  //     $('#div4').hide();
  //     $('#div6').hide();
  //     $('#div7').hide();
  //     $('#div0').hide();
  //   }
  // });
  //
  // google.maps.event.addListener(marker6, 'click', function (marker6, i) {
  //   if ($('#div6').css('display') == 'block') {
  //     $('#div6').css('display', 'none');
  //   } else {
  //     $('#div6').css('display', 'block');
  //     $('#div1').hide();
  //     $('#div2').hide();
  //     // $('#div3').hide();
  //     $('#div4').hide();
  //     $('#div5').hide();
  //     $('#div7').hide();
  //     $('#div0').hide();
  //   }
  // });
  //
  // google.maps.event.addListener(marker7, 'click', function (marker7, i) {
  //   if ($('#div7').css('display') == 'block') {
  //     $('#div7').css('display', 'none');
  //   } else {
  //     $('#div7').css('display', 'block');
  //     $('#div1').hide();
  //     $('#div2').hide();
  //     // $('#div3').hide();
  //     $('#div4').hide();
  //     $('#div5').hide();
  //     $('#div6').hide();
  //     $('#div0').hide();
  //   }
  // });

  var styles = [
    {
      stylers: [
        { hue: "#99D1D6" },
        { saturation: -20 }
      ]
    },{
      featureType: "road",
      elementType: "geometry",
      stylers: [
        { lightness: 100 },
        { visibility: "simplified" }
      ]
    },{
      featureType: "water",
      elementType: "geometry",
      stylers: [
        { color: "#e9e9e9"},
        {lightness: 17}
      ]
    },{
      featureType: "road",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    }
  ];

  map.setOptions({styles: styles});


}
