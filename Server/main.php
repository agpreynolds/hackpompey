<?php

// require_once($_SERVER['DOCUMENT_ROOT'] . '/Server/lib/twitter/TwitterAPIExchange.php');

// $settings = array(
//     'oauth_access_token' => "2418090486-rGuOaIrSzyzL5WglfiPCv9bg0uxXszQL2n3xfNX",
//     'oauth_access_token_secret' => "XKv8N7pY25lNZZ9v3oaaXazWb5e3ClOrfF1bsiZEPm72J",
//     'consumer_key' => "kmRqJMOVKnUp0EVRFXIhNFnBT",
//     'consumer_secret' => "fFMvXFyxsr0VKReoJJiwIpA4kg0sTxJpL2IdGziO3jgvd0CIFK"
// );

// $url = "https://api.twitter.com/1.1/search/tweets.json";
// $getField = '?q=ukip';//&geocode=54.523610,-1.559458,2000mi';
// $requestMethod = 'GET';

// $twitter = new TwitterAPIExchange($settings);
// echo $jsonResults = $twitter->setGetField($getField)->buildOauth($url,$requestMethod)->performRequest();

require_once($_SERVER['DOCUMENT_ROOT'] . '/Server/lib/reddit/reddit.php');

$reddit = new reddit();

