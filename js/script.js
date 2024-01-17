$(document).ready(function() {

    /* popular place animate */

   $(".subPupularPlace div").hover(function() {
    $(this).addClass("popularplacehover");
    }, function() {
        $(this).removeClass("popularplacehover");
    }
   );
   

    /* service img animate */

    $(".subservice div").hover(function() {
        $(this).addClass("subservicehover");
    }, function() {
        $(this).removeClass("subservicehover");
    }  
    );


    $(".restimg span img").hover(function() {
        $(this).addClass("restimghover");
    }, function() {
        $(this).removeClass("restimghover");
    }
    );


    /* Animation */

    $(".tourImg").hover(function() {
        $(".shade2, .shade3").css("display", "block");
     },function() {
        $(".shade2, .shade3").removeAttr("style");
     }
     );

}); 
