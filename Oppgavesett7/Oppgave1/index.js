mapboxgl.accessToken = 'pk.eyJ1IjoibHVkdmlra3ZhbHN2aWsiLCJhIjoiY2s5NGFnOG45MDVjMzNvbnhoanBzb3BoNCJ9.UyR6o9v82LFpr3naB6_YLg';

const knapper = document.querySelector("#knapper")
const btnmat1 = document.querySelector("#btnmat1")
const btnmat2 = document.querySelector("#btnmat2")
const btnmat3 = document.querySelector("#btnmat3")
const btnmat4 = document.querySelector("#btnmat4")
const btnmat5 = document.querySelector("#btnmat5")

const map = new mapboxgl.Map({
container: 'kart',
style: 'mapbox://styles/mapbox/streets-v11',
zoom: 16,
center: [5.632218, 62.343398]

});

const changeMode = (evt) => {
    const knapp = evt.target
    const mode = knapp.dataset.mode
    
    map.setStyle(mode)

}

const flyTil = (evt) => {
    const knapp = evt.target;
    const lng = knapp.dataset.lng;
    const lat = knapp.dataset.lat;

    map.flyTo({
        center: [lng, lat],
        zoom: 18


    })



}






knapper.onclick = changeMode;
matknapper.onclick = flyTil;