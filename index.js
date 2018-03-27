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
        window.open('./about','_self');
    });
    $(".changelog").on("click", function() {
        window.open('./changelog','_self');
    });
    $(".commands").on("click", function() {
        window.open('./commands','_self');
    });
    $(".news").on("click", function() {
        window.open('./newssource','_self');
    });
    $(".contribute").on("click", function() {
        window.open('./contribute','_self');
    });
    $(".contact").on("click", function() {
        window.open('./contact','_self');
    });
    $(".features").on("click", function() {
        window.open('./features','_self');
    });
    $(".prerequisites").on("click", function() {
        window.open('./prerequisites','_self');
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
  var queryString = url ? url.split('?')[1] : window.location.search.slice(1);
  var obj = {};

  if (queryString) {
    queryString = queryString.split('#')[0];
      
    var arr = queryString.split('&');

    for (var i=0; i<arr.length; i++) {
      var a = arr[i].split('=');
        
      var paramNum = undefined;
        
      var paramName = a[0].replace(/\[\d*\]/, function(v) {
        paramNum = v.slice(1,-1);
        return '';
      });
        
      var paramValue = typeof(a[1])==='undefined' ? true : a[1];

      paramName = paramName.toLowerCase();
      paramValue = paramValue.toLowerCase();

      if (obj[paramName]) {
        if (typeof obj[paramName] === 'string') {
          obj[paramName] = [obj[paramName]];
        }
        if (typeof paramNum === 'undefined') {
          obj[paramName].push(paramValue);
        }
        else {
          obj[paramName][paramNum] = paramValue;
        }
      }
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