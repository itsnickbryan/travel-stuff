import $ from 'jquery';
class Modal {
	constructor() {
		this.openModalButton = $(".open-modal");
		this.modal = $(".modal");
		this.closeModalButton = $(".modal__close");
		this.events();
	}
	events() {
		//clicking the open modal button
			this.openModalButton.click(this.openModal.bind(this));

		// clicking the x close modal button
			this.closeModalButton.click(this.closeModal.bind(this));

		// pushes the escape key

	}

	openModal() {
		this.modal.addClass("modal--is-visible");
		return false; // Prevents the browser from returning to the top through the href link "#", which is a default action.
	}

	closeModal() {
		
		that.modal.removeClass("modal--is-visible");
	}
}

export defualt Modal;