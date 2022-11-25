// КАРУСЕЛЬ //
console.log('qq');
//Обработка клика на стрелку вправо
$(document).on('click', ".carousel-button-right",function(e){
    e.stopPropagation();
    e.preventDefault(); 
	var carusel = $(this).parents('.carousel');
	right_carusel(carusel);
	return false;
});
//Обработка клика на стрелку влево
$(document).on('click',".carousel-button-left",function(){ 
    e.stopPropagation();
    e.preventDefault();
	var carusel = $(this).parents('.carousel');
	left_carusel(carusel);
	return false;
});
function left_carusel(carusel){
   var block_width = $(carusel).find('.carousel-block').outerWidth();
   $(carusel).find(".carousel-items .carousel-block").eq(-1).clone().prependTo($(carusel).find(".carousel-items")); 
   $(carusel).find(".carousel-items").css({"left":"-"+block_width+"px"});
   $(carusel).find(".carousel-items .carousel-block").eq(-1).remove();    
   $(carusel).find(".carousel-items").animate({left: "0px"}, 200); 
   
}
function right_carusel(carusel){
   var block_width = $(carusel).find('.carousel-block').outerWidth();
   $(carusel).find(".carousel-items").animate({left: "-"+ block_width +"px"}, 200, function(){
	  $(carusel).find(".carousel-items .carousel-block").eq(0).clone().appendTo($(carusel).find(".carousel-items")); 
      $(carusel).find(".carousel-items .carousel-block").eq(0).remove(); 
      $(carusel).find(".carousel-items").css({"left":"0px"}); 
   }); 
}

$(function() {
//Раскомментируйте строку ниже, чтобы включить автоматическую прокрутку карусели
	auto_right('.carousel:first');
})

// Автоматическая прокрутка
function auto_right(carusel){
	setInterval(function(){
		if (!$(carusel).is('.hover'))
			right_carusel(carusel);
	}, 3000)
}
// Навели курсор на карусель
$(document).on('mouseenter', '.carousel', function(){$(this).addClass('hover')})
//Убрали курсор с карусели
$(document).on('mouseleave', '.carousel', function(){$(this).removeClass('hover')})



// ТАЙМЕР //
var kolichestvoMinut = 30;  // желаемое время таймера в минутах 
  var tekuscheyeVremya = new Date(); // получаем сегодняшнюю дату и время
  var deadlineTime = tekuscheyeVremya.setMinutes(tekuscheyeVremya.getMinutes() + 30); // устанавливаем таймер 
  // обновляем скрипт каждую секунду – так мы получаем обратный отсчет
  var obratniyOtschet = setInterval(function() {
    var seychas = new Date().getTime(); // текущее время
    var ostatokVremeni = deadlineTime - seychas; // находим различие между текущим моментом и временем дедлайна
    // преобразовываем значение миллисекунд в минуты и секунды
    var minuti = Math.floor( (ostatokVremeni % (1000 * 60 * 60)) / (1000 * 60) );
    var secundi = Math.floor( (ostatokVremeni % (1000 * 60)) / 1000 );
    // если значение текущей минуты или секунды меньше 10, добавляем вначале ведущий ноль
    minuti = minuti < 10 ? "0" + minuti : minuti;
    secundi = secundi < 10 ? "0" + secundi : secundi;
    // отображаем результат таймера в элементе с id="deadline-timer"
    document.getElementById("deadline-timer").innerHTML = minuti + ":" + secundi;
    // если в таймере остались только секунды, меняем слово "минуты" на "секунды"
    if (minuti == 0) {
      document.getElementById("min-or-sec").innerHTML = "секунд";
    }
    // когда обратный отсчет закончился, отображаем соответствующее уведомление
    if (ostatokVremeni < 0) {
      clearInterval(obratniyOtschet);
      document.getElementById("time-remainer").innerHTML = "<h2>Время истекло!</h2>";
     }
  }, 1000);



// ПОДСКАЗКИ //
$(document).on('focus',".styled-input",function(){ 
   $(this).next().removeClass('hidden');
});

$(document).on('blur',".styled-input",function(){ 
   $(this).next().addClass('hidden');
});