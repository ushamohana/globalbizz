/* Routines to manage font icons in theme settings and custom panel. */

;var Themify_Icons_ = {};

(function($){

	var $lightbox = $( '#themify-icons-lightbox' ),
		$overlay = $( '#themify-icons-lightbox-overlay' );

	Themify_Icons_ = {

		target: '',

		getDocHeight: function() {
			var D = document;
			return Math.max(
				Math.max(D.body.scrollHeight, D.documentElement.scrollHeight),
				Math.max(D.body.offsetHeight, D.documentElement.offsetHeight),
				Math.max(D.body.clientHeight, D.documentElement.clientHeight)
			);
		},

		showLightbox: function( selected, fullscreen ) {
			var top = $(document).scrollTop() + 80;

			$overlay.show();
			if( fullscreen ) {
				$lightbox.addClass( 'fullscreen' );
			}
			$lightbox
			.show()
			.css( 'top', Themify_Icons_.getDocHeight() )
			.animate({
				'top': top
			}, 800 );
			if( selected ) {
				$( 'a', $lightbox )
				.removeClass( 'selected' )
				.find( '.' + selected )
				.closest( 'a' )
					.addClass( 'selected' );
			}
		},

		setIcon: function(iconName) {
			var $target = $(Themify_Icons_.target);
			$target.val( iconName );
			Themify_Icons_.closeLightbox();
		},

		initLightbox: function(target, fullscreen) {
			if( ! $(target).length > 0 ) {
				Themify_Icons_.target = $(target).prev();
			}
			Themify_Icons_.target = target;
			Themify_Icons_.showLightbox( $(target).val(), fullscreen );
		},

		closeLightbox: function() {
			$lightbox.animate({
				'top': Themify_Icons_.getDocHeight()
			}, 800, function() {
				$lightbox.hide().removeClass( 'fullscreen' );
				$overlay.hide();
			});
		}

	};

	$(document).ready(function(){
		var $body = $('body');

		$body.on('click', '.themify-choose-icon-trigger', function(e){
			e.preventDefault();
			var fullscreen = ( $(this).hasClass( 'themify-choose-icon-fullscreen' ) ) ? true : false;
			Themify_Icons_.initLightbox( $(this).attr('data-target'), fullscreen );
		});

		$body.on('click', '.themify-icons-lightbox-container .icon-container', function(e){
			e.preventDefault();
			Themify_Icons_.setIcon( $(this).find( '.icon-name' ).text().trim() );
		});

		$body.on( 'click', '.themify-icons-close', function(e){
			e.preventDefault();
			Themify_Icons_.closeLightbox();
		});
	});

})(jQuery);