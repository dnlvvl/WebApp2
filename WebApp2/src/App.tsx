import { NavLink, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Wallet from './pages/Wallet';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';

function IconBell() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 5 3 9H3c0-4 3-2 3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
    </svg>
  );
}
function IconBack(){
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
  );
}

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const titles: Record<string, string> = {
    '/': 'Главная',
    '/wallet': 'Кошелёк',
    '/analytics': 'Аналитика',
    '/settings': 'Настройки',
  };
  const showBack = location.pathname !== '/';
  return (
    <div className="header">
      <div className="header-btn" onClick={() => showBack && navigate(-1)} aria-label="Назад" role="button">
        {showBack ? <IconBack/> : <span style={{opacity:0}}><IconBack/></span>}
      </div>
      <div className="header-title">{titles[location.pathname] || ''}</div>
      <div className="header-btn" aria-label="Уведомления"><IconBell/></div>
    </div>
  );
}

function TabIcon({name}:{name:'home'|'wallet'|'chart'|'settings'}){
  switch(name){
    case 'home': return (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7"/><path d="M9 22V12h6v10"/></svg>);
    case 'wallet': return (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="12" rx="3"/><path d="M16 7V5a3 3 0 0 0-3-3H4a3 3 0 0 0-3 3v2"/><circle cx="18" cy="13" r="1"/></svg>);
    case 'chart': return (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="12" width="4" height="8"/><rect x="10" y="8" width="4" height="12"/><rect x="17" y="4" width="4" height="16"/></svg>);
    case 'settings': return (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06A2 2 0 1 1 7.04 3.4l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c0 .66.39 1.26 1 1.51.32.13.66.2 1 .2A2 2 0 1 1 21 12h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>);
  }
}

function Layout(){
  const location = useLocation();
  return (
    <div className="app-container">
      <Header/>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/wallet" element={<Wallet/>} />
          <Route path="/analytics" element={<Analytics/>} />
          <Route path="/settings" element={<Settings/>} />
        </Routes>
      </div>
      <nav className="tabbar">
        <NavLink to="/" className={({isActive}) => `tab-item ${isActive ? 'active' : ''}`}>
          <TabIcon name='home'/>
          <div>Главная</div>
        </NavLink>
        <NavLink to="/wallet" className={({isActive}) => `tab-item ${isActive ? 'active' : ''}`}>
          <TabIcon name='wallet'/>
          <div>Кошелёк</div>
        </NavLink>
        <NavLink to="/analytics" className={({isActive}) => `tab-item ${isActive ? 'active' : ''}`}>
          <TabIcon name='chart'/>
          <div>Аналитика</div>
        </NavLink>
        <NavLink to="/settings" className={({isActive}) => `tab-item ${isActive ? 'active' : ''}`}>
          <TabIcon name='settings'/>
          <div>Настройки</div>
        </NavLink>
      </nav>
    </div>
  );
}

export default function App(){
  return <Layout/>;
}