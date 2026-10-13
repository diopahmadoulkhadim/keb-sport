# KEB'SPORT

Site vitrine responsive pour une salle de sport.

## Pages
- Accueil
- À propos
- Programmes
- Coachs
- Tarifs
- Karaté
- Galerie
- Contact
- Inscription (envoi via WhatsApp)

## Fonctions incluses
- Bouton WhatsApp flottant sur toutes les pages
- Inscription et contact envoyés via WhatsApp (formule présélectionnée depuis la page Tarifs)
- Séance d'essai gratuite (accueil + inscription) : **à garder seulement si KEB'SPORT la propose vraiment**
- Calculateur d'IMC sur l'accueil
- Galerie avec agrandissement (clic, flèches du clavier, Échap)
- Balises de partage (Open Graph) et favicon
- Référencement : titres/descriptions par page, URL canoniques, données structurées et sitemap XML

## Technologies
- HTML5
- CSS3
- Bootstrap 5.3
- JavaScript
- Bootstrap Icons
- Google Fonts

## Installation
Aucune installation obligatoire. Ouvrir `index.html` dans un navigateur ou lancer le dossier avec Live Server dans VS Code.

## Tarifs et horaires intégrés
Les tarifs de coaching personnel, musculation/fitness, karaté et massage sur rendez-vous sont affichés dans la page Tarifs. La page Karaté présente les catégories et horaires communiqués.

## À personnaliser avant publication
- adresse exacte
- numéro de téléphone
- email
- confirmer les tarifs et horaires auprès de la salle avant publication
- noms/photos réels des coachs
- photos de KEB'SPORT
- numéro WhatsApp : variable `KEBS_WHATSAPP` en haut de `js/main.js` (utilisée par les formulaires Inscription et Contact)
- images : logo dans `images/logo.png`, bannière de l'accueil `images/hero/banner.jpg`, photos de la galerie dans `images/gallery/`

## Mise en ligne gratuite
- **Netlify Drop** : glisser le dossier `KEBS-SPORT` sur https://app.netlify.com/drop
- Le site est publié sur **GitHub Pages** : https://diopahmadoulkhadim.github.io/keb-sport/
- Domaine (ex. KEB'SPORT.sn ou .com) : à acheter puis à relier dans les réglages de l'hébergeur

## Non inclus (nécessite des informations réelles)
- carte Google Maps (modèle prêt dans un commentaire de `contact.html`)
- témoignages de membres et moyens de paiement (Wave, Orange Money...)
- inscription du site dans Google Search Console et envoi du sitemap (`sitemap.xml`)
- fiche Google Business et formulaire par email (Formspree)
