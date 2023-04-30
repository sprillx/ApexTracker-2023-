

const api = 'https://api.mozambiquehe.re/servers?auth=9dd3dc2c00b2f3d971c3697ca775ba71'


function serverStatus(){
    fetch(api)
    .then((response) => response.json())
    .then(data => {

        console.log(data);

        let{Status, HTTPCode, ResponseTime}= data.ApexOauth_Crossplay.Asia


      console.log(Status)
      console.log(HTTPCode);
      console.log(ResponseTime);


        let {Status: StatusSA, HTTPCode: HTTPCodeSA, ResponseTime: ResponseTimeSA} = data.ApexOauth_Crossplay.SouthAmerica;
        console.log(StatusSA);
        console.log(HTTPCodeSA);
        console.log(ResponseTimeSA);

        let { Status: StatusEU, HTTPCode: HTTPCODEEU, ResponseTime: ResponseTimeEU} = data.ApexOauth_Crossplay['EU-East']
        let{ Status: StatusEUW, HTTPCode: HTTPCODERUW, ResponseTime: ResponseTimeEUW} = data.ApexOauth_Crossplay['EU-West'];
        let{Status: StatusUSE, HTTPCode: HTTPCodeUSE, ResponseTime: ResponseTimeUSE} = data.ApexOauth_Crossplay['US-East'];
        let{Status: StatusUSW, ResponseTime: ResponseTimeUSW} = data.ApexOauth_Crossplay['US-West'];
        let{Status: StatusSouthAm, ResponseTime: ResponseTimeSOUTH} = data.ApexOauth_Crossplay['SouthAmerica'];
        let{Status: StatusUSCEN, ResponseTime: ResponseTimeUSCENTRAL} =  data.ApexOauth_Crossplay['US-Central'];
        let{Status: StatusASIA, ResponseTime: ResponseTimeAsia} = data.ApexOauth_Crossplay['Asia'];




        console.log(StatusEU);
        console.log(HTTPCODEEU)
        console.log(StatusEUW);
        console.log(StatusUSE);
        console.log(ResponseTimeUSE);
        console.log(HTTPCodeUSE)

        document.getElementById('StatusAsia').innerHTML = 'Asia  - Server Status : '+StatusASIA+"  "+'  '+ResponseTimeAsia+"  "
        document.getElementById('StatusEUEAST').innerHTML ='EU East - Server Status : '+StatusEU+"  "+' '+ResponseTimeEU+"  "
        document.getElementById('StatusEUWest').innerHTML =' EU West - Server Status : '+StatusEUW+" "+' '+ResponseTimeEUW+"  "
        document.getElementById('StatusUSE').innerHTML = 'US East - Server Status : '+StatusUSE+" "+'  ' +ResponseTimeUSE+" "
        document.getElementById('StatusUSW').innerHTML = 'US West - Server Status : '+StatusUSW+"  "+'   '+ResponseTimeUSW+" "
        document.getElementById('StatusSM').innerHTML = 'SouthAmerica - Server Status : '+StatusSouthAm+ResponseTimeSOUTH
        document.getElementById('USCENTRAL').innerHTML = 'US Central - Server Status : '+StatusUSCEN+" "+ResponseTimeUSCENTRAL+" "


        let{Status: StatusOL, HTTPCode: HTTPOL, ResponseTime: ResponseTimeOL} = data.Origin_login['Asia'];
        let{Status: StatusOLUS, HTTPCode: HTTPUS, ResponseTime: ResponseTimeOLUS} = data.Origin_login['US-East'];
        let{Status: StatusOLUSW, HTTPCode: HTTPUSW, ResponseTime: ResponseTimeOLUSW} = data.Origin_login['US-West'];
        let{Status: StatusOLEU, HTTPCode: HTTPEU, ResponseTime: ResponseTimeOLEU} = data.Origin_login['EU-East'];
        let{Status: StatusOLEUW, HTTPCode: httpsEUW, ResponseTime: ResponseTimeOLEUW} = data.Origin_login['EU-West'];
        let{Status: StatusOLUSC, ResponseTime: ResponseTimeOLUSC} = data.Origin_login['US-Central'];
        let{Status: StatusOLSM, ResponseTime: ResponseOLSM} = data.Origin_login['SouthAmerica'];
        






        document.getElementById('StatusOLAsia').innerHTML = 'Asia - Server Status : '+StatusOL+" "+' '+ResponseTimeOL+" "
        document.getElementById('StatusOLUSE').innerHTML = 'US East - Server Status : '+StatusOLUS+" "+" "+ResponseTimeOLUS+" "
        document.getElementById('StatusOLEUEAST').innerHTML = 'EU East -  Server Status : '+StatusOLEU+" "+' '+ResponseTimeOLEU+" "
        document.getElementById('StatusUSEolWES').innerHTML = 'EU West - Server Status : '+StatusOLEUW+" "+" "+ResponseTimeOLEUW+" "
        document.getElementById('StatusOLUSW').innerHTML = 'US West - Server Status : '+StatusOLEUW+" "+''+ResponseTimeOLUSW+" "
        document.getElementById('OLUSCENTRAL').innerHTML = 'US Central - Server Status : '+StatusOLUSC+" "+" "+ResponseTimeOLUSC+" "
        document.getElementById('StatusSMOL').innerHTML = 'South America - Server Status : '+StatusOLSM+"  "+"  "+ResponseOLSM+" "



      let{Status: StatusPS, ResponseTime: ResponseTimePS} = data.otherPlatforms['Playstation-Network'];
      let{Status: StatusXBOX, ResponseTime: ResponseTimeXBOX} = data.otherPlatforms['Xbox-Live'];



      document.getElementById('PlayStationStatus').innerHTML = 'PlayStation  - Server Status : '+StatusPS+" "
      document.getElementById('XboxStatus').innerHTML  = 'XboxLive - Server Status : '+StatusXBOX+" "

      let{Status: EAasia, ResponseTime: RTasia} = data.EA_accounts['Asia'];
      let{Status: EAeu, ResponseTime: RTeu} =  data.EA_accounts['EU-East'];
     let {Status: EAeuw, ResponseTime: RTeuw} =  data.EA_accounts['EU-West'];
     let {Status: EAsm, ResponseTime: RTsm} =  data.EA_accounts['SouthAmerica'];
     let {Status: EAUSC, ResponseTime: RTUSC} =   data.EA_accounts['US-Central'];
     let {Status: EAUSE, ResponseTime: RTUSE} =  data.EA_accounts['US-East'];
     let {Status: EAUSW, ResponseTime: RTUSW} = data.EA_accounts['US-West']



     document.getElementById('EAasia').innerHTML = 'Asia - Server Status : '+EAasia+" "+" "+RTasia+" "
     document.getElementById('EAeu').innerHTML = 'EU East - Server Status : '+EAeu+" "+" "+RTeu+" "
      document.getElementById('EUeuW').innerHTML =  'EU West - Server Status : '+EAeuw+" "+" "+RTeuw+" "
      document.getElementById('EASM').innerHTML = 'South America - Server Status : '+EAsm+" "+" "+RTsm+" "
      document.getElementById('EAUSC').innerHTML =  'US Central - Server Status : '+EAUSC+" "+" "+RTUSC+" "
      document.getElementById('EAUSe').innerHTML = 'US East - Server Status : '+EAUSE+" "+" "+RTUSE+" "
      document.getElementById('EAUSW').innerHTML = 'US West - Server Status : '+EAUSW+" "+" "+RTUSW+" "
    
  
    });
}
   