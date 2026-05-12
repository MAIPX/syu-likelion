import { Outlet, BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import App from './App';
import PostDetail from './PostDetail'; 
import NotFoundPage from './NotFoundPage';
import Parent from './Lifting';

function About() {
  return (
    <div>
      <h1>2025100662 프론트엔드 박민열입니다.(About)</h1>
      <p>안녕하세요! 라우팅 과제를 진행 중입니다.</p>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <header style={{ background: '#eee', padding: '10px' }}>
        <strong>공통 헤더</strong>
        {/* 2. 메뉴 이동을 위한 링크 추가 */}
        <nav style={{ marginTop: '5px' }}>
          <Link to="/" style={{ marginRight: '10px' }}>홈(Home)</Link>
          <Link to="/about">소개(About)</Link>
        </nav>
      </header>
      
      <main>
        <Outlet />
      </main>
      
      <footer style={{ background: '#eee', padding: '10px', marginTop: '20px' }}>공통 푸터</footer>
    </div>
  );
}

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/lifting" element={<Parent />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}