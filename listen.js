let house;
if (annyang) {    
    var commands = {
        'ravenclaw': function() { 
            // (".main-content__wrapper").toggleClass(house);
		    house='ravenclaw';
		    $(".sorting-hat,.avatar__mouth").removeClass("animate");
            setTimeout(function () {
                $(".sorting-hat").addClass("animate");
                $(".sorting-hat__answer").text(house + "!");
            }, 1000);
            setTimeout(function () {
                $(".avatar__mouth").addClass("animate");
            }, 1500);
            setTimeout(function () {
                $(".main-content__wrapper").toggleClass(house);
                $("body").css("background", "#006daf");
                $(".ravenclaw").css("background", "#006daf");
            }, 4000);
        },
        'gryffindor': function() { 
            $(".main-content__wrapper").toggleClass(house);
		    house='gryffindor';
		    $(".sorting-hat,.avatar__mouth").removeClass("animate");
            setTimeout(function () {
                $(".sorting-hat").addClass("animate");
                $(".sorting-hat__answer").text(house + "!");
            }, 1000);
            setTimeout(function () {
                $(".avatar__mouth").addClass("animate");
            }, 1500);
            setTimeout(function () {
                $(".main-content__wrapper").addClass(house);
                $("body").css("background", "#ad343e");
                $(".gryffindor").css("background", "#ad343e");
            }, 4000);
        },
        'slytherin': function() { 
            $(".main-content__wrapper").toggleClass(house);
		    house='slytherin';
		    $(".sorting-hat,.avatar__mouth").removeClass("animate");
            setTimeout(function () {
                $(".sorting-hat").addClass("animate");
                $(".sorting-hat__answer").text(house + "!");
            }, 1000);
            setTimeout(function () {
                $(".avatar__mouth").addClass("animate");
            }, 1500);
            setTimeout(function () {
                $(".main-content__wrapper").addClass(house);
                $("body").css("background", "green");
                $(".slytherin").css("background", "green");
            }, 4000);
        },
        'hufflepuff': function() { 
            $(".main-content__wrapper").toggleClass(house);
		    house='hufflepuff';
		    $(".sorting-hat,.avatar__mouth").removeClass("animate");
            setTimeout(function () {
                $(".sorting-hat").addClass("animate");
                $(".sorting-hat__answer").text(house + "!");
            }, 1000);
            setTimeout(function () {
                $(".avatar__mouth").addClass("animate");
            }, 1500);
            setTimeout(function () {
                $(".main-content__wrapper").addClass(house);
                $("body").css("background", "#eab000");
                $(".hufflepuff").css("background", "#eab000");
            }, 4000);
        }
    };
    console.log(annyang);
    annyang.addCommands(commands);
    annyang.start();
}
  