document.addEventListener('DOMContentLoaded',() => {
let cardPlayers = document.getElementsByClassName('card-player'); 
let counPlay = document.querySelector('.coun-play');
let close = document.querySelector('#close'); 
const ajouteGk = document.getElementById('ajouter-gk'); 
const ajouteDeffUn=document.getElementById('ajouter-cb1');
const ajouteDeffDeux=document.getElementById('ajouter-cb2');
const ajouteDeffTrois=document.getElementById('ajouter-rb');
const ajouteDeffQuatre=document.getElementById('ajouter-lb');
const ajouteCentUn=document.getElementById('ajouter-cm1');
const ajouteCentDeux=document.getElementById('ajouter-cm2');
const ajouteCentTrois=document.getElementById('ajouter-cm3');
const ajouteRf=document.getElementById('ajouter-rf');
const ajouteLf=document.getElementById('ajouter-lf');
const ajouteSt=document.getElementById('ajouter-st');
const ajoute=document.getElementById('ajouter');
fetch("/js/data.json")
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log("Data fetched successfully:", data);
    })
    .catch((error) => {
        console.error("Unable to fetch data:", error);
    });


close.addEventListener("click", (e) => {
    counPlay.style.display ='none';
});
ajouteGk.addEventListener("click", (e) => {
            counPlay.style.display = 'block';
    });
ajouteDeffUn.addEventListener("click", (e) => {
    counPlay.style.display = 'block';
});
ajouteDeffDeux.addEventListener("click", (e) => {
    counPlay.style.display = 'block';
});
ajouteDeffTrois.addEventListener("click", (e) => {
    counPlay.style.display = 'block';
});
ajouteDeffQuatre.addEventListener("click", (e) => {
    counPlay.style.display = 'block';
});
ajouteRf.addEventListener("click", (e) => {
    counPlay.style.display = 'block';
    affCoun();
});
ajouteLf.addEventListener("click", (e) => {
    counPlay.style.display = 'block';
    affCoun();
});
ajouteSt.addEventListener("click", (e) => {
    counPlay.style.display = 'block';
    affCoun();
});

ajoute.addEventListener("click", (e) => {
    counPlay.style.display = 'block';
    
});
function affCoun(){
    const red=document.createElement('div');
    red.innerHTML += `
        <div class="card-player">
              <img src="https://cdn.sofifa.net/players/158/023/25_120.png" alt="joueur photo">
              <div class="post-total">
                <span id="total-player">85</span><br>
                <span id="position">RF</span>
              </div>
              <div class="flag-club">
                <span class="flag">
                    <img src="https://cdn.sofifa.net/flags/ar.png" >
                </span>
                <span class="club">
                    <img src="https://cdn.sofifa.net/meta/team/239235/120.png" >
                </span>
              </div>
              <div class="statistiques">
                    <span class="statistique-un">rythme <br> <span class="rythme">99</span></span><br>
                    <span class="statistique-deux">tir <br><span class="tir">99</span></span><br>
                    <span class="statistique-trois">passe  <br><span class="passe">99</span></span><br>
                    <span class="statistique-quatre">dribble <br><span class="dribble">99</span> </span><br>
                    <span class="statistique-cinq">defense <br><span class="defense">99</span></span><br>
                    <span class="statistique-six">physique<br><span class="physique">99</span></span><br>  
              </div>
        </div>
    `;
    counPlay.appendChild(red);
}  
  
})