import spinner from '../../img/spinner.gif'
import './Loader.css'

const Loader = () => {
    return (
        <div className="loader">
            <img src={ spinner } alt="Loading" />
            <h1>Fetching Climate<br/>Event Data...</h1>
        </div>
    )
}

export default Loader