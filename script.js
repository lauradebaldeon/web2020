$("h1").click(function(){
    if($(this).children("span").hasClass("arrowDown")){
        console.log("true");
        $(this).siblings("ul").hide();
        $(this).siblings("p").hide();
        $(this).children("span").removeClass("arrowDown");
    } else {
        console.log("false");
        $(this).siblings("ul").show();
        $(this).siblings("p").show();
        $(this).children("span").addClass("arrowDown");
    }
});


let links=$("nav").children();
let sections = $("section")


$(".navlink").click(function(){
    let currentLink = $(this);
    let currentName=currentLink.html();
    let currentSection=$("#" + currentName);

    // if (!currentLink.hasClass("clicked")){
    //     currentLink.addClass("clicked");
    //     currentLink.siblings().removeClass("clicked");
    //     // currentSection.removeClass("invisible");
    //     // currentSection.siblings().addClass("invisible");
    // }
});


// function openEx(){
if(window.location.hash) {
    let hash = window.location.hash.substring(1); 
    let thisHash="#" + hash
    console.log(thisHash);
    $(thisHash).children("ul").show();
} 
// }

// if(window.location.pathname) {
//     let hash = window.location.pathname; 
//     if(hash=="/exercises/"){
//         let root = document.documentElement;
//         root.style.setProperty('--grey', "#b98dba");
//     }
// } 


let url="../links.json"
let dev, type, inspo, collections, readings;

function getLinks(){
    $.get(url, function( data ) {
        dev=data.links[0].dev;
        type=data.links[1].type;
        inspo=data.links[2].inspo;
        collections=data.links[3].collections;
        readings=data.links[4].readings;
        console.log(dev[1]);
        for(i=0; i<dev.length; i++){
        $("#Code > ul").append(`<li><a href=${dev[i].link} target="_blank"> ${dev[i].name}</a></li>`);
        }
        for(i=0; i<type.length; i++){
            $("#Type > ul").append(`<li><a href=${type[i].link} target="_blank"> ${type[i].name}</a></li>`);
            }
        for(i=0; i<inspo.length; i++){
            $("#Inspo > ul").append(`<li><a href=${inspo[i].link} target="_blank"> ${inspo[i].name}</a></li>`);
            }
        for(i=0; i<collections.length; i++){
            $("#Collections > ul").append(`<li><a href=${collections[i].link} target="_blank"> ${collections[i].name}</a></li>`);
            }
        for(i=0; i<readings.length; i++){
            $("#Readings > ul").append(`<li><a href=${readings[i].link} target="_blank"> ${readings[i].name}</a></li>`);
            }
      });
    }

getLinks();



$("h1").append("<span class='arrowRight'>&#9654</span>");
$(".current h1 span").addClass("arrowDown");