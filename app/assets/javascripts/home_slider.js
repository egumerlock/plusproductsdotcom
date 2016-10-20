
		var tpj=jQuery;
		tpj.noConflict();

		tpj(document).ready(function() {

			var apiRevoSlider = tpj('.tp-banner').show().revolution(
			{
				sliderType:"standard",
				jsFileLocation:"include/rs-plugin/js/",
				delay:16000,
				startwidth:1140,
				startheight:600,
				hideThumbs:200,

				navigation: {
										keyboardNavigation: "on",
										keyboard_direction: "horizontal",
										mouseScrollNavigation: "off",
										onHoverStop: "off",
										touch: {
												touchenabled: "on",
												swipe_threshold: 75,
												swipe_min_touches: 1,
												swipe_direction: "horizontal",
												drag_block_vertical: false
										}
								},

								arrows: {
										style: "hades",
										enable: true,
										hide_onmobile: false,
										hide_onleave: false,
										tmp: '<div class="tp-arr-allwrapper">	<div class="tp-arr-imgholder"></div></div>',
										left: {
												h_align: "left",
												v_align: "center",
												h_offset: 10,
												v_offset: 0
										},
										right: {
												h_align: "right",
												v_align: "center",
												h_offset: 10,
												v_offset: 0
										}
								},

				touchenabled:"on",
				swipe_velocity: 0.7,
				swipe_min_touches: 1,
				swipe_max_touches: 1,
				drag_block_vertical: false,

				parallax:"mouse",
				parallaxBgFreeze:"on",
				parallaxLevels:[7,4,3,2,5,4,3,2,1,0],

				keyboardNavigation:"on",

				sliderLayout: "fullscreen",
				autoHeight: "on",

				spinner:"spinner4",

				stopLoop:"off",
				stopAfterLoops:-1,
				stopAtSlide:-1,

				shuffle:"off",

				autoHeight:"off",
				forceFullWidth:"off",



				hideThumbsOnMobile:"on",
				hideNavDelayOnMobile:1500,
				hideBulletsOnMobile:"off",
				hideArrowsOnMobile:"on",
				hideThumbsUnderResolution:0,

				hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				startWithSlide:0,
			});

			apiRevoSlider.bind("revolution.slide.onloaded",function (e) {
				setTimeout( function(){ SEMICOLON.slider.sliderParallaxDimensions(); }, 200 );
			});

			apiRevoSlider.bind("revolution.slide.onchange",function (e,data) {
				SEMICOLON.slider.revolutionSliderMenu();
			});

		}); //ready
