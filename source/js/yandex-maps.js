ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
          center: [59.938660, 30.323010],
          zoom: 16,
          controls: []
      }, {
          searchControlProvider: 'yandex#search'
      }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: 'Собственный значок метки',
          balloonContent: 'Наш офис'
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: 'img/icon-map-marker.svg',
          // Размеры метки.
          iconImageSize: [36, 35],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-5, -38]
      });

      myMap.controls.add(new ymaps.control.ZoomControl({
        options: {
          position: {
            left: 10,
            top: 80
          }
        }
      }));

  myMap.geoObjects
      .add(myPlacemark)
      .add(myPlacemarkWithContent);
});
