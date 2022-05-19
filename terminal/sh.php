<?php

$secret_key = "mb249ub258nb3b7365352b93m524b9m5"; 
$domain_url = "https://evan.systems";
$usessub = "false";
$subdomain = "sub";
$ssl = "true";
$lengthofstring = 5;
$currentDate = date("d.m.y");
$currentDatelong = date("Dd.M.Y-h:iA");
$sharexdir = "uploaded/";
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
function RandomString($length) {
    $keys = array_merge(range(0,9), range('a', 'z'));

    $key = '';
    for($i=0; $i < $length; $i++) {
        $key .= $keys[mt_rand(0, count($keys) - 1)];
    }
    return $key;
};

if(isset($_POST['secret']))
{
    if($_POST['secret'] == $secret_key)
    {
        $rs = RandomString($lengthofstring);
        $filename = $currentDate.'-'.$rs;
        $target_file = $_FILES["sharex"]["name"];
        $FileType = pathinfo($target_file, PATHINFO_EXTENSION);
        if ($FileType == 'mp4'){
            $IsVideo = 't';
        } else {
            $IsVideo ='f';
        };
        if($FileType == "png" || $FileType == "gif" || $FileType = "mp4") {
            if (move_uploaded_file($_FILES["sharex"]["tmp_name"], $sharexdir.$filename.'.'.$FileType))
        {
            echo $domain_url.'up2.php.jpg?p=f&r='.$filename.'.'.$FileType.'&v='.$IsVideo.'&d='.$currentDatelong;

        } 
            else
        {
           echo 'wtf?????????????????????';
        }
    }
    else
    {
        echo 'wow you nearly uploaded gay shit on here! congrats man! youre so cool!';
    }
}
else
{
    echo 'you didnt send shit lol do you think this is xmlrpc.php exploit or what retard';
};
        } else {
            echo 'Error 420: LOL you fucking failed to webshell';
        };
?>