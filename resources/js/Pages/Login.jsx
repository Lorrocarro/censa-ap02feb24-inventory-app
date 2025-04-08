import { Head } from "@inertiajs/react";
import LoginForm from "@/components/auth/LoginForm"; 
import.meta.glob('./Pages/**/*.{js,jsx}')


export default function LoginPage() {
    return (
        <>
            <Head title="Inicio de sesión" />
            <h1>Login</h1>  
            <LoginForm />  
        </>
    );
}
