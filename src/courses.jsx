import './courses.css';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowDown, IoIosPlay } from "react-icons/io";
import { BiMenuAltRight } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { GiBubbles } from "react-icons/gi";
import { CgEditUnmask, CgFigma } from "react-icons/cg";
import { FaReact, FaSitemap } from "react-icons/fa";

import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import pic1 from './images/img1.png';
import pic2 from './images/img2.png';
import pic3 from './images/img3.png';
import pic4 from './images/img4.png';
import courseimg from './images/second-img.png';
import background from './images/Vector 98.png';
import rocket from './images/rocket.png';
import Img1 from './images/card-img1.png';
import Img2 from './images/card-img2.png';
import Img3 from './images/card-img3.png';
import { FaUserDoctor } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import fottorimg from './images/image (3).png';


export default function Courses({ show, setshow }) {
    const [applied, setApplied] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState("Full Stack Java");
    const navigate = useNavigate();

    const handleClick = () => {
        setApplied(true);
        setTimeout(() => {
            navigate('/apply');
        }, 1000);
    };

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
                <Link to="/Teachers" className="a3"> Teachers <IoIosArrowDown /></Link>
                <Link to="/About" className="a4"> About <IoIosArrowDown /></Link>
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
                    <Link to="/About"> About </Link>
                    <button className="b1"> Enroll Now </button>
                    <button className="b2"> Free Trial </button>
                </div>
            </div>

            {/* =================================================== */}
            {/* <!-----------------------course-----------------------> */}

            <div className="course">
                <h1> Courses </h1>
                <div className='cours-img'>
                    <div data-aos="fade-up"><img src={pic1} alt=""/></div>
                    <div data-aos="fade-down"><img src={pic2} alt=""/></div>
                    <div data-aos="fade-up"><img src={pic4} alt=""/></div>
                    <div data-aos="fade-down"><img src={pic3} alt=""/></div>
                </div>
                <h3>Interactive Cognitive Worksheets With Coding For Young Minds. </h3>
                <button className='btn1'> Free Trial </button>
                <button className='btn2'><span><IoIosPlay /></span> Watch video </button>
            </div>

            {/* ======================================================== */}
            {/* <!------------------Content Section---------------------> */}

            <div className='coures-contend'>
                <div className="contend-left">
                    <img src={courseimg} alt="" data-aos="fade-right"/>
                </div>
                <div className="contend-right">
                    <div>
                        <h1> Learning to code <br /> is a Playtime </h1>
                        <p> Early Logic blends the foundational principles of coding with interactive playful learning, starting as young as 5 years old. </p>
                        <p> It's designed to develop essential logic skills that are crucial for both coding and everyday problem solving. </p>
                    </div>
                </div>
            </div>

            {/* ======================================================= */}
            {/* <!---------------------Apply Section---------------------> */}

            <div className="box" data-aos="fade-up"
     data-aos-duration="500">
                <div className={`box-in ${applied ? 'applied' : ''}`}>
                    <img src={background} alt="" className={`img1 ${applied ? 'move-img1' : ''}`} />
                    <img src={rocket} alt="" className={`img2 ${applied ? 'move-img2' : ''}`} />
                    <div className="text">
                        <h1> Join Our Inclusive <br /> classes </h1>
                        <button onClick={handleClick}> Apply Now </button>
                    </div>
                </div>
            </div>

            {/* ================================================================ */}
            {/* <!---------------------------detials---------------------------> */}

            <div className='detials'>
                <div className="detials-left">
                    <h1> The Early <br /> Logic Method </h1>
                    <div className='detials-cards'>
                        <div className={`card-box ${selectedCourse === "Full Stack Java" ? 'selected' : ''}`} onClick={() => setSelectedCourse("Full Stack Java")}>
                            <span><GiBubbles /></span>
                            <h2> Full Stack Java </h2>
                        </div>
                        <div className={`card-box ${selectedCourse === "Full Stack Python" ? 'selected' : ''}`} onClick={() => setSelectedCourse("Full Stack Python")}>
                            <span><CgEditUnmask /></span>
                            <h2> Full Stack Python </h2>
                        </div>
                        <div className={`card-box ${selectedCourse === "Full Stack React.js" ? 'selected' : ''}`} onClick={() => setSelectedCourse("Full Stack React.js")}>
                            <span><FaReact /></span>
                            <h2> Full Stack React.js </h2>
                        </div>
                        <div className={`card-box ${selectedCourse === "Digital Marketing" ? 'selected' : ''}`} onClick={() => setSelectedCourse("Digital Marketing")}>
                            <span><FaSitemap /></span>
                            <h2> Digital Marketing </h2>
                        </div>
                        <div className={`card-box ${selectedCourse === "UI/UX Design" ? 'selected' : ''}`} onClick={() => setSelectedCourse("UI/UX Design")}>
                            <span><CgFigma /></span>
                            <h2> UI/UX Design </h2>
                        </div>
                    </div>
                </div>

                <div className='detials-right'>
                    <p>We use cognitive worksheets that seamlessly integrate coding concepts, laying a strong foundation for future learning by developing essential skills such as comprehension, logical thinking, and problem-solving.</p>
                    {selectedCourse === "Full Stack Java" && (
                        <div className='card-flex'>
                            <h1> Full Stack Java </h1>
                            <div><img src={Img1} alt="" /></div>
                            <p> Pattern Coding introduces children to the magic of patterns, building early computational thinking skills. They'll learn to recognize and create patterns, laying the groundwork for coding success. </p>
                        </div>
                    )}
                    {selectedCourse === "Full Stack Python" && (
                        <div className='card-flex'>
                            <h1> Full Stack Python </h1>
                            <div><img src={Img2} alt="" /></div>
                            <p> Arithmetic coding involves basic mathematical concepts which are essential for programming. </p>
                        </div>
                    )}
                    {selectedCourse === "Full Stack React.js" && (
                        <div className='card-flex'>
                            <h1> Full Stack React.js </h1>
                            <div><img src={Img3} alt="" /></div>
                            <p> Logical Coding introduces basic logic and problem-solving forming the backbone of programming skills. </p>
                        </div>
                    )}
                    {selectedCourse === "Digital Marketing" && (
                        <div className='card-flex'>
                            <h1> Digital Marketing </h1>
                            <div><img src={Img1} alt="" /></div>
                            <p> Sequence coding helps children learn how to arrange code in the correct order to achieve a goal. </p>
                        </div>
                    )}
                    {selectedCourse === "UI/UX Design" && (
                        <div className='card-flex'>
                            <h1> UI/UX Design </h1>
                            <div><img src={Img2} alt="" /></div>
                            <p> UI/UX design introduces visual thinking and logic with an emphasis on user-centered design. </p>
                        </div>
                    )}
                </div>
            </div>

            {/* ===================================================== */}
            {/* <!--------------------------rotatediv---------------------> */}

            <div className="rotatediv">
                <div className="rotate-top">
                    <h1> Jion <br /> Early Logic </h1>
                    <p> Unlock your child's potential and set them on a path to success with Early Logic learning to code is playtime choose the learning style that first you best </p>
                </div>
                <div className="rotate-bottom">
                    <div className="rotate-box rotate1" data-aos="zoom-in-right">
                        <div className="top-top">
                            <div className='top-in'>
                                <div></div><div></div><div></div><div></div><div></div><div></div>
                                <span><FaUserDoctor /></span>
                            </div>
                        </div>
                        <h3> Self-Paced Lerning </h3>
                        <p> Learn at your own speed with our intuitive app and on-demand classes </p>
                    </div>
                    <div className="rotate-box rotate2" data-aos="zoom-in-up">
                        <div className="top-top">
                            <div className='top-in'>
                                <div></div><div></div><div></div><div></div><div></div><div></div>
                                <span><FaUserEdit /></span>
                            </div>
                        </div>
                        <h3> Individual classes </h3>
                        <p> Get personalized 1-on-1 guidance to accelerate your learning journey </p>
                    </div>
                    <div className="rotate-box rotate3" data-aos="zoom-in-left">
                        <div className="top-top">
                            <div className='top-in'>
                                <div></div><div></div><div></div><div></div><div></div><div></div>
                                <span><FaUsers /></span>
                            </div>
                        </div>
                        <h3> Group classes </h3>
                        <p> collabrate with peers in our supportive in-person codelabs </p>
                    </div>
                </div>
            </div>

            {/* ======================================================= */}
            {/* <!---------------------Apply Section---------------------> */}

            <div className="box" data-aos="fade-up"
     data-aos-duration="500">
                <div className={`box-in ${applied ? 'applied' : ''}`}>
                    <img src={background} alt="" className={`img1 ${applied ? 'move-img1' : ''}`} />
                    <img src={rocket} alt="" className={`img2 ${applied ? 'move-img2' : ''}`} />
                    <div className="text">
                        <h1> Join Our Inclusive <br /> classes </h1>
                        <button onClick={handleClick}> Apply Now </button>
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
    );
}
