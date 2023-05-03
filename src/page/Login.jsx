import {Link} from "react-router-dom";

export const Login = () => {
    return (
        <div>
            <h1>Login page</h1>
            <Link to='/iteration2' className='btn'>Iteration1</Link>
            <Link to='/iteration3' className='btn'>Iteration2</Link>
        </div>
    )
}
