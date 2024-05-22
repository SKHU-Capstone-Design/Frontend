import '../Styles/Navbar.less';

function Navbar() {
  return (
    <div className='navbarWrap'>
    <header className='navHeader'>
        <h1>Capstone</h1>
  </header>
  <nav className="navbar">
    <ul>
      <li><a href="/avatar/check" className='hoverUnderline'>Avatar</a></li>
      <li><a href="/user/home" className='hoverUnderline' >Home</a></li>
      <li><a href="/diary/finalAll" className='hoverUnderline'>Diary</a></li>
      <li><a href="/user/info" className='hoverUnderline'>Mypage</a></li>

    </ul>
  </nav>
</div>
  );
}

export default Navbar;