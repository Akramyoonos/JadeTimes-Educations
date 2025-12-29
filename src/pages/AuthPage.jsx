import React, { useState } from 'react';
import { Mail, Lock, User, ArrowLeft } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logoText from '../assets/Images/Educations-40_cvcack.png';

const AuthPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;

    // Google Button Component
    const GoogleButton = ({ text }) => (
        <button
            type="button"
            className="w-full bg-white border border-gray-300 text-gray-700 font-medium py-2.5 rounded flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors mb-6 shadow-sm"
            onClick={() => console.log('Google login clicked')}
        >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                />
                <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                />
                <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                />
                <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                />
            </svg>
            <span className="text-base">{text}</span>
        </button>
    );

    // Determine view based on path
    const isLogin = currentPath === '/login';
    const isSignup = currentPath === '/signup';
    const isForgotPassword = currentPath === '/forgot-password';

    // Form States
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [signupData, setSignupData] = useState({ email: '', firstName: '', lastName: '', password: '' });
    const [forgotData, setForgotData] = useState({ email: '' });

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        console.log('Login submitted:', loginData);
        // TODO: API integration
    };

    const handleSignupSubmit = (e) => {
        e.preventDefault();
        console.log('Signup submitted:', signupData);
        // TODO: API integration
    };

    const handleForgotSubmit = (e) => {
        e.preventDefault();
        console.log('Forgot Password submitted:', forgotData);
        // TODO: API integration
    };

    const handleInputChange = (e, setData) => {
        const { name, value } = e.target;
        setData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#e0f2f1] to-[#fce4ec] flex items-center justify-center p-4">
            {/* Close/Back Button */}
            <div className="absolute top-6 left-6">
                <Link to="/" className="text-gray-600 hover:text-teal-600 transition-colors flex items-center gap-2">
                    <ArrowLeft className="w-6 h-6" /> Back to Home
                </Link>
            </div>

            <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] w-full max-w-[400px] p-8 relative border border-white/50">

                {/* Logo Section */}
                <div className="flex justify-center mb-8">
                    <img src={logoText} alt="educations.com" className="h-[42px] object-contain" />
                </div>

                {/* LOGIN VIEW */}
                {isLogin && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                        <h2 className="text-center text-gray-800 text-xl font-normal mb-6">
                            Sign in
                        </h2>

                        <GoogleButton text="Continue with Google" />

                        <div className="relative mb-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">Or sign in with email</span>
                            </div>
                        </div>

                        <form className="space-y-5" onSubmit={handleLoginSubmit}>
                            <div>
                                <label className="block text-gray-500 text-sm mb-1">Email</label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        name="email"
                                        value={loginData.email}
                                        onChange={(e) => handleInputChange(e, setLoginData)}
                                        className="w-full border border-gray-300 rounded px-3 py-2.5 focus:outline-none focus:ring-1 focus:ring-teal-500 text-gray-700"
                                        placeholder="name@host.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-500 text-sm mb-1">Password</label>
                                <div className="relative">
                                    <input
                                        type="password"
                                        name="password"
                                        value={loginData.password}
                                        onChange={(e) => handleInputChange(e, setLoginData)}
                                        className="w-full border border-gray-300 rounded px-3 py-2.5 focus:outline-none focus:ring-1 focus:ring-teal-500 text-gray-700"
                                        placeholder="Password"
                                        required
                                    />
                                </div>
                                <div className="mt-2">
                                    <button
                                        type="button"
                                        onClick={() => navigate('/forgot-password')}
                                        className="text-[#D81B60] text-xs hover:underline font-medium"
                                    >
                                        Forgot your password?
                                    </button>
                                </div>
                            </div>

                            <button type="submit" className="w-full bg-[#D81B60] hover:bg-[#ad1457] text-white font-bold py-3 rounded text-base transition-colors shadow-sm">
                                Sign in
                            </button>
                        </form>

                        <div className="mt-6 text-center text-sm text-gray-600">
                            Need an account?{' '}
                            <button
                                onClick={() => navigate('/signup')}
                                className="text-[#D81B60] font-medium hover:underline"
                            >
                                Sign up
                            </button>
                        </div>
                    </div>
                )}


                {/* SIGNUP VIEW */}
                {isSignup && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                        <h2 className="text-center text-gray-800 text-xl font-normal mb-6">
                            Create your account
                        </h2>

                        <GoogleButton text="Sign up with Google" />

                        <div className="relative mb-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">Or sign up with email</span>
                            </div>
                        </div>

                        <form className="space-y-5" onSubmit={handleSignupSubmit}>
                            <div>
                                <label className="block text-gray-500 text-sm mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={signupData.email}
                                    onChange={(e) => handleInputChange(e, setSignupData)}
                                    className="w-full border border-gray-300 rounded px-3 py-2.5 focus:outline-none focus:ring-1 focus:ring-teal-500 text-gray-700"
                                    placeholder="name@host.com"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-gray-500 text-sm mb-1">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={signupData.firstName}
                                    onChange={(e) => handleInputChange(e, setSignupData)}
                                    className="w-full border border-gray-300 rounded px-3 py-2.5 focus:outline-none focus:ring-1 focus:ring-teal-500 text-gray-700"
                                    placeholder="First Name"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-gray-500 text-sm mb-1">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={signupData.lastName}
                                    onChange={(e) => handleInputChange(e, setSignupData)}
                                    className="w-full border border-gray-300 rounded px-3 py-2.5 focus:outline-none focus:ring-1 focus:ring-teal-500 text-gray-700"
                                    placeholder="Last Name"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-gray-500 text-sm mb-1">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={signupData.password}
                                    onChange={(e) => handleInputChange(e, setSignupData)}
                                    className="w-full border border-gray-300 rounded px-3 py-2.5 focus:outline-none focus:ring-1 focus:ring-teal-500 text-gray-700"
                                    placeholder="Create a password"
                                    required
                                />
                            </div>

                            <button type="submit" className="w-full bg-[#D81B60] hover:bg-[#ad1457] text-white font-bold py-3 rounded text-base transition-colors shadow-sm">
                                Sign up
                            </button>
                        </form>

                        <div className="mt-6 text-center text-sm text-gray-600">
                            Already have an account?{' '}
                            <button
                                onClick={() => navigate('/login')}
                                className="text-[#D81B60] font-medium hover:underline"
                            >
                                Sign in
                            </button>
                        </div>
                    </div>
                )}


                {/* FORGOT PASSWORD VIEW */}
                {isForgotPassword && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                        <h2 className="text-center text-gray-800 text-xl font-normal mb-6">
                            Reset your password
                        </h2>
                        <p className="text-gray-600 text-center text-sm mb-8">
                            Enter your email address and we'll send you a link to reset your password.
                        </p>

                        <form className="space-y-5" onSubmit={handleForgotSubmit}>
                            <div>
                                <label className="block text-gray-500 text-sm mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={forgotData.email}
                                    onChange={(e) => handleInputChange(e, setForgotData)}
                                    className="w-full border border-gray-300 rounded px-3 py-2.5 focus:outline-none focus:ring-1 focus:ring-teal-500 text-gray-700"
                                    placeholder="name@host.com"
                                    required
                                />
                            </div>

                            <button type="submit" className="w-full bg-[#D81B60] hover:bg-[#ad1457] text-white font-bold py-3 rounded text-base transition-colors shadow-sm">
                                Send Reset Link
                            </button>
                        </form>

                        <div className="mt-6 text-center">
                            <button
                                onClick={() => navigate('/login')}
                                className="text-gray-500 text-sm hover:text-gray-800 font-medium flex items-center justify-center gap-1 mx-auto"
                            >
                                <ArrowLeft className="w-4 h-4" /> Back to Sign In
                            </button>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default AuthPage;
