//Instagram API
function getData(urlvar) {
    $.ajax({
        type: "GET",
        dataType: "json",
        url: urlvar,

        success: parseData
    })
}
function parseData(json){
  var html = "";
			console.log(json);

			$.each(json.data,function(i,data){
                html += '<div class="insta-div">';
                html += '<div class="user">';
                html += '<a href="https://www.instagram.com/' + data.caption.from.username + '">' + '<img class="profile-pic" src="' + data.caption.from.profile_picture + '">';
                html += '<p class="username">' + data.caption.from.username + '</p></a>';
                html += '</div>';
                html += '<div class="pic-caption">';
                html += '<a href="' + data.link + '">';
                html += '<img class="insta-pic" src ="' + data.images.low_resolution.url + '">' + '</a>';
                html += '<div class="insta-caption">';

                if (data.caption.text.length > 100){
                  theCaption = data.caption.text.substring(0,100) + '<a href="https://www.instagram.com/' + data.caption.from.username +'">' + ' Read More...' + '</a>';
                }else{
                  theCaption = data.caption.text;
                }

                html += theCaption +'</div>';
                html += '</div></div>';
			});

			console.log(html);
			$("#insta").append(html);


    }
var urlvar = "https://api.instagram.com/v1/tags/saam/media/recent?access_token=248660894.aee21ef.0cb44e17e81547ef994d0de5ff989bbc&callback=?";
getData(urlvar);

//instagram "slideshow"
var i = 0;
var j = 0;
var mq = window.matchMedia( "(max-width: 320px)");
var mr = window.matchMedia( "(min-width:321px) and (max-width: 375px)" );
var ms = window.matchMedia( "(min-width:376px) and (max-width: 414px)" );

$("#insta-button").click(function(event){
  if (mq.matches) {
    i = 290 + i;
  }

  // else if (mr.matches) {
  //   i = 275 + i;
  // }

  else if (ms.matches) {
    i = 382 + i;
  }

  else {
    i = 345 + i;
  }
    //Limit display to 15 pictures
    if (i > 5175) {
    i = 5175;
   }

    $("#insta").scrollLeft(i);
  });

$("#insta-back-button").click(function(event){
  if (mq.matches) {
    i = i - 290;
  }

  else if (ms.matches) {
    i = i - 382;
  }

  else{
   i = i - 345;
  }
  //prevent button from glitching when user hits previous on first "slide"
  if (i <= 0) {
    i = 0;
  }
  $("#insta").scrollLeft(i);
})

// // JavaScript Document
//
//
// //Use this url below to get your access token
// //https://instagram.com/oauth/authorize/?display=touch&client_id=CLIENT_ID_HERE&redirect_uri=REDIRECT_URI_HERE&response_type=token
//
// //if you need a user id for yourself or someone else use:
// //http://jelled.com/instagram/lookup-user-id
//
//
// $(function() {
//
// 	var apiurl = "https://api.instagram.com/v1/tags/saam/media/recent?access_token=248660894.aee21ef.0cb44e17e81547ef994d0de5ff989bbc&callback=?"
// 	var access_token = location.hash.split('=')[1];
// 	var html = ""
//
// 		$.ajax({
// 			type: "GET",
// 			dataType: "json",
// 			cache: false,
// 			url: apiurl,
// 			success: parseData
// 		});
//
//
// 		function parseData(json){
// 			console.log(json);
//
// 			$.each(json.data,function(i,data){
// 				// html += '<img src ="' + data.images.low_resolution.url + '">';
// 				// html += '<a href="' + data.link + '" target="blank"><img src ="' + data.images.low_resolution.url + '" style="height: 100%"></a>';
// 				// html += '<div class="flickrinfo"><h3>User: '+ data.caption.from.username +'</h3>';
// 				// html += data.caption.text +'</div>';
// 				html += '<div class="post-container instagram-div">' + '<a href="http://instagram.com/' + data.user.username + '">';
// 				html += '<div><img class="instagram-propic" src="' + data.user.profile_picture + '"></a>';
// 				html += '<p class="instagram-name">' + data.user.username + '</p></div></a>';
// 				html += '<img class="instagram-img" src ="' + data.images.low_resolution.url + '">';
// 				html += '<p class="instagram-caption">' + data.caption.text + '</p>';
// 				html += '<p class="instagram-date gray">' + new Date(data.created_time * 1000) + '</p></div><br>';
// 			});
//
// 			console.log(html);
// 			$("#results").append(html);
//
// 		}
//
//
//
//  });
