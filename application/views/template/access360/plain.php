
<!DOCTYPE html>
<html>
<head>
<?= $this->load->view('template/' . $this->config_theme . '/header') ?>

</head>
<body style="margin: 0; padding: 0;">

	<div style="width: 960px; margin:0 auto; position: relative;">
		<!--   hidden input to pass base url to js files-->
		<input type="hidden" id="baseurl" value="<?= base_url() ?>" />

		<div class="container" id="header">
			<?= $this->load->view('global/' . $this->config_theme . '/header') ?>
		</div>

		<?= $this->load->view('global/' . $this->config_theme . '/content') ?>


		<?php if (isset($slideshow) && $slideshow != NULL) { ?>
		<div class="container">
			<?= $this->load->view('slideshow/' . $slideshow) ?>
		</div>
		<?php } ?>









		<div class="container">
			<div>
				<?= $this->load->view('template/access360/footermenu-plain') ?>
			</div>
		</div>








		<div id="footer"></div>
	</div>

	<?= $this->load->view('template/' . $this->config_theme . '/footer') ?>
</body>
</html>
