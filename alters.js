/* alerts.js - small alert populator */
(function(){
  document.addEventListener('DOMContentLoaded', () => {
    const alertList = document.getElementById('alertList');
    if(!alertList) return;
    // sample alerts (you can compute these from transactions)
    const alerts = [
      {id:1, title:'High dining spend', text:'Your spending on Dining Out this week is 30% higher than usual.'},
      {id:2, title:'Budget nearing limit', text:'You have spent 78% of your monthly budget.'}
    ];
    alerts.forEach(a => {
      const div = document.createElement('div');
      div.className = 'alert-item';
      const strong = document.createElement('strong');
      strong.textContent = a.title;
      const p = document.createElement('p');
      p.className = 'muted';
      p.textContent = a.text;
      div.appendChild(strong);
      div.appendChild(p);
      alertList.appendChild(div);
    });
  });
})();
