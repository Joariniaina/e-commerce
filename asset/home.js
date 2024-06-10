// ////////////////////////////////////////////////////////////////////////

async function loadJSON(url) 
{
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
let logoCont ;
let stockContn;
logoCont=`<div class="contLogo">
<img src="asset/images/img1/modules/appagebuilder/images/rea_customer_service.png" class="logoPhotos">
<div class="container1_page">
    <p>SERVICE CLIENT AU 06 89 12 29</p>
</div>
</div>
<div class="contLogo">
<img src="asset/images/img1/modules/appagebuilder/images/reassurance-joya-le-store-moyens-paiements.png" class="logoPhotos">
<div class="container1_page">
    <p>PAIEMENT SÉCURISÉ & 3X SANS FRAIS AVEC ALMA</p>
</div>
</div>
<div class="contLogo">
<img src="asset/images/img1/modules/appagebuilder/images/rea_shipping.png" class="logoPhotos">
<div class="container1_page">
    <p>LIVRAISON MONDIAL RELAY OFFERTE À PARTIR DE 100€</p>
</div>
</div>
<div class="contLogo">
<img src="asset/images/img1/modules/appagebuilder/images/rea_click_collect.png" class="logoPhotos">
<div class="container1_page">
    <p>CLICK & COLLECT À LA GRANDE MOTTE</p>
</div>
</div>`;

stockContn =`<div id="contStockage">
<div id="contStockage1">
<div id="headStockage">Mon panier</div>
<div id="AllStockage">il n'y a pas d'article dans votre panier</div>
<div id="contunSubmit">CONTINUIEZ VOS ACHATS</div>
</div>
<div id="contStockage2">
<div id="service">
<div id="service1">
<p>0 articles</p>
<p>0,00€</p>
</div>
<div id="service2">
<p>Livraison</p>
<p>Gratuit</p>
</div>
</div>
<div id="total">
<div id="total1">
<p>Total TTC</p>
<p>0,00€</p>
</div>
<div id="instruction">Avez-vous le code de reduction?</div>
<div id="totalCheck">CHECK-OUT</div>
</div>
<div id="logo">

</div>
</div>
</div>`;
function panier(){
    // document.querySelector('#stockage').addEventListener('click', function(){
        document.querySelectorAll('main2').innerHTML ='';
        document.getElementById('image10').style.display = "none";
        document.getElementById('main2').innerHTML = stockContn;
        document.getElementById('logo').innerHTML = logoCont;
        document.getElementById('logo').style.border = "none";
    };
function list(sandale)
{
    let stock = 0;
    let contentSandale = "";
    let container;
    let container2;
    
    console.log(sandale);
    for(let produit in sandale) {
        // Générer un identifiant unique pour chaque bouton
        contentSandale += `<div class="cont_page22" id="${produit}">
                            <div id="andrana"><img src="${sandale[produit].image}" alt=""></div>
                            <div class="container_page_fille">
                                <h3>${sandale[produit].name}</h3>
                                <p >${sandale[produit].price}</p>
                                <p><img src="asset/images/img/rating.png" class="asterix"></p>
                            </div>
                            </div>`;
        stock++;
    }
    document.getElementById('head_echantillon').style.display = "block";
    document.getElementById('h_ech1').innerHTML = 'il existe '+ stock +' produits';
    const page22Conten = document.createElement('div');
    page22Conten.id = "page22";
    document.getElementById('clearBlock').appendChild(page22Conten);

    document.getElementById("page22").innerHTML = contentSandale;


    // on crée le squellette du panier


    document.querySelectorAll('.cont_page22').forEach(description =>{
        let nbr = 0;
        let valListe;
        const liste = document.createElement('div');
        liste.classList.add('listeDansPanier');
        var recupVariable = '';
        let recupPointure ;
        console.log(recupVariable);
        description.addEventListener('click', function(){
            // Récupérer l'identifiant du bouton cliqué
            const sandaleClick = sandale[this.id];
            recupVariable = sandaleClick;
            console.log(recupVariable);
            let option;
            for(var i in sandaleClick.seize)
            {
                option +=`<option value="${sandaleClick.seize[i]}">${sandaleClick.seize[i]}</option>`;
            }
            // Trouver les informations du produit correspondant
            container =` 
                <div class="containerElement1">
                    <img src = "${sandaleClick.image}">
                </div>
                <div class="containerElement2">
                    <h2 class="sandaleName">${sandaleClick.name}</h2>
                    <div class="sandaleName">${sandaleClick.price}€</div>
                    <p>${sandaleClick.description}</p>
                    <p id="add"></p>
                    <p class="seizeCont">
                        <label for="seize">${sandaleClick.NameSpecific}</label>
                        <select name="seize" class="seize">
                            ${option}
                        </select>
                    </p>
                    <div class="seizeCont" id="containerAbility">
                        <label>Quantité</label>
                        <input type="number" class="seize" min=1 placeholder="1">
                    </div>
                    <div id="panierStore">
                        <button type"submit" id="sandalePanier">AJOUTER AU PANIER</button>
                        <p>⚠️ Derniers articles en stock</p>
                    </div>
                    <div id="logo">
                        
                    </div>
                </div>`;
                container2 = `
                    <p id="contFootProduct1">DÉTAILS DE PRODUIT/AVIS</p>
                    <div id="contFootProduct2">
                        <div class="footProductDescription">
                            <p>MARQUE</p>
                            <p class="footProductDescriptionVal">${sandaleClick.mark}</p>
                        </div>
                        <div class="footProductDescription">
                            <p>RÉFÉRENCE</p>
                            <p class="footProductDescriptionVal">${sandaleClick.name}</p>
                        </div>
                        <div class="footProductDescription">
                            <p>EN STOCK</p>
                            <p class="footProductDescriptionVal">${sandaleClick.stock} produit</p>
                        </div>
                        <div id="comment">
                            <input type="email" id="inputComment" placeholder="votre@mail.com" required/>
                            <button type="submit" id="buttonComment">Prévenez-moi lorsque le produit est disponible</button>
                        </div>
                    </div>`;
                // en entrant container dans div de id=Newcont
                document.getElementById('clearBlock').innerHTML = '<div id="page22"></div>';
                // en creant un noouveau block
            const sandaleNewCont = document.createElement('div');
            sandaleNewCont.id = "NewCont";
             //en vidant le contenu de page22
            // document.getElementById('texte_descript').style.display ="none";//en cachant le contenue de ces deux blocks
            document.getElementById('image10').style.display ="none";
            // document.getElementById('head_echantillon').style.display ="none";
            sandaleNewCont.innerHTML = container;
            // en entrant ce dernier dans div id=page22 
            document.getElementById('page22').appendChild(sandaleNewCont);
            // en entrant logoCont dans logo
            document.getElementById('logo').innerHTML = logoCont;
            // en entrant container1 dans div de id=footProduct
            const sandaleNewCont1 = document.createElement('div');
            sandaleNewCont1.id = "footProduct";
            sandaleNewCont1.innerHTML = container2;
            document.getElementById('image101').style.display = "block";
            document.getElementById('head_echantillon').style.display = "none";
            document.getElementById('page22').appendChild(sandaleNewCont1);
            document.getElementById('clearBlock').appendChild(document.getElementById('page22'));//en entrant le block page22 dans main
            document.getElementById('texte_descript').style.display = "none";
            console.log(document.getElementById('sandalePanier'));
            console.log(document.getElementById('zero'));

            document.getElementById('sandalePanier').addEventListener('click', function(){
                const pointureListe = document.querySelector('.seize').value;
                recupPointure = pointureListe;
                valListe = `<img src="${recupVariable.image}" alt="" class="listeImg">
                    <div class="listeCaracteristique">
                        <p>${recupVariable.name}</p>
                    <p class="">
                    <p><img src="asset/image/img/effacer.png" alt="" class="icôneSupp"></p>`;
                liste.innerHTML = valListe;
                // document.querySelector('#AllStockage').appendChild(liste);
                console.log(liste);
                console.log(recupVariable);   
                nbr = nbr +1;
                document.getElementById('zero').innerHTML = nbr;
                document.getElementById('recup').innerHTML = nbr;
            });
            console.log(recupVariable);
            // ######################################### PANIER ###########################
            console.log(document.getElementById('stockage'));
            document.getElementById('stockage').addEventListener('click', function(){
                console.log(liste);
                
                panier();
                console.log(document.getElementById('AllStockage'));
                if (document.getElementById('AllStockage').outerText == "il n\'y a pas d\'article dans votre panier")
                    {
                        document.getElementById('AllStockage').innerHTML = valListe;
                    }
                else
                {
                document.getElementById('AllStockage').appendChild(liste);
                }
            });
            // console.log(document.getElementById('AllStockage'));
        });
    });
};

document.addEventListener('DOMContentLoaded', () => {
    loadJSON('asset/data/data.json').then(data1 => {
        list(data1.echantillon);
        document.getElementById('image101').style.display = "none";
        document.getElementById('texte_descript').style.display = "none";
        document.getElementById('clearBlock').style.display = "block";
        document.getElementById('head_echantillon').style.display = "none";
    }).catch(error => {
        console.error('Error loading JSON:', error);
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const carouselInner = document.querySelector('.carousel-inner');
    const slides = Array.from(carouselInner.querySelectorAll('.slide'));
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index? 'flex' : 'none';
        });
    }

    showSlide(currentIndex);

    document.getElementById('prev').addEventListener('click', function() {
        currentIndex--;
        if (currentIndex < 0) currentIndex = slides.length - 1;
        showSlide(currentIndex);
    });

    document.getElementById('next').addEventListener('click', function() {
        currentIndex++;
        if (currentIndex >= slides.length) currentIndex = 0;
        showSlide(currentIndex);
    });
});

// en entrant dans les pages de notre produit
function listeMenu(){
document.addEventListener('click', (event) => {
    for(let i = 1; i<14 ; i++)
    {
        if (event.target.matches(`#click${i}`)) {
            loadJSON('asset/data/data.json').then(data2 => {
                list(data2['produit' + i]);
                // document.querySelectorAll('.cont_page22').style.width = "33px";
                document.getElementById('image10').style.display ="none";
                document.getElementById('image101').style.display = "block";
                document.getElementById('head_echantillon').style.display = "flex";
                document.getElementById('texte_descript').style.display = "block";
                document.querySelectorAll('.cont_page22').forEach(function(element) {
                    element.style.width = "33%";
                });
                // document.getElementById('head_echantillon').style.display = "inline-block";
            }).catch(error => {
                console.error('Error loading JSON:', error);
            });
        }
    }
    if(event.target.matches('#stockage'))
    {
        panier();
    }
})
};
window.listeMenu = listeMenu;
window.listeMenu();
// document.getElementById('stockage').addEventListener('click', function(){
//     panier();
//     window.listeMenu();
// });
