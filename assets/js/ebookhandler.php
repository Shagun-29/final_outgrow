<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.mailerlite.com/api/v2/groups/".$_POST['group_id']."/subscribers",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => "{ \"email\": \"".$_POST['email']."\"}",
  CURLOPT_HTTPHEADER => array(
    "content-type: application/json",
    "x-mailerlite-apikey: 07c23594acf5764492d5ecae362ff0af"
  ),
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo $err;
} else {
  echo $response;
}
