var http = new XMLHttpRequest();
http.open('GET','https://genesis331.github.io/zeta-web/commands/commands.json',true);
http.onreadystatechange = function() {
    if (http.readyState === 4 && http.status === 200) {
        var data = JSON.parse(this.responseText);
        showCommands(data);
    }
}
http.send();

var title = "";
var description = "";

function showCommands(data) {
    for (var i = 0; i <= data.commands.length; i++) {
        title = data.commands[i].title;
        description = data.commands[i].desc;
        var createDiv = "<div class='content-container'>" + "<div class='content-title'>" + title + "</div>" + "<div class='content-p'>" + description +  "</div>" + "</div>";
        $(".content").append(createDiv);
    }
}