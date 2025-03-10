import { useForm } from '@inertiajs/react';

export default function LoginForm() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post('/login');
    };

    return (
        <form onSubmit={submit} className="space-y-4">
            <div>
                <label className="block text-gray-700 font-medium">Email</label>
                <input
                    type="email"
                    value={data.email}
                    onChange={(e) => setData('email', e.target.value)}
                    required
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
                <label className="block text-gray-700 font-medium">Contraseña</label>
                <input
                    type="password"
                    value={data.password}
                    onChange={(e) => setData('password', e.target.value)}
                    required
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>

            <button
                type="submit"
                disabled={processing}
                className={`w-full bg-blue-500 text-white p-3 rounded-lg font-bold hover:bg-blue-600 transition-all ${
                    processing ? 'opacity-50 cursor-not-allowed' : ''
                }`}
            >
                {processing ? 'Ingresando...' : 'Ingresar'}
            </button>
        </form>
    );
}
