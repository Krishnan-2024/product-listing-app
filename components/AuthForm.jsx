import { useState } from 'react';

export default function AuthForm({ mode }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${mode} with ${email} / ${password}`);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-10 space-y-4">
      <h1 className="text-2xl font-semibold">{mode === 'signin' ? 'Sign In' : 'Sign Up'}</h1>
      <input
        type="email"
        placeholder="Email"
        className="w-full border p-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full border p-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2">
        {mode === 'signin' ? 'Sign In' : 'Sign Up'}
      </button>
    </form>
  );
}
