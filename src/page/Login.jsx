import {Link} from "react-router-dom";
import {useRef, useState} from "react";
import TextField from "@mui/material/TextField";
import {Button} from "@mui/material";
import styled from 'styled-components';

const Total = styled.div`
  background: #333;
  width: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`

const Mid = styled.div`
  background: #333;
  display: flex;
  justify-content: center;
`

const buttonSX = {
    '&.active': {
        backgroundColor: '#194870', // 替换为你想要的颜色
    }
}

const iterations = <>
    <Button component={Link} to='/iteration2' sx={buttonSX}>Iteration2</Button>
    <Button component={Link} to='/iteration3' sx={buttonSX}>Iteration3</Button>
</>


export const Login = (props) => {
    const passwordRef = useRef('');
    const [passwordFlag, setPasswordFlag] = useState(false);
    // const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        if (passwordRef.current.value === '123456') {
            setPasswordFlag(true)
        }
        console.log({
            password: passwordRef.current.value,
            passwordFlag: passwordFlag
        })
        props.onValueChange(passwordFlag);
        // navigate('/home');
    }

    return (
        <Total>
            <Mid>
                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    inputProps={{ref: passwordRef}}
                />
                <Button onClick={onSubmit}>{!passwordFlag ? 'Submit' : 'go to iteration'}</Button>
            </Mid>
            <Mid>
                {/*{passwordFlag && iterations}*/}
            </Mid>
        </Total>
    )
}
