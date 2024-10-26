import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Inválido email ou senha');
      }

      const data = await response.json();
      localStorage.setItem('token', data.token);
      router.push('/Dashboard');
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-12 pt-40 bg-segunda">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-md">
        <div className="text-center">
          <img
            className="mx-auto h-20 w-auto"
            src="/assets/Menu/imagem.svg"
            alt="Gerenciamento"
          />
          <h2 className="mt-6 text-4xl font-bold text-quinta uppercase">Tokito Tech</h2>
        </div>

        <form 
        id="form-login-splendid"
        className="space-y-6" 
        onSubmit={handleSubmit}
        name="form-login-splendid"
        method="post"
        data-netlify="false">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-blue-600 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="senha" className="block text-sm font-medium text-gray-700">Senha</label>
            <div className="mt-2">
              <input
                id="senha"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-blue-600 sm:text-sm"
              />
            </div>
          </div>

          {error && <p className="text-blue-600">{error}</p>}

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-quinta px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-sexta focus:outline focus:outline-2 focus:outline-quinta"
              disabled={loading}
            >
              {loading ? 'Acessando...' : 'Acesse'}
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
        Registro somente
        <span className="block font-semibold text-quinta">com o administrador do sistema.</span>
      </p>

      </div>
    </div>
  );
}
