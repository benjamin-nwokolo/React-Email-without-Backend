import { useRef } from "react"
import emailjs from '@emailjs/browser';

const Email = () => {
             
const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_yta11dh', 'template_2c9a1n9', form.current, 'vnX3YDUTUw7Cj3l_q')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();
};

    return ( 
        <div class="form">
        <div class="title">Contact Us</div>

         <form  ref={form}
         onSubmit ={sendEmail}>
        
        <div class="input-container ic1">
          <input id="firstname" className="input" type="text" placeholder="Username "  name="to_name"/>
     
        </div>

        <div class="input-container ic2">
          <input id="email" className="input" type="text" placeholder="Email Address  "  name="from_name"/>
        </div>

        <div class="input-container ic2">
        <textarea  required placeholder="Message"  name="message"></textarea>
        </div>
        <button type="text" className="submit">Submit Message</button>
      
        </form>
      </div>
    
     );
}
 
export default Email;