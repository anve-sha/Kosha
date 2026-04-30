/* auth.js - demo login handling */
document.addEventListener('DOMContentLoaded', ()=>{
  const form = document.getElementById('loginForm');
  if(!form) return;
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const email = document.getElementById('email').value;
    const pwd = document.getElementById('password').value;
    // demo acceptance
    if(email.includes('@') && pwd.length > 0){
      localStorage.setItem('se_user', JSON.stringify({email}));
      window.location.href = 'dashboard.html';
    } else {
      showAuthError('Please enter a valid email and password.');
    }
  });

  const googleBtn = document.getElementById('googleBtn');
  if(googleBtn) googleBtn.addEventListener('click', ()=> {
    localStorage.setItem('se_user', JSON.stringify({email:'google-user@demo.com'}));
    window.location.href = 'dashboard.html';
  });
});

function showAuthError(msg) {
  let el = document.getElementById('authError');
  if (!el) {
    el = document.createElement('p');
    el.id = 'authError';
    el.style.cssText = 'color:#ef4444;font-size:13px;margin-top:8px;text-align:center';
    document.querySelector('.auth-card').appendChild(el);
  }
  el.textContent = msg;
}
