import './../styles/header.scss'
import { List } from 'phosphor-react'

export function Header() {
    return(
        <>
            <nav className="navbar sticky-top navbar-expand-lg">
                <div className="container-fluid ">
                    <a className="navbar-brand" href="#"> <img src='./src/assets/logo.png' alt="Logo" />Attorney & Law</a>
                    <button className="navbar-toggler border border-secondary-subtle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <List size={24} className='text-light'/>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarText">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link d-none d-lg-block" aria-current="page" href="#">
                                    <button type="button" className="btn btn-outline-light">Contact us</button>
                                </a>
                                <a className="nav-link d-lg-none" aria-current="page" href="#">Contact us</a>
                            </li>
                            <li className="nav-item d-lg-none">
                                <a className="nav-link" aria-current="page" href="#aboutUs">About us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}