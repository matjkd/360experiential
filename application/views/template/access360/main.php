
<!DOCTYPE html>
<html>
<head>
<?= $this->load->view('template/' . $this->config_theme . '/header') ?>

</head>
<body style="margin: 0; padding: 0;">

	<!--   hidden input to pass base url to js files-->
	<input type="hidden" id="baseurl" value="<?= base_url() ?>" />




	<div id="fixedsmoke">

		<div class="container">
			<div id="ideas" class="sixteen columns">
				<div id="Stage" class="smokelinks"></div>

			</div>

		</div>
		
	<?=$this->load->view('template/access360/cloudpopup')?>
	</div>


	<div id="fixedbase">

		<div class="container">

			<?= $this->load->view('template/access360/machine') ?>
		</div>

		<div class="container">

			<div id="footermenu">
				<?= $this->load->view('template/access360/footermenu') ?>

				<div style="position: absolute; right: 0; top: 50px;">
					<img src="<?=base_url()?>images/icons/twitter.png" />

				</div>
			</div>


		</div>

	</div>




	<div id="footer"></div>


	<?= $this->load->view('template/' . $this->config_theme . '/footerEdge') ?>
</body>
</html>
