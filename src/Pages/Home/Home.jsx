import React, { useState, useEffect } from 'react'
import "./Home.css"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer';
import AbtPic from './Images/Jack-Skywalker-Headshot.png'
import workpic1 from './Images/lumurph.png'
import workpic2 from './Images/personal-website.png'
import workpic3 from './Images/github-projects.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faPenRuler, faEnvelope, faScrewdriverWrench, faGraduationCap, faBriefcase, faRocket, faFileArrowDown, faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import { Helmet } from 'react-helmet';
import { ReactTyped } from 'react-typed';

function Home() {

  // browser tab title
  useEffect(() => {
    document.title = 'Jack Skywalker | Software Engineer';
  }, []);

  // About section functionality
  const [activeTab, setActiveTab] = useState('skills');

    const openTab = (tabName) => {
        setActiveTab(tabName);
    };

    const handleDownloadResume = async () => {
      try {
          // Fetch the resume file from the public folder
          const response = await fetch('/resume.pdf');
          const blob = await response.blob();

          // Create a URL for the blob object
          const url = window.URL.createObjectURL(new Blob([blob]));

          // Create an anchor element with the URL and trigger download
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', "Jack Skywalker Resume 2024.pdf");
          document.body.appendChild(link);
          link.click();

          // Cleanup
          link.parentNode.removeChild(link);
          window.URL.revokeObjectURL(url);
      } catch (error) {
          console.error('Error downloading resume:', error);
          toast.error('Error downloading resume')
      }
  };

  // View more functionality
  const [showMore, setShowMore] = useState(false);

    const handleViewMore = () => {
        setShowMore(true);
    };

    const handleHide = () => {
        setShowMore(false);
    };

  // Contact form functionality
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyiMFJxNG-Oe1735pct_MGwOk1EhP7t5LKAu9u4KHLdk_NqJIPJiSrXQrbs6Lzco8j7/exec';

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    // Immediately show a loading message
    toast.info('Submitting your message...',
      {style: {
          backgroundColor: 'black',
          color: 'white'
      }});

    try {
        const response = await fetch(scriptURL, {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            toast.success('Form submitted successfully!', 
            {style: {
                backgroundColor: 'black',
                color: 'white'
            }})
            e.target.reset();
        } else {
            toast.error('Form submission failed');
            throw new Error('Failed to submit message');
        }
    } catch (error) {
        console.error('Error!', error.message);
        toast.error('Error occurred while submitting the form.', error.message);
    }
};

  return (
    <div>

        <Helmet>
          <title>Home - Jack Skywalker</title>
          <meta name='description' content="Let's build solutions together." />

           {/* OG Tags */}
          <meta property="og:title" content="Jack Skywalker - Software Engineer" />
          <meta property="og:description" content="Let's build solutions together." />
          <meta property="og:image" content="https://jackjskywalker.com/static/media/header.png" />
          <meta property="og:url" content="https://jackjskywalker.com" />
          <meta property="og:type" content="website" />

          {/* Twitter Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Jack Skywalker - Software Engineer" />
          <meta name="twitter:description" content="Let's build solutions together." />
          <meta name="twitter:image" content="https://jackjskywalker.com/static/media/header.png" />
          <meta name="twitter:url" content="https://jackjskywalker.com"/>
        </Helmet>


        <div className='header-section' id='header'>
          <div className='container'>
            <Navbar/>
            <div className='header-text'>
              <p>Hello, I'm</p>
              <h1>Jack Skywalker</h1>
              <h2>
                <ReactTyped
                  strings={["Software Engineer...", "Team Player...", "Adventurer...", "Problem Solver...", "Let's build solutions together."]}
                  typeSpeed={40}
                  backSpeed={20}
                  loop
                />
              </h2>
              <a href="#contact" className="header-btn" aria-label='Get-started-button'>Get started</a> 
            </div>
          </div>
        </div>
        
        <div className='about-section' id='about'>
          <div className='container'>
            <h1 className="about-header">About Me</h1>
            <div className='row'>
              <div className='abt-col-1'>
                <img src={AbtPic} alt="Jack-Skywalker-Professional" />
                <div className="resume">
                  <button onClick={handleDownloadResume} className="btn" id='resume-btn' aria-label='Download-resume-button'>Download Resume &nbsp; <FontAwesomeIcon icon={faFileArrowDown}/></button>
                </div>
              </div>
              <div className="abt-col-2">
                      <p>Software Engineer with a background in business, information technology, and cybersecurity. More than 5 years of experience in web development and 2 years of experience in programming using Java, Python, JavaScript, and SQL. Passionate about AI with experience in machine learning projects. Excel at people management, with experience in residence hall leadership and interning in Human Resources office of a nonprofit resort overseeing 300+ seasonal staff.
                      </p>
                      <div className="tabs">
                        <p className={`tab-links ${activeTab === 'skills' ? 'act-link' : ''}`} onClick={() => openTab('skills')}><strong><FontAwesomeIcon className='tools' icon={faScrewdriverWrench}/> &nbsp; Skills</strong></p>
                        <p className={`tab-links ${activeTab === 'experience' ? 'act-link' : ''}`} onClick={() => openTab('experience')}><strong> <FontAwesomeIcon className='briefcs' icon={faBriefcase}/> &nbsp; Experience</strong></p>
                        <p className={`tab-links ${activeTab === 'education' ? 'act-link' : ''}`} onClick={() => openTab('education')}><strong><FontAwesomeIcon className='grad' icon={faGraduationCap}/> &nbsp; Education</strong></p>
                      </div>

                      <div className={`tab-conts ${activeTab === 'skills' ? 'act-tab' : ''}`} id="skills">
                          <ul>
                              <li><span>Languages</span><br/>English and Mandarin</li>
                              <li><span>Front-End</span><br/>React,  HTML, CSS, JavaScript, TypeScript</li>
                              <li><span>Back-End</span><br/>Node, Express, Python, Flask, Java</li>
                              <li><span>Database</span><br/>MongoDB, MySQL, SQL Server</li>
                              <li><span>Tools</span><br/>Git, GitHub, Jira, AWS, PyTorch</li>
                              <li><span>Operating Systems</span><br/>Windows, Ubuntu, MacOS</li>
                          </ul>
                      </div>

                      <div className={`tab-conts ${activeTab === 'experience' ? 'act-tab' : ''}`} id="experience">
                          <ul>
                              <li><span>Oct 2024 &nbsp;-&nbsp; Present</span><br/>Tech Consultant | Freelance</li>
                              <li><span>Apr 2024 &nbsp;-&nbsp; Present</span><br/>Software Engineer | DataAnnotation</li>
                              <li><span>Jun 2023 &nbsp;-&nbsp; Aug 2023</span><br/>HR Tech Intern | Gospel Volunteer Inc.</li>
                      
                          </ul>
                      </div>

                      <div className={`tab-conts ${activeTab === 'education' ? 'act-tab' : ''}`} id="education">
                          <ul>
                              <li><span>May 2025</span><br/>BS in Information Technology  | Liberty University</li>
                              <li><span>May 2025</span><br/>BS in Business Administration  | Liberty University</li>
                          </ul>
                      </div>
              </div>
            </div>
          </div>
        </div>

        <div className='services-section' id='services'>
          <div className='container'>
            <h1 className="sub-header">Services</h1>

            <div className="services-list">
                <div className='service-box'>
                    <div className='ser-icon'>
                      <FontAwesomeIcon icon={faCode}/>
                    </div>
                    <h2><strong>Web Development</strong></h2>
                    <p>Web applications are essential to a quality product. I specialize in coding across multiple languages to help clients achieve their goals.</p>
                </div>

                <div className='service-box'>
                    <div className='ser-icon'>
                      <FontAwesomeIcon icon={faPenRuler}/>
                    </div>
                    <h2><strong>Front-End Design</strong></h2>
                    <p>User Experience (UX) is at the heart of quality design. I implement modern and minimalistic design that best serves your customers.</p>
                </div>

                <div className='service-box'>
                    <div className='ser-icon'>
                      <FontAwesomeIcon icon={faRocket}/>
                    </div>
                    <h2><strong>Application Development</strong></h2>
                    <p>Every business has unique needs that requires tailored solutions. I develop application solutions for specific business requirements.</p>
                </div>
            </div>
          </div>
        </div>

        <div className='portfolio-section' id='portfolio'>
          <div className='container'>
            <h1 className='sub-header'>Portfolio</h1>

            <div className='work-list'>
                <div className="work">
                    <img src={workpic1} alt='lu-murph-challenge' />
                    <div className="layer">
                       <h3><strong>LUMC</strong></h3>
                       <a href="https://www.lumurphchallenge.com" target="_blank" rel="noreferrer noopener" aria-label='lumurph-website-link'> <FontAwesomeIcon icon={faLocationArrow}/></a>
                    </div>
                </div>

                <div className="work">
                    <img src={workpic2} alt='personal-website' />
                    <div className="layer">
                       <h3><strong>PERSONAL WEBSITE</strong></h3>
                       <a href="https://github.com/jackjskywalker" target="_blank" rel="noreferrer noopener" aria-label='personal-webiste-link'> <FontAwesomeIcon icon={faLocationArrow}/></a>
                    </div>
                </div>

                <div className="work">
                    <img src={workpic3} alt='Github Projects' />
                    <div className="layer">
                       <h3><strong>GITHUB PROJECTS</strong></h3>    
                       <a href="https://github.com/jackjskywalker/PersonalProjects" target="_blank" rel="noreferrer noopener" aria-label='github-project-link'> <FontAwesomeIcon icon={faLocationArrow}/></a> 
                    </div>
                </div>
            </div>

            {showMore && (
            <div className="work-list">          
                
            </div>
            )}

            <div className="button-container">
              {!showMore && <button className="btn" id="view-more" aria-label='View-more-button' onClick={handleViewMore}>View more</button>}
              {showMore && <button className="btn" id="hide" aria-label='Hide-button' onClick={handleHide}>Hide</button>}
            </div>

          </div>
        </div>

        <div className='reviews-section' id='reviews'>
            <div className='container'>
              <h1 className='sub-header'>Testimonials</h1>

              <div className='testimonials'>
                <div className='test-box'>
                  <h1>Jayden W.</h1>
                  <p>Jack is a detail-oriented [and] high-performing individual. I worked with him on a daily basis in a hybrid format of informal meetings... and shared database management. [He] was consistently dependable in tracking significant amounts of information, combined with a high level of emotional intelligence...</p>
                  <h4>Director of Administration, Destiny Christian Center International</h4>
                </div>

                <div className='test-box'>
                  <h1>Caleb N.</h1>
                  <p>Jack is extremely professional and diligent... He picks up on new and difficult tasks very quickly, and is extremely focused while working, while still maintaining great relationships with co-workers as a leader.</p>
                  <h4>Business Owner, Yellow Hat Mowers</h4>
                </div>

                <div className='test-box'>
                  <h1>Adam C.</h1>
                  <p>When it came to revolutionizing our office’s technological processes, Jack was my guy! He built out several [systems] and re-organized many of our in-house digital forms to their maximum potential. We can’t thank Jack enough for the impact he has made on our operational functionality.</p>
                  <h4>Hiring Manager, Gospel Volunteers Inc.</h4>
                </div>
              </div>
            </div>
        </div>

        <div className='contact-section' id='contact'>
          <div className='container'>
            <h1 className="sub-header">Let's Get in Touch</h1>

            <div className='column'>
                <div className="contact-t">
                    <p><FontAwesomeIcon icon={faEnvelope}/> jackjskywalker@outlook.com</p>
                    <div className="social">
                        <a href="https://www.instagram.com/jackjskywalker/" target="_blank" rel="noreferrer noopener" aria-label='JS-choque-instagram-account'><FontAwesomeIcon icon={faInstagram}/></a>
                        <a href="https://www.linkedin.com/in/jackjskywalker/" target="_blank" rel="noreferrer noopener" aria-label='JS-choque-linkedin-account'><FontAwesomeIcon icon={faLinkedin}/></a>
                        <a href="https://github.com/jackjskywalker" target="_blank" rel="noreferrer noopener" aria-label='JS-choque-github-account'><FontAwesomeIcon icon={faGithub}/></a>
                    </div>
                </div>

                <div className="contact-b">
                    <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
                        <input type="text" name="Name" placeholder="Name" required/>
                        <input type="email" name="Email" placeholder="Email" required/>
                        <textarea name="Message" id=""  rows="6" placeholder="Message" className='no-resize'></textarea>
                        <div className='align-btn'>
                          <button type="submit" className="btn btncv">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
          </div>
        </div>

        <Footer/>

    </div>
  )
}

export default Home