import React, {useState} from 'react';
import "./Portfolio.scss";
import arrow from '../../assets/arrow.png' 
const data = [
  {
    id: "1",
    icon: "./assets/net.png",
    title: ".Net Developer",
    desc:
      "SQL and relational databases structures, C#, .NET Framework implementations, Web Programming Introduction, HTML5, CSS3, Bootstrap, JavaScript, Jquery, ASP .NET, and .NET Core Architecture, API Designing, Object-Oriented Programming, and SOLID principles",
    img:
    "./assets/bilge-ada.png", 
    web: "https://akademi.bilgeadam.com/courses/yazilim-dot-net-egitimi/"
  },
  {
    id: "2",
    icon: "./assets/react.png",
    title: "React Developer",
    desc:
      "ES6, JSX, React Components, Interaction between components, Lifecycle methods, Mixing components state, Prop Types, Hooks.",
    img:
    "./assets/redi.png",
    web: "https://www.redi-school.org/redimunich"
  },
  {
    id: "3",
    icon: "./assets/html.png",
    title: "The Web Developer Bootcamp 2021",
    desc:
      "HTML, CSS, JS, Node.js and Express, Mongo DB",
    img:
      "./assets/udemy.png",
    web: "https://www.udemy.com/course/the-web-developer-bootcamp/" 
  },
];
export default function Portfolio() {
  const[currentSlide, setCurrentSlide] = useState(0);
  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div id="portfolio" className='portfolio'>
      <div className="slider"
      style={{left: `-${currentSlide * 100}vw`}}
      >
        {data.map((d) => {
            return (
              <div className="container">
              <div className="item">
                <h1>{d.title}</h1>
                <p>{d.desc}</p>
              </div>
              </div>
            )
        })}
      </div>
      <img onClick={() => handleClick('left')} src={arrow} alt="" className='arrow left'/>
      <img onClick={() => handleClick('right')} src={arrow} alt="" className='arrow right'/>
    </div>
  )
}
