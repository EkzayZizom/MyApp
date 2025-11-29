self.addEventListener("install", () => {
  console.log("Service Worker yüklendi");
});

self.addEventListener("fetch", () => {});
function saveLists() {
  localStorage.setItem("flipcardLists", JSON.stringify(lists));
}
function loadLists() {
  const saved = localStorage.getItem("flipcardLists");
  if (saved) {
    lists = JSON.parse(saved);
    renderLists();  // UI'ı günceller
  }
}
loadLists();
function addList(name) {
  lists.push({ name, cards: [] });
  saveLists();
  renderLists();
}
function addCard(listIndex, front, back) {
  lists[listIndex].cards.push({ front, back });
  saveLists();
  renderLists();
}
