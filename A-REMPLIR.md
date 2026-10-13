# Checklist avant mise en ligne

Remplacez chaque élément provisoire. Cochez au fur et à mesure.

## Contact (à changer partout)
- [x] Numéro WhatsApp et téléphone affiché : 77 470 05 54 (Mawoury Ba, gérante) : `js/main.js` (`KEBS_WHATSAPP`), `index.html`, `about.html`, `contact.html`
- [ ] Email `contact@KEB'SPORT.sn` : `index.html`, `about.html`, `contact.html`
- [ ] Adresse (actuellement « Sénégal ») et horaires `06h00 – 22h00` : `contact.html`
- [ ] Carte Google Maps : bloc `map-box` et commentaire modèle dans `contact.html`

## Contenu
- [ ] Tarifs officiels : `pricing.html` **et** les options du formulaire dans `signup.html`
- [ ] Supprimer le bandeau jaune « Tarifs indicatifs pour la maquette » : `pricing.html` (visible par les visiteurs)
- [ ] Planning réel + supprimer le bandeau « Planning indicatif » et le texte « Exemple de planning » : `schedule.html`
- [ ] Vrais coachs (noms, spécialités, photos, liens Facebook/Instagram) : `coaches.html`
- [ ] Chiffres 10+ ans, 500+ membres, 15+ programmes : `index.html`, `about.html` (mettre les vrais chiffres)
- [ ] Séance d'essai gratuite : `index.html` et `signup.html` (retirer si non proposée)

## Images
- [x] Logo (`images/logo.png`), bannière (`images/hero/banner.jpg`) et photos de galerie (`images/gallery/`) : en place
- [ ] Coachs : les 4 portraits de `images/coaches/` sont découpés dans la photo d'équipe. Faites correspondre les **noms, spécialités et années** de `coaches.html` aux vraies personnes (les noms actuels sont fictifs)
- [ ] `images/gallery/musculation.jpg` ressemble à une photo d'une autre salle : remplacez-la par une photo de votre salle
- [ ] Légendes de la galerie (`gallery.html`) : vérifiez qu'elles correspondent aux photos

## Mise en ligne
- [ ] Hébergement gratuit (Netlify Drop ou GitHub Pages), puis nom de domaine
- [ ] Fiche Google Business
- [ ] Aperçu des liens partagés : une fois le domaine connu, ajouter dans le `<head>` de chaque page `<meta property="og:image" content="https://VOTRE-DOMAINE/images/hero/banner.jpg">` (et repasser `twitter:card` à `summary_large_image`)
