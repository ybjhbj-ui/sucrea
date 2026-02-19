// ==========================================
// 🛍️ CATALOGUE - CONFIGURATION PRODUITS
// ==========================================

const LISTE_BOUQUETS = [
    { qty: 7, prix: 20 }, { qty: 10, prix: 25 }, { qty: 15, prix: 30 },
    { qty: 20, prix: 35 }, { qty: 25, prix: 40 }, { qty: 30, prix: 45 },
    { qty: 40, prix: 55 }, { qty: 50, prix: 65 }, { qty: 60, prix: 75 },
    { qty: 70, prix: 90 }, { qty: 100, prix: 120 }
];

// COULEURS SANS EMOJIS
const COULEURS_ROSES = ["Rouge", "Blanc", "Noir", "Rose", "Violet", "Bleu Clair", "Bleu Foncé", "rose pale", "jaune", "beige"];
const CHOCOLATS = ["Ferrero Rocher", "Raffaello", "Kinder Schoko-Bons", "Kinder Bueno"];

// PRIX ET CONFIGURATION DES BOXES GOURMANDES
const LISTE_BOXES = [
    { 
        id: 'box20', 
        title: 'Box Gourmande 20cm', 
        priceFleur: 43, 
        priceChoco: 53, 
        doudouPrice: 7.50, // 2 doudous
        img: 'images/box_choco_20.jpg' 
    },
    { 
        id: 'box30', 
        title: 'Box Gourmande 30cm', 
        priceFleur: 60, 
        priceChoco: 70, 
        doudouPrice: 7.50, // 2 doudous
        img: 'images/box_choco_30.jpg' 
    }
];

// FONCTION POUR LE ZOOM IMAGE (Lightbox)
window.zoomImage = function(src) {
    // Créer le visualiseur si pas encore là
    if (!document.getElementById('image-viewer')) {
        const viewer = document.createElement('div');
        viewer.id = 'image-viewer';
        viewer.innerHTML = `<span style="position:absolute; top:20px; right:20px; color:white; font-size:30px; cursor:pointer;">&times;</span><img id="full-image" src="">`;
        viewer.style.cssText = "display:none; position:fixed; z-index:9999; left:0; top:0; width:100%; height:100%; overflow:auto; background-color:rgba(0,0,0,0.9); align-items:center; justify-content:center;";
        
        // Fermer au clic
        viewer.onclick = function() { viewer.style.display = 'none'; };
        
        document.body.appendChild(viewer);
    }
    
    const viewer = document.getElementById('image-viewer');
    const fullImg = document.getElementById('full-image');
    
    fullImg.src = src;
    fullImg.style.cssText = "margin: auto; display: block; max-width: 90%; max-height: 90%; border-radius: 5px; box-shadow: 0 0 20px rgba(255,255,255,0.2);";
    
    // Utiliser flex pour centrer parfaitement
    viewer.style.display = 'flex';
}

// Liste complète Emballages
function getEmballageOptions() {
    return `
    <optgroup label="--- STANDARD (Inclus) ---">
        <option value="Noir">Noir</option>
        <option value="Blanc">Blanc</option>
        <option value="Rose">Rose</option>
        <option value="Bordeaux">Bordeaux</option>
        <option value="Rouge">Rouge</option>
        <option value="Brun Glacé">Brun Glacé</option>
        <option value="Jaune Crème">Jaune Crème</option>
        <option value="Marron">Marron</option>
        <option value="Vert">Vert</option>
        <option value="Orange">Orange</option>
        <option value="Aubergine">Aubergine</option>
        <option value="Violet">Violet</option>
        <option value="Bleu Ciel">Bleu Ciel</option>
        <option value="Bleu">Bleu</option>
        <option value="Café">Café</option>
    </optgroup>
    <optgroup label="--- BORDURE (Inclus) ---">
        <option value="Noir bordure Noire">Noir bordure Noire</option>
        <option value="Blanc bordure Blanche">Blanc bordure Blanche</option>
        <option value="Rose bordure Rose">Rose bordure Rose</option>
        <option value="Noir bordure Dorée">Noir bordure Dorée</option>
        <option value="Noir bordure Blanche">Noir bordure Blanche</option>
        <option value="Blanc bordure Noire">Blanc bordure Noire</option>
        <option value="Blanc bordure Dorée">Blanc bordure Dorée</option>
        <option value="Rose bordure Dorée">Rose bordure Dorée</option>
        <option value="Bordeaux bordure Dorée">Bordeaux bordure Dorée</option>
        <option value="Argenté bordure Argenté">Argenté bordure Argenté</option>
        <option value="Rouge bordure Rouge">Rouge bordure Rouge</option>
        <option value="Bleu bordure Bleue">Bleu bordure Bleue</option>
        <option value="Doré bordure Dorée">Doré bordure Dorée</option>
        <option value="Rouge/Noir">Rouge / Noir</option>
    </optgroup>
    <optgroup label="--- LUXE (+5€) ---">
        <option value="Luxe Dior Noir">Dior Noir</option>
        <option value="Luxe Dior Bordeaux">Dior Bordeaux</option>
        <option value="Luxe Dior Beige">Dior Beige</option>
        <option value="Luxe Dior Rose">Dior Rose</option>
        <option value="Luxe Dior Rose Fushia">Dior Rose Fushia</option>
        <option value="Luxe Dior Bleu">Dior Bleu</option>
        <option value="Luxe Dior Vert Menthe">Dior Vert Menthe</option>
        <option value="Luxe Dior Violet">Dior Violet</option>
        <option value="Luxe Chanel">Chanel Noir/Doré</option>
        <option value="Luxe LV Noir">LV Noir/Doré</option>
        <option value="Luxe LV Rose">LV Rose/Blanc</option>
        <option value="Luxe HK Rose">LV Hello Kitty Rose/Blanc</option>
        <option value="Luxe HK Blanc/Noir">LV Hello Kitty Blanc/Noir</option>
        <option value="Luxe HK Blanc/Rouge">LV Hello Kitty Blanc/Rouge</option>
    </optgroup>
    `;
}

// LISTE DES RUBANS (NOEUDS)
function getRubanOptions() {
    return `
    <option value="">-- Sans Nœud --</option>
    <option value="Tulle Rouge">🎀 Tulle Rouge (+3€)</option>
    
    <optgroup label="--- LUXE DIOR (+5€) ---">
        <option value="Dior Noir">Dior Noir</option>
        <option value="Dior Blanc">Dior Blanc</option>
        <option value="Dior Beige">Dior Beige</option>
        <option value="Dior Rouge">Dior Rouge</option>
        <option value="Dior Rose">Dior Rose</option>
    </optgroup>
    
    <optgroup label="--- LUXE GUCCI (+5€) ---">
        <option value="Gucci Noir">Gucci Noir</option>
        <option value="Gucci Kaki">Gucci Kaki</option>
        <option value="Gucci Rouge">Gucci Rouge</option>
    </optgroup>
    `;
}

// --- 1. BOUQUETS ---
function renderRoses() {
    const container = document.getElementById('page-roses');
    if (!container) return;

    // Style spécifique pour la grille d'emballage
    // J'ai augmenté la hauteur à 100px pour qu'on voie mieux
    const styleImages = document.createElement('style');
    styleImages.innerHTML = `
        .pack-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; margin-bottom: 5px; }
        .pack-item { text-align: center; font-size: 0.75rem; color: #555; position: relative; }
        .pack-item img { 
            width: 100%; 
            height: 90px; /* BEAUCOUP PLUS GRAND */
            object-fit: cover; 
            border-radius: 8px; 
            border: 1px solid #d4a373; 
            margin-bottom: 3px;
            background: #f5f5f5;
            cursor: pointer; /* Indique qu'on peut cliquer */
            transition: transform 0.2s;
        }
        .pack-item img:active { transform: scale(0.95); }
        .zoom-icon {
            position: absolute; bottom: 25px; right: 5px; 
            background: rgba(0,0,0,0.6); color: white; 
            border-radius: 50%; width: 20px; height: 20px; 
            font-size: 12px; line-height: 20px; pointer-events: none;
        }
    `;
    document.head.appendChild(styleImages);

    container.innerHTML = LISTE_BOUQUETS.map(bq => {
        const id = bq.qty;
        return `
        <div class="product-card">
            <div class="card-image">
                <img src="images/bouquet_${id}.jpg" loading="lazy" onerror="this.src='https://via.placeholder.com/300?text=${id}+Roses'">
            </div>
            <div class="card-info" style="text-align:left;">
                <h3 style="margin-top:0;">💐 ${bq.qty} Roses</h3>
                <p class="card-price">${bq.prix} € <small>(base)</small></p>

                <label class="opt-label">Couleur des roses :</label>
                <select id="color-${id}" class="form-control mb-10">
                    ${COULEURS_ROSES.map(c => `<option value="${c}">${c}</option>`).join('')}
                </select>

                <label class="opt-label">Style d'emballage (Cliquez pour agrandir 🔍) :</label>
                <div class="pack-grid">
                    <div class="pack-item" onclick="zoomImage('images/ref_standard.jpg')">
                        <img src="images/ref_standard.jpg" onerror="this.style.display='none'">
                        <div class="zoom-icon">🔍</div>
                        Standard
                    </div>
                    <div class="pack-item" onclick="zoomImage('images/ref_bordure.jpg')">
                        <img src="images/ref_bordure.jpg" onerror="this.style.display='none'">
                        <div class="zoom-icon">🔍</div>
                        Bordure
                    </div>
                    <div class="pack-item" onclick="zoomImage('images/ref_luxe.jpg')">
                        <img src="images/ref_luxe.jpg" onerror="this.style.display='none'">
                        <div class="zoom-icon">🔍</div>
                        Luxe
                    </div>
                </div>
                
                <select id="pack-${id}" class="form-control mb-10">${getEmballageOptions()}</select>

                <div class="options-box">
                    <strong>Accessoires :</strong>
                    <label class="opt-check"><input type="checkbox" id="opt-pap-${id}"> 🦋 Papillon (+2€)</label>
                    
                    <label class="opt-label" style="margin-top:10px;">Choix du Nœud :</label>
                    <select id="opt-ruban-select-${id}" class="form-control mb-10">
                        ${getRubanOptions()}
                    </select>

                    <label class="opt-label" style="margin-top:5px;">Topper (+2€) :</label>
                    <select id="opt-topper-select-${id}" class="form-control mb-10">
                        <option value="">-- Aucun --</option>
                        <option value="Anniversaire">🎂 Joyeux Anniversaire</option>
                        <option value="Love">❤️ Love</option>
                    </select>

                    <div style="margin-top:5px; margin-bottom:5px; padding:5px; background:#fff; border-radius:5px; border:1px solid #eee;">
                        <label class="opt-label" style="display:inline-block; margin-top:0;">🍫 Pique Ferrero (1€/u) :</label>
                        <input type="number" id="opt-pique-${id}" class="form-control" 
                               style="width:70px; display:inline-block; margin-left:10px;" 
                               min="0" max="20" value="0"
                               oninput="if(this.value > 20){ alert('Maximum 20 Ferreros !'); this.value = 20; }">
                        <small style="color:#666; display:block; font-size:0.75rem;">(Max 20 unités)</small>
                    </div>
                    
                    <label class="opt-check"><input type="checkbox" id="opt-diam-few-${id}"> ✨ Diamants (Quelques roses) (+2€)</label>
                    <label class="opt-check"><input type="checkbox" id="opt-diam-all-${id}"> 💎 Diamants (Toutes les roses) (+4€)</label>
                    
                    <label class="opt-check"><input type="checkbox" id="opt-pail-${id}"> ✨ Paillettes (Offert)</label>
                    <label class="opt-check"><input type="checkbox" id="opt-perle-${id}"> ⚪ Perles sur emballage (+8€)</label>
                    <label class="opt-check"><input type="checkbox" id="opt-crown-${id}"> 👑 Grande Couronne (+10€)</label>
                    <label class="opt-check"><input type="checkbox" id="opt-crown-mini-${id}"> 👑 Mini Couronne (Décorative) (+4€)</label>
                    <label class="opt-check"><input type="checkbox" id="opt-led-${id}"> 💡 Guirlande LED (+5€)</label>
                    <label class="opt-check"><input type="checkbox" id="opt-doudou-${id}"> 🧸 Petite Peluche (+3€)</label>
                    <label class="opt-check"><input type="checkbox" id="opt-doudou-m-${id}"> 🧸 Moyenne Peluche (+15€)</label>
                </div>

                <div class="perso-box">
                    <strong style="display:block; margin-bottom:5px;">Personnalisation :</strong>
                    <label class="opt-label mt-2">Initiale (+3€) :</label>
                    <select id="opt-init-${id}" class="form-control" onchange="toggleSelect('opt-init-${id}', 'init-text-wrapper-${id}')">
                        <option value="">Aucune</option>
                        <option value="Roses">En Petites Roses</option>
                        <option value="Perle">En Perles</option>
                    </select>
                    <div id="init-text-wrapper-${id}" class="hidden"><input type="text" id="init-text-${id}" class="form-control" placeholder="Lettre (Ex: M)"></div>

                    <label class="opt-label mt-2">Sticker Personnalisé :</label>
                    <select id="opt-sticker-type-${id}" class="form-control" onchange="toggleSelect('opt-sticker-type-${id}', 'sticker-wrapper-${id}')">
                        <option value="">Aucun</option>
                        <option value="Simple">1 Prénom/Mot (+10€)</option>
                        <option value="Double">2 Prénoms / Phrase (+15€)</option>
                    </select>
                    <div id="sticker-wrapper-${id}" class="hidden"><input type="text" id="sticker-${id}" class="form-control" placeholder="Votre texte..."></div>

                    <label class="opt-label mt-2">Bande Personnalisée :</label>
                    <select id="opt-bande-type-${id}" class="form-control" onchange="toggleSelect('opt-bande-type-${id}', 'bande-wrapper-${id}')">
                        <option value="">Aucune</option>
                        <option value="Simple">Texte Court (+12€)</option>
                        <option value="Long">Texte Long (+15€)</option>
                    </select>
                    <div id="bande-wrapper-${id}" class="hidden"><input type="text" id="bande-${id}" class="form-control" placeholder="Texte sur ruban..."></div>
                    
                    <label class="opt-check mt-2">
                        <input type="checkbox" id="opt-carte-${id}" onchange="toggleCheck('opt-carte-${id}', 'carte-wrapper-${id}')"> 💌 Carte Personnalisée (+5€)
                    </label>
                    <div id="carte-wrapper-${id}" class="hidden"><input type="text" id="carte-text-${id}" class="form-control" placeholder="Message carte..."></div>

                    <label class="opt-check mt-2">
                        <input type="checkbox" id="opt-photo-${id}"> 📸 Impression Photo (+5€)
                        <small style="display:block; color:#888; font-size:0.75rem;">(Photo à envoyer par mail/insta après commande)</small>
                    </label>
                </div>

                <button class="btn-discover" style="width:100%;" onclick="addBouquetToCart(${id}, ${bq.prix})">Ajouter au panier</button>
            </div>
        </div>`;
    }).join('');
}

function addBouquetToCart(qty, basePrice) {
    let finalPrice = basePrice;
    let opts = [];
    
    const pack = document.getElementById(`pack-${qty}`).value;
    if(pack.includes("Luxe")) finalPrice += 5;

    // Accessoires (Papillon)
    if(document.getElementById(`opt-pap-${qty}`).checked) { finalPrice += 2; opts.push("Papillon"); }

    // GESTION NOEUDS (RUBAN)
    const ruban = document.getElementById(`opt-ruban-select-${qty}`).value;
    if(ruban) {
        if(ruban.includes("Tulle")) {
            finalPrice += 3; // Tulle Rouge
        } else {
            finalPrice += 5; // Dior ou Gucci
        }
        opts.push(`Nœud: ${ruban}`);
    }

    // GESTION TOPPER
    const topper = document.getElementById(`opt-topper-select-${qty}`).value;
    if(topper) {
        finalPrice += 2;
        opts.push(`Topper: ${topper}`);
    }
    
    // GESTION PIQUE FERRERO (Quantité)
    const nbPique = parseInt(document.getElementById(`opt-pique-${qty}`).value) || 0;
    if(nbPique > 0) {
        const validQty = Math.min(nbPique, 20);
        finalPrice += (validQty * 1); // 1€ par unité
        opts.push(`Pique Ferrero (x${validQty})`);
    }

    if(document.getElementById(`opt-diam-few-${qty}`).checked) { finalPrice += 2; opts.push("Diamants (Qq)"); }
    if(document.getElementById(`opt-diam-all-${qty}`).checked) { finalPrice += 4; opts.push("Diamants (Tout)"); }
    if(document.getElementById(`opt-pail-${qty}`).checked) { opts.push("Paillettes"); }
    if(document.getElementById(`opt-perle-${qty}`).checked) { finalPrice += 8; opts.push("Perles Emb."); }
    if(document.getElementById(`opt-crown-${qty}`).checked) { finalPrice += 10; opts.push("Gde Couronne"); }
    if(document.getElementById(`opt-crown-mini-${qty}`).checked) { finalPrice += 4; opts.push("Mini Couronne"); }
    if(document.getElementById(`opt-led-${qty}`).checked) { finalPrice += 5; opts.push("LED"); }
    if(document.getElementById(`opt-doudou-${qty}`).checked) { finalPrice += 3; opts.push("Petite Peluche"); }
    if(document.getElementById(`opt-doudou-m-${qty}`).checked) { finalPrice += 15; opts.push("Moyenne Peluche"); }

    const initType = document.getElementById(`opt-init-${qty}`).value;
    if(initType) {
        finalPrice += 3; 
        const lettre = document.getElementById(`init-text-${qty}`).value;
        opts.push(`Initiale ${initType} (${lettre})`);
    }

    const stickType = document.getElementById(`opt-sticker-type-${qty}`).value;
    if(stickType) {
        finalPrice += (stickType === "Simple" ? 10 : 15);
        opts.push(`Sticker: "${document.getElementById(`sticker-${qty}`).value}"`);
    }

    const bandeType = document.getElementById(`opt-bande-type-${qty}`).value;
    if(bandeType) {
        finalPrice += (bandeType === "Simple" ? 12 : 15);
        opts.push(`Bande: "${document.getElementById(`bande-${qty}`).value}"`);
    }
    
    if(document.getElementById(`opt-carte-${qty}`).checked) {
        finalPrice += 5;
        opts.push(`Carte: "${document.getElementById(`carte-text-${qty}`).value}"`);
    }

    if(document.getElementById(`opt-photo-${qty}`).checked) {
        finalPrice += 5; opts.push("Impression Photo");
    }

    addToCart({ 
        title: `Bouquet ${qty} Roses`, 
        price: finalPrice, 
        image: `images/bouquet_${qty}.jpg`, 
        desc: `Couleur: ${document.getElementById(`color-${qty}`).value} | Pack: ${pack} | Opt: ${opts.join(', ')}` 
    });
}

// --- 2. BOXES (CHOCOLATS MULTIPLES + DOUDOU 7.50€) ---
function renderBoxes() {
    const container = document.getElementById('page-boxes');
    if (!container) return;

    container.innerHTML = LISTE_BOXES.map(box => `
        <div class="product-card">
            <div class="card-image"><img src="${box.img}"></div>
            <div class="card-info">
                <h3>${box.title}</h3>
                
                <label class="opt-label">Style de la Box :</label>
                <select id="box-style-${box.id}" class="form-control mb-10" onchange="toggleBoxOptions('${box.id}', ${box.priceFleur}, ${box.priceChoco})">
                    <option value="Fleurs">Côté Fleurs (Mixte)</option>
                    <option value="Choco">100% Chocolat</option>
                </select>

                <p class="card-price" id="price-display-${box.id}">${box.priceFleur} €</p>
                
                <div id="opts-fleurs-${box.id}">
                    <label class="opt-label">Côté Fleurs (Couleur) :</label>
                    <select id="box-fleur-${box.id}" class="form-control mb-10">${COULEURS_ROSES.map(c => `<option value="${c}">${c}</option>`).join('')}</select>
                    
                    <div class="perso-box">
                        <label class="opt-label">Ajouter Initiale (+5€) :</label>
                        <select id="box-init-${box.id}" class="form-control" onchange="toggleSelect('box-init-${box.id}', 'box-letter-wrapper-${box.id}')">
                            <option value="">Non</option>
                            <option value="Roses">Oui (En Roses)</option>
                            <option value="Perles">Oui (En Perles)</option>
                        </select>
                        <div id="box-letter-wrapper-${box.id}" class="hidden"><input type="text" id="box-letter-${box.id}" class="form-control" placeholder="Lettre"></div>
                    </div>
                </div>

                <label class="opt-label">Choix Chocolats (Cochez vos préférés) :</label>
                <div class="options-box" id="choco-wrapper-${box.id}">
                    ${CHOCOLATS.map(c => `
                        <label class="opt-check">
                            <input type="checkbox" name="choco-check-${box.id}" value="${c}"> ${c}
                        </label>
                    `).join('')}
                </div>

                <div class="options-box">
                    <label class="opt-label mt-2">Doudous :</label>
                    <select id="box-doudou-${box.id}" class="form-control">
                        <option value="0">Aucun</option>
                        <option value="${box.doudouPrice}">🧸 2 Doudous (+${box.doudouPrice.toFixed(2)}€)</option>
                    </select>

                    <label class="opt-label mt-2">Accessoires :</label>
                    <label class="opt-check"><input type="checkbox" id="box-topper-${box.id}"> 🎂 Topper (+2€)</label>
                    
                    <label class="opt-label mt-2">Bande Personnalisée :</label>
                    <select id="box-bande-type-${box.id}" class="form-control" onchange="toggleSelect('box-bande-type-${box.id}', 'box-bande-wrapper-${box.id}')">
                        <option value="">Aucune</option>
                        <option value="Simple">Texte Court (+12€)</option>
                        <option value="Long">Texte Long (+15€)</option>
                    </select>
                    <div id="box-bande-wrapper-${box.id}" class="hidden"><input type="text" id="box-bande-${box.id}" class="form-control" placeholder="Texte sur ruban..."></div>
                </div>

                <button class="btn-discover" style="width:100%;" onclick="addBoxToCart('${box.id}', '${box.title}', ${box.priceFleur}, ${box.priceChoco})">Ajouter</button>
            </div>
        </div>`).join('');
}

window.toggleBoxOptions = function(id, priceFleur, priceChoco) {
    const style = document.getElementById(`box-style-${id}`).value;
    const optsFleurs = document.getElementById(`opts-fleurs-${id}`);
    const display = document.getElementById(`price-display-${id}`);

    if(style === 'Choco') {
        optsFleurs.classList.add('hidden');
        display.innerText = priceChoco + " €";
    } else {
        optsFleurs.classList.remove('hidden');
        display.innerText = priceFleur + " €";
    }
}

function addBoxToCart(id, title, priceFleur, priceChoco) {
    const style = document.getElementById(`box-style-${id}`).value;
    let finalPrice = (style === 'Choco') ? priceChoco : priceFleur;
    let details = [];

    details.push(`Style: ${style}`);
    
    // Récupération des chocolats cochés
    const checkedChocos = Array.from(document.querySelectorAll(`input[name="choco-check-${id}"]:checked`)).map(cb => cb.value);
    const chocoString = checkedChocos.length > 0 ? checkedChocos.join(', ') : "Surprise (Mix)";
    details.push(`Chocos: ${chocoString}`);

    // Options si mode Fleurs
    if(style === 'Fleurs') {
        details.push(`Fleurs: ${document.getElementById(`box-fleur-${id}`).value}`);
        const init = document.getElementById(`box-init-${id}`).value;
        if (init) {
            finalPrice += 5; // Initiale passée à 5€
            details.push(`Initiale ${init}: ${document.getElementById(`box-letter-${id}`).value}`);
        }
    }

    // Options communes
    if(document.getElementById(`box-topper-${id}`).checked) { finalPrice += 2; details.push("Topper"); }

    // DOUDOU CORRIGÉ
    const doudouVal = parseFloat(document.getElementById(`box-doudou-${id}`).value);
    if(doudouVal > 0) { 
        finalPrice += doudouVal; 
        details.push(`2 Doudous`); 
    }

    const bandeType = document.getElementById(`box-bande-type-${id}`).value;
    if(bandeType) {
        finalPrice += (bandeType === "Simple" ? 12 : 15);
        details.push(`Bande: "${document.getElementById(`box-bande-${id}`).value}"`);
    }

    addToCart({ title, price: finalPrice, image: `images/${id === 'box30' ? 'box_choco_30.jpg' : 'box_choco_20.jpg'}`, desc: details.join(' | ') });
}

// --- 3. LOVE BOX (BASE 55€ + 5€ par lettre choco) ---
function renderLove() {
    const container = document.getElementById('page-love');
    if (!container) return;
    
    const basePrice = 55; // PRIX DE BASE BAISSÉ À 55€

    const getTypeSelector = (label, prefix) => `
        <label class="opt-label">${label} :</label>
        <select id="love-${prefix}-type" class="form-control mb-10" onchange="updateLoveOption('${prefix}')">
            <option value="Fleurs">Fleurs</option>
            <option value="Chocolats">Chocolats (+5€)</option>
        </select>
        <div id="love-${prefix}-fleurs" class="">
            <select id="love-${prefix}-color" class="form-control mb-10">
                ${COULEURS_ROSES.map(c => `<option value="${c}">${c}</option>`).join('')}
            </select>
        </div>
        <div id="love-${prefix}-choco" class="hidden">
             <select id="love-${prefix}-gout" class="form-control mb-10">
                ${CHOCOLATS.map(c => `<option value="${c}">${c}</option>`).join('')}
            </select>
        </div>
    `;

    container.innerHTML = `
        <div class="product-card" style="max-width:500px; margin:auto;">
            <div class="card-image"><img src="images/photo_lit_love.jpg"></div>
            <div class="card-info">
                <h3>Composition I ❤️ U</h3>
                <p class="card-price" style="font-size:2rem;">Dès ${basePrice} €</p>
                
                <div style="text-align:left;">
                    ${getTypeSelector('Lettre "I"', 'i')}
                    ${getTypeSelector('Symbole "❤️"', 'heart')}
                    ${getTypeSelector('Lettre "U"', 'u')}
                </div>

                <div class="options-box">
                    <strong>Accessoires :</strong>
                    <label class="opt-check"><input type="checkbox" id="love-diam"> ✨ Diamants (+4€)</label>
                    <label class="opt-check"><input type="checkbox" id="love-noeud"> 🎀 Nœud (+3€)</label>
                    <label class="opt-check"><input type="checkbox" id="love-doudou"> 🧸 Doudou (+3€)</label>
                    <label class="opt-check"><input type="checkbox" id="love-led"> 💡 LED (+5€)</label>
                    <label class="opt-check"><input type="checkbox" id="love-pail"> ✨ Paillettes (Offert)</label>
                </div>

                <button class="btn-discover" style="width:100%;" onclick="addLoveToCart()">Ajouter au Panier</button>
            </div>
        </div>`;
}

window.updateLoveOption = function(prefix) {
    const type = document.getElementById(`love-${prefix}-type`).value;
    const divFleurs = document.getElementById(`love-${prefix}-fleurs`);
    const divChoco = document.getElementById(`love-${prefix}-choco`);
    
    if(type === 'Fleurs') {
        divFleurs.classList.remove('hidden');
        divChoco.classList.add('hidden');
    } else {
        divFleurs.classList.add('hidden');
        divChoco.classList.remove('hidden');
    }
}

function addLoveToCart() {
    let price = 55; // PRIX DE BASE 55€
    let opts = [];

    ['i', 'heart', 'u'].forEach(prefix => {
        const type = document.getElementById(`love-${prefix}-type`).value;
        let val = "";
        if(type === 'Fleurs') {
            val = document.getElementById(`love-${prefix}-color`).value;
        } else {
            val = document.getElementById(`love-${prefix}-gout`).value;
            price += 5; // AJOUTE 5€ PAR LETTRE CHOCOLAT
        }
        const label = prefix === 'heart' ? '❤️' : prefix.toUpperCase();
        opts.push(`${label}: ${type} (${val})`);
    });

    if(document.getElementById('love-diam').checked) { price += 4; opts.push("Diamants"); }
    if(document.getElementById('love-noeud').checked) { price += 3; opts.push("Nœud"); }
    if(document.getElementById('love-doudou').checked) { price += 3; opts.push("Doudou"); }
    if(document.getElementById('love-led').checked) { price += 5; opts.push("LED"); }
    if(document.getElementById('love-pail').checked) { opts.push("Paillettes"); }

    addToCart({ title: "Love Box I ❤️ U", price: price, image: "images/photo_lit_love.jpg", desc: opts.join(' | ') });
}

// Helpers CSS
const style = document.createElement('style');
style.innerHTML = `
    .opt-label { display:block; text-align:left; font-weight:bold; font-size:0.85rem; margin-top:10px; }
    .opt-check { display:block; text-align:left; font-size:0.9rem; cursor:pointer; margin-bottom:5px; padding: 5px; border-radius:4px; }
    .opt-check:hover { background: #f0f0f0; }
    .options-box { background:#f9f9f9; padding:15px; border-radius:10px; margin:15px 0; text-align:left; }
    .perso-box { background:#fff0f5; padding:15px; border-radius:10px; margin:15px 0; text-align:left; }
    .mb-10 { margin-bottom: 10px; }
    .mt-2 { margin-top: 10px; }
    .hidden { display: none !important; }
`;
document.head.appendChild(style);

window.toggleSelect = function(triggerId, targetId) {
    const trigger = document.getElementById(triggerId);
    const target = document.getElementById(targetId);
    if(trigger && target) {
        if(trigger.value !== "" && trigger.value !== "0") target.classList.remove('hidden');
        else target.classList.add('hidden');
    }
}

window.toggleCheck = function(triggerId, targetId) {
    const trigger = document.getElementById(triggerId);
    const target = document.getElementById(targetId);
    if(trigger && target) {
        if(trigger.checked) target.classList.remove('hidden');
        else target.classList.add('hidden');
    }
}

document.addEventListener('DOMContentLoaded', () => { renderRoses(); renderBoxes(); renderLove(); });
