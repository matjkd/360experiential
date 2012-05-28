




<div id="accordion-1" style="margin-bottom:100px;">
	<dl>
	
	<?php foreach($case_studies as $row):?>
		<dt><?=$row->case_title?></dt>
		<dd>
		<div>
		
		<div style="position:absolute; right:0px; z-index:0;">
		<img height="110px" width="175px" alt="images" />
		<img height="110px" width="175px" alt="images" />
		<img height="110px" width="175px" alt="images" />
		</div>
		
		
		
		<div  style="float:left;">
    <a href="<?=base_url()?>"><img src="<?=base_url()?>images/experientialLogoSmaller.png"/></a>
   </div>
<div style="clear:both;"></div>
			<div id="accordion-heading"><h2><?=$row->case_title?></h2></div>
			<div id="accordion-body"><p>
				<?=$row->description?>
				<br /> <a href="#" class="more">Read more</a>
			</p></div>
			
			<div style="position:absolute; right:0px; top:150px; z-index:0;"><img height="150px" width="180px" alt="cloud image here" /></div>
			</div>
		</dd>
		<?php endforeach;?>
		
		
		
	</dl>
</div>
