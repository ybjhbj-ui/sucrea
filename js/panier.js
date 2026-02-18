// ==========================================
// GESTION DU PANIER (LOCALSTORAGE)
// ==========================================

// 1. Récupérer le panier depuis la mémoire du navigateur
function getCart() {
    const cart = localStorage.getItem('sunCreationCart');
    return cart ? JSON.parse(cart) : [];
}

// 2. Sauvegarder le panier
function saveCart(cart) {
    localStorage.setItem('sunCreationCart', JSON.stringify(cart));
    updateCartCount();
}

// 3. Ajouter un article (Utilisé depuis les pages produits)
function addToCart(product) {
    const cart = getCart();
    cart.push(product);
    saveCart(cart);
    
    // Mise à jour du petit compteur dans le menu
    updateCartCount();
}

// 4. Mettre à jour le compteur du menu (ex: Panier (2))
function updateCartCount() {
    const cart = getCart();
    const countElements = document.querySelectorAll('.cart-count');
    countElements.forEach(el => el.innerText = cart.length);
}

// 5. Supprimer un article du panier
function removeFromCart(index) {
    let cart = getCart();
    cart.splice(index, 1); // Enlève l'article à l'index donné
    saveCart(cart);
    renderCartPage(); // Rafraîchit l'affichage immédiatement
}

// 6. Afficher le panier (Seulement sur la page panier.html)
function renderCartPage() {
    const container = document.getElementById('cart-items-container');
    const totalElem = document.getElementById('cart-total');
    
    // Si on n'est pas sur la page panier, on arrête la fonction
    if (!container) return; 

    const cart = getCart();
    container.innerHTML = '';
    let totalPrice = 0;

    // Si le panier est vide
    if (cart.length === 0) {
        container.innerHTML = `
            <div style="text-align:center; padding:50px;">
                <p style="font-size:1.2rem; color:#888;">Votre panier est vide 🥀</p>
                <a href="index.html" class="btn-discover" style="display:inline-block; margin-top:20px; padding:10px 20px; border:1px solid #333; text-decoration:none; color:#333; border-radius:50px;">Retourner à la boutique</a>
            </div>`;
        if(totalElem) totalElem.innerText = "0";
        return;
    }

    // On boucle sur chaque article pour l'afficher
    cart.forEach((item, index) => {
        totalPrice += item.price;
        
        container.innerHTML += `
        <div class="cart-item">
            <div class="cart-img">
                <img src="${item.image}" onerror="this.src='https://via.placeholder.com/100?text=Produit'">
            </div>
            <div class="cart-details">
                <h3>${item.title}</h3>
                <p class="cart-desc">${item.desc ? item.desc.replace(/\n/g, '<br>') : ''}</p>
                <div class="cart-price">${item.price} €</div>
            </div>
            <div class="cart-action">
                <button onclick="removeFromCart(${index})" class="btn-delete" title="Supprimer">🗑️</button>
            </div>
        </div>
        `;
    });

    // Mise à jour du prix total
    if(totalElem) totalElem.innerText = totalPrice;
}

// 7. Commander sur WhatsApp
function checkoutWhatsApp() {
    const cart = getCart();
    if (cart.length === 0) return alert("Votre panier est vide !");

    let message = "Bonjour Sun Creation, je souhaite passer commande :\n\n";
    let total = 0;

    cart.forEach(item => {
        message += `▪️ ${item.title} (${item.price}€)\n`;
        if (item.desc) message += `   Options : ${item.desc}\n`;
        message += "\n";
        total += item.price;
    });

    message += `💰 TOTAL COMMANDE : ${total}€`;
    
    // --- IMPORTANT : METS TON NUMÉRO ICI ---
    // Format : Code pays + Numéro (sans le + et sans le 0)
    // Exemple pour France : 33612345678 (pour 06 12 34 56 78)
    const phone = "33600000000"; 
    
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Au chargement de la page, on lance les mises à jour
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    renderCartPage();
});