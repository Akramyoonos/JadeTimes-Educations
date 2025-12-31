import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { mockBackend } from '../utils/mockBackend';

const UniversityDashboard = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [activeTab, setActiveTab] = useState('overview');
    const [university, setUniversity] = useState(null);
    const [uniFormData, setUniFormData] = useState({ name: '', location: '', description: '' });
    const [students, setStudents] = useState([]);
    const [applications, setApplications] = useState([]);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const u = JSON.parse(localStorage.getItem('currentUser'));
        if (!u || u.role !== 'university') {
            navigate('/login');
            return;
        }
        setUser(u);
        fetchData(u.id);
    }, [navigate]);

    const fetchData = async (userId) => {
        // Fetch University Profile linked to this user
        const allUnis = await mockBackend.getUniversities();
        const myUni = allUnis.find(u => u.userId === userId);

        if (myUni) {
            setUniversity(myUni);
            setUniFormData({ name: myUni.name, location: myUni.location, description: myUni.description });

            // Fetch Applications linked to this university ID
            // Using userId to match ProgramsPage logic (uni.userId || uni.id)
            const apps = await mockBackend.getApplications(myUni.userId || userId, 'university');
            setApplications(apps);
        } else {
            // Pre-fill with user name if no profile exists
            const u = JSON.parse(localStorage.getItem('currentUser'));
            setUniFormData(prev => ({ ...prev, name: `${u.firstName} ${u.lastName}` }));
        }

        // Fetch Students
        const allUsers = await mockBackend.getAllUsers();
        const studentUsers = allUsers.filter(u => u.role === 'student');
        setStudents(studentUsers);
    };

    const handleLogout = () => {
        localStorage.removeItem('currentUser');
        navigate('/');
    };

    const handleSaveProfile = async (e) => {
        e.preventDefault();
        let newUni;
        if (university) {
            // Update
            newUni = await mockBackend.updateUniversity(university.id, { ...uniFormData, userId: user.id });
            setUniversity(newUni);
        } else {
            // Create
            newUni = await mockBackend.addUniversity({ ...uniFormData, userId: user.id });
            setUniversity(newUni);
        }
        setIsEditing(false);
        alert('Profile saved successfully!');
        // Refresh data to ensure IDs match for applications
        fetchData(user.id);
    };

    const handleAppStatus = async (appId, status) => {
        await mockBackend.updateApplicationStatus(appId, status);
        // Refresh apps locally
        setApplications(prev => prev.map(a => a.id === appId ? { ...a, status } : a));
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />
            <div className="flex-grow container mx-auto px-4 py-8">
                {/* Header */}
                <div className="flex justify-between items-center mb-8 bg-white p-6 rounded-lg shadow-sm">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">University Dashboard</h1>
                        {user && <p className="text-gray-600 mt-1">Welcome back, <span className="font-semibold text-teal-600">{user.firstName} {user.lastName}</span></p>}
                    </div>
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 hover:bg-red-600 text-white px-6 py-2.5 rounded-lg transition-colors font-medium shadow-sm"
                    >
                        Logout
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex gap-6 mb-8 border-b border-gray-200">
                    <button
                        onClick={() => setActiveTab('overview')}
                        className={`pb-3 px-2 text-lg font-medium transition-colors border-b-2 ${activeTab === 'overview' ? 'border-teal-600 text-teal-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                    >
                        Overview
                    </button>
                    <button
                        onClick={() => setActiveTab('applications')}
                        className={`pb-3 px-2 text-lg font-medium transition-colors border-b-2 ${activeTab === 'applications' ? 'border-teal-600 text-teal-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                    >
                        Applications
                        {applications.filter(a => a.status === 'Pending').length > 0 && (
                            <span className="ml-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">{applications.filter(a => a.status === 'Pending').length}</span>
                        )}
                    </button>
                    <button
                        onClick={() => setActiveTab('profile')}
                        className={`pb-3 px-2 text-lg font-medium transition-colors border-b-2 ${activeTab === 'profile' ? 'border-teal-600 text-teal-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                    >
                        My Profile
                    </button>
                    <button
                        onClick={() => setActiveTab('students')}
                        className={`pb-3 px-2 text-lg font-medium transition-colors border-b-2 ${activeTab === 'students' ? 'border-teal-600 text-teal-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                    >
                        Find Students
                    </button>
                </div>

                {/* Content */}
                <div className="bg-white rounded-xl shadow-lg p-8 min-h-[400px]">

                    {/* OVERVIEW TAB */}
                    {activeTab === 'overview' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border border-blue-200">
                                <h3 className="text-2xl font-bold text-blue-900 mb-2">Profile Status</h3>
                                <p className={`text-lg mb-6 ${university ? 'text-green-600 font-semibold' : 'text-orange-600 font-semibold'}`}>
                                    {university ? 'Active & Published' : 'Incomplete'}
                                </p>
                                <button onClick={() => setActiveTab('profile')} className="text-blue-700 font-medium hover:underline">
                                    Manage Profile &rarr;
                                </button>
                            </div>
                            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-xl border border-teal-200">
                                <h3 className="text-2xl font-bold text-teal-900 mb-2">Student Applications</h3>
                                <p className="text-teal-700 mb-6">
                                    You have <span className="font-bold text-2xl">{applications.length}</span> total applications.
                                </p>
                                <button onClick={() => setActiveTab('applications')} className="text-teal-700 font-medium hover:underline">
                                    View Applications &rarr;
                                </button>
                            </div>
                        </div>
                    )}

                    {/* APPLICATIONS TAB */}
                    {activeTab === 'applications' && (
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Received Applications</h2>
                            {applications.length > 0 ? (
                                <div className="space-y-4">
                                    {applications.map(app => (
                                        <div key={app.id} className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center">
                                            <div className="mb-4 md:mb-0 flex-grow">
                                                <div className="flex items-baseline gap-2">
                                                    <h3 className="text-xl font-bold text-gray-800">{app.studentName}</h3>
                                                    {students.find(s => s.id === app.studentId) && (
                                                        <span className="text-sm text-gray-500">
                                                            ({students.find(s => s.id === app.studentId).email})
                                                        </span>
                                                    )}
                                                </div>
                                                <p className="text-gray-600 text-sm mb-2">Applied for: <span className="font-medium text-teal-600">{app.program}</span></p>

                                                {/* Student Stats */}
                                                {students.find(s => s.id === app.studentId) && (
                                                    <div className="flex gap-4 text-sm text-gray-600 mb-2 bg-gray-50 p-2 rounded inline-block">
                                                        <div>
                                                            <span className="font-semibold text-gray-700">GPA/Grade:</span> {students.find(s => s.id === app.studentId).currentGrade || 'N/A'}
                                                        </div>
                                                        <div>
                                                            <span className="font-semibold text-gray-700">Target:</span> {students.find(s => s.id === app.studentId).targetDegree || 'N/A'}
                                                        </div>
                                                    </div>
                                                )}

                                                <p className="text-gray-400 text-xs text-xs">Applied on: {app.date}</p>
                                            </div>
                                            <div className="flex items-center gap-4 min-w-max">
                                                <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${app.status === 'Accepted' ? 'bg-green-100 text-green-700' :
                                                    app.status === 'Rejected' ? 'bg-red-100 text-red-700' :
                                                        'bg-yellow-100 text-yellow-700'
                                                    }`}>
                                                    {app.status}
                                                </div>
                                                {app.status === 'Pending' && (
                                                    <div className="flex ml-2 border-l pl-4 border-gray-200 gap-2">
                                                        <button
                                                            onClick={() => handleAppStatus(app.id, 'Accepted')}
                                                            className="text-green-600 hover:bg-green-50 px-3 py-1 rounded transition-colors text-sm font-medium border border-green-200"
                                                        >
                                                            Accept
                                                        </button>
                                                        <button
                                                            onClick={() => handleAppStatus(app.id, 'Rejected')}
                                                            className="text-red-600 hover:bg-red-50 px-3 py-1 rounded transition-colors text-sm font-medium border border-red-200"
                                                        >
                                                            Reject
                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
                                    <p className="text-gray-500">No applications received yet.</p>
                                </div>
                            )}
                        </div>
                    )}

                    {/* PROFILE TAB */}
                    {activeTab === 'profile' && (
                        <div>
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold text-gray-800">University Details</h2>
                                {!isEditing && (
                                    <button
                                        onClick={() => setIsEditing(true)}
                                        className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition-colors"
                                    >
                                        Edit Details
                                    </button>
                                )}
                            </div>

                            {isEditing ? (
                                <form onSubmit={handleSaveProfile} className="max-w-2xl space-y-6">
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">University Name</label>
                                        <input
                                            type="text"
                                            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                                            value={uniFormData.name}
                                            onChange={(e) => setUniFormData({ ...uniFormData, name: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">Location</label>
                                        <input
                                            type="text"
                                            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                                            value={uniFormData.location}
                                            onChange={(e) => setUniFormData({ ...uniFormData, location: e.target.value })}
                                            required
                                            placeholder="e.g. London, UK"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">Description</label>
                                        <textarea
                                            rows="5"
                                            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                                            value={uniFormData.description}
                                            onChange={(e) => setUniFormData({ ...uniFormData, description: e.target.value })}
                                            required
                                            placeholder="Describe your institution..."
                                        ></textarea>
                                    </div>
                                    <div className="flex gap-4">
                                        <button type="submit" className="bg-teal-600 text-white px-6 py-2.5 rounded-lg hover:bg-teal-700 font-medium shadow-sm">Save Changes</button>
                                        <button
                                            type="button"
                                            onClick={() => setIsEditing(false)}
                                            className="bg-gray-200 text-gray-700 px-6 py-2.5 rounded-lg hover:bg-gray-300 font-medium"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            ) : (
                                <div className="space-y-6 max-w-3xl">
                                    {university ? (
                                        <>
                                            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                                                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Name</h3>
                                                <p className="text-xl text-gray-900 font-medium">{university.name}</p>
                                            </div>
                                            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                                                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Location</h3>
                                                <p className="text-xl text-gray-900 font-medium">{university.location}</p>
                                            </div>
                                            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                                                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Description</h3>
                                                <p className="text-base text-gray-700 leading-relaxed whitespace-pre-wrap">{university.description}</p>
                                            </div>
                                        </>
                                    ) : (
                                        <div className="text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
                                            <p className="text-gray-500 mb-4">You haven't set up your profile yet.</p>
                                            <button
                                                onClick={() => setIsEditing(true)}
                                                className="bg-teal-600 text-white px-6 py-2.5 rounded-lg hover:bg-teal-700 font-medium shadow-sm"
                                            >
                                                Create Profile
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    )}

                    {/* STUDENTS TAB */}
                    {activeTab === 'students' && (
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Find Students</h2>
                            <div className="overflow-hidden rounded-lg border border-gray-200">
                                <table className="w-full text-left">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Name</th>
                                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Email</th>
                                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {students.length > 0 ? (
                                            students.map(student => (
                                                <tr key={student.id} className="hover:bg-gray-50 transition-colors">
                                                    <td className="px-6 py-4 text-gray-900 font-medium">{student.firstName} {student.lastName}</td>
                                                    <td className="px-6 py-4 text-gray-600">{student.email}</td>
                                                    <td className="px-6 py-4">
                                                        <button
                                                            className="text-teal-600 hover:text-teal-700 font-medium text-sm border border-teal-200 px-3 py-1.5 rounded bg-teal-50 hover:bg-teal-100 transition-colors"
                                                            onClick={() => alert(`Invitation sent to ${student.firstName}!`)}
                                                        >
                                                            Connect
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="3" className="px-6 py-12 text-center text-gray-500">
                                                    No students found looking for universities right now.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default UniversityDashboard;
