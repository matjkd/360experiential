<!--Main content page for access360 site-->



<?php foreach ($content as $row): ?>
<div class="container" style="width:860px;  padding:0 50px;">
        <h2><?= $row->title ?></h2>
</div>
    <?php
    $is_logged_in = $this->session->userdata('is_logged_in');
    if (!isset($is_logged_in) || $is_logged_in == true) {
        echo "<a href='" . base_url() . "admin/edit/" . $row->content_id . "'>edit this page</a><br/>";
    }
    ?>

    <?php
    if (isset($age)) {
        $body = str_replace("[age]", "$age", "$row->content");
    } else {
        $body = $row->content;
    }
    ?>



        <div class="container" style="width:860px; background:#fff; padding:50px">
        
        
		<?php if (isset($slideshow) && $slideshow != NULL) { ?>
		<div class="container">
			<?= $this->load->view('slideshow/' . $slideshow) ?>
		</div>
		<?php } ?>
        
        
        
            <div id="column1">
    <?= $body ?>
            </div>
            
               <div id="column2">
    <?= $body ?>
            </div>
        
<?php endforeach; ?>


<?php foreach ($content as $row): ?>
    <?php if ($row->extra != NULL) { ?>
        <?= $this->load->view($row->extra) ?>
    <?php } ?>
</div>
<?php endforeach; ?>
    <div style="clear:both;"></div>