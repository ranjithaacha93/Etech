import { useRef } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { BiMenuAltRight } from "react-icons/bi";
import picOne from './images/Group 39804 (1).png';
import { IoPlay } from "react-icons/io5";
import { RiChatSmileAiFill } from "react-icons/ri";
import { TfiMicrosoftAlt } from "react-icons/tfi";
import { FaUmbrella } from "react-icons/fa";
import pictow from './images/Group 39805.png';
import picthree from './images/image (1).png';
import { HiAcademicCap } from "react-icons/hi2";
import { IoBookSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";
import { FaBookOpen } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import picfore from './images/Ellipse 4.png';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import img1 from './images/image (2).png';
import smalimg1 from './images/Ellipse 6.png';
import smalimg2 from './images/image (2).png';
import img2 from './images/image.png';
import samlimg3 from './images/Ellipse 8.png';
import cloroimage1 from './images/color-image.png';
import cloroimage2 from './images/color-image2.png';
import infoimgi from './images/Group 39807.png';
import fottorimg from './images/image (3).png';
import { Link } from 'react-router-dom';


export default function Home({ show, setshow }) {

    const cardsRef = useRef(null);

    const scrollToStart = () => {
        cardsRef.current.scrollLeft = 0;
    };

    const details = [{
        image: img1,
        firstbtn: "Web Design",
        rat: "5.0",
        h: "Web Design & Development",
        spanone: "85 class",
        spantow: "430 Students",
        last: "1 LPA",
        smallimg: smalimg1,
        imgname: "Morgan"
    }, {
        image: picthree,
        firstbtn: "UI/UX Design",
        rat: "6.0",
        h: "Wireframing & prototype",
        spanone: "12 class",
        spantow: "250 Students",
        last: "1.3 LPA",
        smallimg: smalimg2,
        imgname: "Johon Des"
    }, {
        image: img2,
        firstbtn: "Data Science",
        rat: "6.5",
        h: "Python for Data Science",
        spanone: "20 class",
        spantow: "300 Students",
        last: "1.2 LPA",
        smallimg: samlimg3,
        imgname: "Alex"
    }, {
        image: cloroimage1,
        firstbtn: "Marketing",
        rat: "5.0",
        h: "Didital Marketing",
        spanone: "85 class",
        spantow: "430 Students",
        last: "1.5 LPA",
        smallimg: smalimg2,
        imgname: "Kishor"
    }, {
        image: cloroimage2,
        firstbtn: "Graphic",
        rat: "6.5",
        h: "Graphic Desgin",
        spanone: "20 class",
        spantow: "300 Students",
        last: "1.1 LPA",
        smallimg: picfore,
        imgname: "Aacha"
    }]

    const scrollToEnd = () => {
        cardsRef.current.scrollLeft = cardsRef.current.scrollWidth;
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
                <Link to="/courses" className="a2"> Coures <IoIosArrowDown /></Link>
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
                    <Link to="/courses"> Coures </Link>
                    <Link to="/Techers"> Teachers </Link>
                    <Link to="/About"> About </Link>
                    <button className="b1"> Enroll Now </button>
                    <button className="b2"> Free Trial </button>
                </div>
            </div>

            {/* ========================================== */}
            {/* <!---------------------Home--------------> */}

            <div className="home">
                <div className="home-left">
                    <h1><span>D</span>evelop your skill in a new  and unique wa</h1>
                    <p> Develop Your Skill in A New and unique way with Our Expert-Led Training Program! We Offer Hands-On Learning
                        Experiences Designed To Help you Master In-Demand IT Skills And Accelerate Your Career.Our Unique Approch
                        Ensures Practical Kownedge, industry-Relevent Project, And Placement Support To Help You Succed. Jion us And Take
                        Your Skills To The Next Level!
                    </p>
                    <div>
                        <button> Enroll now </button>
                        <div>
                            <IoPlay className="i-con" />
                            <a href="#"> Watch Video </a>
                        </div>
                    </div>
                </div>
                <div className="home-right">
                    <img src={picOne} alt="" data-aos="fade-up"/>
                </div>
            </div>

            {/* ========================================== */}
            {/* <!----------------Bronds-----------------> */}

            <div className="Brond">
                <div data-aos="fade-down">
                    <h1> Duolingo </h1>
                </div>
                <div data-aos="fade-up">
                    <span><RiChatSmileAiFill /></span>
                    <h1>Magic Leap</h1>
                </div>
                <div data-aos="fade-down">
                    <span><TfiMicrosoftAlt /></span>
                    <h1>Microsoft </h1>
                </div>
                <div data-aos="fade-up">
                    <span><FaUmbrella /></span>
                    <h1> Codecov </h1>
                </div>
                <div data-aos="fade-down">
                    <h1>User Testing </h1>
                </div>
            </div>

            {/* =============================================== */}
            {/* <!-------------------coures-------------------> */}

            <div className="coures">
                <div className="coures-top">
                    <h3> Search Courses</h3>
                    <input type="text" name="" id="" placeholder="Search over 50+ courses" />
                    <button> Search </button>
                </div>
                <div className="coures-bottom">
                    <div className="left">
                        <img src={pictow} alt="" />
                    </div>
                    <div className="right">
                        <h2> <span>Benefits </span> From Our Online <br /> Learning</h2>
                        <div className="right-box">
                            <div className="right-flex">
                                <div>
                                    <span><HiAcademicCap /></span>
                                </div>
                                <div>
                                    <h3> Online Degrees </h3>
                                    <p> Earn accredited degree from the comfort of your. Learning on-demand opena a world of possibitiles</p>
                                </div>
                            </div>
                            <div className="right-flex">
                                <div>
                                    <span><IoBookSharp /></span>
                                </div>
                                <div>
                                    <h3> Short Courses </h3>
                                    <p> Earn accredited degree from the comfort of your. Learning on-demand opena a world of possibitiles</p>
                                </div>
                            </div>
                            <div className="right-flex">
                                <div>
                                    <span><FaUser /></span>
                                </div>
                                <div>
                                    <h3> Training From Expertss </h3>
                                    <p> Earn accredited degree from the comfort of your. Learning on-demand opena a world of possibitiles</p>
                                </div>
                            </div>
                            <div className="right-flex">
                                <div>
                                    <span><FaUser /></span>
                                </div>
                                <div>
                                    <h3> 1.5+ Video Courses </h3>
                                    <p> Earn accredited degree from the comfort of your. Learning on-demand opena a world of possibitiles</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ============================================= */}
            {/* <!--------------popular-coures--------------> */}

            <div className="popular-coures">
                <div className="pop-top">
                    <h1>Oru Popular Courses</h1>
                    <p>
                        Discover our most sought-after courses carefully curated to <br />
                        meet the latest industry trends
                    </p>
                </div>
                <div className="pop-bottom">
                    <div className="cards" ref={cardsRef} data-aos="fade-up">
                        {details.map((item, index) => (
                            <div key={index} className="card">
                                <div className="card-top">
                                    <img src={item.image} alt="" />
                                </div>
                                <div className="flex-top">
                                    <button> {item.firstbtn} </button>
                                    <button> {item.rat} </button>
                                </div>
                                <div className="card-contend">
                                    <p> {item.h} </p>
                                    <button> Apply Now </button>
                                </div>
                                <div className="ratin">
                                    <div><span><FaBookOpen /></span><span>{item.spanone}</span></div>
                                    <div><span><FaRegUser /></span><span>{item.spantow}</span></div>
                                </div>
                                <div className="card-last">
                                    <span> {item.last} </span>
                                    <div>
                                        <img src={item.smallimg} alt="" />
                                        <span> {item.imgname} </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="card-button">
                        <button onClick={scrollToStart}>
                            <span><IoIosArrowDropleft /></span>
                        </button>
                        <button onClick={scrollToEnd}>
                            <span><IoIosArrowDropright /></span>
                        </button>
                    </div>
                </div>
            </div>

            {/* ====================================================== */}
            {/* <!---------------------information----------------------> */}

            <div className="information">
                <div className="infoleft">
                    <h1 data-aos="fade-down"> If you are a certified Teacher,Then  <span>Become An Instructor </span></h1>
                    <p data-aos="fade-down"> Unlock the opportunity to inspire and educate by joining our instructor network. if you are a certified teacher become an instruction and share your expertise with learning worldwide </p>
                    <h3> Enjoy Many Perks </h3>
                    <div>
                        <ul>
                            <li>Global impact </li>
                            <li> Flexbel Schedule </li>
                            <li> Innovative Teachine Toole </li>
                            <li> Recogintion and Reputation </li>
                        </ul>
                        <ul>
                            <li> Creative Freedom </li>
                            <li> Monetize Your Expertise </li>
                            <li> Professional Development </li>
                            <li> Networking Oppertunities </li>
                        </ul>
                    </div>
                    <button> Become an Instructor </button>
                </div>
                <div className="inforight">
                    <img src={infoimgi} alt="" data-aos="flip-right" />
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