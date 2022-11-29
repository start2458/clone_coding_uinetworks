let cnt = 0;
let current = 0;
let fadeDiv = $(".slideList").find("div");
$(".lbtn").click(function(){
    let next = (current-1)%3;

        if(next < 3){
            fadeDiv.eq(current+1).fadeOut();
            fadeDiv.eq(next+1).fadeIn();
            current = next;
        }else{
            fadeDiv.eq(current).fadeOut();
            fadeDiv.eq(next).fadeIn();
            current = next;
        }
});
$(".rbtn").click(function(){
        let next = (current+1)%3;
    
        fadeDiv.eq(current).fadeOut();
        fadeDiv.eq(next).fadeIn();
        current = next;
});