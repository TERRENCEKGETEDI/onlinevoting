
setInterval(Live,1000);
function Live(){
	let ANCVotes = document.getElementById("ANCVotes").innerHTML = localStorage.getItem("ANCVotes");
	let ANCVotesP = document.getElementById("ANCVotesP").innerHTML = localStorage.getItem("ANCVotesP");
	let ANCVotesD = document.getElementById("ANCVotesD").innerHTML = localStorage.getItem("ANCVotesD");
	let DAVotes = document.getElementById("DAVotes").innerHTML = localStorage.getItem("DAVotes");
	let DAVotesP = document.getElementById("DAVotesP").innerHTML = localStorage.getItem("DAVotesP");
	let DAVotesD = document.getElementById("DAVotesD").innerHTML = localStorage.getItem("DAVotesD");
	let MKVotes = document.getElementById("MKVotes").innerHTML = localStorage.getItem("MKVotes");
	let MKVotesP = document.getElementById("MKVotesP").innerHTML = localStorage.getItem("MKVotesP");
	let MKVotesD = document.getElementById("MKVotesD").innerHTML = localStorage.getItem("MKVotesD");
	let EFFVotes = document.getElementById("EFFVotes").innerHTML = localStorage.getItem("EFFVotes");
	let EFFVotesP = document.getElementById("EFFVotesP").innerHTML = localStorage.getItem("EFFVotesP");
	let EFFVotesD = document.getElementById("EFFVotesD").innerHTML = localStorage.getItem("EFFVotesD");
	let IFPVotes = document.getElementById("IFPVotes").innerHTML = localStorage.getItem("IFPVotes");
	let IFPVotesP = document.getElementById("IFPVotesP").innerHTML = localStorage.getItem("IFPVotesP");
	let IFPVotesD = document.getElementById("IFPVotesD").innerHTML = localStorage.getItem("IFPVotesD");
	let PAVotes = document.getElementById("PAVotes").innerHTML = localStorage.getItem("PAVotes");
	let PAVotesP = document.getElementById("PAVotesP").innerHTML = localStorage.getItem("PAVotesP");
	let PAVotesD = document.getElementById("PAVotesD").innerHTML = localStorage.getItem("PAVotesD");
	let VFPLUSVotes = document.getElementById("VFPLUSVotes").innerHTML = localStorage.getItem("VFPLUSVotes");
	let VFPLUSVotesP = document.getElementById("VFPLUSVotesP").innerHTML = localStorage.getItem("VFPLUSVotesP");
	let VFPLUSVotesD = document.getElementById("VFPLUSVotesD").innerHTML = localStorage.getItem("VFPLUSVotesD");
	let ACTIONSAVotes = document.getElementById("ACTIONSAVotes").innerHTML = localStorage.getItem("ACTIONSAVotes");
	let ACTIONSAVotesP = document.getElementById("ACTIONSAVotesP").innerHTML = localStorage.getItem("ACTIONSAVotesP");
	let ACTIONSAVotesD = document.getElementById("ACTIONSAVotesD").innerHTML = localStorage.getItem("ACTIONSAVotesD");
	let UDMVotes = document.getElementById("UDMVotes").innerHTML = localStorage.getItem("UDMVotes");
	let UDMVotesP = document.getElementById("UDMVotesP").innerHTML = localStorage.getItem("UDMVotesP");
	let UDMVotesD = document.getElementById("UDMVotesD").innerHTML = localStorage.getItem("UDMVotesD");
	let ACDPVotes = document.getElementById("ACDPVotes").innerHTML = localStorage.getItem("ACDPVotes");
	let ACDPVotesP = document.getElementById("ACDPVotesP").innerHTML = localStorage.getItem("ACDPVotesP");
	let ACDPVotesD = document.getElementById("ACDPVotesD").innerHTML = localStorage.getItem("ACDPVotesD");
}
function parties(){
    window.location.href = "#"
}
function privacy(){
    window.location.href="privacy.html"
}
function votes(){
    window.location.href="votes.html"
}
function home(){
    window.location.href="index.html"
}
function aboutus(){
    window.location.href="aboutus.html"
}