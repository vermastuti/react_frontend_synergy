import { Login, LoginForm, LoginProps } from 'react-admin';
import { Typography } from '@mui/material';

export const AdminLogin = (props: LoginProps) => (
    <Login title="Admin Dashboard Login">
        <LoginForm />
    </Login>
);