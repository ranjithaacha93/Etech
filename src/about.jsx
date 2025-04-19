import './about.css'
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { BiMenuAltRight } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import about1 from './images/about1.png';
import about2 from './images/about2.png';
import about3 from './images/about3.png';
import { GoDotFill } from "react-icons/go";
import about4 from './images/about-last1.png'
import about5 from './images/about-last2.png'
import about6 from './images/about-last3.png'
import fottorimg from './images/image (3).png';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function about({ show, setshow }) {

    useEffect(() => {
                AOS.init({
                    duration: 1000,
                    once: true,
                });
            }, []);

    return (
        <>
            <div className="Navbar">
                <Link to="/" className="a1"> Etech. </Link>
                <Link to="/courses" className="a2"> Courses <IoIosArrowDown /></Link>
                <Link to="/teachers" className="a3"> Teachers <IoIosArrowDown /></Link>
                <Link to="/about" className="a4"> About <IoIosArrowDown /></Link>
                <div className="btn-box">
                    <button> Enroll Now </button>
                    <button> Free Trial </button>
                </div>
                <span className="menu" onClick={() => setshow(true)}><BiMenuAltRight /></span>
                <div className={`side ${show ? 'show' : ''}`}>
                    <div><span onClick={() => setshow(false)}><MdClose /></span></div>
                    <Link to="/"> Etech. </Link>
                    <Link to="/courses"> Courses </Link>
                    <Link to="/teachers"> Teachers </Link>
                    <Link to="/about"> About </Link>
                    <button className="b1"> Enroll Now </button>
                    <button className="b2"> Free Trial </button>
                </div>
            </div>

            {/* ====================================================== */}
            {/* <!-----------------------AboutHome--------------------> */}

            <div className="about-home" style={{ backgroundImage: `url(${about1})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', }}>
                <div>
                    <h1> About Us </h1>
                    <p>Learning Without Limits, Empowering Every Mind </p>
                </div>
            </div>

            {/* =================================================== */}
            {/* <!-------------------about-div---------------------> */}

            <div className="about-div" data-aos="fade-down">
                <div className='about-box'>
                    <div>
                        <h1> WE ARE ETech </h1>
                        <p> at Etech, we believe that education should be accessible engaging and tranformative our online learing platform is designed to empower learners with high-quality courses exeprt instructors and Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eos assumenda quidem maxime, recusandae, ut quaerat magni qui esse quibusdam reiciendis sint modi voluptatum magnam ipsa. Deleniti voluptate nisi nobis.</p>
                    </div>
                    <img src={about2} alt="" />
                </div>
            </div>

            {/* ====================================================== */}
            {/* <!----------------------about-theed-----------------> */}

            <div className="about-theed" data-aos="fade-down">
                <div className="txt1">
                    <img src={about3} alt="" />
                </div>
                <div className="txt2">
                    <h1> Why Choose Us ?</h1>
                    <p> We make learing seamless and impacful with: </p>
                    <div className="txt-in" >
                        <div>
                            <h3><span><GoDotFill/></span> Certified Courses - Gain industry-recognized Certification </h3>
                        </div>
                        <div>
                            <h3><span><GoDotFill/></span> Expert instructors-learn from professionals with real-word experince </h3>
                        </div>
                        <div>
                            <h3><span><GoDotFill/></span> Flexible Learning - Study anytime anywhere at your own pace</h3>
                        </div>
                        <div>
                            <h3><span><GoDotFill/></span> interactive content-Engaging video lessons quizzes and hands-on projects </h3>
                        </div>
                        <div>
                            <h3><span><GoDotFill/></span> 24/7 Support - our team is here to assist you whenever you need </h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* ==================================================== */}
            {/* <!-----------------last-div------------------> */}

            <div className="last-div">
                <div className="last-top">
                    <h1> Meet Our Tram </h1>
                    <p> passionate education, skilled professionals and dedicated mentors-all committed to helping you thrive </p>
                </div>
                <div className="last-bottom">
                    <div className="xtx1 xtx" data-aos="zoom-in-up">
                        <img src={about4} alt="" />
                        <div>
                            <p> Name : Mohul </p>
                            <p> Full Stack Web developer </p>
                            <p> Email : ranjith@gmail.com</p>
                        </div>
                    </div>
                    <div className="xtx2 xtx" data-aos="zoom-in-up">
                        <img src={about5} alt="" />
                        <div>
                            <p> Name : ramya </p>
                            <p> Full Stack java </p>
                            <p> Email : mohul@gmail.com</p>
                        </div>
                    </div>
                    <div className="xtx3 xtx" data-aos="zoom-in-up">
                        <img src={about6} alt="" />
                        <div>
                            <p> Name : Vinoth </p>
                            <p> Full Stack Python </p>
                            <p> Email : vinoth@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* // ====================================== */}
                        {/* // <!--------------Footor----------------> */}
            
                        <div className="footor">
                            <div className='footorin'>
                                <div>
                                    <img src={fottorimg} alt="" />
                                    <h1> Etech. </h1>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Alias velit sint dolorem doloribus, pariatur maxime <br /> facere voluptates architecto culpa ex assumenda  nam libero <br /> praesentium ad mollitia sequi aspernatur, dolores quisquam?</p>
                            </div>
                            <div className="footorin">
                                <h2>Quick Link :</h2>
                                <p>About Us </p>
                                <p>Courses</p>
                                <p>Become an instructor </p>
                                <p>FAQS</p>
                                <p>Contact </p>
                            </div>
                            <div className="footorin">
                                <h2>Social Media :</h2>
                                <p>Eteach@instagram</p>
                                <p>Eteach@FaceBook</p>
                                <p>Eteach@Youtube  </p>
                                <p>Eteach@X</p>
                                <p>Eteach@Linkedin</p>
                            </div>
                            <div className="footorin">
                                <h2> Conatct :</h2>
                                <p>Phone : 6478356731</p>
                                <p>Address : 2765 Ash Dr.Sah <br /> jose South Daken 60001 </p>
                                <p>Email : example@gmail.com</p>
                                <p>Post : Choondy</p>
                            </div>
                        </div>
        </>
    )
}