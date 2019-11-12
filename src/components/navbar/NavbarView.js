import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-dark bg-dark">
					<a className="navbar-brand" target="_blank" rel="noopener noreferrer" href="https://github.com/Rudchyk/react-crash-course-s.rudchyk">
						React Crash Course S.Rudchyk
					</a>
          <ul className="nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Module 1</a>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

export default Navbar;
