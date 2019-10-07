$(document).ready(function(){
    
    $(".more p.one").click(function(){
        $(".more img.one").toggle(1200);
        $(".more p.one").toggle(1000);
    });

    $(".more img.one").click(function(){
        $(".more img.one").toggle(1200);
        $(".more p.one").toggle(1000);
    });

    $(".more p.two").click(function(){
        $(".more img.two").toggle(1200);
        $(".more p.two").toggle(1000);
    });

    $(".more img.two").click(function(){
        $(".more img.two").toggle(1200);
        $(".more p.two").toggle(1000);
    });

    $(".more p.three").click(function(){
        $(".more img.three").toggle(1200);
        $(".more p.three").toggle(1000);
    });

    $(".more img.three").click(function(){
        $(".more img.three").toggle(1200);
        $(".more p.three").toggle(1000);
    });

    $(".more h3").click(function(){
        $(".more img.one").toggle(1200);
        $(". morep.one").toggle(1000);
    });


    $(".table").hide();
    $(".additional-buttons").hide();
    $(".additional-info").hide();
    $(".btn.yes").hide();
    $(".btn-no").hide();
    $(".additional-info h4").hide();

    $(".btn.order").click(function(){
        var sizeOfpizza = $(".size option:selected").val();
        var toppingsOfpizza = $(".toppings option:selected").val();
        var crustOfpizza = $(".crust option:selected").val();
        var total = parseInt(sizeOfpizza) + parseInt(toppingsOfpizza) + parseInt(crustOfpizza);
        var order=1;
        var grandTotal = 0;
    });

    $("table").show();
    $(".additional-buttons").show();
    $(".btn.order").hide();

    $(".btn.add-pizza").click(function(){
        var sizeofpizza = $(".size option:selected").val();
        var toppingsOfpizza = $(".toppings option:selected").val();
        var crustOfpizza = $(".crustOf option.selected").val();
        var total = parseInt(sizeOfpizza) + parseInt(toppingsOfpizza) + parseInt(crustOfpizza);
        order = order +1;
        grandTotal = grandTotal + total;
    })
})




