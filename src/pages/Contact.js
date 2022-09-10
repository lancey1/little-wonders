import styles from './Contact.module.css'
import { useMediaQuery } from "react-responsive";


export default function Contact() {

  const isDesktop = useMediaQuery({ query: "(min-width: 1070px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1069px)" });

  return(
    <div className={`${styles.contactDiv}`} >
    <h1>Contact Us</h1>
    <h3 className={`${styles.contactHeader}`}>Get in touch with us, we'd love to hear from you. Have a general question?  We are only an email or call away!</h3>
    <h4 className={`${styles.formHeader}`}> Interested in enrolling your child?</h4>
    <h4 className={`${styles.formBody}`}> Please fill out this <a target={"_blank"}
            rel="noreferrer" href='https://docs.google.com/document/d/1Lex8r-8kvYr74X_rcQlUbzwXkNMji_Vq/' >Form</a></h4>
    <div className={`${styles.contactContainer}`}>
      <div className={`${styles.location}`}>
        <h3 className={`${styles.locationHeader}`}>Our Location</h3>
        <p>84 Porter St. Bradford, ON (Barrie St. and Holland St West)</p>
        <p>Steps from Marie of the Incarnation Separate School</p>
        <p>Phone: 647-524-4429</p>
        <p>Email: rohitajaysharma84@gmail.com</p>
        <p>Hours: Monday to Friday - 7:30 AM to 5:30 PM</p>
      </div>
      <div className={`${styles.map}`}>
      {isDesktop && <iframe title={'Daycare Location'} src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2864.2311478578104!2d-79.56545786076936!3d44.119854210998675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ac5887c148255%3A0xf9bbd1a51ab07306!2s84%20Porter%20St%2C%20Bradford%2C%20ON%20L3Z%201E8!5e0!3m2!1sen!2sca!4v1661800694935!5m2!1sen!2sca"} width="550" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>}
      {isTablet && <iframe title={'Daycare Location'} src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2864.2311478578104!2d-79.56545786076936!3d44.119854210998675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ac5887c148255%3A0xf9bbd1a51ab07306!2s84%20Porter%20St%2C%20Bradford%2C%20ON%20L3Z%201E8!5e0!3m2!1sen!2sca!4v1661800694935!5m2!1sen!2sca"} width="135%" height="430" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>}
      </div>
    </div>
    </div>
  )
}