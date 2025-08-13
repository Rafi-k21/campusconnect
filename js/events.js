
const EVENTS = [
  { id: 1, title: 'Hackathon 101', date: '2025-09-20', category: 'tech', img: 'images/event-tech.svg', desc: 'Intro hackathon for beginners.' },
  { id: 2, title: 'Basketball Night', date: '2025-09-05', category: 'sports', img: 'images/event-sports.svg', desc: 'Friendly 3v3 games in the sports hall.' },
  { id: 3, title: 'Open Mic & Arts', date: '2025-08-30', category: 'arts', img: 'images/event-arts.svg', desc: 'Poetry, music, and more.' },
  { id: 4, title: 'JavaScript Deep Dive', date: '2025-10-01', category: 'tech', img: 'images/event-tech.svg', desc: 'Advanced DOM & async patterns.' }
];

function render(list) {
  const $list = $('#eventsList').empty();
  list.forEach(e => {
    const $card = $(`
      <article class="card" tabindex="0">
        <img src="${e.img}" alt="${e.category} event image">
        <div class="pad">
          <h3>${e.title}</h3>
          <p><strong>Date:</strong> ${e.date}</p>
          <p><strong>Category:</strong> ${e.category}</p>
          <button class="details-btn" aria-expanded="false">Details</button>
          <div class="details" hidden>
            <p>${e.desc}</p>
          </div>
        </div>
      </article>
    `);
    $card.find('.details-btn').on('click', function() {
      const $details = $(this).siblings('.details');
      const isHidden = $details.attr('hidden') !== undefined;
      $(this).attr('aria-expanded', isHidden ? 'true' : 'false');
      if (isHidden) { $details.hide().removeAttr('hidden').slideDown(200); }
      else { $details.slideUp(200, () => $details.attr('hidden', '')); }
    });
    $list.append($card);
  });
}

function applyFilters() {
  const cat = $('#category').val();
  const date = $('#dateFilter').val();
  let filtered = EVENTS.slice();
  if (cat && cat !== 'all') filtered = filtered.filter(e => e.category === cat);
  if (date) filtered = filtered.filter(e => e.date >= date);
  render(filtered);
}

$('#applyFilters').on('click', applyFilters);
$(function(){ render(EVENTS); });
