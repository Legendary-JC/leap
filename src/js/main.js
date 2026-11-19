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