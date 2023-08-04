

import React, { useState } from 'react';
import soft from './softower.jpg'
import web from './web.jpg'
import mob from './app.jpg'
import sc from './cyber-security.jpg'
import email from './gmail.png'
import whatsapp from './whatsapp.png'
import facebook from './facebook.png'
import instgram from './instagram.png'




function App() {
    const styleSpan = {
        display: "inline-block",
        width: "1em",

        borderRadius: "50%",
        backgroundColor: "black",
        color: "white",
        padding: "2px",
        margin: "2px",
        fontWeight: "800",
    };

    const [showSoftwareDev, setShowSoftwareDev] = useState(false);
    function togleShowSoftwareDev() {
        setShowSoftwareDev(!showSoftwareDev);
    }
    const [showwebDev, setShowwebDev] = useState(false);
    function togleShowwebDev() {
        setShowwebDev(!showwebDev);
    }

    return (
        <div style={{ backgroundColor: 'black' }}>
            <header style={{ backgroundColor: '#718720', paddingBottom: '5px', borderRadius: '5px' }}>

                <h1 style={{ textAlign: 'center',margin:0, fontSize: 60 }}  >

                    <span style={styleSpan}>1</span>
                    <span style={styleSpan}>N</span>
                    <span style={styleSpan}>E</span>

                </h1>
                <nav style={{ display: 'flex', justifyContent: 'space-between' }}>


                    <a style={{color:'white'}} href="#about">About</a>
                    <a style={{color:'white'}}  href="#services">Home</a>
                    <a  style={{color:'white'}} href="#contact">Contact</a>
                </nav>
            </header>
            <section id="about">
                <h2 style={{ textAlign: 'center',color:'white'  }}>About Us</h2>
                <p style={{ textAlign: 'center', color:'white' }}>

                    ONE BRAND is a cutting-edge IT company that specializes in providing comprehensive digital solutions to businesses and organizations worldwide. We pride ourselves on being a one-stop destination for all your technological needs, delivering innovative and transformative solutions that elevate your brand to new heights.

                    Our team at ONE BRAND comprises a diverse group of highly skilled and creative professionals who are passionate about technology and dedicated to delivering exceptional results. We have experts in web development, mobile app development, software engineering, cloud computing, data analytics, artificial intelligence, and more.
                </p>
            </section>
            <section id="services">
                <h2 style={{ textAlign: 'center',color:'white' }}>Our Services</h2>
                <div style={{ textAlign: 'center', }}>

                    <div style={{ fontSize: 30, justifyContent: 'center', padding: 50, color: 'white' }}>
                        <img onClick={togleShowSoftwareDev} src={soft} style={{ height: 500, width: 800, borderRadius: 20 }} /> 
                        <div onClick={togleShowSoftwareDev}>software development </div>
                        {showSoftwareDev && <ol style={{fontSize:20}}>Certainly! ONE offers software development services, their primary focus is on creating, designing, and delivering software solutions to meet their clients' specific needs. Here's how the software development service typically works:
                            <li>Client Consultation: The process begins with a client consultation, where the IT company's representatives meet with the client to understand their requirements, business goals, and the problem they want to solve with the software.</li>
                            <li>Requirement Gathering: The software development team works closely with the client to gather detailed requirements for the project. They clarify doubts, identify key features, and define the scope of the software.</li>
                            <li>Project Proposal: Based on the gathered requirements, the IT company prepares a project proposal that includes the project's scope, timeline, cost estimates, and other relevant details. The proposal is presented to the client for approval.</li>
                            <li>Software Design: Once the project is approved, the software development team starts the design phase. They create mockups, wireframes, and detailed architecture plans for the software. The design phase helps to visualize the software's layout and user interface.</li>
                            <li>Development: After the design is finalized, the actual development of the software begins. The development team writes code, implements functionality, and integrates different modules to create the desired software product.</li>
                            <li>Quality Assurance and Testing: Throughout the development process, the software undergoes rigorous testing to identify and fix any bugs or issues. Quality assurance engineers conduct various tests to ensure the software meets the client's requirements and functions correctly.</li>
                            <li>Deployment: Once the software passes all quality checks and testing, it is deployed to the client's environment. This may involve setting up servers, databases, and configuring the software for production use.</li>
                            <li>Training and Support: Depending on the complexity of the software, the IT company may provide training to the client's staff to ensure they can effectively use the new software. Additionally, the IT company offers ongoing support and maintenance services to address any issues that arise post-launch.</li>
                            <li>Collaboration and Communication: Throughout the software development process, effective communication and collaboration between the IT company's team and the client are crucial. Regular meetings, progress updates, and feedback sessions help keep everyone on the same page and ensure that the final product meets the client's expectations.</li>
                            <li>Continuous Improvement: IT companies continuously strive to improve their software development process. They may adopt Agile methodologies or other iterative approaches to enhance efficiency, adapt to changes, and deliver better software products.</li>
                        </ol>}
                    </div>
                    <div style={{ fontSize: 30, color: 'white', justifyContent: 'center', color: 'white' }}>
                        <img onClick={togleShowwebDev} src={web} style={{ height: 500, width: 800, borderRadius: 20 }} /> 
                        <div onClick={togleShowwebDev}>Web development</div>
                       {showwebDev&& <ol style={{fontSize:20}}>Web development services are offerings provided by IT companies or web development agencies to design, create, and maintain websites for individuals, businesses, or organizations. These services encompass a wide range of activities involved in building a website from scratch or improving an existing one. Here are some common web development services:
                        <li>Website Design: This service involves creating the visual layout and user interface of the website. Web designers use various design tools and technologies to craft an appealing and user-friendly website.</li>
                        <li>Front-end Development: Front-end developers are responsible for implementing the website's design into functional HTML, CSS, and JavaScript code. They ensure that the website is responsive and works well on different devices and screen sizes.</li>
                        <li>Back-end Development: Back-end developers work on the server-side of the website, managing databases, handling user authentication, and implementing the server logic to enable dynamic functionality.</li>
                        <li>Full-Stack Development: Full-stack developers have expertise in both front-end and back-end technologies, enabling them to work on the entire web development process from start to finish.</li>
                        <li>Content Management System (CMS) Integration: Web development services may include integrating a content management system like WordPress, Drupal, or Joomla, which allows clients to update and manage website content easily without technical knowledge.</li>
                        <li>E-commerce Solutions: For businesses looking to sell products or services online, web development services may include setting up an e-commerce platform with features like product listings, shopping carts, and secure payment gateways.</li>
                        <li>Custom Web Applications: Some projects require custom web applications to meet specific business needs. Web development services can involve building bespoke web applications tailored to the client's requirements.</li>
                        <li>Website Maintenance: After the website is launched, maintenance services are often offered to keep the site updated, secure, and running smoothly. This may include regular backups, security patches, and technical support.</li>
                        <li>Search Engine Optimization (SEO): Web development services may include SEO optimization to improve the website's visibility on search engines, driving organic traffic and attracting potential customers.</li>
                        <li>Performance Optimization: Developers may optimize the website's performance to ensure fast loading times and smooth user experiences, as website speed is crucial for user satisfaction and search engine rankings.</li>
                        <li>Mobile App Development: Some web development services also extend to mobile app development, creating native or hybrid apps that complement the website's functionality.</li>
                        
                        </ol>}
                    </div>
                    <div style={{ fontSize: 30, justifyContent: 'center', padding: 50, color: 'white' }}><img src={mob} style={{ height: 500, width: 800, borderRadius: 20 }} />
                    <div>mobile app development</div>
                    </div>
                    <div style={{ fontSize: 30, justifyContent: 'center', color: 'white' }}><img src={sc} style={{ height: 500, width: 800, borderRadius: 20 }} / >
                       <div>cybersecurity solutions</div> 
                    </div>


                </div>
            </section>
            <section id="contact">
                <div style={{ textAlign: 'center' }} >
                    <h2 style={{ textAlign: 'center',color:'white' }}>Contact Us</h2>
                    <div style={{color:'white',display:'flex',justifyContent:'center', alignItems: 'center', gap: 12,padding:10}} > < img src={email} style={{height:20}} />
                    <div style={{fontSize:20}}>Email: one.farhan.zero@gmail.com</div>
                    </div>
                    <div style={{color:'white', alignItems: 'center', display:'flex', justifyContent:'center', gap: 12,padding:10}}> < img src={whatsapp} style={{height:20,backgroundColor:'white'}} /> 
                    <div style={{fontSize:20}}>Phone:+60164030988</div>
                    </div>
                    <div style={{color:'white', alignItems: 'center', display:'flex', justifyContent:'center', gap: 12,padding:10}}> < img src={facebook} style={{height:20,backgroundColor:'white'}} /> 
                    <div style={{fontSize:20}}>one</div>
                    </div>
                    <div style={{color:'white', alignItems: 'center', display:'flex', justifyContent:'center', gap: 12,padding:10}}> < img src={instgram} style={{height:20,backgroundColor:'white'}} /> 
                    <div style={{fontSize:20}}>one</div>
                    </div>
                </div>
            </section>
        </div>

    );

};

export default App;









