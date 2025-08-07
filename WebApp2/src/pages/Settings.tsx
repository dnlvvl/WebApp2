export default function Settings(){
  return (
    <div className="safe-area">
      <div className="section">
        <div className="card settings-list">
          <div className="item">
            <div className="left">
              <strong>Торговый пароль</strong>
              <div className="settings-hint">Торговый пароль требуется для вывода средств</div>
            </div>
            <span style={{color:'#2aa24f'}}>●</span>
          </div>
          <div className="item">
            <div className="left">
              <strong>Изменить торговый пароль</strong>
              <div className="settings-hint">Торговый пароль требуется для вывода средств</div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="card settings-list">
          <div className="item">
            <div className="left">
              <strong>Кошелек</strong>
              <div className="settings-hint">Добавьте кошелек, на который будете выводить средства</div>
            </div>
            <span style={{color:'#2aa24f'}}>●</span>
          </div>
          <div className="item">
            <div className="left"><strong>Wallet 1</strong><div className="settings-hint">HEjDwL...jYyWFj · Solana</div></div>
            <span>•••</span>
          </div>
          <div className="item">
            <div className="left"><strong>Wallet 2</strong><div className="settings-hint">0x793a...57c5e9 · Ethereum</div></div>
            <span>•••</span>
          </div>
          <div className="item">
            <div className="left"><strong>Wallet 3</strong><div className="settings-hint">UQBPXx...-2CB0X · TON</div></div>
            <span>•••</span>
          </div>
          <div className="item">
            <div className="left"><strong>Добавить новый кошелек</strong><div className="settings-hint">Добавьте кошелек, на который будете выводить средства</div></div>
          </div>
        </div>
      </div>
    </div>
  );
}