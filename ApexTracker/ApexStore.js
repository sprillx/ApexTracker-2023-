const api = 'https://api.mozambiquehe.re/store?auth=9dd3dc2c00b2f3d971c3697ca775ba71';

const titleText = document.querySelector('#Title');
const TitleText = document.querySelector('#Title2');




function getStore(){
    fetch(api)
    .then((response) => response.json())
    .then(data => {
    
    const bundleName = data[0].bundle;
    const start = data[0].startDate;
    const endStart = data[0].endDate;

    const Asset = data[0].asset;
    const Title = data[0].title

    const Asset2 =  data[1].asset;
    const Title2 = data[1].title

    const Asset3 = data[5].asset;
    const Title3 = data[5].title;


    const Asset4 = data[3].asset;
    const Title4 = data[3].title;
        console.log(bundleName);
        console.log(start);
        console.log(endStart);
        console.log(data)
        console.log(Asset);
        console.log(Title)

        console.log(Asset2);
        console.log(Title2);
        
        let ICONURLS = document.createElement('img');
        ICONURLS.src = Asset;


        let bundle2Icon = document.createElement('img');
        bundle2Icon.src = Asset2
        

        let bundle3Icon = document.createElement('img');
        bundle3Icon.src = Asset3;

        let bundle4Icon = document.createElement('img');
        bundle4Icon.src = Asset4;


        console.log(data)

        document.getElementById('Icon').appendChild(ICONURLS);
        document.getElementById('Title').innerHTML = Title;

        document.getElementById('Icon2').append(bundle2Icon)
        document.getElementById('Title2').innerHTML = Title2;


        document.getElementById('Icon3').appendChild(bundle3Icon);
        document.getElementById('Title3').innerHTML = Title3


        document.getElementById('Title4').innerHTML = Title4;
        document.getElementById('Icon4').appendChild(bundle4Icon);
    })
}