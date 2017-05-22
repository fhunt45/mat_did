<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Materiales didacticos</title>
</head>
<body>
	<link rel="stylesheet" href="/mat_did/web/css/main.css">
	<?php
		if($this->ion_auth->logged_in()) {
	?>
	<div class="row">
		<div class="columns small-12">
			<a href="<?php echo site_url('auth/logout');?>">Log out</a>
		</div>
	</div>
	<?php } ?>