import React from "react";
import {ContactSection , Contactitle , Span , FormInput , InputText , InputEmail , InputExp , TextArea , Form , InputSubmit} from './Style.js'
import Footer from "../Footer/index.js";
const Contact = () => {
  return (
  <React.Fragment>
    <ContactSection>
      <div className="container">
      <Contactitle><Span>Drop </Span>Me A line</Contactitle>
        <Form action="">
            <FormInput>
              <InputText type="text" placeholder="Your Name"/>
              <InputEmail type="email" placeholder="Your Email"/>
            </FormInput>
            <InputExp type="text" className="sub" placeholder="Your Subject"/>
            <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
            <InputSubmit type="submit" value="Send Message"/>
        </Form>
      </div>
    </ContactSection>
    <Footer/>
  </React.Fragment>
  );
}

export default Contact;
