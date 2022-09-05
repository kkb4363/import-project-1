import {Link} from 'react-router-dom';
import {AiFillCaretRight ,AiFillCaretLeft} from "react-icons/ai";
const Home = () => {
    return(
        <div>
            <h1>This is first page</h1>
            <Link to='/Prev'>
                <AiFillCaretLeft/>
            </Link>

            <Link to='/Next'>
                <AiFillCaretRight/>
            </Link>
        </div>
    )
}

export default Home;