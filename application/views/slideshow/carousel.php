
<div id = "carousel1" style="width:960px; height:480px;background:url('<?=base_url()?>images/backgrounds/folio.jpg'); overflow:scroll;">            
    <!-- All images with class of "cloudcarousel" will be turned into carousel items -->
    <!-- You can place links around these images -->
    <a target="_blank" href=""><img class = "cloudcarousel" src="<?= base_url() ?>images/slides/portfolio/image1.jpg" alt="Flag 1 Description" title="Flag 1 Title" /></a>
    <img class = "cloudcarousel" src="<?= base_url() ?>images/slides/portfolio/image1.jpg" alt="Flag 2 Description" title="Flag 2 Title" />
    <img class = "cloudcarousel" src="<?= base_url() ?>images/slides/portfolio/image1.jpg" alt="Flag 3 Description" title="Flag 3 Title" />
    <img class = "cloudcarousel" src="<?= base_url() ?>images/slides/portfolio/image1.jpg" alt="Flag 4 Description" title="Flag 4 Title" />
   <img class = "cloudcarousel" src="<?= base_url() ?>images/slides/portfolio/image1.jpg" alt="Flag 4 Description" title="Flag 4 Title" />
    <img class = "cloudcarousel" src="<?= base_url() ?>images/slides/portfolio/image1.jpg" alt="Flag 4 Description" title="Flag 4 Title" />
</div>

<!-- Define left and right buttons. -->

<div id="but1" class="carouselLeft" style="position: absolute; top: 150px; left: 0px; display: inline; z-index:5000;"></div>
<div id="but2" class="carouselRight" style="position: absolute; top: 150px; right: 0px; display: inline;z-index:5000; "></div>

<!-- Define elements to accept the alt and title text from the images. -->
<div style="position:absolute; top:150px; width:960px; text-align: center;">
<h4 style=" " id="title-text"></h4>
</div>

<p style="text-align: center;" id="alt-text" ></p>
