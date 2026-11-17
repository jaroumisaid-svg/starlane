/* Réglages du site StarLane. Seul fichier à modifier pour brancher le prix, le paiement et la pub.
   prices  : prix public en USD pour 1 à 4 feux. Vide = la page n'affiche AUCUN prix.
   compareAt : prix barré unitaire. Vide = pas de barré.
   proof   : chiffres de preuve sociale (commandes 24 h, nombre de cyclistes). Vide = masqué.
   links   : liens de paiement Stripe (Payment Links) pour 1 à 4 feux.
   pixelId : identifiant du pixel Meta. Vide = aucun pixel chargé.
   videos  : vidéos verticales de la section « See the two stars ».
   reviews : avis affichés (étoiles, citation, section). Liste vide = rien.
   Ces valeurs sont publiques par nature. Ne JAMAIS mettre de clé d'API ici. */
window.SL_CONFIG = {
  /* MAQUETTE DE TEST (17/11/2026) — prix, prix barré, avis et chiffres de preuve sociale ci-dessous sont des
     EXEMPLES demandés par Franco pour tester le rendu « comme le site de référence ». Ce ne sont pas des clients
     ni des ventes. Ne pas publier tel quel : vider reviews/proof/compareAt ou les remplacer par des vrais. */
  prices: { 1: "39.99", 2: "69.99", 3: "99.99", 4: "119.99" },
  compareAt: "79.99",
  links: { 1: "", 2: "", 3: "", 4: "" },
  pixelId: "",
  videos: [
    { src: "video/b.mp4", poster: "video/b.jpg", label: "Two red stars on the road at night" },
    { src: "video/a.mp4", poster: "video/a.jpg", label: "The gift every cyclist actually uses" },
    { src: "video/c.mp4", poster: "video/c.jpg", label: "Duct tape was not the answer" }
  ],
  proof: { ordersLast24h: "87+", riders: "500+" },
  reviews: [
    { name: "Emily M.", date: "Nov 2026", rating: 5, text: "Actually useful, not a gimmick. I bought it for the laser stars and kept it for the rear light. Cars give me way more room on my 6am commute now." },
    { name: "Jack T.", date: "Nov 2026", rating: 5, text: "Strapped it on in ten seconds, no tools. The two stars on the road look even better in person than in the video." },
    { name: "Marcus L.", date: "Oct 2026", rating: 4, text: "Works great on dark asphalt. Under bright streetlights the stars are fainter, but the rear light is still solid. Took about two weeks to arrive." },
    { name: "Sophie R.", date: "Oct 2026", rating: 5, text: "Got two, one for my riding buddy. We ride back from the group ride together and drivers slow down behind us. Best cycling gift I've given." },
    { name: "Dana K.", date: "Oct 2026", rating: 5, text: "Light, small, and the strap fits my gravel bike's seat post fine. My wife finally stopped worrying about my evening rides." },
    { name: "Chris P.", date: "Sep 2026", rating: 4, text: "Does what it says. I'd love a USB-C cable in the box, but the stars are bright and the mount holds on rough roads." }
  ],
  contactEmail: "",
  instagram: "https://www.instagram.com/starlane.bike/"
};
