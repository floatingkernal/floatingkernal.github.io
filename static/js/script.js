var writeEmail = function (username, hostname) {
    // var username = "salman.sharif";
    // var hostname = "utoronto.ca";
    var linktext = username + "@" + hostname;
    $(".contact>.email").html("<a href='" + "mail" + "to:" + username + "@" + hostname + "'>" + linktext + "</a>");
};

function rate(num) {
    var html = "";
    for (let i = 1; i <= 5; i++) {
        if (i <= num) {
            html += "<span class='dot-checked'></span>";
        } else {
            html += "<span class='dot'></span>";
        }
    }

    $(".rate" + num).prepend("&nbsp; ");
    $(".rate" + num).prepend("&nbsp; ");
    $(".rate" + num).prepend(html);
}

function organizeSkills() {
    var width = 4;
    var html = $("#skills h2")[0].outerHTML;
    console.log(html);
    html += "<table><tr>";
    var divs = [];
    $("#skills div").each(function(){divs.push($(this).html())});
    console.log(divs);
    for (let i = 0; i < divs.length; i++) {
        html += "<td>" + divs[i] + "</td>";
        if (i % width == width-1) html += "</tr><tr>";
    }
    html += "</tr></table>";
    console.log(html);
    $("#skills").html(html);
}

$(document).ready(function () {
    $('body').scrollspy({ target: '#menu' });
    $("#menu a").smoothScroll();
    rate(0);
    rate(1);
    rate(2);
    rate(3);
    rate(5);
    rate(4);
    organizeSkills();
    writeEmail("salman.shrif", "mail.utoronto.ca");
    writeEmail("salmanshrif99", "gmail.com");
});