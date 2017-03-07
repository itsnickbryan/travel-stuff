import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
	constructor(els, offset) {
		this.itemsToReveal = els;
		this.offsetPercentage = offset;
		this.hideInitially();
		this.createWaypoints();
	}

	hideInitially() {
		this.itemsToReveal.addClass("reveal-item");

	}

	createWaypoints() {
		var that = this;
		// Code runs once for each item in the collection. In this case, four times.
		this.itemsToReveal.each(function() {
			var currentItem = this;

			new Waypoint({
				// What element we're looking for when scrolling.
				element: currentItem,
				// What we want the element to do when scrolled to.
				handler: function() {
					$(currentItem).addClass("reveal-item--is-visible");
				},
				offset: that.offsetPercentage
			});
		});
	}

}

export default RevealOnScroll;