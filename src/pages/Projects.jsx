import { useContext } from 'react';
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import ProjectsList from "../components/ProjectsList/ProjectsList";

// CONTEXT
import { AppContext } from '../contexts/AppContext';

function projects(){
    const appContext = useContext(AppContext)
    return (
        <>
            <Header />
            <Banner title={appContext.languages[appContext.language].menu.projects} image="Projects.jpg" />
                <div className="container">
                    <ProjectsList />
                </div>
            <Footer />
        </>
    )
}

export default projects
