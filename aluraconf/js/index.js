function paraBaixo(selector){

    $(selector).click(function(event){
        event.preventDefault();

        var target = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);  
    });

}

paraBaixo('a[href*=painel-sobre]');
paraBaixo('a[href*=painel-palestrantes]');
paraBaixo('a[href*=contato]');