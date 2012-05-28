
<?php foreach($case as $row):?>

<?=form_open_multipart("admin/edit_case_study")?>
Title:
<?=form_input('title', $row->case_title)?>
<br />



<p class="PDF">

	<?= form_label('pdf') ?>
	<br />
	<?=$row->pdf_link?>
	<br />
	<?= form_upload('pdf') ?>
</p>

<p class="Image">
	<?= form_label('Image') ?>
	<br />
	<?=$row->image_side?>
	<br />
	<?= form_upload('image') ?>
</p>

Content:
<br />
<textarea cols=75 rows=20 name="content" id="content" class='wymeditor'>
	<?=$row->description?>
</textarea>

<br />
<input type="submit" class="wymupdate" />

<?=form_close()?>

<?php endforeach;?>
