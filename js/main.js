// ==========================================
// 💎 SUN CREATION - GESTION PANIER & EMAIL
// ==========================================

window.addEventListener('load', () => {
    const loader = document.getElementById('preloader');
    if(loader) setTimeout(() => { loader.style.opacity = '0'; loader.style.visibility = 'hidden'; }, 600);
});

// Gestion LocalStorage
function getCart() { return JSON.parse(localStorage.getItem('sunCreationCart')) || []; }
function saveCart(cart) { localStorage.setItem('sunCreationCart', JSON.stringify(cart)); updateCartBadge(); }

function addToCart(product) {
    const cart = getCart();
    cart.push(product);
    saveCart(cart);
    showToast("✨ Ajouté au panier !");
}

function removeFromCart(index) {
    if(!confirm("Supprimer cet article ?")) return;
    let cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
    renderCartPage();
}

function updateCartBadge() {
    const badges = document.querySelectorAll('.cart-badge');
    badges.forEach(b => b.innerText = getCart().length);
}

function showToast(msg) {
    const t = document.getElementById("toast");
    if(t) { t.innerText = msg; t.className = "show"; setTimeout(() => t.className = "", 3000); }
    else alert(msg);
}

// Mise à jour des totaux (Gère l'affichage Europe)
function updateTotal() {
    const cart = getCart();
    let subtotal = 0;
    cart.forEach(i => subtotal += i.price);

    const delOpt = document.querySelector('input[name="delivery"]:checked');
    if(!delOpt) return;

    const shipping = parseInt(delOpt.dataset.price);
    const mode = delOpt.value;
    const bAddr = document.getElementById('bloc-adresse');
    const bDate = document.getElementById('bloc-date');
    
    // Si France ou Europe -> Adresse visible
    if(['france','europe'].includes(mode)) {
        if(bAddr) bAddr.style.display = 'block';
        if(bDate) bDate.style.display = 'none';
    } else {
        if(bAddr) bAddr.style.display = 'none';
        if(bDate) bDate.style.display = 'block';
        applyMinDate();
    }

    const total = subtotal + shipping;
    
    setText('cart-subtotal', subtotal);
    setText('shipping-cost', shipping);
    setText('cart-total', total);
    setText('cart-acompte', (total * 0.40).toFixed(2));
}

function applyMinDate() {
    const dateInput = document.getElementById('retrait-date');
    if(dateInput) {
        const today = new Date();
        today.setDate(today.getDate() + 7);
        dateInput.setAttribute('min', today.toISOString().split('T')[0]);
    }
}

function setText(id, val) { const el = document.getElementById(id); if(el) el.innerText = val; }
function getVal(id) { const el = document.getElementById(id); return el ? el.value.trim() : ""; }

function renderCartPage() {
    const container = document.getElementById('cart-items-container');
    if (!container) return;
    
    const cart = getCart();
    container.innerHTML = '';
    
    if (cart.length === 0) { 
        container.innerHTML = `<div style="text-align:center; color:#999; padding:20px;">Panier vide 🥀</div>`; 
        updateTotal(); 
        return; 
    }

    cart.forEach((item, index) => {
        container.innerHTML += `
        <div style="display:flex; align-items:center; border-bottom:1px solid #eee; padding:10px 0;">
            <div style="width:60px; height:60px; border-radius:50%; overflow:hidden; margin-right:15px;">
                <img src="${item.image}" style="width:100%; height:100%; object-fit:cover;">
            </div>
            <div style="flex:1;">
                <h3 style="margin:0; font-size:1rem;">${item.title}</h3>
                <p style="color:#D4AF37; font-weight:bold; margin:2px 0;">${item.price} €</p>
                <p style="font-size:0.75rem; color:#666; margin:0; line-height:1.3;">${item.desc || ''}</p>
            </div>
            <button onclick="removeFromCart(${index})" style="border:none; background:none; cursor:pointer; color:#999; font-size:1.2rem;">&times;</button>
        </div>`;
    });
    updateTotal();
}

// Validation Commande (Inclut le message et le code commande)
function checkoutEmail() {
    const cart = getCart();
    if(cart.length === 0) return showToast("Panier vide !");

    const nom = getVal('client-name');
    const phone = getVal('client-phone');
    const insta = getVal('client-insta');
    const msgPerso = getVal('client-msg'); // Message du client
    
    if(!nom || !phone) return showToast("⚠️ Nom et Téléphone obligatoires.");
    
    const delOpt = document.querySelector('input[name="delivery"]:checked');
    const shipping = parseInt(delOpt.dataset.price);
    const mode = delOpt.value;
    
    // GÉNÉRATION DU NUMÉRO DE COMMANDE
    const orderId = 'CMD-' + Math.floor(1000 + Math.random() * 9000);

    let detailsLivraison = "";
    let warningMsg = "";

    if(['france','europe'].includes(mode)) {
        const adr = getVal('livraison-adresse');
        const ville = getVal('livraison-ville');
        if(!adr || !ville) return showToast("⚠️ Adresse incomplète.");
        detailsLivraison = `Livraison (${mode.toUpperCase()}): ${adr}, ${ville}`;
    } else {
        const dateRetrait = getVal('retrait-date');
        const heureRetrait = getVal('retrait-time');
        
        if(!dateRetrait || !heureRetrait) return showToast("⚠️ Date/Heure requises.");
        
        const d = new Date(dateRetrait);
        const today = new Date();
        today.setDate(today.getDate() + 6);
        if(d < today) return showToast("⚠️ Délai trop court (7 jours min).");

        detailsLivraison = `${mode === 'uber' ? 'Livraison UBER' : 'Retrait Atelier'} le ${dateRetrait} à ${heureRetrait}`;
        if(mode === 'uber') warningMsg = "\n⚠️ NOTE: Vous devez commander le Uber de votre côté (Départ Gonesse).";
    }
    
    let subtotal = 0;
    cart.forEach(i => subtotal += i.price);
    const total = subtotal + shipping;

    // Construction du mail
    let body = `Bonjour Sun Creation,\n\nJe souhaite valider ma commande n° ${orderId} :\n\n`;
    body += `👤 ${nom}\n📞 ${phone}\n`;
    if(insta) body += `📸 Insta: ${insta}\n`;
    body += `📍 ${detailsLivraison}${warningMsg}\n\n`;
    
    body += `📦 ARTICLES :\n`;
    cart.forEach(i => {
        body += `- ${i.title} (${i.price}€)\n`; 
        if(i.desc) body += `  Options: ${i.desc}\n`; 
    });
    
    // Ajout du message perso s'il existe
    if(msgPerso) {
        body += `\n📝 MESSAGE / PRÉCISION :\n"${msgPerso}"\n`;
    }
    
    body += `\n💰 TOTAL : ${total}€\n💳 ACOMPTE À VERSER (40%) : ${(total * 0.40).toFixed(2)}€\n\n`;
    body += `Merci de m'envoyer le RIB pour le virement !`;
    body += `\n\n(Je vous enverrai la photo éventuelle en réponse à ce mail)`;

    window.location.href = `mailto:Sncreat24@gmail.com?subject=COMMANDE ${orderId} - SUN CREATION&body=${encodeURIComponent(body)}`;
}

document.addEventListener('DOMContentLoaded', () => {
    updateCartBadge();
    renderCartPage();
});
