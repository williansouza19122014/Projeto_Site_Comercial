import './LoadingSpinner.css'
import LoadingSpinnergif  from '../../assets/loading-spinner.gif'


function LoadingSpinner(){
    return(
        <div className="d-flex al-center jc-center loading-overlay-container">
            <img src={LoadingSpinnergif} alt='Loading' height='80px' />
        </div>
    )
}

export default LoadingSpinner