
const DELAY = 500; // Simulate network delay

class MockBackend {
    constructor() {
        this.init();
    }

    init() {
        if (!localStorage.getItem('users')) {
            // Create some default users
            const users = [
                { id: 1, email: 'admin@edu.com', password: 'admin', role: 'admin', firstName: 'Super', lastName: 'Admin' },
                { id: 2, email: 'student@edu.com', password: 'user', role: 'student', firstName: 'John', lastName: 'Doe' },
                { id: 3, email: 'uni@edu.com', password: 'uni', role: 'university', firstName: 'Boston', lastName: 'University' },
            ];
            localStorage.setItem('users', JSON.stringify(users));
        }

        if (!localStorage.getItem('universities')) {
            // Create some default universities linked to university users if needed, 
            // or just standalone data. The request says "Admin... create universities".
            // Let's keep universities as a separate resource, perhaps linked to a "university user" account?
            // The prompt says "Admin... can create universities and profile manual, also can change any data of universities adding under them".
            // This implies Universities might be data entities.
            const universities = [
                { id: 1, userId: 3, name: 'Boston University', location: 'USA', description: 'A leading private research university.' }
            ];
            localStorage.setItem('universities', JSON.stringify(universities));
        }
    }

    async login(email, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const users = JSON.parse(localStorage.getItem('users') || '[]');
                const user = users.find(u => u.email === email && u.password === password);
                if (user) {
                    // Return user without password
                    const { password, ...userWithoutPass } = user;
                    resolve({ user: userWithoutPass, token: 'fake-jwt-token' });
                } else {
                    reject(new Error('Invalid credentials'));
                }
            }, DELAY);
        });
    }

    async signup(userData) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const users = JSON.parse(localStorage.getItem('users') || '[]');
                if (users.find(u => u.email === userData.email)) {
                    reject(new Error('User already exists'));
                    return;
                }
                const newUser = { ...userData, id: Date.now() };
                users.push(newUser);
                localStorage.setItem('users', JSON.stringify(users));
                const { password, ...userWithoutPass } = newUser;
                resolve({ user: userWithoutPass, token: 'fake-jwt-token' });
            }, DELAY);
        });
    }

    async updateUser(id, updateData) {
        return new Promise((resolve) => {
            setTimeout(() => {
                let users = JSON.parse(localStorage.getItem('users') || '[]');
                let userIndex = users.findIndex(u => u.id === id);
                if (userIndex !== -1) {
                    users[userIndex] = { ...users[userIndex], ...updateData };
                    localStorage.setItem('users', JSON.stringify(users));
                    const { password, ...userWithoutPass } = users[userIndex];
                    resolve(userWithoutPass);
                } else {
                    resolve(null);
                }
            }, DELAY);
        });
    }

    // Admin features
    async getAllUsers() {
        return JSON.parse(localStorage.getItem('users') || '[]');
    }

    async deleteUser(id) {
        let users = JSON.parse(localStorage.getItem('users') || '[]');
        users = users.filter(u => u.id !== id);
        localStorage.setItem('users', JSON.stringify(users));
        return true;
    }

    async getUniversities() {
        return JSON.parse(localStorage.getItem('universities') || '[]');
    }

    async addUniversity(uniData) {
        const unis = JSON.parse(localStorage.getItem('universities') || '[]');
        const newUni = { ...uniData, id: Date.now() };
        unis.push(newUni);
        localStorage.setItem('universities', JSON.stringify(unis));
        return newUni;
    }

    async updateUniversity(id, uniData) {
        let unis = JSON.parse(localStorage.getItem('universities') || '[]');
        unis = unis.map(u => u.id === id ? { ...u, ...uniData } : u);
        localStorage.setItem('universities', JSON.stringify(unis));
        return uniData;
    }

    async deleteUniversity(id) {
        let unis = JSON.parse(localStorage.getItem('universities') || '[]');
        unis = unis.filter(u => u.id !== id);
        localStorage.setItem('universities', JSON.stringify(unis));
        return true;
    }
    async getApplications(userId, role) {
        const apps = JSON.parse(localStorage.getItem('applications') || '[]');
        if (role === 'student') {
            return apps.filter(a => a.studentId === userId);
        } else if (role === 'university') {
            return apps.filter(a => a.uniId === userId); // Assuming university user ID is linked or similar
        }
        return [];
    }

    async submitApplication(application) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const apps = JSON.parse(localStorage.getItem('applications') || '[]');
                const newApp = { ...application, id: Date.now(), status: 'Pending', date: new Date().toLocaleDateString() };
                apps.push(newApp);
                localStorage.setItem('applications', JSON.stringify(apps));
                resolve(newApp);
            }, DELAY);
        });
    }

    async updateApplicationStatus(appId, status) {
        return new Promise((resolve) => {
            setTimeout(() => {
                let apps = JSON.parse(localStorage.getItem('applications') || '[]');
                apps = apps.map(a => a.id === appId ? { ...a, status } : a);
                localStorage.setItem('applications', JSON.stringify(apps));
                resolve(true);
            }, DELAY);
        });
    }

    // Saved Programs features
    async getSavedPrograms(userId) {
        let saved = JSON.parse(localStorage.getItem('savedPrograms') || '[]');
        return saved.filter(s => s.studentId === userId);
    }

    async saveProgram(programData) {
        return new Promise((resolve) => {
            setTimeout(() => {
                let saved = JSON.parse(localStorage.getItem('savedPrograms') || '[]');
                if (!saved.some(s => s.studentId === programData.studentId && s.uniId === programData.uniId)) {
                    saved.push({ ...programData, id: Date.now() });
                    localStorage.setItem('savedPrograms', JSON.stringify(saved));
                    resolve(true);
                } else {
                    resolve(false); // Already saved
                }
            }, DELAY);
        });
    }

    async removeSavedProgram(id) {
        return new Promise((resolve) => {
            setTimeout(() => {
                let saved = JSON.parse(localStorage.getItem('savedPrograms') || '[]');
                saved = saved.filter(s => s.id !== id);
                localStorage.setItem('savedPrograms', JSON.stringify(saved));
                resolve(true);
            }, DELAY);
        });
    }
}

export const mockBackend = new MockBackend();
