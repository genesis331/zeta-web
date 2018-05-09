$(window).on("load", function() {
    $(".content").addClass("show");
    $(".f1cc").mouseover(function() {
        $(".f2b").addClass("show");
    });
    $(".f1cc").mouseout(function() {
        $(".f2b").removeClass("show");
    });
    $(".f1cc").on("click", function() {
        window.open('../','_self');
    })
});