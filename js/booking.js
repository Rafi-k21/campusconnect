
function isFutureDate(dateStr, timeStr) {
  try {
    const [y,m,d] = dateStr.split('-').map(Number);
    const [hh,mm] = timeStr.split(':').map(Number);
    const chosen = new Date(y, m-1, d, hh || 0, mm || 0);
    return chosen.getTime() > Date.now();
  } catch { return false; }
}

function validate(form) {
  const errors = [];
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const phone = form.phone.value.trim();
  const facility = form.facility.value;
  const date = form.date.value;
  const time = form.time.value;

  if (name.length < 2) errors.push('Please enter your full name.');
  // Simple email regex for demonstration
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('Enter a valid email address.');
  // Basic UK/EU-style phone check
  if (!/^\+?[0-9\s()-]{7,}$/.test(phone)) errors.push('Enter a valid phone number.');
  if (!facility) errors.push('Select a facility.');
  if (!date || !time || !isFutureDate(date, time)) errors.push('Choose a future date and time.');

  return { valid: errors.length === 0, errors };
}

document.getElementById('bookingForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const out = validate(this);
  const $errors = $('#formErrors');

  if (!out.valid) {
    $errors.text(out.errors.join(' '));
    return;
  }
  $errors.text('');
  const data = Object.fromEntries(new FormData(this).entries());
  const summaryHtml = `
    <ul>
      <li><strong>Name:</strong> ${data.name}</li>
      <li><strong>Email:</strong> ${data.email}</li>
      <li><strong>Phone:</strong> ${data.phone}</li>
      <li><strong>Facility:</strong> ${data.facility}</li>
      <li><strong>Date:</strong> ${data.date}</li>
      <li><strong>Time:</strong> ${data.time}</li>
      <li><strong>Notes:</strong> ${data.notes || '—'}</li>
    </ul>
  `;
  $('#bookingSummary .summary').html(summaryHtml);
  $('#bookingSummary').prop('hidden', false);
  // Optionally reset form
  // this.reset();
});
