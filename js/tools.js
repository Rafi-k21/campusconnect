
// GPA Calculator with localStorage
const storeKey = 'cc-modules';

function loadModules() {
  try { return JSON.parse(localStorage.getItem(storeKey)) || []; }
  catch { return []; }
}
function saveModules(mods) { localStorage.setItem(storeKey, JSON.stringify(mods)); }

function calcGPA(mods) {
  let totalWeighted = 0, totalCredits = 0;
  mods.forEach(m => { totalWeighted += m.grade * m.credits; totalCredits += m.credits; });
  return totalCredits ? (totalWeighted / totalCredits) / 25 : 0; // simple 0-4 scale
}

function renderModules() {
  const mods = loadModules();
  const $tbody = $('#gpaTable tbody').empty();
  mods.forEach((m, i) => {
    const $tr = $(`<tr><td>${m.name}</td><td>${m.grade}</td><td>${m.credits}</td><td><button data-i="${i}" aria-label="Remove ${m.name}">✕</button></td></tr>`);
    $tbody.append($tr);
  });
  $('#gpaOutput').text('GPA: ' + calcGPA(mods).toFixed(2));
}

$('#addModule').on('click', function() {
  const name = $('#modName').val().trim();
  const grade = Number($('#modGrade').val());
  const credits = Number($('#modCredits').val());
  if (!name || isNaN(grade) || isNaN(credits) || grade < 0 || grade > 100 || credits <= 0) return alert('Please enter valid module, grade (0-100) and credits.');
  const mods = loadModules();
  mods.push({ name, grade, credits });
  saveModules(mods);
  $('#modName').val(''); $('#modGrade').val(''); $('#modCredits').val('');
  renderModules();
});

$('#gpaTable').on('click', 'button[data-i]', function() {
  const mods = loadModules();
  const idx = Number($(this).attr('data-i'));
  mods.splice(idx, 1); saveModules(mods); renderModules();
});

// Budget planner
function loadBudget() { try { return JSON.parse(localStorage.getItem('cc-budget')) || []; } catch { return []; } }
function saveBudget(items) { localStorage.setItem('cc-budget', JSON.stringify(items)); }
function sumBudget(items){ return items.reduce((s,i)=>s + Number(i.amount||0), 0); }

function renderBudget() {
  const items = loadBudget();
  const $list = $('#budgetList').empty();
  items.forEach((it, idx) => {
    const $li = $(`<li>${it.item}: £${Number(it.amount).toFixed(2)} <button data-i="${idx}" aria-label="Remove ${it.item}">✕</button></li>`);
    $list.append($li);
  });
  $('#budgetTotal').text(sumBudget(items).toFixed(2));
}

$('#addExpense').on('click', function() {
  const item = $('#budgetItem').val().trim();
  const amount = Number($('#budgetAmount').val());
  if (!item || isNaN(amount) || amount < 0) return alert('Please enter a valid item and amount.');
  const items = loadBudget(); items.push({ item, amount }); saveBudget(items);
  $('#budgetItem').val(''); $('#budgetAmount').val('');
  renderBudget();
});

$('#budgetList').on('click', 'button[data-i]', function() {
  const items = loadBudget(); items.splice(Number($(this).attr('data-i')), 1); saveBudget(items); renderBudget();
});

$(function(){ renderModules(); renderBudget(); });
