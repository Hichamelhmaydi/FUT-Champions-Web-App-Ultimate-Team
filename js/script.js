document.addEventListener('DOMContentLoaded', () => {
    let counPlay = document.querySelector('.coun-play');
    let close = document.querySelector('#close');
    const ajouteGk = document.getElementById('ajouter-gk');
    const ajouteDeffUn = document.getElementById('ajouter-cb1');
    const ajouteDeffDeux = document.getElementById('ajouter-cb2');
    const ajouteDeffTrois = document.getElementById('ajouter-rb');
    const ajouteDeffQuatre = document.getElementById('ajouter-lb');
    const ajouteCentUn = document.getElementById('ajouter-cm1');
    const ajouteCentDeux = document.getElementById('ajouter-cm2');
    const ajouteCentTrois = document.getElementById('ajouter-cm3');
    const ajouteRf = document.getElementById('ajouter-rf');
    const ajouteLf = document.getElementById('ajouter-lf');
    const ajouteSt = document.getElementById('ajouter-st');
    const ajoute = document.getElementById('ajouter');

    fetch("/js/data.json")
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            let arr = data.players; 
            console.log(arr);

            arr.forEach(element => {
                if(element.position==="GK"){
                    const htmlContent = `
                    <div class="card-player">
                       <img src="${element.photo}" alt="joueur photo">
                       <div class="post-total">
                         <span id="total-player">${element.rating}</span><br>
                         <span id="position">${element.position}</span>
                       </div>
                       <div class="flag-club">
                         <span class="flag">
                             <img src="${element.flag}" alt="${element.nationality}">
                         </span>
                         <span class="club">
                             <img src="${element.logo}" alt="${element.club}">
                         </span>
                       </div>
                       <div class="statistiques">
                             <span class="statistique-un">rating<span class="rythme">${element.rating}</span></span>
                             <span class="statistique-deux">diving <span class="tir">${element.diving}</span></span><br>
                             <span class="statistique-trois">handling <span class="passe">${element.handling}</span></span>
                             <span class="statistique-quatre">kicking<span class="dribble">${element.kicking}</span></span><br>
                             <span class="statistique-cinq">reflexes <span class="defense">${element.reflexes}</span></span>
                             <span class="statistique-six">speed<span class="physique">${element.speed}</span></span>
                       </div>
                    </div>
                 `;
                    counPlay.insertAdjacentHTML('beforeend', htmlContent);
                }else{
                const htmlContent = `
                <div class="card-player">
                   <img src="${element.photo}" alt="joueur photo">
                   <div class="post-total">
                     <span id="total-player">${element.rating}</span><br>
                     <span id="position">${element.position}</span>
                   </div>
                   <div class="flag-club">
                     <span class="flag">
                         <img src="${element.flag}" alt="${element.nationality}">
                     </span>
                     <span class="club">
                         <img src="${element.logo}" alt="${element.club}">
                     </span>
                   </div>
                   <div class="statistiques">
                         <span class="statistique-un">rythme<span class="rythme">${element.pace}</span></span>
                         <span class="statistique-deux">tir <span class="tir">${element.shooting}</span></span>
                         <span class="statistique-trois">passe <span class="passe">${element.passing}</span></span><br>
                         <span class="statistique-quatre">dribble<span class="dribble">${element.dribbling}</span></span>
                         <span class="statistique-cinq">defense <span class="defense">${element.defending}</span></span><br>
                         <span class="statistique-six">physique<span class="physique">${element.physical}</span></span>
                   </div>
                </div>
             `;
                counPlay.insertAdjacentHTML('beforeend', htmlContent);}
            });
        })
        .catch((error) => {
            console.error("Unable to fetch data:", error);
        });

    close.addEventListener("click", (e) => {
        counPlay.style.display = 'none';
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
    ajouteCentUn.addEventListener("click", (e) => {
        counPlay.style.display = 'block';
    });
    ajouteCentDeux.addEventListener("click", (e) => {
        counPlay.style.display = 'block';
    });
    ajouteCentTrois.addEventListener("click", (e) => {
        counPlay.style.display = 'block';
    });
    ajouteRf.addEventListener("click", (e) => {
        counPlay.style.display = 'block';
    });
    ajouteLf.addEventListener("click", (e) => {
        counPlay.style.display = 'block';
    });
    ajouteSt.addEventListener("click", (e) => {
        counPlay.style.display = 'block';
    });
    ajoute.addEventListener("click", (e) => {
        counPlay.style.display = 'block';
    });
});