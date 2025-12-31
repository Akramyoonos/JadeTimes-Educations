import React, { useState, useEffect } from 'react';
import { mockBackend } from '../utils/mockBackend';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [universities, setUniversities] = useState([]);
    const [activeTab, setActiveTab] = useState('users'); // users, universities

    // University State
    const [showUniForm, setShowUniForm] = useState(false);
    const [editingUni, setEditingUni] = useState(null);
    const [uniFormData, setUniFormData] = useState({ name: '', location: '', description: '' });

    // User State
    const [showUserForm, setShowUserForm] = useState(false);
    const [editingUser, setEditingUser] = useState(null);
    const [userFormData, setUserFormData] = useState({ firstName: '', lastName: '', email: '', password: '', role: 'student' });

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        if (!user || user.role !== 'admin') {
            navigate('/login');
            return;
        }
        fetchData();
    }, [navigate]);

    const fetchData = async () => {
        const u = await mockBackend.getAllUsers();
        setUsers(u);
        const unis = await mockBackend.getUniversities();
        setUniversities(unis);
    };

    const handleLogout = () => {
        localStorage.removeItem('currentUser');
        navigate('/');
    };

    const handleSaveUni = async (e) => {
        e.preventDefault();
        if (editingUni) {
            await mockBackend.updateUniversity(editingUni.id, uniFormData);
        } else {
            await mockBackend.addUniversity(uniFormData);
        }
        setShowUniForm(false);
        setEditingUni(null);
        setUniFormData({ name: '', location: '', description: '' });
        fetchData();
    };

    const handleEditUni = (uni) => {
        setEditingUni(uni);
        setUniFormData({ name: uni.name, location: uni.location, description: uni.description });
        setShowUniForm(true);
    };

    const handleDeleteUni = async (id) => {
        if (window.confirm('Are you sure?')) {
            await mockBackend.deleteUniversity(id);
            fetchData();
        }
    }

    // User Handlers
    const handleEditUser = (user) => {
        setEditingUser(user);
        setUserFormData({ firstName: user.firstName, lastName: user.lastName, email: user.email, role: user.role });
        setShowUserForm(true);
    };

    const handleSaveUser = async (e) => {
        e.preventDefault();
        if (editingUser) {
            await mockBackend.updateUser(editingUser.id, userFormData);
            alert('User updated successfully');
        } else {
            try {
                // For admin creation, we use signup logic but ignore the auto-login return
                await mockBackend.signup(userFormData);
                alert('User created successfully');
            } catch (error) {
                alert(error.message);
                return; // Keep form open on error
            }
        }
        setShowUserForm(false);
        setEditingUser(null);
        fetchData();
    };

    const handleDeleteUser = async (id) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            await mockBackend.deleteUser(id);
            fetchData();
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />
            <div className="flex-grow container mx-auto px-4 py-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
                    <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
                        Logout
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex gap-4 mb-6 border-b border-gray-200">
                    <button
                        onClick={() => setActiveTab('users')}
                        className={`pb-2 px-4 text-lg font-medium transition-colors ${activeTab === 'users' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        Users
                    </button>
                    <button
                        onClick={() => setActiveTab('universities')}
                        className={`pb-2 px-4 text-lg font-medium transition-colors ${activeTab === 'universities' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        Universities
                    </button>
                </div>

                {/* Content */}
                <div className="bg-white rounded-lg shadow p-6">
                    {activeTab === 'users' && (
                        <div>
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-semibold">All Users</h2>
                                <button
                                    onClick={() => { setShowUserForm(true); setEditingUser(null); setUserFormData({ firstName: '', lastName: '', email: '', password: '', role: 'student' }); }}
                                    className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded flex items-center gap-2"
                                >
                                    + Add User
                                </button>
                            </div>

                            {showUserForm && (
                                <div className="mb-6 bg-gray-50 p-4 rounded border border-gray-200">
                                    <h3 className="font-medium mb-3">{editingUser ? 'Edit User' : 'Add New User'}</h3>
                                    <form onSubmit={handleSaveUser} className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
                                        <input
                                            type="text"
                                            placeholder="First Name"
                                            className="border p-2 rounded"
                                            value={userFormData.firstName}
                                            onChange={e => setUserFormData({ ...userFormData, firstName: e.target.value })}
                                            required
                                        />
                                        <input
                                            type="text"
                                            placeholder="Last Name"
                                            className="border p-2 rounded"
                                            value={userFormData.lastName}
                                            onChange={e => setUserFormData({ ...userFormData, lastName: e.target.value })}
                                            required
                                        />
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            className="border p-2 rounded"
                                            value={userFormData.email}
                                            onChange={e => setUserFormData({ ...userFormData, email: e.target.value })}
                                            required
                                        />
                                        {!editingUser && (
                                            <input
                                                type="password"
                                                placeholder="Password"
                                                className="border p-2 rounded"
                                                value={userFormData.password}
                                                onChange={e => setUserFormData({ ...userFormData, password: e.target.value })}
                                                required
                                                minLength={6}
                                            />
                                        )}
                                        <select
                                            className="border p-2 rounded bg-white"
                                            value={userFormData.role}
                                            onChange={e => setUserFormData({ ...userFormData, role: e.target.value })}
                                        >
                                            <option value="student">Student</option>
                                            <option value="university">University</option>
                                            <option value="admin">Admin</option>
                                        </select>
                                        <div className="flex gap-2 col-span-2">
                                            <button type="submit" className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700">Save Changes</button>
                                            <button type="button" onClick={() => { setShowUserForm(false); setEditingUser(null); }} className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400">Cancel</button>
                                        </div>
                                    </form>
                                </div>
                            )}

                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                                            <th className="py-3 px-6">ID</th>
                                            <th className="py-3 px-6">Name</th>
                                            <th className="py-3 px-6">Email</th>
                                            <th className="py-3 px-6">Role</th>
                                            <th className="py-3 px-6">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-600 text-sm font-light">
                                        {users.map(user => (
                                            <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-50">
                                                <td className="py-3 px-6 whitespace-nowrap">{user.id}</td>
                                                <td className="py-3 px-6">{user.firstName} {user.lastName}</td>
                                                <td className="py-3 px-6">{user.email}</td>
                                                <td className="py-3 px-6">
                                                    <span className={`py-1 px-3 rounded-full text-xs 
                                                        ${user.role === 'admin' ? 'bg-purple-200 text-purple-600' :
                                                            user.role === 'university' ? 'bg-blue-200 text-blue-600' :
                                                                'bg-green-200 text-green-600'}`}>
                                                        {user.role}
                                                    </span>
                                                </td>
                                                <td className="py-3 px-6 flex gap-2">
                                                    <button onClick={() => handleEditUser(user)} className="text-blue-500 hover:text-blue-700 font-medium">Edit</button>
                                                    <button onClick={() => handleDeleteUser(user.id)} className="text-red-500 hover:text-red-700 font-medium">Delete</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {activeTab === 'universities' && (
                        <div>
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-semibold">Universities</h2>
                                <button
                                    onClick={() => { setShowUniForm(true); setEditingUni(null); setUniFormData({ name: '', location: '', description: '' }); }}
                                    className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded flex items-center gap-2"
                                >
                                    + Add University
                                </button>
                            </div>

                            {showUniForm && (
                                <div className="mb-6 bg-gray-50 p-4 rounded border border-gray-200">
                                    <h3 className="font-medium mb-3">{editingUni ? 'Edit University' : 'Add New University'}</h3>
                                    <form onSubmit={handleSaveUni} className="grid grid-cols-1 gap-4 max-w-lg">
                                        <input
                                            type="text"
                                            placeholder="University Name"
                                            className="border p-2 rounded"
                                            value={uniFormData.name}
                                            onChange={e => setUniFormData({ ...uniFormData, name: e.target.value })}
                                            required
                                        />
                                        <input
                                            type="text"
                                            placeholder="Location"
                                            className="border p-2 rounded"
                                            value={uniFormData.location}
                                            onChange={e => setUniFormData({ ...uniFormData, location: e.target.value })}
                                            required
                                        />
                                        <textarea
                                            placeholder="Description"
                                            className="border p-2 rounded"
                                            value={uniFormData.description}
                                            onChange={e => setUniFormData({ ...uniFormData, description: e.target.value })}
                                            rows="3"
                                        ></textarea>
                                        <div className="flex gap-2">
                                            <button type="submit" className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700">Save</button>
                                            <button type="button" onClick={() => setShowUniForm(false)} className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400">Cancel</button>
                                        </div>
                                    </form>
                                </div>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {universities.map(uni => (
                                    <div key={uni.id} className="border rounded-lg p-5 hover:shadow-lg transition-shadow bg-white">
                                        <h3 className="text-lg font-bold text-gray-800 mb-1">{uni.name}</h3>
                                        <p className="text-sm text-gray-500 mb-3">{uni.location}</p>
                                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{uni.description}</p>
                                        <div className="flex gap-2 mt-auto">
                                            <button onClick={() => handleEditUni(uni)} className="text-blue-600 hover:bg-blue-50 px-3 py-1 rounded text-sm font-medium border border-blue-200">Edit</button>
                                            <button onClick={() => handleDeleteUni(uni.id)} className="text-red-600 hover:bg-red-50 px-3 py-1 rounded text-sm font-medium border border-red-200">Delete</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AdminDashboard;
