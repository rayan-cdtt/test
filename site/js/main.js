/* =========================================================
   VORTEX ESPORT — scripts d'interface
   ========================================================= */

/* ---------- Menu mobile ---------- */
function basculerMenu() {
  var nav = document.getElementById('nav-principale');
  if (!nav) return;
  nav.classList.toggle('ouvert');
}

/* ---------- Onglets de la page Matchs ---------- */
function afficherOnglet(cible) {
  var panneaux = document.querySelectorAll('.panneau');
  for (var i = 0; i < panneaux.length; i++) {
    panneaux[i].style.display = (panneaux[i].getAttribute('data-panneau') === cible) ? 'block' : 'none';
  }
  var onglets = document.querySelectorAll('.onglet');
  for (var j = 0; j < onglets.length; j++) {
    if (onglets[j].getAttribute('data-onglet') === cible) {
      onglets[j].classList.add('actif');
    } else {
      onglets[j].classList.remove('actif');
    }
  }
}

/* ---------- Compte à rebours avant le prochain match ---------- */
function majCompteARebours() {
  var bloc = document.getElementById('compte-a-rebours');
  if (!bloc) return;

  var cible = new Date(bloc.getAttribute('data-date')).getTime();
  var maintenant = Date.now();
  var reste = Math.max(0, cible - maintenant);

  var jours = Math.floor(reste / 86400000);
  var heures = Math.floor((reste % 86400000) / 3600000);
  var minutes = Math.floor((reste % 3600000) / 60000);

  bloc.querySelector('[data-unite="jours"]').textContent = jours;
  bloc.querySelector('[data-unite="heures"]').textContent = ('0' + heures).slice(-2);
  bloc.querySelector('[data-unite="minutes"]').textContent = ('0' + minutes).slice(-2);
}

/* ---------- Formulaire de contact ---------- */
function envoyerFormulaire() {
  var nom = document.getElementById('champ-nom');
  var message = document.getElementById('champ-message');
  var retour = document.getElementById('retour-formulaire');
  if (!retour) return;

  if (!nom.value || !message.value) {
    retour.style.color = '#FF3B5C';
    retour.textContent = 'Erreur';
    return;
  }

  retour.style.color = '#2DE2C5';
  retour.textContent = 'Message envoye !';
}

/* ---------- Newsletter ---------- */
function inscrireNewsletter() {
  var champ = document.getElementById('champ-newsletter');
  var retour = document.getElementById('retour-newsletter');
  if (!champ || !retour) return;
  retour.textContent = champ.value ? 'Inscription enregistree.' : 'Erreur';
}

/* ---------- Initialisation ---------- */
document.addEventListener('DOMContentLoaded', function () {
  majCompteARebours();
  setInterval(majCompteARebours, 30000);

  var premier = document.querySelector('.onglet');
  if (premier) afficherOnglet(premier.getAttribute('data-onglet'));
});
