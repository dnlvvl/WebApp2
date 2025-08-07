import { useState } from 'react';

function ArrowUp(){
  return (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19V5"/><path d="M5 12l7-7 7 7"/></svg>);
}
function ArrowDown(){
  return (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14"/><path d="M19 12l-7 7-7-7"/></svg>);
}

const transactions = [
  { id: 1, name: 'Вывод средств', date: '07.08.2025 - 12:41', amount: -2800 },
  { id: 2, name: 'Расчет по боту', date: '11.07.2025 - 10:19', amount: 1417.23 },
  { id: 3, name: 'Расчет по боту', date: '01.06.2025 - 22:34', amount: 1834.43 },
  { id: 4, name: 'Пополнение', date: '28.05.2025 - 04:20', amount: 30000 },
];

export default function Home(){
  const [showTotal, setShowTotal] = useState(true);
  const balance = showTotal ? 130418.22 : 30418.22;
  const title = showTotal ? 'Общий Баланс' : 'Доступный Баланс';

  return (
    <div className="safe-area">
      <div className="card balance-card">
        <div className="balance-title">{title}</div>
        <div className="balance-value">${balance.toLocaleString('en-US', {minimumFractionDigits: 2})}</div>
        <div className="balance-username">@dnINvvl</div>
        <div style={{display:'flex', gap:6, justifyContent:'center', marginTop:10}}>
          <span style={{width:6,height:6,borderRadius:999,background:showTotal? '#111':'#d0d0d2'}}/>
          <span style={{width:6,height:6,borderRadius:999,background:!showTotal? '#111':'#d0d0d2'}}/>
        </div>
        <button onClick={()=>setShowTotal(!showTotal)} style={{position:'absolute', right:22, top:22, background:'#f1f1f2', border:'none', borderRadius:999, width:36, height:36, display:'grid', placeItems:'center', cursor:'pointer'}} aria-label="Показать/скрыть">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
        </button>
      </div>

      <div className="section actions">
        <div className="card action-card">
          <div>
            <div className="action-icon"><ArrowUp/></div>
            <div style={{textAlign:'center'}}>Внести</div>
          </div>
        </div>
        <div className="card action-card">
          <div>
            <div className="action-icon"><ArrowDown/></div>
            <div style={{textAlign:'center'}}>Вывести</div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-title">Транзакции <span style={{float:'right', color:'#888', fontWeight:500}}>Все</span></div>
        <div className="row" style={{flexDirection:'column', gap:12}}>
          {transactions.map(t => (
            <div className="card tx-card" key={t.id}>
              <div className="tx-left">
                <div className="tx-icon">{t.amount<0? <ArrowDown/> : <ArrowUp/>}</div>
                <div>
                  <div className="tx-name">{t.name}</div>
                  <div className="tx-date">{t.date}</div>
                </div>
              </div>
              <div className={`tx-amount ${t.amount<0? 'tx-negative':'tx-positive'}`}>
                {(t.amount<0? '-' : '+')}${Math.abs(t.amount).toLocaleString('en-US', {minimumFractionDigits:2})}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}