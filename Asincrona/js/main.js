$(document).ready(function() {

    let instagramLinkDiv = $("#instagram-link");
    let instagramLinkImg = $("#instagram-link-img");

    instagramLinkDiv.mouseenter(function() {
        instagramLinkImg.attr("src", "img/logos/instagram-logo-color.png");
    });

    instagramLinkDiv.mouseleave(function() {
        instagramLinkImg.attr("src", "img/logos/instagram-logo-black.png");
    });
    
});