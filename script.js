async function fetchData() {
    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            console.log(this.responseText);
        }
    });

    xhr.open('GET', 'https://seatgeek-seatgeekcom.p.rapidapi.com/taxonomies');
    xhr.setRequestHeader('X-RapidAPI-Key', '6c919b9ef5mshda593d3efd1e614p188c66jsn91407e42a2f6');
    xhr.setRequestHeader('X-RapidAPI-Host', 'seatgeek-seatgeekcom.p.rapidapi.com');

    xhr.send(data);
    // document.getElementById("concerts").innerHTML = result.data.map(item => "<li>${item.name}</li>").join('');
}
fetchData();
// const res = await fetch('https://concerts-artists-events-tracker.p.rapidapi.com/location?name=Toronto&minDate=2023-03-21&maxDate=2023-05-25&page=1') ;
// const record = await res.json() ;
// console.log( "record" , record ) ; 

