// components/Contact.jsx
import React from 'react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

const Contact = () => {
  const contactData = [
    {
      title: "Email",
      content: <p><a href="mailto:pulsemind.project@gmail.com">pulsemind.project@gmail.com</a></p>
    },
    {
      title: "Project Supervisor",
      content: <p>Dr. Sanvitha Kasthuriarachchi</p>
    },
    {
      title: "Co-Supervisor",
      content: <p>Ms. Mihiri Samaraweera</p>
    },
    {
      title: "External Supervisor",
      content: <p>Dr. Kamalani Wanigasinghe</p>
    },
    {
      title: "Course Contact",
      content: <p><a href="mailto:cdap@sliit.lk">cdap@sliit.lk</a></p>
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container-con">
        <h2 className="section-title-ab">Contact Us</h2>
        <p className="section-subtitle-mil">Get in touch with the PulseMind team for inquiries or collaborations.</p>
        
        <div className="contact-container">
           <ContactForm />
        <div>
                    <h3 className="contact-subtitle">Get in Touch</h3>
                    <p className="contact-description">
                      Have questions about PulseMind or want to learn more about our research? 
                      We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                    <br></br>
                   
                      <div className="contact-item">
                        <span>+94 (11) 754 4801</span>
                      </div>
                      <div className="contact-item">
                        <span>info@sliit.lk</span>
                      </div>
                    
                  </div>
          
         
        </div>
      </div>
    </section>
  );
};

export default Contact;