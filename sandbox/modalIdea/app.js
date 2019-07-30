/* ------- */
/* Globals */
/* ------- */
var $modalMask = {};
var $modalFrame = {};
var $modalContentContainer = {};

/* --------- */
/* Functions */
/* --------- */
function closeModal() {
	toggleModal();
	updateModalContent();
	toggleModalMask();
	resizeModal();	
	$(".openModal").removeClass("active");
}

function openModal(sourceId, size) {
	resizeModal(size);
	toggleModalMask();
	toggleModal(size);
	updateModalContent(sourceId);
}

function resizeModal(size) {
	$modalFrame.removeClass("modalSizeSmall");
	$modalFrame.removeClass("modalSizeMedium");
	$modalFrame.removeClass("modalSizeLarge");
	if (size) {
		$modalFrame.addClass("modalSize" + size);
	}
}

function toggleModal(size) { 
    $modalFrame.toggleClass("modalHidden");
}

function toggleModalMask() {
    $modalMask.toggleClass("modalHidden");
}

function updateModalContent(sourceId, callback) {
	if (sourceId) {
		$.ajax({
			cache: false,
			type: "GET",
			url: "_" + sourceId + ".html",
			success: function(data) {
				$modalContentContainer.html(data);
				if (callback) { callback(); }
			}
		});
    } else {
		$modalContentContainer.empty();
		$modalContentContainer.html('<p class="modalPlaceholder">Please wait...</p>');
		if (callback) { callback(); }
	}
}

/* ---- */
/* Main */
/* ---- */
$(document).ready(function() {
    $modalMask = $("#modalMask");
    $modalFrame = $("#modalFrame");
    $modalContentContainer = $("#modalContent");
    
    $(".openModal").click(function() {
		var $object = $(this);
		var contentId = $object.data("contentId");
		var size = $object.data("size");
        $object.addClass("active");
        openModal(contentId, size);
    });
	
    $(".dismissModal").click(function() {
        closeModal();
    });   
});