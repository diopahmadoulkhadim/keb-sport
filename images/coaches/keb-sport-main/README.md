# KEB'S SPORT

Site vitrine responsive pour une salle de sport.

## Pages
- Accueil
- À propos
- Programmes
- Coachs
- Tarifs
- Planning
- Galerie
- Contact
- Inscription (envoi via WhatsApp)

## Fonctions incluses
- Bouton WhatsApp flottant sur toutes les pages
- Inscription et contact envoyés via WhatsApp (formule présélectionnée depuis la page Tarifs)
- Séance d'essai gratuite (accueil + inscription) : **à garder seulement si KEB'S SPORT la propose vraiment**
- Calculateur d'IMC sur l'accueil
- Galerie avec agrandissement (clic, flèches du clavier, Échap)
- Balises de partage (Open Graph) et favicon

## Technologies
- HTML5
- CSS3
- Bootstrap 5.3
- JavaScript
- Bootstrap Icons
- Google Fonts

## Installation
Aucune installation obligatoire. Ouvrir `index.html` dans un navigateur ou lancer le dossier avec Live Server dans VS Code.

## À personnaliser avant publication
- adresse exacte
- numéro de téléphone
- email
- tarifs officiels
- horaires officiels
- noms/photos réels des coachs
- planning réel
- photos de KEB'S SPORT
- numéro WhatsApp : variable `KEBS_WHATSAPP` en haut de `js/main.js` (utilisée par les formulaires Inscription et Contact)
- images : logo dans `images/logo.png`, bannière de l'accueil `images/hero/banner.jpg`, photos de la galerie dans `images/gallery/`

## Mise en ligne gratuite
- **Netlify Drop** : glisser le dossier `KEBS-SPORT` sur https://app.netlify.com/drop
- ou **GitHub Pages** : envoyer le dossier dans un dépôt, puis Settings > Pages
- Domaine (ex. kebssport.sn ou .com) : à acheter puis à relier dans les réglages de l'hébergeur

## Non inclus (nécessite des informations réelles)
- carte Google Maps (modèle prêt dans un commentaire de `contact.html`)
- témoignages de membres et moyens de paiement (Wave, Orange Money...)
- fiche Google Business, formulaire par email (Formspree), sitemap

