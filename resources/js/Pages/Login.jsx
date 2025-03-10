import LoginForm from '../components/auth/login-form';

export default function Login() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Iniciar Sesión</h1>
                <LoginForm />
            </div>
        </div>
    );
}
