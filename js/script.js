document.addEventListener('DOMContentLoaded', () => {
    let counPlay = document.querySelector('.coun-play');
    let red;
    
    let close = document.querySelector('#close');
    close.addEventListener("click", () => {
        counPlay.style.display = 'none';
    }) ;

    let ID=0;
    let IDE=0;
    let cardplay=document.getElementsByClassName('card-player');
    
    const deff = document.querySelectorAll('#ajouter-cb');
    const deffence=Array.from(deff);
    const  ajouterR=document.querySelector('#ajouter-rb');
    let  ajouterL=document.querySelector('#ajouter-lb');


    let ajouteGk = document.getElementById('ajouter-gk');
    let defence =document.querySelector('#defense')

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
           
            counPlay.append(close);
            counPlay.style.display = 'block';  
                arr.forEach(element => {
                    if(element.position==="LB"){
                        ID++;
                        IDE++;
                        const htmlContent = `
                        <div class="card-player" id="${ID}">
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
                       <button style="background:red" class="supp" id="${IDE}">Suprimé</button>
                        <button style="background:red" class="add" id="${IDE}">Ajouter</button>
                    </div>
                     `
                        counPlay.insertAdjacentHTML('beforeend', htmlContent);
                        deletPlayer () ;
                     
                    }
                  
                });
 
            })

                   


            

            ajouterLf.addEventListener("click", () => {
                counPlay.innerHTML="";
                counPlay.append(close);
                counPlay.style.display = 'block';    
                    arr.forEach(element => {
                        
                        if(element.position==="LW"){
                            ID++;
                            const htmlContent = `
                             <div class="card-player" id="${ID}">
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
                              <button style="background:red" class="supp" id="${IDE}">Suprimé</button>
                         `;
                            counPlay.insertAdjacentHTML('beforeend', htmlContent);
                            deletPlayer ()
                            
                        }
                    });
                })
    
    


                ajouterRf.addEventListener("click", () => {
                    counPlay.innerHTML="";
                    counPlay.append(close);
                    counPlay.style.display = 'block';    
                        arr.forEach(element => {
                            
                            if(element.position==="RW"){
                                ID++;
                                const htmlContent = `
                                 <div class="card-player" id="${ID}">
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
                            <button style="background:red" class="supp" id="${IDE}">Suprimé</button>
                             `;
                                counPlay.insertAdjacentHTML('beforeend', htmlContent);
                                deletPlayer ()
                            }
                        });
                    })
        








                    ajouteSt.addEventListener("click", () => {
                        counPlay.innerHTML="";
                        counPlay.append(close);
                        counPlay.style.display = 'block';    
                            arr.forEach(element => {
                                
                                if(element.position==="ST"){
                                    ID++;
                                    const htmlContent = `
                                     <div class="card-player" id="${ID}">
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
                                <button style="background:red" class="supp" id="${IDE}">Suprimé</button>
                                 `;
                                    counPlay.insertAdjacentHTML('beforeend', htmlContent);
                                    deletPlayer ()
                                }
                            });
                        })




        ajouterR.addEventListener("click", () => {
            counPlay.innerHTML="";
            counPlay.append(close);
            counPlay.style.display = 'block';    
                arr.forEach(element => {
                    
                    if(element.position==="RB"){
                        ID++;
                        const htmlContent = `
                         <div class="card-player" id="${ID}">
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
                    <button style="background:red" class="supp" id="${IDE}">Suprimé</button>
                     `;
                        counPlay.insertAdjacentHTML('beforeend', htmlContent);
                        deletPlayer ()
                    }
                });
            })

       



        
  
            centre.addEventListener('click', () => {
            counPlay.style.display = 'block';
            counPlay.innerHTML="";
            counPlay.append(close);
                arr.forEach(element => {
                    if(element.position==="CM"){
                        ID++;
                        const htmlContent = `
                         <div class="card-player" id="${ID}">
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
                    <button style="background:red" class="supp" id="${IDE}">Suprimé</button>
                     `;
                        counPlay.insertAdjacentHTML('beforeend', htmlContent);
                        deletPlayer ()
                    }
                });
            })
       








        deffence.forEach(deff => {
            deff.addEventListener('click', () => {
                counPlay.innerHTML="";
                counPlay.style.display = 'block';
                counPlay.append(close);
                    arr.forEach(element => {
                        if(element.position==="CB"){
                            ID++;
                            const htmlContent = `
                            <div class="card-player" id="${ID}">
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
                           <button style="background:red" class="supp" id="${IDE}">Suprimé</button>
                         `;
                            counPlay.insertAdjacentHTML('beforeend', htmlContent);
                            deletPlayer ()
                        }
                    });
                })
            });










    
        ajouteGk.addEventListener("click", () => {
            counPlay.innerHTML="";
            counPlay.append(close);
            counPlay.style.display = 'block';    
                arr.forEach(element => {
                    
                    if(element.position==="GK"){
                        ID++;
                        const htmlContent = `
                        <div class="card-player" id="${ID}">
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
                        <button style="background:red" class="supp" id="${IDE}">Suprimé</button>
                     `;
                        counPlay.insertAdjacentHTML('beforeend', htmlContent);
                        deletPlayer ()
                    }
                });
            })
        });



        function deletPlayer (){
            supp = document.querySelectorAll('.supp');
            supp.forEach(item=>{
                item.addEventListener('click',() => {
                    let cardPlayer = item.closest('.card-player');
                        cardPlayer.remove();
                });
            })

        }

       


       



       



















      
       
    });



 


















 