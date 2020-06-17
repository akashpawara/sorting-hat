$(".js-sort").on("click", function () {
	$(".main-content__wrapper").removeClass().addClass("main-content__wrapper");
	$(".sorting-hat,.avatar__mouth").removeClass("animate");

	var item = "ravenclaw";

	setTimeout(function () {
		$(".sorting-hat").addClass("animate");
		$(".sorting-hat__answer").text(item + "!");
	}, 1000);
	setTimeout(function () {
		$(".avatar__mouth").addClass("animate");
	}, 1500);
	setTimeout(function () {
		$(".main-content__wrapper").addClass(item);
	}, 4000);
});
