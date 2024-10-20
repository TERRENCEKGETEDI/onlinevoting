let ANCVotes = document.getElementById("ANCVotes"),ANCVotesP = document.getElementById("ANCVotesP"),ANCVotesD = document.getElementById("ANCVotesD");
let DAVotes = document.getElementById("DAVotes"),DAVotesP = document.getElementById("DAVotesP"),DAVotesD = document.getElementById("DAVotesD");
let MKVotes = document.getElementById("MKVotes"),MKVotesP = document.getElementById("MKVotesP"),MKVotesD = document.getElementById("MKVotesD");
let EFFVotes = document.getElementById("EFFVotes"),EFFVotesP = document.getElementById("EFFVotesP"),EFFVotesD = document.getElementById("EFFVotesD");
let IFPVotes = document.getElementById("IFPVotes"),IFPVotesP = document.getElementById("IFPVotesP");
let IFPVotesD = document.getElementById("IFPVotesD"), PAVotesP = document.getElementById("PAVotesP"),PAVotesD = document.getElementById("PAVotesD");
let VFPLUSVotes = document.getElementById("VFPLUSVotes"),VFPLUSVotesP = document.getElementById("VFPLUSVotesP"), VFPLUSVotesD = document.getElementById("VFPLUSVotesD");
let ACTIONSAVotes = document.getElementById("ACTIONSAVotes"),ACTIONSAVotesP = document.getElementById("ACTIONSAVotesP"), ACTIONSAVotesD = document.getElementById("ACTIONSAVotesD");
let UDMVotes = document.getElementById("UDMVotes"),UDMVotesP = document.getElementById("UDMVotesP"),UDMVotesD = document.getElementById("UDMVotesD");
let ACDPVotes = document.getElementById("ACDPVotes"),ACDPVotesP = document.getElementById("ACDPVotesp"),ACDPVotesD = document.getElementById("ACDPVotesD");
let = leadECANC=0,leadECDA=0,leadECMK=0,leadECEFF=0,leadECIFP=0,leadECPA=0,leadECVFPLUS=0,leadECACTIONSA=0,leadECUDM=0,leadECACDP=0;
let = leadWCANC=0,leadWCDA=0,leadWCMK=0,leadWCEFF=0,leadWCIFP=0,leadWCPA=0,leadWCVFPLUS=0,leadWCACTIONSA=0,leadWCUDM=0,leadWCACDP=0;
let = leadFSANC=0,leadFSDA=0,leadFSMK=0,leadFSEFF=0,leadFSIFP=0,leadFSPA=0,leadFSVFPLUS=0,leadFSACTIONSA=0,leadFSUDM=0,leadFSACDP=0;
let = leadGPANC=0,leadGPDA=0,leadGPMK=0,leadGPEFF=0,leadGPIFP=0,leadGPPA=0,leadGPVFPLUS=0,leadGPACTIONSA=0,leadGPUDM=0,leadGPACDP=0;
let = leadKZANC=0,leadKZDA=0,leadKZMK=0,leadKZEFF=0,leadKZIFP=0,leadKZPA=0,leadKZVFPLUS=0,leadKZACTIONSA=0,leadKZUDM=0,leadKZACDP=0;
let = leadLPANC=0,leadLPDA=0,leadLPMK=0,leadLPEFF=0,leadLPIFP=0,leadLPPA=0,leadLPVFPLUS=0,leadLPACTIONSA=0,leadLPUDM=0,leadLPACDP=0;
let = leadMPANC=0,leadMPDA=0,leadMPMK=0,leadMPEFF=0,leadMPIFP=0,leadMPPA=0,leadMPVFPLUS=0,leadMPACTIONSA=0,leadMPUDM=0,leadMPACDP=0;
let = leadNWANC=0,leadNWDA=0,leadNWMK=0,leadNWEFF=0,leadNWIFP=0,leadNWPA=0,leadNWVFPLUS=0,leadNWACTIONSA=0,leadNWUDM=0,leadNWACDP=0;
let = leadNCANC=0,leadNCDA=0,leadNCMK=0,leadNCEFF=0,leadNCIFP=0,leadNCPA=0,leadNCVFPLUS=0,leadNCACTIONSA=0,leadNCUDM=0,leadNCACDP=0;

let votedIDs=[];
// Fetch idNO values from the Flask endpoint and store them in an array
fetch('/api/idnos')
    .then(response => response.json())
    .then(data => {
        const idNOArray = data;
        console.log('ID Numbers:', idNOArray);
        // Use idNOArray as needed
    })
    .catch(error => {
        console.error('Error fetching ID numbers:', error);
    });

console.log(document.getElementsByTagName("leadKZANC"));

let userData = {};  // Global variable to store user data
if(localStorage.getItem('votedIDs'))
    votedIDs = JSON.parse(localStorage.getItem('votedIDs'));
let userIdNO;  // Global variable specifically for data.idNO

document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/user_data')
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                console.error(data.error);
            } else {
                userData = data;  // Store fetched data in the global variable
                userIdNO = data.idNO;  // Assign data.idNO to the global variable
                const userDataElement = document.getElementById('user-data');
                userDataElement.textContent = `Province: ${data.province}, District: ${data.district}, ID NO: ${data.idNO}`;
                
                // Use the province, district, and idNO data as needed
                console.log('Your Province:', data.province);
                console.log('District:', data.district);
                console.log('ID NO:', data.idNO);

                // Store in local storage if needed
                localStorage.setItem("provinceRegistered", data.province);
                localStorage.setItem("districtRegistered", data.district);
                localStorage.setItem("idNORegistered", data.idNO);

                // Log to verify userData contains idNO
                console.log('User Data:', userData);
            }
        })
        .catch(error => console.error('Error fetching user data:', error));
});

console.log("uu "+localStorage.getItem(data.district));

ANCVotes = 0;ANCVotesP = 0;ANCVotesD = 0;DAVotes = 0;DAVotesP = 0;DAVotesD = 0;MKVotes = 0;MKVotesP = 0;MKVotesD = 0;EFFVotes = 0;EFFVotesP = 0;EFFVotesD = 0;IFPVotes = 0;IFPVotesP = 0;IFPVotesD = 0;PAVotes = 0;PAVotesP = 0;PAVotesD = 0;VFPLUSVotes = 0;VFPLUSVotesP = 0;VFPLUSVotesD = 0;ACTIONSAVotes = 0;ACTIONSAVotesP = 0;ACTIONSAVotesD = 0;UDMVotes = 0;UDMVotesP = 0;UDMVotesD = 0;ACDPVotes = 0;ACDPVotesP = 0;ACDPVotesD = 0;

function submit(){
    let verifying = document.getElementById("verifying");
    if(document.getElementById("country").value&&document.getElementById("province").value&&document.getElementById("district").value){
        verifying.style.display = "block";
        let OTPsystem = Math.floor(100000+Math.random()*900000);
        alert(OTPsystem);
        localStorage.setItem("OTPsystem",OTPsystem);
    }
    else
        alert("please select on every section");
}    
console.log("Voted :"+votedIDs);
console.log("ID :"+userData.idNO);
function confirm(){
    console.log("Voted :"+votedIDs);
    console.log("ID :"+userData.idNO);
    let v=true;
    for(let i=0;i<=votedIDs.length;i++){
        if(userData.idNO===votedIDs[i]){
            v=false;
        }
    }
        
    if(v&&document.getElementById("OTP").value===localStorage.getItem("OTPsystem")){

        votedIDs.push(userData.idNO);
        localStorage.setItem('votedIDs',JSON.stringify(votedIDs));

        let country = document.getElementById("country").value;
        let province = document.getElementById("province").value;
        let district = document.getElementById("district").value;

        ANCVotes = localStorage.getItem("ANCVotes");ANCVotesP = localStorage.getItem("ANCVotesP");ANCVotesD =localStorage.getItem("ANCVotesD");
        DAVotes =localStorage.getItem("DAVotes");DAVotesP  = localStorage.getItem("DAVotesP");DAVotesD = localStorage.getItem("DAVotesD");
        MKVotes = localStorage.getItem("MKVotes");MKVotesP = localStorage.getItem("MKVotesP");MKVotesD = localStorage.getItem("MKVotesD");
        EFFVotes = localStorage.getItem("EFFVotes");EFFVotesP = localStorage.getItem("EFFVotesP");EFFVotesD = localStorage.getItem("EFFVotesD");
        IFPVotes = localStorage.getItem("IFPVotes");IFPVotesP = localStorage.getItem("IFPVotesP");IFPVotesD= localStorage.getItem("IFPVotesD");
        PAVotes = localStorage.getItem("PAVotes");PAVotesP = localStorage.getItem("PAVotesP");PAVotesD = localStorage.getItem("PAVotesD");
        VFPLUSVotes= localStorage.getItem("VFPLUSVotes");VFPLUSVotesP = localStorage.getItem("VFPLUSVotesP");VFPLUSVotesD = localStorage.getItem("VFPLUSVotesD");
        ACTIONSAVotes= localStorage.getItem("ACTIONSAVotes");ACTIONSAVotesP = localStorage.getItem("ACTIONSAVotesP");ACTIONSAVotesD = localStorage.getItem("ACTIONSAVotesD");
        UDMVotes = localStorage.getItem("UDMVotes");UDMVotesP = localStorage.getItem("UDMVotesP");UDMVotesD = localStorage.getItem("UDMVotesD");
        ACDPVotes = localStorage.getItem("ACDPVotes");ACDPVotesP = localStorage.getItem("ACDPVotesP");ACDPVotesD = localStorage.getItem("ACDPVotesD");

        if(country == "ANC"){ANCVotes++;localStorage.setItem("ANCVotes",ANCVotes);}
        if(province === "ANC"){ANCVotesP++;localStorage.setItem("ANCVotesP",ANCVotesP);}
        if(district === "ANC"){ANCVotesD++;localStorage.setItem("ANCVotesD",ANCVotesD);} 
        if(country === "DA"){DAVotes++;localStorage.setItem("DAVotes",DAVotes);}
        if(province === "DA"){DAVotesP++;localStorage.setItem("DAVotesP",DAVotesP);}
        if(district === "DA"){DAVotesD++;localStorage.setItem("DAVotesD",DAVotesD);}
        if(country === "MK"){MKVotes++;localStorage.setItem("MKVotes",MKVotes);}
        if(province === "MK"){MKVotesP++;localStorage.setItem("MKVotesP",MKVotesP);}
        if(district === "MK"){MKVotesD++;localStorage.setItem("MKVotesD",MKVotesD);}
        if(country === "EFF"){EFFVotes++;localStorage.setItem("EFFVotes",EFFVotes);}
        if(province === "EFF"){EFFVotesP++;localStorage.setItem("EFFVotesP",EFFVotesP);}
        if(district === "EFF"){EFFVotesD++;localStorage.setItem("EFFVotesD",EFFVotesD);}
        if(country === "IFP"){IFPVotes++;localStorage.setItem("IFPVotes",IFPVotes);}
        if(province === "IFP"){IFPVotesP++;localStorage.setItem("IFPVotesP",IFPVotesP);}
        if(district === "IFP"){IFPVotesD++;localStorage.setItem("IFPVotesD",IFPVotesD);}
        if(country === "PA"){PAVotes++;localStorage.setItem("PAVotes",PAVotes);}
        if(province === "PA"){PAVotesP++;localStorage.setItem("PAVotesP",PAVotesP);}
        if(district === "PA"){PAVotesD++;localStorage.setItem("PAVotesD",PAVotesD);}  
        if(country === "VFPLUS"){VFPLUSVotes++;localStorage.setItem("VFPLUSVotes",VFPLUSVotes);}
        if(province === "VFPLUS"){VFPLUSVotesP++;localStorage.setItem("VFPLUSVotesP",VFPLUSVotesP);}
        if(district === "VFPLUS"){VFPLUSVotesD++;localStorage.setItem("VFPLUSVotesD",VFPLUSVotesD);}
        if(country === "ACTIONSA"){ACTIONSAVotes++;localStorage.setItem("ACTIONSAVotes",ACTIONSAVotes);}
        if(province === "ACTIONSA"){ACTIONSAVotesP++;localStorage.setItem("ACTIONSAVotesP",ACTIONSAVotesP);}
        if(district === "ACTIONSA"){ACTIONSAVotesD++;localStorage.setItem("ACTIONSAVotesD",ACTIONSAVotesD);}
        if(country === "UDM"){UDMVotes++;localStorage.setItem("UDMVotes",UDMVotes);}
        if(province === "UDM"){UDMVotesP++;localStorage.setItem("UDMVotesP",UDMVotesP);}
        if(district === "UDM"){UDMVotesD++;localStorage.setItem("UDMVotesD",UDMVotesD);}
        if(country === "ACDP"){ACDPVotes++;localStorage.setItem("ACDPVotes",ACDPVotes);}
        if(province === "ACDP"){ACDPVotesP++;localStorage.setItem("ACDPVotesP",ACDPVotesP);}
        if(district === "ACDP"){ACDPVotesD++;localStorage.setItem("ACDPVotesD",ACDPVotesD);}
        
        if(localStorage.getItem("provinceRegistered")==="Eastern Cape"){
            leadECANC = localStorage.getItem("leadECANC");
            leadECDA = localStorage.getItem("leadECDA");
            leadECMK = localStorage.getItem("leadECMK");
            leadECEFF = localStorage.getItem("leadECEFF");
            leadECIFP = localStorage.getItem("leadECIFP");
            leadECPA = localStorage.getItem("leadECPA");
            leadECVFPLUS = localStorage.getItem("leadECVFPLUS");
            leadECACTIONSA = localStorage.getItem("leadECACTIONSA");
            leadECUDM = localStorage.getItem("leadECUDM");
            leadECACDP = localStorage.getItem("leadECACDP");
            if(province==="ANC"){leadECANC++;localStorage.setItem("leadECANC",leadECANC);}
            else if(province==="DA"){leadECDA++;localStorage.setItem("leadECDA",leadECDA);}
            else if(province==="MK"){leadECMK++;localStorage.setItem("leadECMK",leadECMK);}
            else if(province==="EFF"){leadECEFF++;localStorage.setItem("leadECEFF",leadECEFF);}
            else if(province==="IFP"){leadECIFP++;localStorage.setItem("leadECIFP",leadECIFP);}
            else if(province==="PA"){leadECPA++;localStorage.setItem("leadECPA",leadECPA);}
            else if(province==="VFPLUS"){leadECVFPLUS++;localStorage.setItem("leadECVFPLUS",leadECVFPLUS);}
            else if(province==="ACTIONSA"){leadECACTIONSA++;localStorage.setItem("leadECACTIONSA",leadECACTIONSA);}
            else if(province==="UDM"){leadECUDM++;localStorage.setItem("leadECUDM",leadECUDM);}
            else if(province==="ACDP"){leadECACDP++;localStorage.setItem("leadECACDP",leadECACDP);}
            
console.log(document.getElementsByTagName("leadKZANC"));
            // Storing variables in an object
            const variables = {
                ANC: leadECANC,
                DA: leadECDA,
                MK: leadECMK,
                EFF: leadECEFF,
                IFP: leadECIFP,
                PA: leadECPA,
                VFPLUS: leadECVFPLUS,
                ACTIONSA: leadECACTIONSA,
                UDM: leadECUDM,
                ACDP: leadECACDP
            };

            // Finding the variable with the highest value
            let maxVar = null;
            let maxValue = -Infinity;

            for (const [key, value] of Object.entries(variables)) {
                if (value > maxValue) {
                    maxValue = value;
                    maxVar = key;
                }
            }
            leadingInEC = maxVar;
            console.log(leadingInEC);
            localStorage.setItem("leadingInEC",leadingInEC);
            
console.log(document.getElementsByTagName("leadKZANC"));
        }
        else if(localStorage.getItem("provinceRegistered")==="Free State"){
            leadFSANC = parseInt(localStorage.getItem("leadFSANC"));
            leadFSDA = parseInt(localStorage.getItem("leadFSDA"));
            leadFSMK = parseInt(localStorage.getItem("leadFSMK"));
            leadFSEFF = parseInt(localStorage.getItem("leadFSEFF"));
            leadFSIFP = parseInt(localStorage.getItem("leadFSIFP"));
            leadFSPA = parseInt(localStorage.getItem("leadFSPA"));
            leadFSVFPLUS = parseInt(localStorage.getItem("leadFSVFPLUS"));
            leadFSACTIONSA = parseInt(localStorage.getItem("leadFSACTIONSA"));
            leadFSUDM = parseInt(localStorage.getItem("leadFSUDM"));
            leadFSACDP = parseInt(localStorage.getItem("leadFSACDP"));
            if(province==="ANC"){leadFSANC++;localStorage.setItem("leadFSANC",leadFSANC);}
            else if(province==="DA"){leadFSDA++;localStorage.setItem("leadFSDA",leadFSDA);}
            else if(province==="MK"){leadFSMK++;localStorage.setItem("leadFSMK",leadFSMK);}
            else if(province==="EFF"){leadFSEFF++;localStorage.setItem("leadFSEFF",leadFSEFF);}
            else if(province==="IFP"){leadFSIFP++;localStorage.setItem("leadFSIFP",leadFSIFP);}
            else if(province==="PA"){leadFSPA++;localStorage.setItem("leadFSPA",leadFSPA);}
            else if(province==="VFPLUS"){leadFSVFPLUS++;localStorage.setItem("leadFSVFPLUS",leadFSVFPLUS);}
            else if(province==="ACTIONSA"){leadFSACTIONSA++;localStorage.setItem("leadFSACTIONSA",leadFSACTIONSA);}
            else if(province==="UDM"){leadFSUDM++;localStorage.setItem("leadFSUDM",leadFSUDM)}
            else if(province==="ACDP"){leadFSACDP++;localStorage.setItem("leadFSACDP",leadFSACDP);}

            const variables = {
                ANC: leadFSANC,
                DA: leadFSDA,
                MK: leadFSMK,
                EFF: leadFSEFF,
                IFP: leadFSIFP,
                PA: leadFSPA,
                VFPLUS: leadFSVFPLUS,
                ACTIONSA: leadFSACTIONSA,
                UDM: leadFSUDM,
                ACDP: leadFSACDP
            };

            // Finding the variable with the highest value
            let maxVar = null;
            let maxValue = -Infinity;

            for (const [key, value] of Object.entries(variables)) {
                if (value > maxValue) {
                    maxValue = value;
                    maxVar = key;
                }
            }
            leadingInFS = maxVar;
            console.log(leadingInFS);
            localStorage.setItem("leadingInFS",leadingInFS);
        }
        else if(localStorage.getItem("provinceRegistered")==="Gauteng"){
            leadGPANC = parseInt(localStorage.getItem("leadGPANC"));
            leadGPDA = parseInt(localStorage.getItem("leadGPDA"));
            leadGPMK = parseInt(localStorage.getItem("leadGPMK"));
            leadGPEFF = parseInt(localStorage.getItem("leadGPEFF"));
            leadGPIFP = parseInt(localStorage.getItem("leadGPIFP"));
            leadGPPA = parseInt(localStorage.getItem("leadGPPA"));
            leadGPVFPLUS = parseInt(localStorage.getItem("leadGPVFPLUS"));
            leadGPACTIONSA = parseInt(localStorage.getItem("leadGPACTIONSA"));
            leadGPUDM = parseInt(localStorage.getItem("leadGPUDM"));
            leadGPACDP = parseInt(localStorage.getItem("leadGPACDP"));
            if(province==="ANC"){leadGPANC++;localStorage.setItem("leadGPANC",leadGPANC);}
            else if(province==="DA"){leadGPDA++;localStorage.setItem("leadGPDA",leadGPDA);}
            else if(province==="MK"){leadGPMK++;localStorage.setItem("leadGPMK",leadGPMK);}
            else if(province==="EFF"){leadGPEFF++;localStorage.setItem("leadGPEFF",leadGPEFF);}
            else if(province==="IFP"){leadGPIFP++;localStorage.setItem("leadGPIFP",leadGPIFP);}
            else if(province==="PA"){leadGPPA++;localStorage.setItem("leadGPPA",leadGPPA);}
            else if(province==="VFPLUS"){leadGPVFPLUS++;localStorage.setItem("leadGPVFPLUS",leadGPVFPLUS);}
            else if(province==="ACTIONSA"){leadGPACTIONSA++;localStorage.setItem("leadGPACTIONSA",leadGPACTIONSA);}
            else if(province==="UDM"){leadGPUDM++;localStorage.setItem("leadGPUDM",leadGPUDM);}
            else if(province==="ACDP"){leadGPACDP++;localStorage.setItem("leadGPACDP",leadGPACDP);}
            const variables = {
                ANC: leadGPANC,
                DA: leadGPDA,
                MK: leadGPMK,
                EFF: leadGPEFF,
                IFP: leadGPIFP,
                PA: leadGPPA,
                VFPLUS: leadGPVFPLUS,
                ACTIONSA: leadGPACTIONSA,
                UDM: leadGPUDM,
                ACDP: leadGPACDP
            };

            // Finding the variable with the highest value
            let maxVar = null;
            let maxValue = -Infinity;

            for (const [key, value] of Object.entries(variables)) {
                if (value > maxValue) {
                    maxValue = value;
                    maxVar = key;
                }
            }
            leadingInGP = maxVar;
            console.log(leadingInGP);
            localStorage.setItem("leadingInGP",leadingInGP);
        }
        else if(localStorage.getItem("provinceRegistered")==="KwaZulu Natal"){
            leadKZANC = parseInt(localStorage.getItem("leadKZANC"));
            leadKZDA = parseInt(localStorage.getItem("leadKZDA"));
            leadKZMK = parseInt(localStorage.getItem("leadKZMK"));
            leadKZEFF = parseInt(localStorage.getItem("leadKZEFF"));
            leadKZIFP = parseInt(localStorage.getItem("leadKZIFP"));
            leadKZPA = parseInt(localStorage.getItem("leadKZPA"));
            leadKZVFPLUS = parseInt(localStorage.getItem("leadKZVFPLUS"));
            leadKZACTIONSA = parseInt(localStorage.getItem("leadKZACTIONSA"));
            leadKZUDM = parseInt(localStorage.getItem("leadKZUDM"));
            leadKZACDP = parseInt(localStorage.getItem("leadKZACDP"));
            if(province==="ANC"){leadKZANC++;localStorage.setItem("leadKZANC",leadKZANC);}
            else if(province==="DA"){leadKZDA++;localStorage.setItem("leadKZDA",leadKZDA);}
            else if(province==="MK"){leadKZMK++;localStorage.setItem("leadKZMK",leadKZMK);}
            else if(province==="EFF"){leadKZEFF++;localStorage.setItem("leadKZEFF",leadKZEFF);}
            else if(province==="IFP"){leadKZIFP++;localStorage.setItem("leadKZIFP",leadKZIFP);}
            else if(province==="PA"){leadKZPA++;localStorage.setItem("leadKZPA",leadKZPA);}
            else if(province==="VFPLUS"){leadKZVFPLUS++;localStorage.setItem("leadKZVFPLUS",leadKZVFPLUS);}
            else if(province==="ACTIONSA"){leadKZACTIONSA++;localStorage.setItem("leadKZACTIONSA",leadKZACTIONSA);}
            else if(province==="UDM"){leadKZUDM++;localStorage.setItem("leadKZUDM",leadKZUDM);}
            else if(province==="ACDP"){leadKZACDP++;localStorage.setItem("leadKZACDP",leadKZACDP);}
            // Create an object with variable names as keys and their values
            const variables = {
                ANC: leadKZANC,
                DA: leadKZDA,
                MK: leadKZMK,
                EFF: leadKZEFF,
                IFP: leadKZIFP,
                PA: leadKZPA,
                VFPLUS: leadKZVFPLUS,
                ACTIONSA: leadKZACTIONSA,
                UDM: leadKZUDM,
                ACDP: leadKZACDP
            };

            // Finding the variable with the highest value
            let maxVar = null;
            let maxValue = -Infinity;

            for (const [key, value] of Object.entries(variables)) {
                if (value > maxValue) {
                    maxValue = value;
                    maxVar = key;
                }
            }
            leadingInKZ = maxVar;
            console.log(leadingInKZ);
            localStorage.setItem("leadingInKZ",leadingInKZ);

        }
        else if(localStorage.getItem("provinceRegistered")==="Limpopo"){
            leadLPANC = parseInt(localStorage.getItem("leadLPANC"));
            leadLPDA = parseInt(localStorage.getItem("leadLPDA"));
            leadLPMK = parseInt(localStorage.getItem("leadLPMK"));
            leadLPEFF = parseInt(localStorage.getItem("leadLPEFF"));
            leadLPIFP = parseInt(localStorage.getItem("leadLPIFP"));
            leadLPPA = parseInt(localStorage.getItem("leadLPPA"));
            leadLPVFPLUS = parseInt(localStorage.getItem("leadLPVFPLUS"));
            leadLPACTIONSA = parseInt(localStorage.getItem("leadLPACTIONSA"));
            leadLPUDM = parseInt(localStorage.getItem("leadLPUDM"));
            leadLPACDP = parseInt(localStorage.getItem("leadLPACDP"));
            if(province==="ANC"){leadLPANC++;localStorage.setItem("leadLPANC",leadLPANC);}
            else if(province==="DA"){leadLPDA++;localStorage.setItem("leadLPDA",leadLPDA);}
            else if(province==="MK"){leadLPMK++;localStorage.setItem("leadLPMK",leadLPMK);}
            else if(province==="EFF"){leadLPEFF++;localStorage.setItem("leadLPEFF",leadLPEFF);}
            else if(province==="IFP"){leadLPIFP++;localStorage.setItem("leadLPIFP",leadLPIFP);}
            else if(province==="PA"){leadLPPA++;localStorage.setItem("leadLPPA",leadLPPA);}
            else if(province==="VFPLUS"){leadLPVFPLUS++;localStorage.setItem("leadLPVFPLUS",leadLPVFPLUS);}
            else if(province==="ACTIONSA"){leadLPACTIONSA++;localStorage.setItem("leadLPACTIONSA",leadLPACTIONSA);}
            else if(province==="UDM"){leadLPUDM++;localStorage.setItem("leadLPUDM",leadLPUDM);}
            else if(province==="ACDP"){leadLPACDP++;localStorage.setItem("leadLPACDP",leadLPACDP);}
            const variables = {
                ANC: leadLPANC,
                DA: leadLPDA,
                MK: leadLPMK,
                EFF: leadLPEFF,
                IFP: leadLPIFP,
                PA: leadLPPA,
                VFPLUS: leadLPVFPLUS,
                ACTIONSA: leadLPACTIONSA,
                UDM: leadLPUDM,
                ACDP: leadLPACDP
            };

            // Finding the variable with the highest value
            let maxVar = null;
            let maxValue = -Infinity;

            for (const [key, value] of Object.entries(variables)) {
                if (value > maxValue) {
                    maxValue = value;
                    maxVar = key;
                }
            }
            leadingInLP = maxVar;
            console.log(leadingInLP);
            localStorage.setItem("leadingInLP",leadingInLP);
        }
        else if(localStorage.getItem("provinceRegistered")==="Mpumalanga"){
            leadMPANC = parseInt(localStorage.getItem("leadMPANC"));
            leadMPDA = parseInt(localStorage.getItem("leadMPDA"));
            leadMPMK = parseInt(localStorage.getItem("leadMPMK"));
            leadMPEFF = parseInt(localStorage.getItem("leadMPEFF"));
            leadMPIFP = parseInt(localStorage.getItem("leadMPIFP"));
            leadMPPA = parseInt(localStorage.getItem("leadMPPA"));
            leadMPVFPLUS = parseInt(localStorage.getItem("leadMPVFPLUS"));
            leadMPACTIONSA = parseInt(localStorage.getItem("leadMPACTIONSA"));
            leadMPUDM = parseInt(localStorage.getItem("leadMPUDM"));
            leadMPACDP = parseInt(localStorage.getItem("leadMPACDP"));
            if(province==="ANC"){leadMPANC++;localStorage.setItem("leadMPANC",leadMPANC);}
            else if(province==="DA"){leadMPDA++;localStorage.setItem("leadMPDA",leadMPDA);}
            else if(province==="MK"){leadMPMK++;localStorage.setItem("leadMPMK",leadMPMK);}
            else if(province==="EFF"){leadMPEFF++;localStorage.setItem("leadMPEFF",leadMPEFF);}
            else if(province==="IFP"){leadMPIFP++;localStorage.setItem("leadMPIFP",leadMPIFP);}
            else if(province==="PA"){leadMPPA++;localStorage.setItem("leadMPPA",leadMPPA);}
            else if(province==="VFPLUS"){leadMPVFPLUS++;localStorage.setItem("leadMPVFPLUS",leadMPVFPLUS);}
            else if(province==="ACTIONSA"){leadMPACTIONSA++;localStorage.setItem("leadMPACTIONSA",leadMPACTIONSA);}
            else if(province==="UDM"){leadMPUDM++;localStorage.setItem("leadMPUDM",leadMPUDM);}
            else if(province==="ACDP"){leadMPACDP++;localStorage.setItem("leadMPACDP",leadMPACDP);}
            const variables = {
                ANC: leadMPANC,
                DA: leadMPDA,
                MK: leadMPMK,
                EFF: leadMPEFF,
                IFP: leadMPIFP,
                PA: leadMPPA,
                VFPLUS: leadMPVFPLUS,
                ACTIONSA: leadMPACTIONSA,
                UDM: leadMPUDM,
                ACDP: leadMPACDP
            };

            // Finding the variable with the highest value
            let maxVar = null;
            let maxValue = -Infinity;

            for (const [key, value] of Object.entries(variables)) {
                if (value > maxValue) {
                    maxValue = value;
                    maxVar = key;
                }
            }
            leadingInMP = maxVar;
            console.log(leadingInMP);
            localStorage.setItem("leadingInMP",leadingInMP);
        }
        else if(localStorage.getItem("provinceRegistered")==="North West"){
            leadNWANC = parseInt(localStorage.getItem("leadNWANC"));
            leadNWDA = parseInt(localStorage.getItem("leadNWDA"));
            leadNWMK = parseInt(localStorage.getItem("leadNWMK"));
            leadNWEFF = parseInt(localStorage.getItem("leadNWEFF"));
            leadNWIFP = parseInt(localStorage.getItem("leadNWIFP"));
            leadNWPA = parseInt(localStorage.getItem("leadNWPA"));
            leadNWVFPLUS = parseInt(localStorage.getItem("leadNWVFPLUS"));
            leadNWACTIONSA = parseInt(localStorage.getItem("leadNWACTIONSA"));
            leadNWUDM = parseInt(localStorage.getItem("leadNWUDM"));
            leadNWACDP = parseInt(localStorage.getItem("leadNWACDP"));
            if(province==="ANC"){leadNWANC++;localStorage.setItem("leadNWANC",leadNWANC);}
            else if(province==="DA"){leadNWDA++;localStorage.setItem("leadNWDA",leadNWDA);}
            else if(province==="MK"){leadNWMK++;localStorage.setItem("leadNWMK",leadNWMK);}
            else if(province==="EFF"){leadNWEFF++;localStorage.setItem("leadNWEFF",leadNWEFF);}
            else if(province==="IFP"){leadNWIFP++;localStorage.setItem("leadNWIFP",leadNWIFP);}
            else if(province==="PA"){leadNWPA++;localStorage.setItem("leadNWPA",leadNWPA);}
            else if(province==="VFPLUS"){leadNWVFPLUS++;localStorage.setItem("leadNWVFPLUS",leadNWVFPLUS)}
            else if(province==="ACTIONSA"){leadNWACTIONSA++;localStorage.setItem("leadNWACTIONSA",leadNWACTIONSA);}
            else if(province==="UDM"){leadNWUDM++;localStorage.setItem("leadNWUDM",leadNWUDM);}
            else if(province==="ACDP"){leadNWACDP++;localStorage.setItem("leadNWACDP",leadNWACDP);}
            const variables = {
                ANC: leadNWANC,
                DA: leadNWDA,
                MK: leadNWMK,
                EFF: leadNWEFF,
                IFP: leadNWIFP,
                PA: leadNWPA,
                VFPLUS: leadNWVFPLUS,
                ACTIONSA: leadNWACTIONSA,
                UDM: leadNWUDM,
                ACDP: leadNWACDP
            };

            // Finding the variable with the highest value
            let maxVar = null;
            let maxValue = -Infinity;

            for (const [key, value] of Object.entries(variables)) {
                if (value > maxValue) {
                    maxValue = value;
                    maxVar = key;
                }
            }
            leadingInNW = maxVar;
            console.log(leadingInNW);
            localStorage.setItem("leadingInNW",leadingInNW);
        }
        else if(localStorage.getItem("provinceRegistered")==="Northern Cape"){
            leadNCANC = parseInt(localStorage.getItem("leadNCANC"));
            leadNCDA = parseInt(localStorage.getItem("leadNCDA"));
            leadNCMK = parseInt(localStorage.getItem("leadNCMK"));
            leadNCEFF = parseInt(localStorage.getItem("leadNCEFF"));
            leadNCIFP = parseInt(localStorage.getItem("leadNCIFP"));
            leadNCPA = parseInt(localStorage.getItem("leadNCPA"));
            leadNCVFPLUS = parseInt(localStorage.getItem("leadNCVFPLUS"));
            leadNCACTIONSA = parseInt(localStorage.getItem("leadNCACTIONSA"));
            leadNCUDM = parseInt(localStorage.getItem("leadNCUDM"));
            leadNCACDP = parseInt(localStorage.getItem("leadNCACDP"));
            if(province==="ANC"){leadNCANC++;localStorage.setItem("leadNCANC",leadNCANC);}
            else if(province==="DA"){leadNCDA++;localStorage.setItem("leadNCDA",leadNCDA);}
            else if(province==="MK"){leadNCMK++;localStorage.setItem("leadNCMK",leadNCMK);}
            else if(province==="EFF"){leadNCEFF++;localStorage.setItem("leadNCEFF",leadNCEFF);}
            else if(province==="IFP"){leadNCIFP++;localStorage.setItem("leadNCIFP",leadNCIFP);}
            else if(province==="PA"){leadNCPA++;localStorage.setItem("leadNCPA",leadNCPA);}
            else if(province==="VFPLUS"){leadNCVFPLUS++;localStorage.setItem("leadNCVFPLUS",leadNCVFPLUS);}
            else if(province==="ACTIONSA"){leadNCACTIONSA++;localStorage.setItem("leadNCACTIONSA",leadNCACTIONSA);}
            else if(province==="UDM"){leadNCUDM++;localStorage.setItem("leadNCUDM",leadNCUDM);}
            else if(province==="ACDP"){leadNCACDP++;localStorage.setItem("leadNCACDP",leadNCACDP);}
            const variables = {
                ANC: leadNCANC,
                DA: leadNCDA,
                MK: leadNCMK,
                EFF: leadNCEFF,
                IFP: leadNCIFP,
                PA: leadNCPA,
                VFPLUS: leadNCVFPLUS,
                ACTIONSA: leadNCACTIONSA,
                UDM: leadNCUDM,
                ACDP: leadNCACDP
            };
            // Finding the variable with the highest value
            let maxVar = null;
            let maxValue = -Infinity;

            for (const [key, value] of Object.entries(variables)) {
                if (value > maxValue) {
                    maxValue = value;
                    maxVar = key;
                }
            }
            leadingInNC = maxVar;
            console.log(leadingInNC);
            localStorage.setItem("leadingInNC",leadingInNC);
        }
        else if(localStorage.getItem("provinceRegistered")==="Western Cape"){
            leadWCANC = parseInt(localStorage.getItem("leadWCANC"));
            leadWCDA = parseInt(localStorage.getItem("leadWCDA"));
            leadWCMK = parseInt(localStorage.getItem("leadWCMK"));
            leadWCEFF = parseInt(localStorage.getItem("leadWCEFF"));
            leadWCIFP = parseInt(localStorage.getItem("leadWCIFP"));
            leadWCPA = parseInt(localStorage.getItem("leadWCPA"));
            leadWCPA = parseInt(localStorage.getItem("leadWCPA"));
            leadWCVFPLUS = parseInt(localStorage.getItem("leadWCVFPLUS"));
            leadWCACTIONSA = parseInt(localStorage.getItem("leadWCACTIONSA"));
            leadWCUDM = parseInt(localStorage.getItem("leadWCUDM"));
            leadWCACDP = parseInt(localStorage.getItem("leadWCACDP"));
            if(province==="ANC"){leadWCANC++;localStorage.setItem("leadWCANC",leadWCANC);}
            else if(province==="DA"){leadWCDA++;localStorage.setItem("leadWCDA",leadWCDA);}
            else if(province==="MK"){leadWCMK++;localStorage.setItem("leadWCMK",leadWCMK);}
            else if(province==="EFF"){leadWCEFF++;localStorage.setItem("leadWCEFF",leadWCEFF);}
            else if(province==="IFP"){leadWCIFP++;localStorage.setItem("leadWCIFP",leadWCIFP);}
            else if(province==="PA"){leadWCPA++;localStorage.setItem("leadWCPA",leadWCPA);}
            else if(province==="VFPLUS"){leadWCVFPLUS++;localStorage.setItem("leadWCVFPLUS",leadWCVFPLUS);}
            else if(province==="ACTIONSA"){leadWCACTIONSA++;localStorage.setItem("leadWCACTIONSA",leadWCACTIONSA);}
            else if(province==="UDM"){leadWCUDM++;localStorage.setItem("leadWCUDM",leadWCUDM);}
            else if(province==="ACDP"){leadWCACDP++;localStorage.setItem("leadWCACDP",leadWCACDP);}
            const variables = {
                ANC: leadWCANC,
                DA: leadWCDA,
                MK: leadWCMK,
                EFF: leadWCEFF,
                IFP: leadWCIFP,
                PA: leadWCPA,
                VFPLUS: leadWCVFPLUS,
                ACTIONSA: leadWCACTIONSA,
                UDM: leadWCUDM,
                ACDP: leadWCACDP
            };
            // Finding the variable with the highest value
            let maxVar = null;
            let maxValue = -Infinity;

            for (const [key, value] of Object.entries(variables)) {
                if (value > maxValue) {
                    maxValue = value;
                    maxVar = key;
                }
            }
            leadingInWC = maxVar;
            console.log(leadingInWC);
            localStorage.setItem("leadingInWC",leadingInWC);
        }
        
        alert("You have voted");
        window.location.href="parties.html";
    }
    else{
        alert("Invalid OTP! or ID number already voted");
    }
}
//here

function deleterecords(){
    localStorage.setItem("ANCVotes",0);localStorage.setItem("ANCVotesP",0);localStorage.setItem("ANCVotesD",0);
    localStorage.setItem("DAVotes",0);localStorage.setItem("DAVotesP",0);localStorage.setItem("DAVotesD",0);
    localStorage.setItem("MKVotes",0);localStorage.setItem("MKVotesP",0);localStorage.setItem("MKVotesD",0);
    localStorage.setItem("EFFVotes",0);localStorage.setItem("EFFVotesP",0);localStorage.setItem("EFFVotesD",0);
    localStorage.setItem("IFPVotes",0);localStorage.setItem("IFPVotesP",0);localStorage.setItem("IFPVotesD",0);
    localStorage.setItem("PAVotes",0);localStorage.setItem("PAVotesP",0);localStorage.setItem("PAVotesD",0);
    localStorage.setItem("VFPLUSVotes",0);localStorage.setItem("VFPLUSVotesP",0);localStorage.setItem("VFPLUSVotesD",0);
    localStorage.setItem("ACTIONSAVotes",0);localStorage.setItem("ACTIONSAVotesP",0);localStorage.setItem("ACTIONSAVotesD",0);
    localStorage.setItem("UDMVotes",0);localStorage.setItem("UDMVotesP",0);localStorage.setItem("UDMVotesD",0);
    localStorage.setItem("ACDPVotes",0);localStorage.setItem("ACDPVotesP",0);localStorage.setItem("ACDPVotesD",0);

    localStorage.setItem("leadECANC",0);localStorage.setItem("leadECDA",0);localStorage.setItem("leadECMK",0);localStorage.setItem("leadECEFF",0);localStorage.setItem("leadECIFP",0);localStorage.setItem("leadECPA",0);localStorage.setItem("leadECVFPLUS",0);localStorage.setItem("leadECACTIONSA",0);localStorage.setItem("leadECUDM",0);localStorage.setItem("leadECACDP",0);
    localStorage.setItem("leadWCANC",0);localStorage.setItem("leadWCDA",0);localStorage.setItem("leadWCMK",0);localStorage.setItem("leadWCEFF",0);localStorage.setItem("leadWCIFP",0);localStorage.setItem("leadWCPA",0);localStorage.setItem("leadWCVFPLUS",0);localStorage.setItem("leadWCACTIONSA",0);localStorage.setItem("leadWCUDM",0);localStorage.setItem("leadWCACDP",0);
    localStorage.setItem("leadFSANC",0);localStorage.setItem("leadFSDA",0);localStorage.setItem("leadFSMK",0);localStorage.setItem("leadFSEFF",0);localStorage.setItem("leadFSIFP",0);localStorage.setItem("leadFSPA",0);localStorage.setItem("leadFSVFPLUS",0);localStorage.setItem("leadFSACTIONSA",0);localStorage.setItem("leadFSUDM",0);localStorage.setItem("leadFSACDP",0);
    localStorage.setItem("leadGPANC",0);localStorage.setItem("leadGPDA",0);localStorage.setItem("leadGPMK",0);localStorage.setItem("leadGPEFF",0);localStorage.setItem("leadGPIFP",0);localStorage.setItem("leadGPPA",0);localStorage.setItem("leadGPVFPLUS",0);localStorage.setItem("leadGPACTIONSA",0);localStorage.setItem("leadGPUDM",0);localStorage.setItem("leadGPACDP",0);
    localStorage.setItem("leadKZANC",0);localStorage.setItem("leadKZDA",0);localStorage.setItem("leadKZMK",0);localStorage.setItem("leadKZEFF",0);localStorage.setItem("leadKZIFP",0);localStorage.setItem("leadKZPA",0);localStorage.setItem("leadKZVFPLUS",0);localStorage.setItem("leadKZACTIONSA",0);localStorage.setItem("leadKZUDM",0);localStorage.setItem("leadKZACDP",0);
    localStorage.setItem("leadLPANC",0);localStorage.setItem("leadLPDA",0);localStorage.setItem("leadLPMK",0);localStorage.setItem("leadLPEFF",0);localStorage.setItem("leadLPIFP",0);localStorage.setItem("leadLPPA",0);localStorage.setItem("leadLPVFPLUS",0);localStorage.setItem("leadLPACTIONSA",0);localStorage.setItem("leadLPUDM",0);localStorage.setItem("leadLPACDP",0);
    localStorage.setItem("leadMPANC",0);localStorage.setItem("leadMPDA",0);localStorage.setItem("leadMPMK",0);localStorage.setItem("leadMPEFF",0);localStorage.setItem("leadMPIFP",0);localStorage.setItem("leadMPPA",0);localStorage.setItem("leadMPVFPLUS",0);localStorage.setItem("leadMPACTIONSA",0);localStorage.setItem("leadMPUDM",0);localStorage.setItem("leadMPACDP",0);
    localStorage.setItem("leadNWANC",0);localStorage.setItem("leadNWDA",0);localStorage.setItem("leadNWMK",0);localStorage.setItem("leadNWEFF",0);localStorage.setItem("leadNWIFP",0);localStorage.setItem("leadNWPA",0);localStorage.setItem("leadNWVFPLUS",0);localStorage.setItem("leadNWACTIONSA",0);localStorage.setItem("leadNWUDM",0);localStorage.setItem("leadNWACDP",0);
    localStorage.setItem("leadNCANC",0);localStorage.setItem("leadNCDA",0);localStorage.setItem("leadNCMK",0);localStorage.setItem("leadNCEFF",0);localStorage.setItem("leadNCIFP",0);localStorage.setItem("leadNCPA",0);localStorage.setItem("leadNCVFPLUS",0);localStorage.setItem("leadNCACTIONSA",0);localStorage.setItem("leadNCUDM",0);localStorage.setItem("leadNCACDP",0);

    localStorage.setItem("leadingInEC"," ");
    localStorage.setItem("leadingInFS"," ");
    localStorage.setItem("leadingInGP"," ");
    localStorage.setItem("leadingInKZ"," ");
    localStorage.setItem("leadingInLP"," ");
    localStorage.setItem("leadingInMP"," ");
    localStorage.setItem("leadingInNW"," ");
    localStorage.setItem("leadingInNC"," ");
    localStorage.setItem("leadingInWC"," ");

    localStorage.setItem('votedIDs','');
}

function parties(){
    window.location.href = "parties.html"
}
function privacy(){
    window.location.href="privacy.html"
}function votes(){
    window.location.href="votes.html"
}function aboutus(){
    window.location.href="aboutus.html"
}
