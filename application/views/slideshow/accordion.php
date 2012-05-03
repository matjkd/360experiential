
<style type="text/css">


.sample {
	margin: 30px;
	border: 1px solid #92cdec;
	background: #d7e7ff;
	padding: 30px
}



.easy-accordion h2 {
	margin: 0px 0 20px 0;
	padding: 0;
	font-size: 1.6em;
}



/* UNLESS YOU KNOW WHAT YOU'RE DOING, DO NOT CHANGE THE FOLLOWING RULES */
.easy-accordion {
	display: block;
	position: relative;
	overflow: hidden;
	padding: 0;
	margin: 0
}

.easy-accordion dt,.easy-accordion dd {
	margin: 0;
	padding: 0
}

.easy-accordion dt,.easy-accordion dd {
	position: absolute
}

.easy-accordion dt {
	margin-bottom: 0;
	margin-left: 0;
	z-index: 5; /* Safari */
	-webkit-transform: rotate(-90deg); /* Firefox */
	-moz-transform: rotate(-90deg);
	-moz-transform-origin: 20px 0px; /* Internet Explorer */
	filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3 );
	cursor: pointer;
}

.easy-accordion dd {
	z-index: 1;
	opacity: 0;
	overflow: hidden
}

.easy-accordion dd.active {
	opacity: 1;
}

.easy-accordion dd.no-more-active {
	z-index: 2;
	opacity: 1
}

.easy-accordion dd.active {
	z-index: 3
}

.easy-accordion dd.plus {
	z-index: 4
}

.easy-accordion .slide-number {
	position: absolute;
	bottom: 0;
	left: 10px;
	font-weight: normal;
	font-size: 1.1em; /* Safari */
	-webkit-transform: rotate(90deg); /* Firefox */
	-moz-transform: rotate(90deg); /* Internet Explorer */
	filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1 );
}

/* FEEL FREE TO CUSTOMIZE THE FOLLOWING RULES */
dd p {
	line-height: 120%
}

#accordion-1 {
	width: 800px;
	height: 295px;
	padding: 30px;
	background: #fff;
	border: 1px solid #b5c9e8
}

#accordion-1 dl {
	width: 800px;
	height: 295px
}

#accordion-1 dt {
	height: 46px;
	line-height: 44px;
	text-align: right;
	padding: 0 15px 0 0;
	font-size: 1.1em;
	font-weight: bold;
	font-family: Tahoma, Geneva, sans-serif;
	text-transform: uppercase;
	letter-spacing: 1px;
	background: #fff 0 0 no-repeat;
	color: #26526c
}

#accordion-1 dt.active {
	cursor: pointer;
	color: #fff;
	background: #555  0 0 no-repeat
}

#accordion-1 dt.hover {
	color: #68889b;
}

#accordion-1 dt.active.hover {
	color: #fff
}

#accordion-1 dd {
	padding: 25px;
	background: #ddd url(images/slide.jpg) bottom left repeat-x;
	border: 1px solid #dbe9ea;
	border-left: 0;
	margin-right: 3px
}

#accordion-1 .slide-number {
	color: #68889b;
	left: 10px;
	font-weight: bold
}

#accordion-1 .active .slide-number {
	color: #fff;
}

#accordion-1 a {
	color: #68889b
}

#accordion-1 dd img {
	float: right;
	margin: 0 0 0 30px;
}

#accordion-1 h2 {
	font-size: 2.5em;
	margin-top: 10px
}

#accordion-1 .more {
	padding-top: 10px;
	display: block
}
</style>

<div id="accordion-1">
	<dl>
		<dt>First slide</dt>
		<dd>
			<h2>This is the first slide</h2>
			<p>
				<img src="images/monsters/img1.png" alt="Alt text to go here" />Cum
				sociis natoque penatibus et magnis dis parturient montes, nascetur
				ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
				pretium quis, sem. Nulla consequat massa quis parturient montes,
				nascetur ridiculus mus. Donec quam felis, ultricies nec,
				pellentesque eu, enim.<br /> <a href="#" class="more">Read more</a>
			</p>
		</dd>
		<dt>Second slide</dt>
		<dd>
			<h2>Here is the second slide</h2>
			<p>
				<img src="images/monsters/img2.png" alt="Alt text to go here" />Cum
				sociis natoque penatibus et magnis dis parturient montes, nascetur
				ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
				pretium quis, sem. Nulla consequat massa quis parturient montes,
				nascetur ridiculus mus. Donec quam felis, ultricies nec,
				pellentesque eu, enim.<br /> <a href="#" class="more">Read more</a>
			</p>
		</dd>
		<dt>One more slide</dt>
		<dd>
			<h2>One more slide to go here</h2>
			<p>
				<img src="images/monsters/img3.png" alt="Alt text to go here" />Cum
				sociis natoque penatibus et magnis dis parturient montes, nascetur
				ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
				pretium quis, sem. Nulla consequat massa quis parturient montes,
				nascetur ridiculus mus. Donec quam felis, ultricies nec,
				pellentesque eu, enim.<br /> <a href="#" class="more">Read more</a>
			</p>
		</dd>
		<dt>Another slide</dt>
		<dd>
			<h2>Another slide to go here</h2>
			<p>
				<img src="images/monsters/img4.png" alt="Alt text to go here" />Cum
				sociis natoque penatibus et magnis dis parturient montes, nascetur
				ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
				pretium quis, sem. Nulla consequat massa quis parturient montes,
				nascetur ridiculus mus. Donec quam felis, ultricies nec,
				pellentesque eu, enim.<br /> <a href="#" class="more">Read more</a>
			</p>
		</dd>
		<dt>Wow one more</dt>
		<dd>
			<h2>Unbilievable one more slide here</h2>
			<p>
				<img src="images/monsters/img5.png" alt="Alt text to go here" />Cum
				sociis natoque penatibus et magnis dis parturient montes, nascetur
				ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
				pretium quis, sem. Nulla consequat massa quis parturient montes,
				nascetur ridiculus mus. Donec quam felis, ultricies nec,
				pellentesque eu, enim.<br /> <a href="#" class="more">Read more</a>
			</p>
		</dd>
		<dt>Last one</dt>
		<dd>
			<h2>This is definitely the last one</h2>
			<p>
				<img src="images/monsters/img6.png" alt="Alt text to go here" />Cum
				sociis natoque penatibus et magnis dis parturient montes, nascetur
				ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
				pretium quis, sem. Nulla consequat massa quis parturient montes,
				nascetur ridiculus mus. Donec quam felis, ultricies nec,
				pellentesque eu, enim.<br /> <a href="#" class="more">Read more</a>
			</p>
		</dd>
		<dd>
			<h2>No, one more actually</h2>
			<p>
				<img src="images/monsters/img6.png" alt="Alt text to go here" />Cum
				sociis natoque penatibus et magnis dis parturient montes, nascetur
				ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
				pretium quis, sem. Nulla consequat massa quis parturient montes,
				nascetur ridiculus mus. Donec quam felis, ultricies nec,
				pellentesque eu, enim.<br /> <a href="#" class="more">Read more</a>
			</p>
		</dd>
	</dl>
</div>
