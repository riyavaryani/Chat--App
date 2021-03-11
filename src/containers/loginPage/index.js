import React, { useState } from 'react';
import Layout from '../../components/layout';
import Card from '../../components/layout/UI/Card';
import './style.css';

const LoginPage = (props) => {

    const [email,setemail] = useState('');
    const [password, setpassword] = useState('');

    return (
        <Layout>
            <div className="loginContainer">
            <Card>
                <form>
                    <input type="text" name="email" placeholder="Email" value={email}
                    onChange={(e) => setemail(e.target.value)}
                    />
                    <input type="password" name="password" placeholder="Password" value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    />
                </form>
                <div>
                    <button>Login</button>
                </div>
            </Card>
            </div>
        </Layout>
    );
}

export default LoginPage;