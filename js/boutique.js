// ==========================================
// 🛍️ CATALOGUE - CONFIGURATION PRODUITS
// ==========================================

const LISTE_BOUQUETS = [
    { qty: 7, prix: 20 }, { qty: 10, prix: 25 }, { qty: 15, prix: 30 },
    { qty: 20, prix: 35 }, { qty: 25, prix: 40 }, { qty: 30, prix: 45 },
    { qty: 40, prix: 55 }, { qty: 50, prix: 65 }, { qty: 60, prix: 75 },
    { qty: 70, prix: 90 }, { qty: 100, prix: 120 }
];

const COULEURS_ROSES = ["Rouge ❤️", "Blanc 🤍", "Noir 🖤", "Rose 🌸", "Violet 💜", "Bleu Clair ❄️", "Bleu Foncé 🔵"];
const CHOCOLATS = ["Ferrero Rocher", "Raffaello", "Kinder Schoko-Bons", "Kinder Bueno", "Mix Kinder/Ferrero"];

// Box 30cm à 72€
const LISTE_BOXES = [
    { id: 'box20', title: 'Box Gourmande 20cm', basePrice: 45, img: 'images/box_choco_20.jpg' },
    { id: 'box30', title: 'Box Gourmande 30cm', basePrice: 72, img: 'images/box_choco_30.jpg' }
];

// Liste complète
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

// --- 1. BOUQUETS ---
function renderRoses() {
    const container = document.getElementById('page-roses');
    if (!container) return;

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

                <label class="opt-label">Emballage :</label>
                <select id="pack-${id}" class="form-control mb-10">${getEmballageOptions()}</select>

                <div class="options-box">
                    <strong>Accessoires :</strong>
                    <label class="opt-check"><input type="checkbox" id="opt-pap-${id}"> 🦋 Papillon (+2€)</label>
                    <label class="opt-check"><input type="checkbox" id="opt-noeud-${id}"> 🎀 Nœud Tulle (+3€)</label>
                    <label class="opt-check"><input type="checkbox" id="opt-noeud-luxe-${id}"> 🎀 Nœud Luxe (+5€)</label>
                    <label class="opt-check"><input type="checkbox" id="opt-pique-${id}"> 🍫 Pique Ferrero (+1€)</label>
                    <label class="opt-check"><input type="checkbox" id="opt-topper-${id}"> 🎂 Topper (Anniv/Cœur) (+2€)</label>
                    
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

    // Accessoires
    if(document.getElementById(`opt-pap-${qty}`).checked) { finalPrice += 2; opts.push("Papillon"); }
    if(document.getElementById(`opt-noeud-${qty}`).checked) { finalPrice += 3; opts.push("Nœud Tulle"); }
    if(document.getElementById(`opt-noeud-luxe-${qty}`).checked) { finalPrice += 5; opts.push("Nœud Luxe"); }
    if(document.getElementById(`opt-pique-${qty}`).checked) { finalPrice += 1; opts.push("Pique Ferrero"); }
    if(document.getElementById(`opt-topper-${qty}`).checked) { finalPrice += 2; opts.push("Topper"); }
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
        const le = document.getElementById(`init-text-${qty}`).value;
        opts.push(`Initiale ${initType} (${let})`);
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

// --- 2. BOXES ---
function renderBoxes() {
    const container = document.getElementById('page-boxes');
    if (!container) return;

    container.innerHTML = LISTE_BOXES.map(box => `
        <div class="product-card">
            <div class="card-image"><img src="${box.img}"></div>
            <div class="card-info">
                <h3>${box.title}</h3>
                <p class="card-price">Dès ${box.basePrice} €</p>
                
                <label class="opt-label">Côté Fleurs (Couleur) :</label>
                <select id="box-fleur-${box.id}" class="form-control mb-10">${COULEURS_ROSES.map(c => `<option value="${c}">${c}</option>`).join('')}</select>

                <label class="opt-label">Côté Chocolats :</label>
                <select id="choco-${box.id}" class="form-control mb-10">${CHOCOLATS.map(c => `<option value="${c}">${c}</option>`).join('')}</select>

                <div class="perso-box">
                    <label class="opt-label">Ajouter Initiale (+3€) :</label>
                    <select id="box-init-${box.id}" class="form-control" onchange="toggleSelect('box-init-${box.id}', 'box-letter-wrapper-${box.id}')">
                        <option value="">Non</option>
                        <option value="Roses">Oui (En Roses)</option>
                        <option value="Perles">Oui (En Perles)</option>
                    </select>
                    <div id="box-letter-wrapper-${box.id}" class="hidden"><input type="text" id="box-letter-${box.id}" class="form-control" placeholder="Lettre"></div>

                    <label class="opt-label mt-2">Accessoires :</label>
                    <label class="opt-check"><input type="checkbox" id="box-topper-${box.id}"> 🎂 Topper (+2€)</label>
                    
                    <label class="opt-label mt-2">Doudous :</label>
                    <select id="box-doudou-${box.id}" class="form-control">
                        <option value="0">Aucun</option>
                        <option value="3">🧸 1 Petit Doudou (+3€)</option>
                        <option value="6">🧸🧸 2 Petits Doudous (+6€)</option>
                        <option value="15">🧸 1 Moyen Doudou (+15€)</option>
                    </select>

                    <label class="opt-label mt-2">Bande Personnalisée :</label>
                    <select id="box-bande-type-${box.id}" class="form-control" onchange="toggleSelect('box-bande-type-${box.id}', 'box-bande-wrapper-${box.id}')">
                        <option value="">Aucune</option>
                        <option value="Simple">Texte Court (+12€)</option>
                        <option value="Long">Texte Long (+15€)</option>
                    </select>
                    <div id="box-bande-wrapper-${box.id}" class="hidden"><input type="text" id="box-bande-${box.id}" class="form-control" placeholder="Texte sur ruban..."></div>
                </div>
                <button class="btn-discover" style="width:100%;" onclick="addBoxToCart('${box.id}', '${box.title}', ${box.basePrice}, '${box.img}')">Ajouter</button>
            </div>
        </div>`).join('');
}

function addBoxToCart(id, title, basePrice, img) {
    let finalPrice = basePrice;
    let details = [];

    details.push(`Fleurs: ${document.getElementById(`box-fleur-${id}`).value}`);
    details.push(`Choco: ${document.getElementById(`choco-${id}`).value}`);

    const init = document.getElementById(`box-init-${id}`).value;
    if (init) {
        finalPrice += 3;
        details.push(`Initiale ${init}: ${document.getElementById(`box-letter-${id}`).value}`);
    }
    
    if(document.getElementById(`box-topper-${id}`).checked) { finalPrice += 2; details.push("Topper"); }

    const doudouVal = parseInt(document.getElementById(`box-doudou-${id}`).value);
    if(doudouVal > 0) { finalPrice += doudouVal; details.push(`Doudou (${doudouVal}€)`); }

    const bandeType = document.getElementById(`box-bande-type-${id}`).value;
    if(bandeType) {
        finalPrice += (bandeType === "Simple" ? 12 : 15);
        details.push(`Bande: "${document.getElementById(`box-bande-${id}`).value}"`);
    }

    addToCart({ title, price: finalPrice, image: img, desc: details.join(' | ') });
}

// --- 3. LOVE BOX ---
function renderLove() {
    const container = document.getElementById('page-love');
    if (!container) return;
    
    const basePrice = 65; 

    const getTypeSelector = (label, prefix) => `
        <label class="opt-label">${label} :</label>
        <select id="love-${prefix}-type" class="form-control mb-10" onchange="updateLoveOption('${prefix}')">
            <option value="Fleurs">Fleurs</option>
            <option value="Chocolats">Chocolats</option>
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
                <p class="card-price" style="font-size:2rem;">${basePrice} €</p>
                
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
    let price = 65;
    let opts = [];

    ['i', 'heart', 'u'].forEach(prefix => {
        const type = document.getElementById(`love-${prefix}-type`).value;
        let val = "";
        if(type === 'Fleurs') {
            val = document.getElementById(`love-${prefix}-color`).value;
        } else {
            val = document.getElementById(`love-${prefix}-gout`).value;
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

// Helpers CSS injectés pour le style
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

// --- NOUVELLES FONCTIONS DE TOGGLE CORRECTES ---
// Pour les menus déroulants (Select)
window.toggleSelect = function(triggerId, targetId) {
    const trigger = document.getElementById(triggerId);
    const target = document.getElementById(targetId);
    if(trigger && target) {
        // Si vide ou "0" (ex: "Aucun"), on cache. Sinon on affiche.
        if(trigger.value !== "" && trigger.value !== "0") {
            target.classList.remove('hidden');
        } else {
            target.classList.add('hidden');
        }
    }
}

// Pour les cases à cocher (Checkbox)
window.toggleCheck = function(triggerId, targetId) {
    const trigger = document.getElementById(triggerId);
    const target = document.getElementById(targetId);
    if(trigger && target) {
        if(trigger.checked) {
            target.classList.remove('hidden');
        } else {
            target.classList.add('hidden');
        }
    }
}

document.addEventListener('DOMContentLoaded', () => { renderRoses(); renderBoxes(); renderLove(); });