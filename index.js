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
    $(".contribute").on("click", function() {
        window.open('./contribute','_blank');
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

function getAllUrlParams(url) {

  // get query string from url (optional) or window
  var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

  // we'll store the parameters here
  var obj = {};

  // if query string exists
  if (queryString) {

    // stuff after # is not part of query string, so get rid of it
    queryString = queryString.split('#')[0];

    // split our query string into its component parts
    var arr = queryString.split('&');

    for (var i=0; i<arr.length; i++) {
      // separate the keys and the values
      var a = arr[i].split('=');

      // in case params look like: list[]=thing1&list[]=thing2
      var paramNum = undefined;
      var paramName = a[0].replace(/\[\d*\]/, function(v) {
        paramNum = v.slice(1,-1);
        return '';
      });

      // set parameter value (use 'true' if empty)
      var paramValue = typeof(a[1])==='undefined' ? true : a[1];

      // (optional) keep case consistent
      paramName = paramName.toLowerCase();
      paramValue = paramValue.toLowerCase();

      // if parameter name already exists
      if (obj[paramName]) {
        // convert value to array (if still string)
        if (typeof obj[paramName] === 'string') {
          obj[paramName] = [obj[paramName]];
        }
        // if no array index number specified...
        if (typeof paramNum === 'undefined') {
          // put the value on the end of the array
          obj[paramName].push(paramValue);
        }
        // if array index number specified...
        else {
          // put the value at that index number
          obj[paramName][paramNum] = paramValue;
        }
      }
      // if param name doesn't exist yet, set it
      else {
        obj[paramName] = paramValue;
      }
    }
  }

  return obj;
}

if (getAllUrlParams().explore === "true") {
    explore();
}

function explore() {
    setTimeout(function() {
        $(".logo").addClass("explore");
        $(".intro-slogan").css("display","none");
        $(".button").css("display","none");
    },0);
    setTimeout(function() {
        $(".menu").css("display","block");
    },300);
}

function updateQueryStringParam(key, value) {
  baseUrl = [location.protocol, '//', location.host, location.pathname].join('');
  urlQueryString = document.location.search;
  var newParam = key + '=' + value,
  params = '?' + newParam;

  if (urlQueryString) {
    keyRegex = new RegExp('([\?&])' + key + '[^&]*');
    // If param exists already, update it
    if (urlQueryString.match(keyRegex) !== null) {
      params = urlQueryString.replace(keyRegex, "$1" + newParam);
    } else {
      params = urlQueryString + '&' + newParam;
    }
  }
  window.history.replaceState({}, "", baseUrl + params);
}