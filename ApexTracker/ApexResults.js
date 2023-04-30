


const Level  = document.getElementById('Level');
const Br  = document.querySelector('#BR');
const Arenas = document.querySelector('#Arenas');


function getResults(){
    

    fetch(`https://api.mozambiquehe.re/bridge?auth=9dd3dc2c00b2f3d971c3697ca775ba71&player=ChromeHearts14&platform=PC`)
    .then( (response) => response.json())
    .then( data => {
        const Leveling = data.global.level;
        const arenas = data.global.arena.rankDiv;
            const arenaIMG = data.global.arena.rankImg;
            const name = data.global.name;
        const RankName= data.global.rank.rankName;
        const RankTier = data.global.rank.rankImg;
        const Rank = data.global.rank.rankScore;
        const rankDiv = data.global.rank.rankDiv;
        const legendIcon = data.legends.selected.ImgAssets.banner


        
    //Adding the rank image to the page
        let rankURl = document.createElement('img');
        rankURl.src = RankTier;
        rankURl.style.width = '40px'
        rankURl.style.height = '40px'
        document.getElementById('RankImage').append(rankURl);


        let legendIconURL = document.createElement('img');
        legendIconURL.src = legendIcon;
        legendIconURL.style.width = '1600px'
        legendIconURL.style.height = '300px'

        document.getElementById('masthead').append(legendIconURL);
        console.log(legendIconURL);

    



         console.log(data)
         console.log(Rank);
         console.log(RankTier);
         console.log(rankDiv);
         console.log(RankName);
    
         document.getElementById('rankName').innerHTML = RankName;
         document.getElementById('rankDiv').innerHTML = rankDiv;
         document.getElementById('LevelTier').innerHTML = Leveling;


         document.getElementById('levelName').innerHTML = Leveling;


        
    })
  
}

