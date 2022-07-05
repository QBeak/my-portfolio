import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Home.css'
import Linkedinlogo from '../Images/Linkedin.png'
import Githublogo from '../Images/twitter.png'
import Gmaillogo from '../Images/gmail.png'
import About from '../About/About'
import styled from 'styled-components'
import ProfilePic from '../Images/mePortfolio.png'

const CardPstyle1 = styled.p`
color: white;
font-family: 'poppins', sans-serif;
`
const CardPstyle2 = styled.p`
color: white;
font-size: 1.5em;
font-family: 'poppins', sans-serif;
`
const Home = () => {
    var cardint = 'HI THERE';
    var cardN = 'I AM ABARA ALEXANDER'
    var content = 'A Top-notch Developer, Sound Engineer and Business Developer'
    const cards =[
        {id:1, cardintro: cardint, cardname: cardN, cardcontent: content, cardlogo1: Linkedinlogo, cardlogo2: Githublogo, cardlogo3: Gmaillogo}
    ]
  return (
    <div>
        {/* <Navbar/> */}
        <div className='cards'>
            <div className='div-content'>
                {
                    cards && cards.map((card)=>
                    <div>
                        <CardPstyle1 >{card.cardintro}</CardPstyle1>
                        <CardPstyle2>{card.cardname}</CardPstyle2>
                        <p className='large-bold'>{card.cardcontent}</p>
                        <p className='logo-style'>
                            <div><img src={card.cardlogo1} alt='LinkedIn'/></div>
                            <div><img src={card.cardlogo2} alt='Github'/></div>
                            <div><img src={card.cardlogo3} alt='Gmail'/></div>
                        </p>
                    </div>
                    )
                }
            </div>
            <div className='image-div'>

                <img src={ProfilePic} alt='profile pic'/>
            </div>
        </div>
        <About/>
        <section className='mh-skills' id='mh-skills'>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12 col-md-6'>
                        <div className='mh-skills-inner'>
                            <div className='mh-professional-skills'>
                                <h3>Technical skills</h3>
                                <div className='each-skill'>
                                    <div className='candidatos'>
                                        <div className='parcial'>
                                            <div className='info'>
                                                <div className='nome'>JavaScript</div>
                                                <div className='percentage-num'>86%</div>
                                            </div>
                                            <div className='progressBar'>
                                                <div className='percentagem' style={{width: "86%"}}></div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className='candidatos'>
                                        <div className='parcial'>
                                            <div className='info'>
                                                <div className='nome'>Java</div>
                                                <div className='percentage-num'>46%</div>
                                            </div>
                                            <div className='progressBar'>
                                                <div className='percentagem' style={{width: "46%"}}></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='candidatos'>
                                        <div className='parcial'>
                                            <div className='info'>
                                                <div className='nome'>Python</div>
                                                <div className='percentage-num'>38%</div>
                                            </div>
                                            <div className='progressBar'>
                                                <div className='percentagem' style={{width: "38%"}}></div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className='candidatos'>
                                        <div className='parcial'>
                                            <div className='info'>
                                                <div className='nome'>MySql</div>
                                                <div className='percentage-num'>58%</div>
                                            </div>
                                            <div className='progressBar'>
                                                <div className='percentagem' style={{width: "58%"}}></div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-sm-12 col-md-6'>
                    <div className='mh-professional-skills'>
                        <h3>Professional Skills</h3>
                        <ul className='mh-professional-progress'>

                            <li>
                                <div className='mh-progress mh-progress-circle' data-progress="75%"></div>
                                <div className='pr-skill-name'>Communication</div>
                            </li>

                            <li>
                                <div className='mh-progress mh-progress-circle' data-progress="95%"></div>
                                <div className='pr-skill-name'>Team work</div>
                            </li>

                            <li>
                                <div className='mh-progress mh-progress-circle' data-progress="80%"></div>
                                <div className='pr-skill-name'>Creativity</div>
                            </li>

                            <li>
                                <div className='mh-progress mh-progress-circle' data-progress="80%"></div>
                                <div className='pr-skill-name'>Project Management</div>
                            </li>

                        </ul>
                    </div>
                </div>



            </div>
        </section>
    </div>
    
  )
}



export default Home