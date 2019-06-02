window.addEventListener('load',()=>{
    let long;
    let lat;
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position=>{
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const proxy ="https://cors-anywhere.herokuapp.com/";
            const api = `${proxy}https://api.darksky.net/forecast/5fd0a9e654ac5cfd8e3a2fd73fc8ca7f/${lat},${long}`;
             fetch(api)
             .then(response =>{
                 return response.json();
                })
            .then(data =>{
                console.log(data);
           
        
             });
        });

    }
});