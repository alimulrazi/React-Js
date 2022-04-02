import React, {Component} from "react";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import About from "../components/About";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Services from "../components/Services";
import Team from "../components/Team";
import Portfolio from "./Portfolio";

export class Header extends Component{

    render(){
        return(
            <Router>
            <div>
                <header id="header" className="fixed-top d-flex align-items-center">
                    <div className="container d-flex align-items-center">
                    <h1 className="logo me-auto"><a href="index.html">Presento<span>.</span></a></h1>

                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                        <li><Link className="nav-link scrollto active" to="/">Home</Link></li>
                        <li><Link className="nav-link scrollto" to="about">About</Link></li>
                        <li><Link className="nav-link scrollto" to="services">Services</Link></li>
                        <li><Link className="nav-link scrollto" to="portfolio">Portfolio</Link></li>
                        <li><Link className="nav-link scrollto" to="team">Team</Link></li>
                        <li><Link to="blog">Blog</Link></li>
                        <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
                            <ul>
                            <li><a href="#">Drop Down 1</a></li>
                            <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                                <ul>
                                <li><a href="#">Deep Drop Down 1</a></li>
                                <li><a href="#">Deep Drop Down 2</a></li>
                                <li><a href="#">Deep Drop Down 3</a></li>
                                <li><a href="#">Deep Drop Down 4</a></li>
                                <li><a href="#">Deep Drop Down 5</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Drop Down 2</a></li>
                            <li><a href="#">Drop Down 3</a></li>
                            <li><a href="#">Drop Down 4</a></li>
                            </ul>
                        </li>
                        <li><Link className="nav-link scrollto" to="contact-us">Contact</Link></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>

                    <a href="#about" className="get-started-btn scrollto">Get Started</a>
                    </div>
                </header>

                <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/about' element={< About />}></Route>
                 <Route exact path='/services' element={< Services />}></Route>
                 <Route exact path='/blog' element={< Blog />}></Route>
                 <Route exact path='/team' element={< Team />}></Route>
                 <Route exact path='/portfolio' element={< Portfolio />}></Route>
                 <Route exact path='/contact-us' element={< Contact />}></Route>
                 
          </Routes>
            </div>
            </Router>
        )
    }

}
export default Header;