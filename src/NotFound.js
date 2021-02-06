import { Link } from "react-router-dom"

const NotFound = () => {
    return ( 
        <div className="NotFound">
            <h2>Sorry</h2>
            <p>There is no page like you search</p>
            <Link to='/'> Go Back to Home..</Link>
        </div>
    );
}
 
export default NotFound;