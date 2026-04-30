/* budget.js - small editor for monthly limit (demo) */
(function(){
  document.addEventListener('click', (e)=>{
    if(e.target && e.target.id === 'editLimit'){
      e.preventDefault();
      const p = Storage.getProfile();
      showBudgetModal(p);
    }
  });
  function showBudgetModal(profile) {
    let modal = document.getElementById('budgetModal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'budgetModal';
      modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.4);display:flex;align-items:center;justify-content:center;z-index:2000';
      modal.innerHTML = '';

      const box = document.createElement('div');
      box.style.cssText = 'background:#fff;padding:28px;border-radius:16px;width:320px;box-shadow:0 20px 48px rgba(0,0,0,0.2)';

      const title = document.createElement('h3');
      title.textContent = 'Set Monthly Budget';
      title.style.cssText = 'margin:0 0 16px;color:#0b2447';

      const input = document.createElement('input');
      input.type = 'number';
      input.id = 'budgetLimitInput';
      input.value = profile.monthlyLimit;
      input.min = '0';
      input.style.cssText = 'width:100%;padding:10px 14px;border-radius:10px;border:1px solid #e6e9ef;font-size:15px;margin-bottom:16px';

      const row = document.createElement('div');
      row.style.cssText = 'display:flex;gap:10px';

      const saveBtn = document.createElement('button');
      saveBtn.textContent = 'Save';
      saveBtn.className = 'btn primary';
      saveBtn.style.flex = '1';
      saveBtn.addEventListener('click', () => {
        const val = Number(input.value);
        if (!isNaN(val) && val > 0) {
          profile.monthlyLimit = val;
          Storage.setProfile(profile);
          document.body.removeChild(modal);
          window.location.reload();
        }
      });

      const cancelBtn = document.createElement('button');
      cancelBtn.textContent = 'Cancel';
      cancelBtn.className = 'btn outline';
      cancelBtn.style.flex = '1';
      cancelBtn.addEventListener('click', () => document.body.removeChild(modal));

      row.appendChild(saveBtn);
      row.appendChild(cancelBtn);
      box.appendChild(title);
      box.appendChild(input);
      box.appendChild(row);
      modal.appendChild(box);
      document.body.appendChild(modal);
    }
  }
})();
