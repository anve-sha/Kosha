/* storage.js - sample app data + simple localStorage wrapper */
const Storage = (function(){
  const demoTx = [
    { id:1, title:'Amazon Purchase', category:'Shopping', date:'2025-10-24', amount:-129.00 },
    { id:2, title:'Salary Deposit', category:'Income', date:'2025-10-23', amount:3500.00 },
    { id:3, title:'Starbucks Coffee', category:'Dining', date:'2025-10-22', amount:-6.20 },
    { id:4, title:'Electric Bill', category:'Bills', date:'2025-10-20', amount:-45.00 }
  ];

  const sampleProfile = {
    name:'Demo User',
    email:'demo@expense.com',
    monthlyLimit:10000,
    balance:24562,
    saving:4120,
    invest:760,
    bankConnected: true
  };

  function getTransactions(){
    const stored = localStorage.getItem('se_tx');
    if(stored) return JSON.parse(stored);
    localStorage.setItem('se_tx', JSON.stringify(demoTx));
    return demoTx;
  }

  function getProfile(){
    const p = localStorage.getItem('se_profile');
    if(p) return JSON.parse(p);
    localStorage.setItem('se_profile', JSON.stringify(sampleProfile));
    return sampleProfile;
  }

  function setProfile(profile){
    localStorage.setItem('se_profile', JSON.stringify(profile));
  }

  function addTransaction(tx){
    const txs = getTransactions();
    tx.id = Date.now();
    txs.unshift(tx);
    localStorage.setItem('se_tx', JSON.stringify(txs));
    return tx;
  }

  function connectBank(info){
    const p = getProfile();
    p.bankConnected = true;
    p.bankInfo = info;
    setProfile(p);
  }

  return {
    getTransactions, getProfile, setProfile, addTransaction, connectBank
  };
})();
