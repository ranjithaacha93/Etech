import './techers.css';
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { BiMenuAltRight } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import fottorimg from './images/image (3).png';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Teachers({ show, setshow }) {

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

            {/* ===================================================== */}
            {/* <!-----------------------Home-----------------------> */}

            <div className="home">
                <h1 data-aos="fade-up"> <span>E</span>mpower, <span>E</span>ducate, and <br /> <span>E</span>arn - <span>B</span>ecome an <br /> <span>I</span>nstructor <span>T</span>oday!</h1>
            </div>

            {/* ========================================================= */}
            {/* <!------------------------information---------------------> */}

            <div className="info">
                <div className="info-left">
                    <div>
                        <h1> All Teachers Welcome </h1>
                        <p> Unlock your potential by becoming a teacher with us at Etech!. Inspire and empower learners of all ages backgrounds, and abilities </p>
                    </div>
                </div>
                <div className="info-right">
                    <div className='input-box'>
                        <h2> if you are certified Teacher, Then <span>Become An Instructor </span></h2>
                        <form action="">
                            <div className='inbox'>
                                <div>
                                    <label htmlFor=""> NAME* </label><br />
                                    <input type="text" name="" id="" className='in1' />
                                </div>
                                <div>
                                    <label htmlFor=""> EXPERIENCE*  </label><br />
                                    <input type="text" name="" id="" className='in1' />
                                </div>
                            </div>
                            <div>
                                <label htmlFor=""> TUTOR FOR(SPECIFY THE COURSE)*  </label><br />
                                <input type="text" name="" id="" className='in2' />
                            </div>
                            <div className='inbox'>
                                <div>
                                    <label htmlFor=""> EMAIL ADDRESS* </label><br />
                                    <input type="email" name="email" id="" className='in1' />
                                </div>
                                <div>
                                    <label htmlFor=""> COUNTRY*  </label><br />
                                    <input type="text" name="" id="" className='in1' />
                                </div>
                            </div>
                            <div className='inbox'>
                                <div>
                                    <label htmlFor=""> CITY* </label><br />
                                    <input type="text" name="" id="" className='in1' />
                                </div>
                                <div>
                                    <label htmlFor=""> PINCODE*  </label><br />
                                    <input type="text" name="" id="" className='in1' />
                                </div>
                            </div>
                            <div>
                                <label htmlFor=""> PHONE NUMBER*  </label><br />
                                <input type="text" name="" id="" className='in2' />
                            </div>
                            <div>
                                <label htmlFor=""> UPLOAD RESUME*  </label><br />
                                <input type="text" name="" id="" className='in2' />
                            </div>
                            <button> Submit </button>
                        </form>
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
