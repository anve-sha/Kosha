/* dashboard.js - populates dashboard elements and charts */
document.addEventListener('DOMContentLoaded', () => {
  const profile = Storage.getProfile();
  const txs = Storage.getTransactions();

  // header
  document.getElementById('userName').textContent = profile.name || profile.email || 'User';

  // top stats
  document.getElementById('totalBalance').textContent = `Rs.${(profile.balance).toLocaleString()}`;
  document.getElementById('balanceDelta').textContent = '+2.5% this month';

  // budget numbers
  document.getElementById('monthlyBudget').innerHTML = `Rs.${(profile.balance - 20000).toLocaleString()} <span class="muted">/ $${profile.monthlyLimit.toLocaleString()}</span>`;
  document.getElementById('savingAmount').textContent = `Rs.${profile.saving.toLocaleString()}`;
  document.getElementById('investAmount').textContent = `Rs.${profile.invest.toLocaleString()}`;

  // progress bar
  const spent = Math.max(0, profile.monthlyLimit - (profile.balance - 20000)); // demo math
  const percent = Math.round((spent / profile.monthlyLimit) * 100);
  const progressEl = document.getElementById('budgetProgressBar');
  Meter.setBudgetProgress(progressEl, percent);

  // alerts (if any) handled by alerts.js

  // recent transactions
  const recent = document.getElementById('recentTransactions');
  txs.slice(0,6).forEach(t => {
    const tr = document.createElement('tr');
    const cols = [
      { text: t.title, style: '' },
      { text: t.category, style: 'color:var(--muted)' },
      { text: t.date, style: 'color:var(--muted)' },
      { text: `${t.amount < 0 ? '-' : '+'}Rs.${Math.abs(t.amount).toFixed(2)}`, style: `text-align:right;color:${t.amount < 0 ? '#ef4444' : '#10b981'}` }
    ];
    cols.forEach(({ text, style }) => {
      const td = document.createElement('td');
      td.textContent = text;
      if (style) td.style.cssText = style;
      tr.appendChild(td);
    });
    recent.appendChild(tr);
  });

  // charts (Chart.js)
  if(window.Chart){
    const ctx = document.getElementById('incomeExpenseChart').getContext('2d');
    new Chart(ctx, {
      type:'line',
      data:{
        labels:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
        datasets:[
          {label:'Income', data:[500,600,700,400,800,900,750], borderColor:'#10b981', fill:false, tension:0.3},
          {label:'Expense', data:[300,450,380,520,610,420,500], borderColor:'#ef4444', fill:false, tension:0.3}
        ]
      },
      options:{responsive:true, maintainAspectRatio:false, plugins:{legend:{position:'bottom'}}}
    });

    const pieCtx = document.getElementById('spendingPie').getContext('2d');
    new Chart(pieCtx, {
      type:'doughnut',
      data:{
        labels:['Food','Shopping','Transport','Bills','Other'],
        datasets:[{data:[28,22,18,14,18], backgroundColor:['#06b6d4','#f59e0b','#34d399','#f87171','#60a5fa']}]
      },
      options:{responsive:true, maintainAspectRatio:false, plugins:{legend:{position:'right'}}}
    });
  }
});
