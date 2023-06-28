<?php
if($_POST) {
	require_once 'phpmailler/class.phpmailer.php';
	$phpmail = new PHPMailer();
	$host = "server.pubox.com.tr";
	$user = "hello@pubox.com.tr";
	$pass = "Diji-1903s";
	$port = 587;
	$url = $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
	$phpmail->IsSMTP(true);
	$phpmail->Host = $host;
	$phpmail->SMTPAuth= true;
	$phpmail->Username=$user;
	$phpmail->Password=$pass;
	$phpmail->Port = $port;
	$phpmail->CharSet  = 'UTF-8';
	$phpmail->SMTPSecure = false;
	$phpmail->SetFrom($user, 'Servis Merkezi');
	$phpmail->AddAddress('aliyardimci1982@gmail.com');
	$phpmail->isHTML(true);
	$phpmail->Subject = $_POST['adsoyad'].' kişisi servis formu doldurdu.';
	$html = '<b>Ad Soyad:</b> '.$_POST['adsoyad'].'<br /><b>Telefon:</b> '.$_POST['telefon'].'<br /><b>Şikayet:</b> '.$_POST['sikayet'].'<br /><b>Garanti Durumu:</b> '.$_POST['garanti'].'<br /><b>Adres:</b> '.$_POST['adres'].'<br /><b>Kaynak:</b> '.$url;
	$phpmail->MsgHTML = ("{$html}");
	$phpmail->Body = ("{$html}");
	if(!$phpmail->Send()) {
		$phpmail->clearAddresses();
		$output	=	["t"=>"Hata","m"=>"Formunuz gönderilirken hata oluştu.","s"=>"warning"];
		echo json_encode($output);
	} else {
		$phpmail->clearAddresses();
		$output	=	["t"=>"Mükemmel","m"=>"Formunuz başarıyla gönderildi.","s"=>"success"];
		echo json_encode($output);
	} 
}