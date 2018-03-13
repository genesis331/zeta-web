$(window).on("load", function() {
    $(".c1").addClass("show");
    $(".c2").addClass("show");
    $(".c3").addClass("show");
    $(".c4").addClass("show");
});

var http = new XMLHttpRequest();
http.overrideMimeType("application.json");
http.open('GET','https://genesis331.github.io/zeta-web/commands/commands.json',true);
http.onreadystatechange = function() {
    if (http.readyState === 4 && http.status === 200) {
        var data = http.responseText;
    }
}
http.send();