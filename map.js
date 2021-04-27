let map;

    function initMap() {
        map = new google.maps.Map(document.getElementById("map"),
            {
                center: { lat: -34.56, lng: 138.56 },
                zoom: 8,
            });
    }