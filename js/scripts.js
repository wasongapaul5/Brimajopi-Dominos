$(document).ready(function(){
    $(".whatwedo p").hide();
    $(".whatwedo img.one").click(function(){
        $(".whatwedo img.one").toggle(1200);
        $(".whatwedo p.one").toggle(1000);
    });

    $(".whatwedo p.one").click(function(){
        $(".whatwedo img.one").toggle(1200);
        $(".whatwedo p.one").toggle(1000);
    });

    $(".whatwedo img.two").click(function(){
        $(".whatwedo img.two").toggle(1200);
        $(".whatwedo p.two").toggle(1000);
    });

    $(".whatwedo p.two").click(function(){
        $(".whatwedo img.two").toggle(1200);
        $(".whatwedo p.two").toggle(1000);
    })
})