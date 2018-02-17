<template>
	
	<div id="app">

		<section class="hero is-medium is-info is-bold">
			<div class="hero-body">
				<div class="container">
					<h1 class="title">vue-stars</h1>
					<h2 class="subtitle">Flexible input control for stars and things</h2>
				</div>
			</div>
		</section>

		<section class="section">
			<div class="container">

				<div class="content">
					<p><b>vue-stars</b> is a Vue component for <b>display or input</b> of "ratings" (such as stars).
					It supports `v-model` binding, is very customizable, and is available under the MIT license.</p>

					<p>For detailed documentation, please see <a href="https://github.com/richardtallent/vue-stars">the
					Github repository</a>. This page contains some examples illustrating the flexibility of this
					control, you can change the examples live to see the results.</p>

					<h2 class="title is-4 is-spaced">Demos!</h2>
				</div>

				<div class="tile is-ancestor" v-if="demo">
					<div class="tile is-3 is-primary is-parent">
						<div class="tile is-child">
							<aside class="menu">
								<p class="menu-label">Examples</p>
								<ul class="menu-list">
									<li v-for="example in examples" :key="example.name">
										<a 
											@click="switchExample(example)"
											:class="{ 'is-active': example.name==demo.name }"
										>{{ example.name }}</a>
									</li>
								</ul>
							</aside>
						</div>
					</div>
					<div class="tile is-vertical is-parent">
						<div class="tile is-info is-child notification">{{ demo.description }}</div>
						<div class="tile is-child box">
							Live Demo: <vue-stars
								name="multiDemo"
								v-model="demo.value"
								:active-color="demo.activeColor"
								:inactive-color="demo.inactiveColor"
								:shadow-color="demo.shadowColor"
								:hover-color="demo.hoverColor"
								:max="demo.max"								
								:readonly="demo.readonly"
								:char="demo.char"
								:inactive-char="demo.inactiveChar"
								:class="demo.class"
							/>
						</div>
						<div class="tile">
							<div class="tile">
								<div class="tile box is-child demo-controls">
									<div><label for="fActiveColor">Active color:</label><input type="color" v-model="demo.activeColor" name="fActiveColor"></div>
									<div><label for="fInactiveColor">Inactive color:</label><input type="color" v-model="demo.inactiveColor" name="fInactiveColor"></div>
									<div><label for="fShadowColor">Shadow color:</label><input type="color" v-model="demo.shadowColor" name="fShadowColor"></div>
									<div><label for="fHoverColor">Hover color:</label><input type="color" v-model="demo.hoverColor" name="fHoverColor"></div>
									<div><label for="fValue">Value:</label><input type="number" v-model.number="demo.value" name="fValue"></div>
									<div><label for="fMax">Max value:</label><input type="number" v-model.number="demo.max" name="fMax"></div>
									<div><label for="fReadOnly">Read only?</label><input type="checkbox" v-model="demo.readonly" name="fReadOnly"></div>
									<div><label for="fChar">Characters:</label><input type="text" v-model="demo.char" name="fChar"></div>
									<div><label for="fIntactiveChar">Inactive characters:</label><input type="text" v-model="demo.inactiveChar" name="fIntactiveChar"></div>
								</div></div><div class="tile">
								<div class="tile box is-child source-code">
&lt;vue-stars
	name="demo"
	:active-color="{{ demo.activeColor }}"
	:inactive-color="{{ demo.inactiveColor }}"
	:shadow-color="{{ demo.shadowColor }}"
	:hover-color="{{ demo.hoverColor }}"
	:max="{{ demo.max }}"
	:value="{{ demo.value }}"
	:readonly="{{ demo.readonly }}"
	:char="{{ demo.char }}"
	:inactive-char="{{ demo.inactiveChar }}"
	:class="{{ demo.class }}"
/&gt;
								</div></div>
						</div>
					</div>
				</div>

				<div class="content">
					<h2 class="title is-4 is-spaced">Slot Demo</h2>
					<p>vue-stars supports optional named slots ("activeLabel" and "inactiveLabel") so you can plug in your own
					content for what shows for active and inactive content, such as raster or SVG images, etc. Since these
					slots are <i>repeated</i> for each value, the <b>slot-scope</b> attribute is required, not just the
					<b>slot</b> name.</p>

					<p>To ensure a good user experience, you should take care that the slot content has a consistent width
					and height. If your slot content is text, it will still have the active, inactive, shadow, and hover
					colors applied unless you override them via CSS.</p>
				</div>

				<div class="box">
<vue-stars name="slotDemo" :value="3" :max="10">
	<img slot-scope="props" slot="activeLabel" src="static/logo.png">
	<span slot-scope="props" slot="inactiveLabel">🙁</span>
</vue-stars>
				</div>

				<div class="box is-child source-code">
&lt;vue-stars
	name="slotDemo"
	:max="10"
	:value="3"/&gt;
	&lt;img slot-scope="props" slot="activeLabel" src="static/logo.png"&gt;
	&lt;span slot-scope="props" slot="inactiveLabel"&gt;🙁&lt;/span&gt;
&lt;/vue-stars&gt;
				</div>


				<div class="content">
					<h2 class="title is-4 is-spaced">Contact</h2>
					<p>For more information, please feel free to reach out to me using Github issues, or via the contact methods
					on my <a href="https://www.tallent.us">home page</a>.</p>
				</div>

			</div>
		</section>

	</div>
</template>
<script>
import VueStars from "vue-stars"
// For local testing
//import VueStars from "../../vue-stars/src/VueStars.vue"

export default {
	name: "App",
	components: {
		VueStars,
	},
	data: function() {
		return {
			simple: 0,
			pinwheel: 5,
			ro: 4,
			letter: 2,
			roman: 4,
			fa1: 3,
			fa2: 3,
			check: 3,
			smile: 2,
			pinWheelColor: "#FFDD00",
			demo: null,
			examples: [
				{
					name: "Default",
					activeColor: "#ffdd00",
					inactiveColor: "#999999",
					shadowColor: "#ffff00",
					hoverColor: "#dddd00",
					max: 5,
					value: 3,
					readonly: false,
					char: "★",
					inactiveChar: "",
					description: "These are the default values.",
					class: "",
				},
				{
					name: "Pinwheel 1-7",
					max: 7,
					value: 5,
					char: "✵",
					description: "Rating 1-7, using eight-pointed pinwheel stars (✵)",
				},
				{
					name: "Read-only",
					readonly: true,
					description: "Ratings can be read-only.",
				},
				{
					name: "Blue alpha 1-5",
					value: 2,
					char: "ABCDE",
					inactiveChar: "-",
					activeColor: "#3399CC",
					hoverColor: "#33CCFF",
					shadowColor: "#BBBBFF",
					description:
						"Rating 1-5, using letters, in blue, dash for inactive values.",
				},
				{
					name: "Roman grey",
					value: 4,
					char: "ⅠⅡⅢⅣⅤ",
					description: "Rating 1-5, Roman numerals, in grey",
					activeColor: "#333333",
					inactiveColor: "#DDDDDD",
					shadowColor: "#CCCCCC",
					hoverColor: "#666666",
				},
				{
					name: "FontAwesome 1",
					char: "\uF005",
					description: "Rating 1-5, using FontAwesome's filled star",
					class: "fa",
				},
				{
					name: "FontAwesome 2",
					char: "\uF005",
					inactiveChar: "\uF006",
					description:
						"Rating 1-5, using FontAwesome's filled and unfilled stars",
					inactiveColor: "#DDDDDD",
					class: "fa",
				},
				{
					name: "Green check-dash",
					char: "\u2714",
					inactiveChar: "-",
					activeColor: "#339933",
					hoverColor: "#44AA44",
					shadowColor: "#66CC66",
					inactiveColor: "#DDDDDD",
					description: "Green checkboxes and dashes",
				},
				{
					name: "Smilie",
					char: "\uD83D\uDE00",
					inactiveChar: "-",
					value: 2,
					description: "Smilie face emoji and dashes",
				},
			],
		}
	},
	mounted: function() {
		this.switchExample(this.examples[0])
	},
	methods: {
		switchExample(example) {
			this.demo = Object.assign({}, this.examples[0], example)
		},
	},
}
</script>
<style>
.vue-stars {
	font-size: 1.25em;
}

.demo-controls label {
	display: block;
	clear: both;
	float: left;
	width: 10em;
}

.source-code {
	font-family: Consolas, "Courier New";
	white-space: pre-wrap;
	background-color: #333;
	color: #99ccff;
}

@font-face {
	font-family: FontAwesome;
	src: url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.woff);
}

.fa {
	font-family: FontAwesome;
}
</style>