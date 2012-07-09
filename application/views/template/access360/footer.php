<!-- JS
        ================================================== -->
<script src="http://code.jquery.com/jquery-1.7.1.min.js"></script>



<!-- <script src="http://maps.google.com/maps?file=api&amp;v=2&amp;sensor=true&amp;key=<?= $maps_api ?>" type="text/javascript"></script>-->

<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=true"></script> 



<!-- scripts concatenated and minified via ant build script-->

<script src="<?= base_url() ?>js/wymeditor/jquery.wymeditor.min.js"></script>
<script src="<?= base_url() ?>js/jquery.easyAccordion.js"></script>
<script src="<?= base_url() ?>js/plugins.js"></script>

<script src="<?= base_url() ?>js/script.js"></script>

<script>
/*************************************************
    /*    handle carousel
  /***********************************************/
$(document).ready(function(){
						   
    // This initialises carousels on the container elements specified, in this case, accordion1.
	 $('#accordion-1').easyAccordion({ 
         autoStart: true, 
         slideInterval: 3000
 });
	 $('#accordion-1').fadeIn('slow');
});

</script>

<!-- end concatenated and minified scripts-->


<!--[if lt IE 7 ]>
  <script src="<?= base_url() ?>js/libs/dd_belatedpng.js"></script>
  <script> DD_belatedPNG.fix('img, .png_bg'); //fix any <img> or .png_bg background-images </script>
<![endif]-->
