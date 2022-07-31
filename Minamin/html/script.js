var latests = document.getElementById("latests");
var datas = 
[
    ["date","file"]
];

var e = document.getElementById("test");
alert(e.childNodes.item(0).childNodes.item(0));
latests.innerHTML = "";
/*
datas.forEach(function(val,i)
{
    var blog = document.getElementById(val[1]);
    var child = blog.childNodes;
    var title = child.item(0).childNodes.item(0);

    var date = document.getElementById("date");
    latests.innerHTML += "<a href=\"Blogs/" + val[0] + "/" + val[1] + ".html\"";
        latests.innerHTML += "<article>";
            latests.innerHTML += "<p class=\"text_date\">";
                latests.innerHTML += "<h2>";
                latests.innerHTML += "</h2>";
            latests.innerHTML += "</p>";
        latests.innerHTML += "</article>";
    latests.innerHTML += "</a>";
});
*/