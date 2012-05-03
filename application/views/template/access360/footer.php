<!-- JS
        ================================================== -->
<script src="http://code.jquery.com/jquery-1.7.1.min.js"></script>



<!-- <script src="http://maps.google.com/maps?file=api&amp;v=2&amp;sensor=true&amp;key=<?= $maps_api ?>" type="text/javascript"></script>-->

<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=true"></script> 



<!-- scripts concatenated and minified via ant build script-->

<script src="<?= base_url() ?>js/wymeditor/jquery.wymeditor.min.js"></script>
<script src="<?= base_url() ?>js/cloud-carousel.1.0.5.min.js"></script>
<script src="<?= base_url() ?>js/plugins.js"></script>

<script src="<?= base_url() ?>js/script.js"></script>

<script>
/*************************************************
    /*    handle carousel
  /***********************************************/
$(document).ready(function(){
						   
    // This initialises carousels on the container elements specified, in this case, carousel1.
    $("#carousel1").CloudCarousel(		
    {			
        xPos: 480,
        yPos: 80,
        buttonLeft: $("#but1"),
        buttonRight: $("#but2"),
        yRadius:140,
        altBox: $("#alt-text"),
        titleBox: $("#title-text"),
        autoRotate: 'no',
        autoRotateDelay: 3000,
        speed:0.1,
        bringToFront: true,
        reflHeight:50
    }
    );
});

</script>

<!-- end concatenated and minified scripts-->


<!--[if lt IE 7 ]>
  <script src="<?= base_url() ?>js/libs/dd_belatedpng.js"></script>
  <script> DD_belatedPNG.fix('img, .png_bg'); //fix any <img> or .png_bg background-images </script>
<![endif]-->
