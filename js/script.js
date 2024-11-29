document.addEventListener('DOMContentLoaded', () => {
    let counPlay = document.querySelector('.coun-play');

    let close = document.querySelector('#close');

    const cardplay=document.getElementsByClassName('card-player');

    const deff = document.querySelectorAll('#ajouter-cb');
    const deffence=Array.from(deff);
    const  ajouterR=document.querySelector('#ajouter-rb');
    const  ajouterL=document.querySelector('#ajouter-lb');


    const ajouteGk = document.getElementById('ajouter-gk');

    const cen = document.querySelectorAll('#ajouter-cm');
    const centre=Array.from(cen);

    const  ajouterLf=document.querySelector('#ajouter-lf');
    const  ajouteSt=document.querySelector('#ajouter-st');
    const  ajouterRf=document.querySelector('#ajouter-rf');

    let ajoute = document.getElementById('ajouter');
let infoForm = document.querySelector('form');  

ajoute.addEventListener('click', () => {
    infoForm.style.display = 'block';  
});




    
    fetch("/js/data.json")
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        let arr = data.players; 
        console.log(arr);


        


        ajouterL.addEventListener("click", () => {
            counPlay.innerHTML="";
            counPlay.style.display = 'block';    
                arr.forEach(element => {
                    
                    if(element.position==="LB"){
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
                     `
                    
                        counPlay.insertAdjacentHTML('beforeend', htmlContent);
                        
                    }
                    
                });
            })





            ajouterLf.addEventListener("click", () => {
                counPlay.innerHTML="";
                counPlay.style.display = 'block';    
                    arr.forEach(element => {
                        
                        if(element.position==="LW"){
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
                            counPlay.insertAdjacentHTML('beforeend', htmlContent);
                            
                        }
                    });
                })
    
    


                ajouterRf.addEventListener("click", () => {
                    counPlay.innerHTML="";
                    counPlay.style.display = 'block';    
                        arr.forEach(element => {
                            
                            if(element.position==="RW"){
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
                                counPlay.insertAdjacentHTML('beforeend', htmlContent);
                                
                            }
                        });
                    })
        

               


                ajouteSt.addEventListener("click", () => {
                    counPlay.innerHTML="";
                    counPlay.style.display = 'block';    
                        arr.forEach(element => {
                            
                            if(element.position==="ST"){
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
                                counPlay.insertAdjacentHTML('beforeend', htmlContent);
                                
                            }
                        });
                    })






                    ajouteSt.addEventListener("click", () => {
                        counPlay.innerHTML="";
                        counPlay.style.display = 'block';    
                            arr.forEach(element => {
                                
                                if(element.position==="ST"){
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
                                    counPlay.insertAdjacentHTML('beforeend', htmlContent);
                                    
                                }
                            });
                        })




        ajouterR.addEventListener("click", () => {
            counPlay.innerHTML="";
            counPlay.style.display = 'block';    
                arr.forEach(element => {
                    
                    if(element.position==="RB"){
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
                        counPlay.insertAdjacentHTML('beforeend', htmlContent);
                        
                    }
                });
            })

       



        
    centre.forEach(cen => {
        cen.addEventListener('click', () => {
            counPlay.style.display = 'block';
            counPlay.innerHTML="";
                arr.forEach(element => {
                    if(element.position==="CM"){
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
                        counPlay.insertAdjacentHTML('beforeend', htmlContent);
                    }
                });
            })
        });








        deffence.forEach(deff => {
            deff.addEventListener('click', () => {
                counPlay.style.display = 'block';
                counPlay.innerHTML="";
                    arr.forEach(element => {
                        if(element.position==="CB"){
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
                            counPlay.insertAdjacentHTML('beforeend', htmlContent);
                        }
                    });
                })
            });










    
        ajouteGk.addEventListener("click", () => {
            counPlay.innerHTML="";
            counPlay.style.display = 'block';    
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
                    }
                });
            })
        });








       



       



















        close.addEventListener("click", (e) => {
            counPlay.style.display = 'none';
        }); 
    });



 


















 