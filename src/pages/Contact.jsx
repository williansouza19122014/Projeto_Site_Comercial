
import { useContext } from 'react';
import Banner from "../components/Banner/Banner";
import ContactForm from "../components/ContactForm/ContactForm";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";


// CONTEXT
import { AppContext } from '../contexts/AppContext';

function Contact(){
    const appContext = useContext(AppContext)
    return (
        <>
            <Header />
            <Banner title={appContext.languages[appContext.language].menu.contact} image="Contact.jpg" />
            <div className="container">
                <ContactForm />
            </div>
            <Footer />
        </>
    )
}

export default Contact