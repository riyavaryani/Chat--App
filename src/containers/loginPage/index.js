import React from 'react';
import Layout from '../../components/layout';
import Card from '../../components/layout/UI/Card';
import './style.css';

const LoginPage = (props) => {
    return (
        <Layout>
            <div className="loginContainer">
            <Card>
                <div>Login Page</div>
            </Card>
            </div>
        </Layout>
    );
}

export default LoginPage;