function Pencil(){
  return (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/></svg>);
}
function Copy(){
  return (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>);
}
function ArrowDown(){
  return (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14"/><path d="M19 12l-7 7-7-7"/></svg>);
}

export default function Wallet(){
  return (
    <div className="safe-area">
      <div className="card wallet-card" style={{position:'relative'}}>
        <div style={{position:'absolute', right:16, top:16, display:'flex', gap:8}}>
          <span className="header-btn" style={{width:32,height:32}}><Pencil/></span>
          <span className="header-btn" style={{width:32,height:32}}><Copy/></span>
        </div>
        <div style={{color:'#8c8c8f'}}>Wallet 1</div>
        <div className="wallet-address">HEjDwL...jYyWFj</div>
        <div className="wallet-network">Solana (SOL)</div>
        <div style={{marginTop:12}}>
          <span style={{display:'inline-block', width:6,height:6, borderRadius:999, background:'#111', margin:'0 3px'}}/>
          <span style={{display:'inline-block', width:6,height:6, borderRadius:999, background:'#d0d0d2', margin:'0 3px'}}/>
          <span style={{display:'inline-block', width:6,height:6, borderRadius:999, background:'#d0d0d2', margin:'0 3px'}}/>
        </div>
      </div>

      <div className="section">
        <div className="section-title">Транзакции</div>
        <div className="card tx-card">
          <div className="tx-left">
            <div className="tx-icon"><ArrowDown/></div>
            <div>
              <div className="tx-name">Вывод средств</div>
              <div className="tx-date">07.08.2025 - 12:41</div>
            </div>
          </div>
          <div className="tx-amount tx-negative">-$2,800.00</div>
        </div>
      </div>
    </div>
  );
}