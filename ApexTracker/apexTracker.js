const Platform2 = document.querySelector('#Platform2');
let PlatFormVal2 = "PC";
let PlatFormTxT2 = "";

function changeVal() {
  PlatFormVal2 = Platform2.options[Platform2.selectedIndex].value;
  PlatFormTxT2 = Platform2.options[Platform2.selectedIndex].text;

  console.log(PlatFormVal2, PlatFormTxT2);
}

Platform2.addEventListener('change', changeVal);

if (Platform2 && Platform2.options.length > 0) {
  console.log('Script is running.');
} else {
  console.error('Select element not found or has no options.');
}

const btn = document.querySelector('#searchButton');
btn.addEventListener('click', testingData);
function testingData(event) {
  event.preventDefault();

  let searchBar = document.getElementById('SearchBar').value;
  
  fetch(`https://api.mozambiquehe.re/bridge?auth=9dd3dc2c00b2f3d971c3697ca775ba71&player=${searchBar}&platform=${PlatFormVal2}`)
    .then((response) => response.json())
    .then(data => {
      const Leveling = data.global.level;
      const arenas = data.global.arena.rankDiv;
      const arenaIMG = data.global.arena.rankImg;
      const name = data.global.name;
      const RankName= data.global.rank.rankName;
      const RankTier = data.global.rank.rankImg;
      const Rank = data.global.rank.rankScore;
      const rankDiv = data.global.rank.rankDiv;
      const legendIcon = data.legends.selected.ImgAssets.banner
  
      let rankURl = document.createElement('img');
      rankURl.src = RankTier;
      rankURl.style.width = '40px'
      rankURl.style.height = '40px'
      
  
      let legendIconURL = document.createElement('img');
      legendIconURL.src = legendIcon;
      legendIconURL.style.width = '100px'
      legendIconURL.style.height = '300px'


      let arenaURL = document.createElement('img');
      arenaURL.src = arenaIMG;

  
      console.log(legendIconURL);
      console.log(data);
      console.log(Rank);
      console.log(RankTier);
      console.log(rankDiv);
      console.log(RankName);
  
      console.log(Platform2);

      
      const queryParams = new URLSearchParams({
        rank: rankURl.src,
        div: rankDiv,
        name: name,
        Level: Leveling,
        legendIcon: legendIconURL.src,
        arena: arenaURL.src
      });
      window.location.href = `ApexResults.html?${queryParams.toString()}`;
    })
    .catch(error => {
      console.error(error);
      
    });
}

function getData(){

  const searchBar = document.getElementById('searchbar').value;
 
  fetch(`https://api.mozambiquehe.re/bridge?auth=9dd3dc2c00b2f3d971c3697ca775ba71&player=${searchBar}&platform=${PlatFormVal2}`)
  .then(response => response.json())
  .then(data => {

    const Leveling = data.global.level;
    const arenas = data.global.arena.rankDiv;
    const arenaIMG = data.global.arena.rankImg;
    const name = data.global.name;
    const RankName= data.global.rank.rankName;
    const RankTier = data.global.rank.rankImg;
    const Rank = data.global.rank.rankScore;
    const rankDiv = data.global.rank.rankDiv;
    const legendIcon = data.legends.selected.ImgAssets.banner

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
    console.log(data);
    console.log(Rank);
    console.log(RankTier);
    console.log(rankDiv);
    console.log(RankName);

    document.getElementById('rankName').innerHTML = RankName;
    document.getElementById('rankDiv').innerHTML = rankDiv;
    document.getElementById('LevelTier').innerHTML = Leveling;
    document.getElementById('levelName').innerHTML = Leveling;

    window.location.href = "OutsideWork/ApexTracker/apextracker.html";


  })
}


