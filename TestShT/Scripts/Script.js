jQuery(document).ready(function($){

   $("#address").suggestions({
        token: "9fe34da93986103c53363aeb2fef8b49d0894b06",
        type: "ADDRESS",
        /* Вызывается, когда пользователь выбирает одну из подсказок */
        onSelect: function(suggestion) {
            console.log(suggestion);
        }
    });
	
});

