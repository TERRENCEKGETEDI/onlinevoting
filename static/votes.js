document.addEventListener('DOMContentLoaded', () => {
    function idss(){

    const userCountElement = document.getElementById('user-count');
    const userIdsElement = document.getElementById('user-ids');

    // Fetch and display the number of registered users
    fetch('/api/user_count')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            userCountElement.textContent = data.user_count;
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            userCountElement.textContent = 'Error loading user count';
        });

    // Fetch and display the user IDs
    fetch('/api/user_ids')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            userIdsElement.textContent = data.user_ids.join(', ');
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            userIdsElement.textContent = 'Error loading user IDs';
        });
    }setInterval(idss,1000);
});

setInterval(Live,1000);
function Live(){
    
    let easternCape = document.getElementById("easternCape").innerHTML=localStorage.getItem("leadingInEC");
    let freeState = document.getElementById("freeState").innerHTML=localStorage.getItem("leadingInFS");
    let gauteng = document.getElementById("gauteng").innerHTML=localStorage.getItem("leadingInGP");
    let kwaZuluNatal = document.getElementById("kwaZuluNatal").innerHTML=localStorage.getItem("leadingInKZ");
    let limpopo = document.getElementById("limpopo").innerHTML=localStorage.getItem("leadingInLP");
    let mpumalanga = document.getElementById("mpumalanga").innerHTML=localStorage.getItem("leadingInMP");
    let northWest = document.getElementById("northWest").innerHTML=localStorage.getItem("leadingInNW");
    let northernCape = document.getElementById("northernCape").innerHTML=localStorage.getItem("leadingInNC");
    let westernCape = document.getElementById("westernCape").innerHTML=localStorage.getItem("leadingInWC");
}
function parties(){
    window.location.href = "parties.html"
}
function privacy(){
    window.location.href="privacy.html"
}
function votes(){
    window.location.href="#"
}
function home(){
    window.location.href="index.html"
}
function aboutus(){
    window.location.href="aboutus.html"
}