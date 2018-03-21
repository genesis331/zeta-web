$(window).on("load", function() {
    $(".content").addClass("show");
})

var http = new XMLHttpRequest();
http.open('GET','https://genesis331.github.io/zeta-bot/version.json',true);
http.onreadystatechange = function() {
    if (http.readyState === 4 && http.status === 200) {
        var data = JSON.parse(this.responseText);
        $(".c1").text("Current Version: " + data.current_version);
        $(".c2").text(data.current_changelog);
    }
}
http.send();