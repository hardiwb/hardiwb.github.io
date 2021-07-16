var Page = (function() {
				
	var config = {
					$bookBlock : $( '#bb-bookblock' ),
					$navNext : $( '#bb-nav-next' ),
					$navPrev : $( '#bb-nav-prev' ),
					$navFirst : $( '#bb-nav-first' ),
					$navLast : $( '#bb-nav-last' ),
					$navMenu : $( '#tblcontents' ),
					$navBm : $( '#mytoccontainer > span' ),					
				},
	
	init = function() {
						config.$bookBlock.bookblock( {
						speed : 800,
						shadowSides : 0.8,
						shadowFlip : 0.7
						} );
						initEvents();
					},
					initEvents = function() {
						
						var $slides = config.$bookBlock.children();

						// add navigation events
						config.$navNext.on( 'click touchend', function() {
							config.$bookBlock.bookblock( 'next' );
							return false;
						} );

						config.$navPrev.on( 'click touchend', function() {
							config.$bookBlock.bookblock( 'prev' );
							return false;
						} );

						config.$navFirst.on( 'click touchend', function() {
							config.$bookBlock.bookblock( 'first' );
							return false;
						} );

						config.$navLast.on( 'click touchend', function() {
							config.$bookBlock.bookblock( 'last' );
							return false;
						} );
						
						config.$navMenu.on( 'click touchend', function() {
							config.$bookBlock.bookblock( 'menu' );
							config.$bookBlock.bookblock( 'shadows' );
							config.$bookBlock.bookblock( 'menuactive' );
							return false;
						} );
						
						config.$navBm.on( 'click', function() {
							var $el = $( this ),
								idx = $el.attr('value'),
								newidx =  parseInt(idx),
								jump = function() {};
							config.$bookBlock.bookblock( 'jump', newidx );
							config.$bookBlock.bookblock( 'menu' );
							config.$bookBlock.bookblock( 'shadows' );
							config.$bookBlock.bookblock( 'menuactive' );
							return false;
						} );
						
						// add swipe events
						$slides.on( {
							'swipeleft' : function( event ) {
								config.$bookBlock.bookblock( 'next' );
								return false;
							},
							'swiperight' : function( event ) {
								config.$bookBlock.bookblock( 'prev' );
								return false;
							}
						} );

						// add keyboard events
						$( document ).keydown( function(e) {
							var keyCode = e.keyCode || e.which,
								arrow = {
									left : 37,
									up : 38,
									right : 39,
									down : 40
								};

							switch (keyCode) {
								case arrow.left:
									config.$bookBlock.bookblock( 'prev' );
									break;
								case arrow.right:
									config.$bookBlock.bookblock( 'next' );
									break;
							}
						} );
					};

					return { init : init };

			})();

