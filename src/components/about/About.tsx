
import './about.css'

import one from '../../../src/assets/icon/one.svg'
import two from '../../../src/assets/icon/two.svg'
import three from '../../../src/assets/icon/three.svg'
import four from '../../../src/assets/icon/four.svg'



const About = () => {
  return (
    <div className='aboutPageCont'>

      <h1 className='aboutUsTitle'>About Me</h1>





      <div className='aboutUsCont'>


<div className='part1from'>


          <div className='aboutUsSection'>
<img src={one} alt=""  className='svgImageABout'/>

 <h3 className='aboutMeheadingT' >Academic Education</h3>
    <div className='aboutusDOTcombi'>
            <h1 className='aboutusDot'>•</h1>
            <p className='abutMePraatT' >

                          

Newton School of Technology – B.Tech CSE
<br />
<br />
2024 – Present


            </p>

    </div>
          </div>


          <div className='aboutUsSection'>
<img src={two} alt=""  className='svgImageABout'/>

 <h3 className='aboutMeheadingT' >Non-Formal Education</h3>
    <div className='aboutusDOTcombi'>
            <h1 className='aboutusDot'>•</h1>
            <p className='abutMePraatT' >

Udemy Python Program - CODING Certification Program

<br /><br />

March – June 2023


            </p>

    </div>
          </div>
</div>


<div className='part1from part1fromn'>

          <div className='aboutUsSection'>
<img src={three} alt=""  className='svgImageABout'/>

 <h3 className='aboutMeheadingT' > Experience</h3>
    <div className='aboutusDOTcombi'>
            <h1 className='aboutusDot'>•</h1>
            <p className='abutMePraatT' >

                          

Working on It...


            </p>

    </div>
          </div>


          <div className='aboutUsSection'>
<img src={four} alt=""  className='svgImageABout'/>

 <h3 className='aboutMeheadingT' >Certifications</h3>
    <div className='aboutusDOTcombi'>
            <h1 className='aboutusDot'>•</h1>
            <p className='abutMePraatT' >

NST DSA Hackathon
<br /><br />
22 July 2024


            </p>

    </div>
          </div>
</div>

      </div>




    </div>
  )
}

export default About
