/* meter.js - simple gauge logic to map percent -> color; used by dashboard.js */
const Meter = (function(){
  function getColorForPercent(p){
    if(p <= 50) return '#10b981';      // green
    if(p <= 80) return '#f59e0b';      // yellow
    return '#ef4444';                  // red
  }

  function setBudgetProgress(el, percent){
    el.style.width = Math.min(100, percent) + '%';
    el.style.background = getGradient(percent);
  }

  function getGradient(percent){
    // We create a small gradient between green->yellow->red based on percent
    if(percent <= 50) return 'linear-gradient(90deg,#34d399,#10b981)';
    if(percent <= 80) return 'linear-gradient(90deg,#fbbf24,#f59e0b)';
    return 'linear-gradient(90deg,#fb7185,#ef4444)';
  }

  return { setBudgetProgress, getColorForPercent };
})();
