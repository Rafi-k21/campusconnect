
function validateContact() {
  const name = document.getElementById('cName').value.trim();
  const email = document.getElementById('cEmail').value.trim();
  const subject = document.getElementById('cSubject').value.trim();
  const message = document.getElementById('cMessage').value.trim();
  const errors = [];
  if (name.length < 2) errors.push('Please enter your name.');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('Enter a valid email.');
  if (subject.length < 3) errors.push('Add a subject.');
  if (message.length < 5) errors.push('Your message is too short.');
  return errors;
}

document.getElementById('contactForm')?.addEventListener('input', function() {
  const preview = document.getElementById('messagePreview');
  const name = document.getElementById('cName').value.trim();
  const subject = document.getElementById('cSubject').value.trim();
  const message = document.getElementById('cMessage').value.trim();
  preview.innerHTML = `<strong>${subject || 'Subject'}</strong><br>From: ${name || 'Your name'}<br><br>${message || 'Your message...'}`;
});

document.getElementById('contactForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const errors = validateContact();
  const out = document.getElementById('contactErrors');
  if (errors.length) out.textContent = errors.join(' ');
  else {
    out.textContent = 'Message sent (demo)!';
    this.reset();
    document.getElementById('messagePreview').textContent = 'Your message preview will appear here.';
  }
});
