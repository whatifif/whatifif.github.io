import React from 'react';

const Header = () => {
  return (
    <header>
        <div className="container">
            <div className="intro-text">
                <div className="intro-lead-in">Welcome To Our Studio! React</div>
                <div className="intro-heading">It's Nice To Meet You</div>
                <a href="#services" className="page-scroll btn btn-xl">Tell Me More</a>
            </div>
        </div>
    </header>
  );
}

export default Header;