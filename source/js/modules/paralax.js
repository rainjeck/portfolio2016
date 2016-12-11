﻿// создаем паралакс
var parallax = (function () {

	// берем элементы, которые будем двигать

	// берем блок с картинкой
	var doc = document,
		bg = doc.querySelector('.header__picture'),
		// блок с юзером
		user = doc.querySelector('.header__user'),
		// блок с Portfolio
		sectionText = doc.querySelector('.header__icon');

	// возвращаем результат функции
	return {
		move: function (block,windowScroll,strafeAmount) {
			// block - какой блок двигаем
			// windowScroll - на сколько пролистали страницу
			// strafeAmount - коэффециент, на который будем делить для скорости

			// вычисляем значение для движения в процентах
			var strafe = windowScroll / -strafeAmount + '%';

			// переключаем нагрузку на видеокарту
			var transformString = 'translate3d(0,' + strafe + ',0)';

			// добавляем стиль к нашему блоку
			var style = block.style;

			// используем transform для смещения
			// в этом случае просчет осуществляется только один раз, что снижает нагрузку
			style.transform = transformString;
			style.webkitTransform = transformString;

			// присваиваем значению 'top' переменную strafe - это будет процент смещения
			style.top = strafe;

		},


		init: function(wScroll) {
			// двигаем 'bg' в зависимости от 'wScroll' и задаем коэффициет (чем он больше, тем медленнее двигается)
			this.move(bg, wScroll, 60);
			this.move(sectionText, wScroll, 30);
			this.move(user, wScroll, 50);
		}
	}
}());

window.onscroll = function() {
	// узнаем на сколько прокрутили страницу
	var wScroll = window.pageYOffset;

	// вызываем parallax по скроллу
	parallax.init(wScroll);
};