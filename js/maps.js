$(window).load(function(){
   var markers = new Array();
    var iconSrc = {};
    iconSrc['Mx Marchioni'] = '../images/icon-market.png';
     
var locations = [

['Jose Pedro Alessandri 1946', '+569 39166627<br> Venta, Servicios, Repuestos', 'Megamotos', -33.47234072535552, -70.5985548963031, 1],
    
['Quillota 384, Viña del Mar', '323616440<br> Venta, Servicios, Repuestos', 'Bikesport', -33.44085116782232, -70.57316243648529, 1],

['Av Ossa 1430', '+56 9 95757730<br> Venta, Servicios, Repuestos', 'Gsc Motos', -33.47234072535552, -70.5985548963031, 1],
    
['Av. Departamental 4500', '+56 2 3228 0759<br> Venta, Servicios, Repuestos', 'Escuela de manejo', -33.5092116, -70.5957178, 1],

['Uno sur 2168', '+569 92461074<br> Venta, Servicios, Repuestos', 'Automotora Arauco', -35.428967365230434, -71.64368120114966, 1],
    
['Av. Vicuña Mackenna Ote. 8264', '224916093<br> Venta, Servicios, Repuestos', 'Potromotos', -33.530819628958206, -70.59461694016727, 1],

['Av. Ohiggins 1174', '+56 9 48634596<br> Venta, Servicios, Repuestos', 'Rkb', -36.61301219711533,-72.11171664213316, 1],
    
['Colón 701', '43 2 345595<br> Venta, Servicios, Repuestos', 'Mx Marchioni', -37.4650597, -72.3526268, 1]
    
];

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 6,
      center: new google.maps.LatLng(-35.675148, -71.5429688),
      mapTypeId: google.maps.MapTypeId.ROADMAP

    });

    var infowindow = new google.maps.InfoWindow();
    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][3], locations[i][4]),
        map: map,
        icon: iconSrc[locations[i][1]]
      });       

      markers.push(marker);
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]+"<br />"+locations[i][2]+"<br />"+locations[i][1]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }

      function show(category) {
        for (var i=0; i<locations.length; i++) {
          if (locations[i][2] == category) {
            markers[i].setVisible(true);

          }

        }

      }

      function hide(category) {
        for (var i=0; i<locations.length; i++) {
          if (locations[i][2] == category) {
            markers[i].setVisible(false);

          }

        }

      }
    
    $(".checkbox").click(function(){
            var cat = $(this).attr("value");
        
        // If checked

            if ($(this).is(":checked"))
            {
               show(cat);
            }
            else
            {
                hide(cat);
            }
    });
});//]]>  
