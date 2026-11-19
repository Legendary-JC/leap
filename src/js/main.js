/* ===== LEAP Canada – main.js ===== */

/* Header: add background after scrolling */
var hd = document.getElementById('hd');
if (hd) {
  var onScroll = function () { hd.classList.toggle('s', window.scrollY > 30); };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* Mobile menu */
var burger = document.getElementById('bg');
if (burger) {
  burger.addEventListener('click', function () {
    document.body.classList.toggle('open');
  });
  document.querySelectorAll('nav a').forEach(function (a) {
    a.addEventListener('click', function () {
      document.body.classList.remove('open');
    });
  });
}

/* Scroll reveal animations */
var io = new IntersectionObserver(function (entries) {
  entries.forEach(function (e, i) {
    if (e.isIntersecting) {
      setTimeout(function () { e.target.classList.add('in'); }, (i % 4) * 90);
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.rv').forEach(function (el) { io.observe(el); });

/* Card glow that follows the cursor */
document.querySelectorAll('.card').forEach(function (c) {
  c.addEventListener('pointermove', function (e) {
    var r = c.getBoundingClientRect();
    c.style.setProperty('--x', (e.clientX - r.left) + 'px');
    c.style.setProperty('--y', (e.clientY - r.top) + 'px');
  });
});

/* Resource filter tabs */
document.querySelectorAll('.tab').forEach(function (tb) {
  tb.addEventListener('click', function () {
    document.querySelectorAll('.tab').forEach(function (x) { x.classList.remove('on'); });
    tb.classList.add('on');
    var c = tb.dataset.cat;
    document.querySelectorAll('.card[data-cat]').forEach(function (el) {
      el.classList.toggle('hide', c !== 'all' && el.dataset.cat !== c);
    });
  });
});

/* Forms: send via Web3Forms */
document.querySelectorAll('form[data-form]').forEach(function (form) {
  var submitBtn = form.querySelector('button[type="submit"]');
  var msg = form.querySelector('.ok');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    var originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    msg.textContent = '';

    try {
      var response = await fetch(form.dataset.endpoint, {
        method: 'POST',
        body: new FormData(form)
      });
      var data = await response.json();

      if (response.ok && data.success !== false) {
        msg.textContent = 'Thank you! Your message has been sent.';
        form.reset();
      } else {
        msg.textContent = 'Error: ' + (data.message || 'Please try again.');
      }
    } catch (error) {
      msg.textContent = 'Something went wrong. Please try again.';
    } finally {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  });
});