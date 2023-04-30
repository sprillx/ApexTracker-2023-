const api = 'https://api.mozambiquehe.re/maprotation?auth=9dd3dc2c00b2f3d971c3697ca775ba71'


function getImage(){
    fetch(api)
.then((response) => response.json())
.then( data => {
    let imageResult = data.current.asset;

    let ICON =  document.createElement('img');
    ICON.src = imageResult;


    document.getElementById('imageResult').append(ICON)

    console.log(ICON)
})
}