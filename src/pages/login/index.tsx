// pages/login.tsx

import Link from "next/link";
import type { NextPage } from "next";

const LoginPage: NextPage = () => {
    const Loginhandler = () => {
        alert("ONDEVELOP");
    }
    return (
        <div className="min-h-screen flex">
        {/* LEFT SIDE */}
        <div className="hidden lg:flex lg:w-1/2 bg-sky-500 relative items-center justify-center overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute w-72 h-72 bg-white/10 rounded-full -top-10 -left-10" />
            <div className="absolute w-96 h-96 bg-white/10 rounded-full bottom-0 right-0" />

            <div className="relative z-10 text-white px-12">
            <h1 className="text-5xl font-bold leading-tight">
                Welcome to <br /> Tokoin
            </h1>

            <p className="mt-6 text-lg text-sky-100 leading-relaxed">
                Platform modern untuk membantu bisnis dan transaksi digital
                menjadi lebih mudah, cepat, dan aman.
            </p>

            {/* Illustration */}
            <div className="mt-10">
                <img
                src="https://illustrations.popsy.co/white/digital-nomad.svg"
                alt="Login Illustration"
                className="w-full max-w-md"
                />
            </div>
            </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-1/2 bg-sky-500 lg:bg-white flex items-center justify-center px-6 py-10 relative overflow-hidden">
            {/* Mobile background decoration (hidden on desktop) */}
            <div className="absolute w-72 h-72 bg-white/10 rounded-full -top-10 -right-10 lg:hidden" />
            <div className="absolute w-96 h-96 bg-white/10 rounded-full bottom-0 -left-10 lg:hidden" />
            <div className="w-full max-w-md px-6 py-4 rounded-xl border-1">
            {/* Logo */}
            <div className="mb-8 text-center lg:text-left">
                {/* <div className="w-35 h-14 bg-sky-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto lg:mx-0 shadow-lg">
                Tokoin.com
                </div> */}

                <div className="w-full text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mt-6 ">
                    Login
                    </h2>
                    <p className="text-gray-500 mt-2">
                    Masuk ke akun Tokoin kamu
                    </p>

                </div>

            </div>

            {/* Form */}
            <form className="space-y-5">
                <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                    Email
                </label>

                <input
                    type="email"
                    placeholder="Masukkan email"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition"
                />
                </div>

                <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                    Password
                </label>

                <input
                    type="password"
                    placeholder="Masukkan password"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition"
                />
                </div>

                <div className="flex justify-between items-center text-sm">
                <label className="flex items-center gap-2 text-gray-600">
                    <input type="checkbox" className="accent-sky-500" />
                    Remember me
                </label>

                <button
                    type="button"
                    className="text-sky-600 hover:text-sky-700"
                >
                    Forgot password?
                </button>
                </div>

                <button
                type="submit"
                className="w-full bg-amber-50 text-sky-500 hover:bg-red-500 lg:bg-sky-500 lg:hover:bg-sky-600 lg:text-white py-3 rounded-xl font-semibold transition shadow-md"
                onClick={Loginhandler}
                >
                Login
                </button>
            </form>

            {/* Footer */}
            <p className="text-center text-gray-500 mt-8">
                Belum punya akun?{" "}
                <Link
                href="/register"
                className="text-sky-600 font-semibold hover:underline"
                >
                Register
                </Link>
            </p>
            </div>
        </div>
        </div>
    );
};

export default LoginPage;