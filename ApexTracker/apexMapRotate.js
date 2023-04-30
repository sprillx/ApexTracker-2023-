document.addEventListener('DOMContentLoaded', () => {
    getLeaderBoardData();
  });



function getLeaderBoardData(){
    fetch(api)
    .then((response) => response.json())
    .then( data => {
    let CurrentICON =  data.current.asset
    let mapName = data.current.map
    let Duration = data.current.DurationInMinutes
    let remainingDuration  = data.current.remainingTimer;


    // Check if the image has already been appended to the DOM
    
    
    document.getElementById('currentTitle').innerHTML = mapName;
    document.getElementById('remainingTime').innerHTML  = remainingDuration;

    

        

        setTimeout(getLeaderBoardData, 1000)

})

    
}

//9dd3dc2c00b2f3d971c3697ca775ba71 