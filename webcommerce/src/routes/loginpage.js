import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/slices/sessionSlice';
import { useNavigate } from 'react-router';
const axios = require('axios').default;

function HandleLogin(e, dispatch, navigate, state) {
    e.preventDefault();
    axios.post('http://localhost:3001/login', {user: state.user , password: state.pass })
    .then((resp) => {
        if (resp.status === 200) {
            dispatch(login());
            navigate('/');
        }
    });
}

function FormHeader(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <form onSubmit={(e) => HandleLogin(e, dispatch, navigate, props.comp.state)}>
            <label>
                Usuario:
                <input type="text" value={props.comp.state.user} onChange={props.comp.handleChangeUser} />
            </label>
            <label>
                Contraseña:
                <input type="password" value={props.comp.state.pass} onChange={props.comp.handleChangePass} />
            </label>
            <input type="submit" value="Ingresar" />
        </form>
    );
}

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            pass: '',
        }
        this.handleChangePass = this.handleChangePass.bind(this);
        this.handleChangeUser = this.handleChangeUser.bind(this);
    }
    handleChangeUser(event) {
        this.setState({user: event.target.value})
    }
    handleChangePass(event) {
        this.setState({pass: event.target.value})
    }
    render() {
        return <FormHeader comp={this}/>;
    }
}

export default LoginPage;