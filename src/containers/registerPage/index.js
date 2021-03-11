import React, { useState } from 'react';
import Layout from '../../components/layout';
import Card from '../../components/layout/UI/Card';
import './style.css';
import { signup } from '../../actions';
import { useDispatch } from 'react-redux';

const RegisterPage = (props) => {

    const [firstname,setfirstname] = useState('');
    const [lastname,setlastname] = useState('');
    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');
    const dispatch = useDispatch();

    const registerUser = (e) => {

        e.preventDefault();
        const user = {
            firstname, lastname, email, password
        }
        dispatch(signup(user));
    }

    return (
        <Layout>
            <div className="registercontainer">
            <Card>
                <h3>Sign Up</h3>
                <form onSubmit = {registerUser}>
                    <input value={firstname} type="text" placeholder="First Name" name="firstname"
                    onChange={(e) => setfirstname(e.target.value)}
                    />
                    <input value={lastname} type="text" placeholder="Last Name" name="lastname"
                    onChange={(e) => setlastname(e.target.value)}
                    />
                    <input value={email} type="email" placeholder="Email" name="email"
                    onChange={(e) => setemail(e.target.value)}
                    />
                    <input value={password} type="password" placeholder="Password" name="password"
                    onChange={(e) => setpassword(e.target.value)}
                    />
                    <div>
                        <button>Sign Up</button>
                    </div>
                </form>
            </Card>
            </div>
        </Layout>
    );
}

export default RegisterPage;