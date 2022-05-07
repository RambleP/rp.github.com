$(function() {
	//第一部分
	$('.u-img').click(function(e) {
        e.stopPropagation();
        var picSrc = $(this).attr("src")
        $('.u2-img').attr("src",picSrc)
        $('.m-img').show() 
    });
    $('.m-img').click(function(){
        $('.m-img').hide() 
    })

    //第二部分
    $('.m-block').children().click(function(e) {
         e.stopPropagation();
         $('.m-img2').children().hide();
         $('.m-block').children().css("background", "#fff");
         $(".m-img2 ." + $(this).attr("class")).show();
         $(this).css("background", "#C0C0C0");
    });
    $(".g-index_2").click(function(event) {
        $('.m-img2').children().hide();
        $('.m-block').children().css("background", "#fff");
    });

    //第三部分
    
    $(".g-index_3").children(":last").click(function(e) {
        let i = Math.round(Math.random()*3); 
        var newdiv = $("<div class=\"m-new\"><div>" + 
            ($(".m-new").length+1) + "</div><div><span>内容</span>"+
            "</div><div class=\"m-button2\">Delete</div>" +"</div>");
        if ($(".m-new").length == 0) {
            newdiv.prependTo($(".g-index_3"));
        }
        else {
            newdiv.insertAfter($(".g-index_3").children(".m-new:last"));
        }
    });

    $("body").on("click", ".m-button2", function() {
        $(this).parent().remove();
        $(".m-new").each(function(i,n){
            $(n).children().first().text(i+1);
        });
        


    });
    
   


})