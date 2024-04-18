// import React from 'react'
import Header from './Header'
import './About.css'
import React,{useState} from 'react'



function About() {

  const [Name, SetName ] = useState("Web Developer")
  const changename = ()=>{
    SetName("Freelancer")
     }
  
  return (
    <>
    <Header/>
    <div className='container mt-5'>
        <div className='row'>
            <div className='col-md-6'>
                <img src="img/ashik.jpg" alt="" className="d-block w-100 " />

            </div>
            <div className='col-md-6'>
                <h1>Front-End Web Developer</h1>
                <h3>Ashik khan</h3>
                <p>I am Ashik Khan. I am a Web Developer based in Bangladesh, with a rich experience of over 4 years in web development. I can easily provide responsive web site and develop your Business.I am working full time at time and contact me . As I am doing full time walk so if you like my work then you can hire me and help me with a good amount 👨‍💻👩‍💻</p>

            
            </div>
  
        </div>
        <div className='accordion mt-3'>
          <div className='accordion-item'>
            <h2 className='accordion-button' data-bs-target="#item1" data-bs-toggle="collapse">Life style </h2>
            <div className="accordion-collapse collapse show " id="item1"></div>
            <div className='accordion-body'>
              <p>Ashik Khan, a seasoned computer engineer and proficient web developer with three years of enriching experience, resides in the serene locale of Pabna Sadar, Bangladesh. His days are a harmonious blend of creativity and innovation as he immerses himself in the captivating world of web development.

Mornings dawn with a refreshing cup of local tea, setting the tone for a day filled with exciting coding challenges and client interactions. As the sun ascends, Ashik delves into his projects with zeal, harnessing the power of his technical prowess to craft captivating digital experiences.

Amidst lines of code and design iterations, Ashik finds moments of tranquility to rejuvenate his mind and body. Whether it's a leisurely stroll through the bustling streets of Pabna Sadar or a savory meal of traditional Bengali cuisine with family and friends, he cherishes the simple joys that life offers.

Evenings are a symphony of productivity and relaxation as Ashik unwinds with a good book or engages in stimulating discussions with fellow developers. With a passion for continuous learning, he eagerly explores emerging technologies and trends, ensuring his skills remain at the forefront of the ever-evolving web development landscape.

As the day draws to a close, Ashik reflects on his journey with gratitude, knowing that each line of code written brings him closer to his aspirations. With dreams as vast as the digital horizon, he embraces each day as an opportunity to innovate, inspire, and leave a lasting imprint on the web development community. <span className='text-color-red'>I live in Pabna Sadar in Bangladesh.</span></p>
            </div>

          </div>
          

        </div>

        
        <h1 className='mt-4'>Hello... {Name}</h1>
      <button  className='btn btn-outline-primary' onClick={changename}>Click me</button>
        <img  className="my-footer mt-5" src="img/footer.png" alt="" />

    </div>

    <div>
  </div>
    
    </>
    
    
  )
}

export default About ;
