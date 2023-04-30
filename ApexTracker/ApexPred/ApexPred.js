const api = 'https://api.mozambiquehe.re/predator?auth=9dd3dc2c00b2f3d971c3697ca775ba71'




function getLeaderBoard(){
    fetch(api)
    .then((response) => response.json())
    .then( data => console.log(data))
}