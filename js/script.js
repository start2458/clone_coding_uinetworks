let cnt = 0;
let current = 0;
let fadeDiv = $(".slideList").find("div");
$(".lbtn").click(function(){
    let next = (current-1)%3;

        if(next < 3){
            fadeDiv.eq(current+1).fadeOut(700);
            fadeDiv.eq(next+1).fadeIn(700);
            current = next;
        }else{
            fadeDiv.eq(current).fadeOut(700);
            fadeDiv.eq(next).fadeIn(700);
            current = next;
        }
});
$(".rbtn").click(function(){
        let next = (current+1)%3;
    
        fadeDiv.eq(current).fadeOut(700);
        fadeDiv.eq(next).fadeIn(700);
        current = next;
});
$(".hmenu").mouseover(function(){
    $(".submenu").show();
});
$(".hmenu").mouseleave(function(){
    $(".submenu").hide();
});