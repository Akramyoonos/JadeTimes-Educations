import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { mockBackend } from '../utils/mockBackend';

const StudentDashboard = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [activeTab, setActiveTab] = useState('profile'); // profile, applications, saved
    const [applications, setApplications] = useState([]);
    const [savedPrograms, setSavedPrograms] = useState([]);
    const [formData, setFormData] = useState({
        currentGrade: '',
        targetDegree: 'Bachelor',
        preferredCountries: '',
        interests: ''
    });
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const u = JSON.parse(localStorage.getItem('currentUser'));
        if (!u || u.role !== 'student') {
            navigate('/login');
            return;
        }
        setUser(u);
        setFormData({
            currentGrade: u.currentGrade || '',
            targetDegree: u.targetDegree || 'Bachelor',
            preferredCountries: u.preferredCountries || '',
            interests: u.interests || ''
        });

        const fetchApps = async () => {
            const apps = await mockBackend.getApplications(u.id, 'student');
            setApplications(apps);
            const saved = await mockBackend.getSavedPrograms(u.id);
            setSavedPrograms(saved);
        };
        fetchApps();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('currentUser');
        navigate('/');
    };

    const handleSaveProfile = async (e) => {
        e.preventDefault();
        const updatedUser = await mockBackend.updateUser(user.id, formData);
        setUser(updatedUser);
        localStorage.setItem('currentUser', JSON.stringify(updatedUser)); // Update local session
        setIsEditing(false);
        alert('Profile updated successfully!');
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />
            <div className="flex-grow container mx-auto px-4 py-8">
                {/* Header */}
                <div className="flex justify-between items-center mb-8 bg-white p-6 rounded-lg shadow-sm">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">Student Dashboard</h1>
                        {user && <p className="text-gray-600 mt-1">Welcome back, <span className="font-semibold text-teal-600">{user.firstName} {user.lastName}</span></p>}
                    </div>
                    <div className="flex gap-4">
                        <button
                            onClick={() => navigate('/programs')} // Link to browse programs
                            className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2.5 rounded-lg transition-colors font-medium shadow-sm"
                        >
                            Browse Programs
                        </button>
                        <button
                            onClick={handleLogout}
                            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2.5 rounded-lg transition-colors font-medium shadow-sm"
                        >
                            Logout
                        </button>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex gap-6 mb-8 border-b border-gray-200">
                    <button
                        onClick={() => setActiveTab('profile')}
                        className={`pb-3 px-2 text-lg font-medium transition-colors border-b-2 ${activeTab === 'profile' ? 'border-teal-600 text-teal-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                    >
                        My Profile
                    </button>
                    <button
                        onClick={() => setActiveTab('applications')}
                        className={`pb-3 px-2 text-lg font-medium transition-colors border-b-2 ${activeTab === 'applications' ? 'border-teal-600 text-teal-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                    >
                        Applications
                    </button>
                    <button
                        onClick={() => setActiveTab('saved')}
                        className={`pb-3 px-2 text-lg font-medium transition-colors border-b-2 ${activeTab === 'saved' ? 'border-teal-600 text-teal-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                    >
                        Saved Programs
                    </button>
                </div>

                {/* Content */}
                <div className="bg-white rounded-xl shadow-lg p-8 min-h-[400px]">
                    {activeTab === 'profile' && (
                        <div>
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold text-gray-800">Your Student Profile</h2>
                                {!isEditing && (
                                    <button
                                        onClick={() => setIsEditing(true)}
                                        className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition-colors"
                                    >
                                        Edit Profile
                                    </button>
                                )}
                            </div>

                            {isEditing ? (
                                <form onSubmit={handleSaveProfile} className="max-w-2xl space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2">Current Grade / GPA</label>
                                            <input
                                                type="text"
                                                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-500 outline-none"
                                                value={formData.currentGrade}
                                                onChange={(e) => setFormData({ ...formData, currentGrade: e.target.value })}
                                                placeholder="e.g. 3.8 or A"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2">Target Degree</label>
                                            <select
                                                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-500 outline-none bg-white"
                                                value={formData.targetDegree}
                                                onChange={(e) => setFormData({ ...formData, targetDegree: e.target.value })}
                                            >
                                                <option value="Bachelor">Bachelor</option>
                                                <option value="Master">Master</option>
                                                <option value="PhD">PhD</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">Preferred Countries</label>
                                        <input
                                            type="text"
                                            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-500 outline-none"
                                            value={formData.preferredCountries}
                                            onChange={(e) => setFormData({ ...formData, preferredCountries: e.target.value })}
                                            placeholder="e.g. USA, UK, Canada"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">Interests / Major</label>
                                        <textarea
                                            rows="3"
                                            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-500 outline-none"
                                            value={formData.interests}
                                            onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                                            placeholder="e.g. Computer Science, Art History..."
                                        ></textarea>
                                    </div>
                                    <div className="flex gap-4">
                                        <button type="submit" className="bg-teal-600 text-white px-6 py-2.5 rounded-lg hover:bg-teal-700 font-medium shadow-sm">Save Profile</button>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setIsEditing(false); setFormData({
                                                    currentGrade: user.currentGrade || '',
                                                    targetDegree: user.targetDegree || 'Bachelor',
                                                    preferredCountries: user.preferredCountries || '',
                                                    interests: user.interests || ''
                                                });
                                            }}
                                            className="bg-gray-200 text-gray-700 px-6 py-2.5 rounded-lg hover:bg-gray-300 font-medium"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            ) : (
                                <div className="max-w-3xl space-y-6">
                                    <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100 flex items-start gap-4">
                                        <div className="p-3 bg-indigo-100 rounded-full text-indigo-600">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-indigo-900 mb-1">Why complete your profile?</h3>
                                            <p className="text-indigo-700 text-sm">Universities use this information to find you! The more details you provide, the better your chances of getting scouted.</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                                            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">GPA / Grade</h3>
                                            <p className="text-xl text-gray-900 font-medium">{user?.currentGrade || 'Not set'}</p>
                                        </div>
                                        <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                                            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Target Degree</h3>
                                            <p className="text-xl text-gray-900 font-medium">{user?.targetDegree || 'Bachelor'}</p>
                                        </div>
                                        <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                                            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Preferred Countries</h3>
                                            <p className="text-xl text-gray-900 font-medium">{user?.preferredCountries || 'Not set'}</p>
                                        </div>
                                        <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                                            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Interests</h3>
                                            <p className="text-xl text-gray-900 font-medium">{user?.interests || 'Not set'}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {activeTab === 'applications' && (
                        <div>
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold text-gray-800">My Applications</h2>
                                <button onClick={() => navigate('/programs')} className="text-teal-600 font-medium hover:underline">
                                    Browse Programs &rarr;
                                </button>
                            </div>

                            {applications.length > 0 ? (
                                <div className="space-y-4">
                                    {applications.map(app => (
                                        <div key={app.id} className="bg-gray-50 p-6 rounded-lg border border-gray-200 flex justify-between items-center">
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-800">{app.uniName}</h3>
                                                <p className="text-gray-600">{app.program}</p>
                                                <p className="text-sm text-gray-400 mt-1">Applied on: {app.date}</p>
                                            </div>
                                            <div className={`px-4 py-2 rounded-full text-sm font-bold ${app.status === 'Accepted' ? 'bg-green-100 text-green-700' :
                                                app.status === 'Rejected' ? 'bg-red-100 text-red-700' :
                                                    'bg-yellow-100 text-yellow-700'
                                                }`}>
                                                {app.status}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
                                    <svg className="w-12 h-12 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                                    <p className="text-gray-500 mb-4">You haven't applied to any universities yet.</p>
                                    <button
                                        onClick={() => navigate('/programs')}
                                        className="bg-teal-600 text-white px-6 py-2.5 rounded-lg hover:bg-teal-700 font-medium shadow-sm"
                                    >
                                        Start Applying
                                    </button>
                                </div>
                            )}
                        </div>
                    )}

                    {activeTab === 'saved' && (
                        <div>
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold text-gray-800">Saved Programs</h2>
                            </div>
                            {savedPrograms.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {savedPrograms.map(prog => (
                                        <div key={prog.id} className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                                            <h3 className="text-xl font-bold text-gray-800">{prog.uniName}</h3>
                                            <p className="text-gray-600 mb-4">{prog.uniLocation}</p>
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={async () => {
                                                        await mockBackend.removeSavedProgram(prog.id);
                                                        setSavedPrograms(prev => prev.filter(p => p.id !== prog.id));
                                                    }}
                                                    className="text-red-600 hover:text-red-700 font-medium px-4 py-2 border border-red-200 rounded hover:bg-red-50 transition-colors"
                                                >
                                                    Remove
                                                </button>
                                                <button
                                                    onClick={() => navigate('/programs')}
                                                    className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition-colors"
                                                >
                                                    View Details
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-12">
                                    <div className="inline-block p-4 bg-gray-100 rounded-full mb-4">
                                        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                                    </div>
                                    <h3 className="text-xl font-medium text-gray-900 mb-2">No saved programs</h3>
                                    <p className="text-gray-500 mb-4">Save programs you are interested in to view them here.</p>
                                    <button onClick={() => navigate('/programs')} className="text-teal-600 font-medium hover:underline">
                                        Browse Programs
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default StudentDashboard;
