<?php
// evan.systems
$domain = "evan.systems";
$usessub = "false";
$subdomain = "sub";
$ssl = "true"; // 
$videoposterurl = "";
$username = "evan";
if($usessub == "true") {
  $fulldomain = $subdomain.'.'.$domain;
} else {
  $fulldomain = $domain;
};
if($ssl == "true") {
  $https = "s";
} else if($ssl == "false") {
  $https = "";
} else {
  $https = "";
};
$cwdir = getcwd();
$folderPath = $cwdir.'/i/';
$file = glob($folderPath . '*');
$countFile = 0;
if ($file != false)
{
    $countFile = count($file);
}
$f = $cwdir.'/i';
  $io = popen ( '/usr/bin/du -sk ' . $f, 'r' );
  $size = fgets ( $io, 4096);
  $size = substr ( $size, 0, strpos ( $size, "\t" ) );
  pclose ( $io );
  $IsPassworded = $_GET["p"];
  $currentDatelong = $_GET["d"];
  $RawUrl = "http".$https."://".$fulldomain."/i/".$_GET["r"];
  $IsVideo = $_GET["v"];
  $Title = "evan.systems";
  $maincode = "<html><head><meta property='og:site_name' content=''.$size.' of space wasted. || evan' /><meta name='theme-color' content='#b070ff'><meta name='twitter:card' content='summary_large_image'><meta name='theme-color' content='#b070ff'>
  <meta name='twitter:title' content='".$Title."'>
  <meta name='twitter:site' content='@'>
  <meta name='twitter:image' content='".$RawUrl."'><meta name='viewport' content='width=device-width'>
  <meta name='twitter:image:alt' content='Image'><title>".$Title."</title><link href='".$RawUrl."' rel='shortcut icon' type='image/x-icon' /></head><body><div class='imgcontainer'><a href=".$RawUrl."><img src='".$RawUrl."' alt='Error'></a></div></body></html>";
      $thousand = '1000';
    $sizemb = $size / $thousand;
    $rsmb = number_format((float)$sizemb, 2, '.', '');
    $sizegb = $sizemb / $thousand;
    $rsgb = number_format((float)$sizegb, 2, '.', '');
  echo 'evan.systems, swaggery at its finest';

  function openfile($file) {
    $myfile = fopen($file, "r") or die("Unable to open file: ".$file);
    $filecontents = fread($myfile,filesize($file));
    fclose($myfile);
    return $filecontents;
  };
  if ($IsVideo == 't') {
      $maincode = "<html><head><meta property='og:site_name' content='".$rsmb."MB of space wasted || evan' /><meta name='theme-color' content='#b070ff'><link rel='stylesheet' href='https://givinghawk.xyz/themes/dark.css'><meta name='twitter:card' content='player'>
<meta name='twitter:title' content='".$Title."'>
<meta name='twitter:site' content='@'>
<meta name='twitter:player' content='".$RawUrl."'>
<meta name='twitter:description' content='Uploaded by ".$username." on ".$currentDatelong."'>
<meta name='twitter:player:height' content='512'>
<meta name='twitter:player:width' content='512'>
<meta name='twitter:image' content='".$videoposterurl."'><meta name='theme-color' content='#b070ff'><meta name='viewport' content='width=device-width'>
  <meta name='twitter:image:alt' content='Image'><title>".$Title."</title><link href='".$RawUrl."' rel='shortcut icon' type='image/x-icon' /></head><body><div class='imgcontainer'><a href=".$RawUrl."><video controls height='220' width='390'>
  <source src='".$RawUrl."' type='video/mp4'>
</audio></a></div></body></html>";
  } else {
      $maincode = "<html><head><meta property='og:site_name' content='".$rsmb."MB of space wasted || evan' /><meta name='theme-color' content='#b070ff'><link rel='stylesheet' href='https://givinghawk.xyz/themes/dark.css'><meta name='twitter:card' content='summary_large_image'><meta name='theme-color' content='#b070ff'>
  <meta name='twitter:title' content='".$Title."'>
  <meta name='twitter:site' content='@'>
  <meta name='twitter:description' content='Uploaded by ".$username." on ".$currentDatelong."'>
  <meta name='twitter:image' content='".$RawUrl."'><meta name='viewport' content='width=device-width'>
  <meta name='twitter:image:alt' content='Image'><title>".$Title."</title><link href='".$RawUrl."' rel='shortcut icon' type='image/x-icon' /></head><body><div class='imgcontainer'><a href=".$RawUrl."><img src='".$RawUrl."' alt='Error'></a></div></body></html>";
  }
  if (isset($IsPassworded) && isset($RawUrl) && isset($Title) && isset($UploadDate) && isset($StyleFile)) {
    if ($IsPassworded == 'f') {
          echo ".$maincode.";
    } else if ($IsPassworded == 'true') {
      echo "this file is secret, gtfo";
    } else {
      echo "um what";
    };
  }
    if ($IsPassworded = 'what') {
      echo ".$maincode.";
    } else {
    echo "you tried to feed this thing weird shit, this isnt an OWASP sandbox get out";
  };
?>