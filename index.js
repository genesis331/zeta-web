$(window).on("load", function() {
    $(".explore-button").on("click", function() {
        $(".intro-slogan").addClass("hide");
        $(".button").addClass("hide");
        $(".logo").addClass("explore");
        setTimeout(function() {
            $(".intro-slogan").css("display","none");
            $(".button").css("display","none");
            $(".menu").css("display","block");
        },800)
        setTimeout(function() {
            $(".menu").addClass("show");
        },1100)
    });
    $(".about").on("click", function() {
        window.open('./about','_blank');
    });
    $(".changelog").on("click", function() {
        window.open('./changelog','_blank');
    });
    $(".commands").on("click", function() {
        window.open('./commands','_blank');
    });
    $(".news").on("click", function() {
        window.open('./newssource','_blank');
    });
    $(".concept").on("click", function() {
        window.open('./concept','_blank');
    });
    $(".contact").on("click", function() {
        window.open('./contact','_blank');
    });
    $(".features").on("click", function() {
        window.open('./features','_blank');
    });
    $(".prerequisites").on("click", function() {
        window.open('./prerequisites','_blank');
    });
});

var http = new XMLHttpRequest();
http.open('GET','https://genesis331.github.io/zeta-bot/version.json',true);
http.onreadystatechange = function() {
    if (http.readyState === 4 && http.status === 200) {
        var data = JSON.parse(this.responseText);
        $(".menu-title").text(data.current_version + " Update");
        $(".menu-content").text(data.current_changelog);
    }
}
http.send();
