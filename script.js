document.addEventListener('DOMContentLoaded', () => {
    const emergencyButton = document.getElementById('emergency-button');
    
    emergencyButton.addEventListener('click', () => {
        alert('Emergency button pressed!');
    });

    initMap();
});

function initMap() {
    const mapOptions = {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
    };
    
    const map = new google.maps.Map(document.getElementById('map'), mapOptions);
}
