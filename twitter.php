<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>api twitter php</title>
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/custom.css" rel="stylesheet">
    <link href='https://fonts.googleapis.com/css?family=Roboto+Condensed:700,300,400' rel='stylesheet' type='text/css'>
    <script src="http://code.jquery.com/jquery-latest.min.js"></script>
    <script src="js/tweetLinkIt.js"></script>

    <script>
    $('.twittertext').tweetLinkify();

    function pageComplete(){
            $('.twittertext').tweetLinkify();
            console.log('pagecomplete');
        }

    </script>

</head>

<body>

<?php
ini_set('display_errors', 1);
require_once('TwitterAPIExchange.php');

/** Set access tokens here - see: https://dev.twitter.com/apps/ **/
$settings = array(
    'oauth_access_token' => "1283557813-SBeWInU97iVbY1cnV5fvTFJhhWBVe5Dn5SSH0dG",
    'oauth_access_token_secret' => "pgXWpWqZuvRWKtAciWuHgSkf1QFNu2YnTeTfNBJiVjHk1",
    'consumer_key' => "pff3QGVJotkhH7EPZPisbdw8H",
    'consumer_secret' => "8iZEeMLKVcKpA1887pZMuXmVHIt2cSrDEZ68Rskc1DKItnpbfc"
);

/** URL for REST request, see: https://dev.twitter.com/docs/api/1.1/ **/
// $url = 'https://api.twitter.com/1.1/blocks/create.json';
// $requestMethod = 'POST';
//
// /** POST fields required by the URL above. See relevant docs as above **/
// $postfields = array(
//     'screen_name' => 'usernameToBlock',
//     'skip_status' => '1'
// );

/** Perform a POST request and echo the response **/
// $twitter = new TwitterAPIExchange($settings);
// echo $twitter->buildOauth($url, $requestMethod)
//              ->setPostfields($postfields)
//              ->performRequest();

/** Perform a GET request and echo the response **/
/** Note: Set the GET field BEFORE calling buildOauth(); **/

$url = 'https://api.twitter.com/1.1/search/tweets.json';
$getfield = '?q=#saam+OR+#30daysofsaam+OR+#sexualassaultawareness';
$requestMethod = 'GET';
$twitter = new TwitterAPIExchange($settings);
// echo $twitter->setGetfield($getfield)
//              ->buildOauth($url, $requestMethod)
//              ->performRequest();
$tweetData = json_decode($twitter->setGetfield($getfield)
              ->buildOauth($url, $requestMethod)
              ->performRequest(), $assoc = TRUE);

foreach($tweetData['statuses'] as $tweet){
  $entitiesArray = $tweet['entities'];

  echo "<div class='twitteruserphoto'><a href='http://twitter.com/" . $tweet['user']['screen_name'] . "' target='_blank'><img class='twitter-profilepictures' src='" . $tweet['user']['profile_image_url'] . "'/></a></div>";
  // echo "<div class='twittername'>" . $tweet['user']['name'] . "</div>";
  // echo "<div class='twitteruser'>@" . $tweet['user']['screen_name'] . "</div>";
  // echo "<div class='twittertext'>Tweet:" . $tweet['text'] . "</div>";
  echo "<div class='twitter-info'><span class='twittername'>" . $tweet['user']['name'] . " </span>";
  echo "<span class='twitteruser'>@" . $tweet['user']['screen_name'];
  echo "</span><p class='twittertext'>" . $tweet['text'] . "</p></div></div>";

  if (isset($entitiesArray['media'])) {
    $mediaArray = $entitiesArray['media'];
    $tweetMedia = $mediaArray[0];
    echo "<a target='_blank' href='" . $tweetMedia['expanded_url'] . "'><img class='twitter-pic' target='_blank' src='" . $tweetMedia['media_url'] . "'></a>";
  }

  echo "<div class='twitterline' style='width:100% height:1px'></div>";




  echo "<script>pageComplete();</script>";

}

?>

<!-- javacript -->
<script src="http://code.jquery.com/jquery-latest.min.js"></script>
<script src="js/bootstrap.min.js"></script>

</body>
</html>
