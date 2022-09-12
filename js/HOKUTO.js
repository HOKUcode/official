$(function(){
    $(".btn-gnavi").on("click", function(){
var rightVal=0;
if($(this).hasClass("open")){
    rightVal=-300;
    $(this).removeClass("open");
}else{
    $(this).addClass("open");   
}
        
$("#menu-navi").stop().animate({
    right: rightVal
},200);
    }); 
});

/*テキスト*/
$(function (){
    $("#section01 h1" ).textillate  ({
       loop:true,
     in:{
        effect:'flash',
        delay: 50,
        shuffle: true
    },
    out:{
        effect: 'flash',
        delay: 50
    }
    });
})




   


ScrollReveal().reveal('.anime',{
    duration:900,
    viewFactor:0.1,
    opacity: 0.3,
    reset:true
});









