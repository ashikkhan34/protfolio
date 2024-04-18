import React from 'react'
import Header from './Header'
import "./Home.css"


function Home() {
  return (
    < div className='container' >
        <Header/>
    <div className='row'>
        <div className='col-md-6'>
            <img src="img/earth.jpg" className="d-block w-100 " alt="" />
        </div>
        <div className='col-md-6'>
            <h5 className='welcome'>Wellcome to my Website 🌐</h5>
            <h1 className='head'><marquee behavior="" direction="">Front-end expart is an international web developer</marquee></h1>
            <p className='some mt-2 w-80'>In the boundless realm of web development, every line of code crafts an intricate tapestry that transcends mere pixels and shapes. It's a symphony of creativity and logic, where innovation dances with functionality. From the elegant simplicity of HTML to the dynamic prowess of JavaScript, each language is a brushstroke in the artist's palette. As developers, we navigate through the labyrinth of frameworks and libraries, sculpting digital experiences that captivate and inspire. Behind every click lies a story waiting to be told, a connection waiting to be made.</p>
        </div>
        <div className='font mt-5'>
        <big className='fontsize'>FRONT - END <br />DEVELOPER</big>
        <p className='para'>A front-end developer focuses on creating engaging user interfaces and experiences on websites and applications. They use a combination of HTML, CSS, and JavaScript to build interactive elements and ensure seamless navigation. Front-end developers collaborate closely with designers to translate visual concepts into functional designs. They're adept at responsive design principles, ensuring websites work well across various devices and screen sizes. Additionally, they often integrate with back-end systems to fetch and display dynamic content. Strong problem-solving skills, creativity, and a keen eye for detail are essential in this role, as front-end developers strive to deliver intuitive and visually appealing digital experiences.</p>
        </div>
    </div>
    <img  className=" myfoot mt-5" src="img/footer.png" alt="" />
    <div className='lastpart'><h5>@It created by  Ashik programmer</h5></div>
    </ div>
  )
}

export default Home
