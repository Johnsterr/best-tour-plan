ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map(
    "map",
    {
      center: [7.838904, 98.298647],
      zoom: 14,
    },
    {
      searchControlProvider: "yandex#search",
    }
  );

  myMap.geoObjects.add(
    new ymaps.Placemark(
      [7.838904, 98.298647],
      {
        balloonContent: "<b>Hilton Phuket Arcadia Resort & SPA</b>",
      },
      {
        preset: "islands#icon",
        iconColor: "red",
      }
    )
  );
}
