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
            affCoun();
    });
ajouteDeffUn.addEventListener("click", (e) => {
    counPlay.style.display = 'block';
    affCoun();
});
ajouteDeffDeux.addEventListener("click", (e) => {
    counPlay.style.display = 'block';
    affCoun();
});
ajouteDeffTrois.addEventListener("click", (e) => {
    counPlay.style.display = 'block';
    affCoun();
});
ajouteDeffQuatre.addEventListener("click", (e) => {
    counPlay.style.display = 'block';
    affCoun();
});
ajouteCentUn.addEventListener("click", (e) => {
    counPlay.style.display = 'block';
    affCoun();
});
ajouteCentDeux.addEventListener("click", (e) => {
    counPlay.style.display = 'block';
    affCoun();
});
ajouteCentTrois .addEventListener("click", (e) => {
    counPlay.style.display = 'block';
    affCoun();
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
    affCoun();
    
});
function affCoun() {
    const htmlContent = `
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
                <span class="statistique-un">rythme<span class="rythme">99</span></span>
                <span class="statistique-deux">tir <span class="tir">99</span></span>
                <span class="statistique-trois">passe <span class="passe">99</span></span><br>
                <span class="statistique-quatre">dribble<span class="dribble">99</span> </span>
                <span class="statistique-cinq">defense <span class="defense">99</span></span><br>
                <span class="statistique-six">physique<span class="physique">99</span></span>
          </div>
       </div>
    `;
    counPlay.insertAdjacentHTML('beforeend', htmlContent);
    
}  
  
})