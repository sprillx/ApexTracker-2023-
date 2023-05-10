document.addEventListener('DOMContentLoaded', () => {
    getLeaderBoardData();
  });

const api = 'https://api.mozambiquehe.re/maprotation?auth=9dd3dc2c00b2f3d971c3697ca775ba71'

const BrokenMoon = 'https://hard-drive.net/wp-content/uploads/2022/10/image4-6-1.jpg'

const Olympus = 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2020/11/apex-blog-image-olympus-map-19-olympus-wide.jpg.adapt.crop191x100.628p.jpg'

const Storm = 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2022/04/monstrous-storm-point-map-update/monstrous-storm-point-map-update-thumbnail.jpg.adapt.crop16x9.575p.jpg'

const worldsEdge = 'https://www.ggrecon.com/media/3hhpv5l2/image10.jpg?mode=crop&width=682&quality=80&format=webp'


const KingsCanyon = 'https://estnn.com/wp-content/uploads/2020/02/apex-legends-kings-canyon.jpg'

function getLeaderBoardData(){
    fetch(api)
    .then((response) => response.json())
    .then( data => {
    let CurrentICON =  data.current.asset
    let mapName = data.current.map
    let Duration = data.current.DurationInMinutes
    let remainingDuration  = data.current.remainingTimer
    let nextMapMin = data.next.DurationInMinutes
    let nextMapName = data.next.map;
    let NextMap = data.next.code;

      

  


    if(data.current.map === "World's Edge"){
      document.getElementById('currentMap').src = worldsEdge;
    }
    

    if(data.current.map === "Kings Canyon"){
      document.getElementById('currentMap').src = KingsCanyon;
    }
    if(data.current.map === 'Olympus'){
      document.getElementById('currentMap').src = Olympus
    }

    if(data.current.map === 'Broken Moon'){
      document.getElementById('currentMap').src = BrokenMoon;
    }
    document.getElementById('currentMapTXT').innerHTML =" Map: "+" "+mapName +" "+" duration  "+remainingDuration;
    document.getElementById('nextMapTXT').innerHTML = nextMapName+" "+'Starts in '+nextMapMin+" minutes"

    if(data.next.code === 'broken_moon_rotation'){
      return document.getElementById('nextMap').src = BrokenMoon;
    }
    
    if(data.next.code === 'olympus_rotation'){
      return document.getElementById('nextMap').src = Olympus;
    }

    if(data.next.code === 'storm_point_rotation'){
      return document.getElementById('nextMap').src = Storm;
    }

    if(data.next.code === 'kings_canyon_rotation'){
      return document.getElementById('nextMap').src = KingsCanyon;
    }
  
    if(data.next.code === "worlds_edge_rotation"){
      return document.getElementById('nextMap').src = worldsEdge
    }
})
 
  setTimeout(getLeaderBoardData, 1000)
}

//9dd3dc2c00b2f3d971c3697ca775ba71 