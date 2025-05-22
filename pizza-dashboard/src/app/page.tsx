'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

export default function AuthPage() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 ">
        <h1 className="text-xl font-semibold">Welcome, {session.user?.name}!</h1>
        <p className="text-sm text-gray-600">{session.user?.email}</p>
        <button
          type='button'
          onClick={() => signOut()}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg cursor-pointer"
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800">
      <h1 className="text-2xl font-bold mb-4">Sign in / Sign up</h1>
      <button
        onClick={() => signIn('google')}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition cursor-pointer"
      >
        Continue with Google
      </button>
    </div>
  );
}
