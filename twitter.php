
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
// $getfield = '?q=%23sexualassaultawareness';
$getfield = '?q=#saam+OR+#30daysofsaam+OR+#sexualassaultawareness';
$requestMethod = 'GET';
$twitter = new TwitterAPIExchange($settings);
// echo $twitter->setGetfield($getfield)
//              ->buildOauth($url, $requestMethod)
//              ->performRequest();


$tweetData = json_decode($twitter->setGetfield($getfield)
              ->buildOauth($url, $requestMethod)
              ->performRequest(), $assoc = TRUE);


foreach($tweetData['statuses'] as $items){
  $entitiesArray = $items['entities'];
  echo "<div class='tweets'>Tweet: " . $items['text'] . "</div>";
  echo "Where: " . $items['location'] . "<br>";
  echo "When: " . $items['created_at'] . "<br>";

  if (isset($entitiesArray['media'])) {
    $mediaArray = $entitiesArray['media'];
    $tweetMedia = $mediaArray[0];
    echo "<a target='_blank' href='" . $tweetMedia['expanded_url'] . "'><img target='_blank' src='" . $tweetMedia ['media_url'] . "'></a>";
  }

}

?>
