import logo from './logo.svg';
import './Home.css';

function Home() {
  return (
    <div className="Home">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand bg-warning p-2" href="#">MENU</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav bg-danger">
                    <li className="nav-item">
                    <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-light" href="#">Order Pizza</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-light" href="#">About us</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
  );
}

export default Home;
