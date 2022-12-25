const list = document.createElement('ul');
const info = document.createElement('p');
const html = document.querySelector('html');

info.textContent = "Vous trouverez ci-dessous une liste dynamique. Cliquez n'importe où sur la page pour ajouter un nouvel élément de liste. Cliquez sur un élément de liste existant pour changer son texte en autre chose.";

document.body.appendChild(info);
document.body.appendChild(list);

html.onclick = function() {
  const listItem = document.createElement('li');
  const listContent = prompt("Quel contenu voulez-vous dnner à cet élément de liste ?");
  listItem.textContent = listContent;
  list.appendChild(listItem);

  listItem.onclick = function(e) {
    e.stopPropagation();
    const listContent = prompt("Saisissez un nouveau contenu pour cet élément de liste");
    this.textContent = listContent;
  }
}