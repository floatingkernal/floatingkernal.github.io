var writeEmail = function(username, hostname){
    // var username = "salman.sharif";
    // var hostname = "utoronto.ca";
    var linktext = username + "@" + hostname ;
    $(".contact>.email").html("<a href='" + "mail" + "to:" + username + "@" + hostname + "'>" + linktext + "</a>");
};

$(document).ready(function(){
   $('body').scrollspy({ target: '#menu' });
   $("#menu a").smoothScroll();
   writeEmail("salman.shrif", "mail.utoronto.ca");
   writeEmail("salmanshrif99", "gmail.com");
});