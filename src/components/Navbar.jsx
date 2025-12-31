import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe, ArrowRightToLine, ChevronDown, Menu, X, Compass, FileText, Check, ChevronRight, ExternalLink, User } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import logoText from '../assets/Images/Educations-40_cvcack.png';

const Navbar = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);
    const [activeTab, setActiveTab] = useState('Fields of study');
    const [activeResourceTab, setActiveResourceTab] = useState('Scholarships');
    const [mobileActiveTab, setMobileActiveTab] = useState(null);
    const [mobileActiveResourceTab, setMobileActiveResourceTab] = useState(null);

    const toggleMenu = (menu) => {
        if (activeMenu === menu) {
            setActiveMenu(null);
        } else {
            setActiveMenu(menu);
        }
    };

    const languagesData = [
        'English (US)', 'Bahasa Indonesia', 'Dansk',
        'Español', 'Français', 'Italiano',
        'Magyar', 'Melayu', 'Nederlands',
        'Norsk', 'Polski', 'Português',
        'Português (Brasil)', 'Română', 'Suomi',
        'Svenska', 'Tiếng Việt', 'Türkçe',
        'Ελληνικά', 'Русский', 'Українська',
        'العربية', 'हिन्दी', 'ไทย',
        '中文 (简体)', '日本語', '한국어'
    ];

    const resourcesData = {
        'Scholarships': {
            promo: {
                title: '550+ study abroad scholarships',
                text: 'Browse hundreds of scholarships using our free directory.',
                image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=500&q=60',
                linkText: 'Find scholarships'
            },
            columns: [
                {
                    title: 'educations.com scholarships',
                    items: ['Study a Master\'s in Europe', 'Adult Learners Scholarship', 'Go Global MBA', 'Women\'s Scholarship', 'Graduate Study in the USA', 'Undergraduate in STEM', 'More on educations.com scholarships']
                },
                {
                    title: 'Getting a scholarship',
                    items: ['How to get a scholarship', 'How to apply to educations.com scholarships', 'Scholarship application tips', 'How to write a scholarship cover letter', 'How to study abroad for free', 'Getting an athletic scholarship in the US', 'See all scholarships tips']
                }
            ]
        },
        'Articles and news': {
            promo: { title: 'Latest News', text: 'Stay updated with the latest in education.', image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=500&q=60', linkText: 'Read news' },
            columns: [{ title: 'Popular', items: ['Top Universities', 'Student Visa Guide'] }]
        },
        'Study guides': {
            promo: { title: 'Comprehensive Guides', text: 'Everything you need to know about studying abroad.', image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=500&q=60', linkText: 'View guides' },
            columns: [{ title: 'Destinations', items: ['Study in UK', 'Study in USA'] }]
        },
        'Insights and reports': {
            promo: { title: 'Market Insights', text: 'Data-driven reports on international education.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=60', linkText: 'View reports' },
            columns: [{ title: 'Reports', items: ['Global Trends', 'Student Surveys'] }]
        },
        'Quizzes': {
            promo: { title: 'Fun Quizzes', text: 'Discover your perfect study destination.', image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=500&q=60', linkText: 'Take a quiz' },
            columns: [{ title: 'Popular Quizzes', items: ['Where should I study?', 'What should I study?'] }]
        },
        'Events': {
            promo: { title: 'Upcoming Events', text: 'Join our virtual fairs and webinars.', image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=500&q=60', linkText: 'See events' },
            columns: [{ title: 'Events', items: ['Virtual Fairs', 'Webinars'] }]
        }
    };

    const programsData = {
        'Fields of study': [
            ['Administration Programs', 'Architecture Programs', 'Art Programs', 'Aviation Programs', 'Business Programs', 'Construction Programs', 'Cosmetology Programs', 'Design Programs', 'Economic Programs', 'Education Programs'],
            ['Energy Programs', 'Engineering Programs', 'Environmental Programs', 'Fashion Programs', 'Finance Programs', 'Food and Beverage Programs', 'General Programs', 'Healthcare Programs', 'Humanities Programs', 'Journalism, Media, and Mass Communication Programs'],
            ['Language Programs', 'Language Programs', 'Law Programs', 'Life Sciences Programs', 'Life Skills Programs', 'Management Programs', 'Marketing Programs', 'Natural Sciences Programs', 'Performing Arts Programs', 'Professional Programs', 'Self-Improvement Programs']
        ],
        'Degree types': [
            ['Bachelor Degrees', 'Masters Degrees', 'PhD / Doctorate', 'Diploma / Certificate'],
            ['Associate Degrees', 'Foundation / Prep', 'Summer Short Courses', 'Online Degrees'],
            [' MBA', 'Law Degrees', 'Medical Degrees']
        ],
        'Study destinations': [
            ['USA', 'UK', 'Canada', 'Australia'],
            ['Germany', 'France', 'Netherlands', 'Sweden'],
            ['Spain', 'Italy', 'Switzerland', 'Ireland']
        ]
    };

    return (
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 font-sans">
            <ScrollReveal animation="fade-in slide-in-from-top-4" duration="duration-500" className="w-full">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 bg-white relative z-50">
                    <div className="flex justify-between h-[72px] items-center">
                        {/* Logo Section */}
                        <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer">
                            <img
                                src={logoText}
                                alt="educations.com"
                                className="h-8 w-auto object-contain mt-1"
                            />
                        </div>

                        {/* Desktop Menu */}
                        {!location.pathname.includes('dashboard') && (
                            <div className="hidden md:flex items-center space-x-8 ml-8">
                                <div
                                    className={`relative group cursor-pointer flex items-center gap-2 transition-colors ${activeMenu === 'programs' ? 'text-teal-600' : 'text-gray-700 hover:text-teal-600'}`}
                                    onClick={() => toggleMenu('programs')}
                                >
                                    <Compass className="w-[18px] h-[18px]" strokeWidth={2} />
                                    <span className="font-medium text-[15px]">Programs</span>
                                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeMenu === 'programs' ? 'rotate-180 text-teal-600' : 'text-gray-400 group-hover:text-teal-600'}`} />
                                </div>

                                <div
                                    className={`relative group cursor-pointer flex items-center gap-2 transition-colors ${activeMenu === 'resources' ? 'text-teal-600' : 'text-gray-700 hover:text-teal-600'}`}
                                    onClick={() => toggleMenu('resources')}
                                >
                                    <FileText className="w-[18px] h-[18px]" strokeWidth={2} />
                                    <span className="font-medium text-[15px]">Resources</span>
                                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeMenu === 'resources' ? 'rotate-180 text-teal-600' : 'text-gray-400 group-hover:text-teal-600'}`} />
                                </div>
                            </div>
                        )}

                        {/* Right Side Icons */}
                        <div className="hidden md:flex items-center space-x-8 ml-auto">
                            <button
                                className={`transition-colors ${activeMenu === 'languages' ? 'text-teal-600' : 'text-gray-500 hover:text-teal-600'}`}
                                onClick={() => toggleMenu('languages')}
                            >
                                <Globe className="w-5 h-5" strokeWidth={2} />
                            </button>
                            {JSON.parse(localStorage.getItem('currentUser')) ? (
                                <Link
                                    to={JSON.parse(localStorage.getItem('currentUser')).role === 'admin' ? '/admin-dashboard' :
                                        JSON.parse(localStorage.getItem('currentUser')).role === 'university' ? '/university-dashboard' : '/student-dashboard'}
                                    className="flex items-center text-gray-600 hover:text-teal-600 font-medium text-[15px] transition-colors gap-2"
                                >
                                    <User className="w-5 h-5" strokeWidth={2} />
                                    <span>Dashboard</span>
                                </Link>
                            ) : (
                                <Link to="/login" className="flex items-center text-gray-600 hover:text-teal-600 font-medium text-[15px] transition-colors gap-2">
                                    <ArrowRightToLine className="w-5 h-5" strokeWidth={2} />
                                    Sign in
                                </Link>
                            )}
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-gray-600 hover:text-gray-900 focus:outline-none p-2"
                            >
                                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            {/* Megamenu Overlay */}
            {activeMenu === 'programs' && (
                <div className="hidden md:block absolute top-full left-1/2 -translate-x-1/2 w-[95vw] max-w-[1150px] bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] z-40 p-8 mt-2 animate-in fade-in slide-in-from-top-4 duration-200 border border-gray-100">
                    <div className="w-full">
                        <div className="flex flex-col lg:flex-row gap-12">
                            {/* Main Content Container */}
                            <div className="flex-1">
                                {/* Tabs */}
                                <div className="flex items-center gap-8 border-b border-gray-100 mb-6 overflow-x-auto no-scrollbar">
                                    {Object.keys(programsData).map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(tab)}
                                            className={`pb-3 text-[15px] font-semibold relative transition-colors whitespace-nowrap ${activeTab === tab
                                                ? 'text-[#880e43]'
                                                : 'text-gray-500 hover:text-gray-800'
                                                }`}
                                        >
                                            {tab}
                                            {activeTab === tab && (
                                                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#880e43]"></div>
                                            )}
                                        </button>
                                    ))}
                                </div>

                                {/* Promo Card (Left) + Content Grid (Right) */}
                                <div className="flex flex-col lg:flex-row gap-8">
                                    {/* Promo Card */}
                                    <div className="w-full lg:w-[280px] shrink-0">
                                        <div className="bg-[#e0f2f1] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                                            <div className="h-40 overflow-hidden bg-gray-200 relative">
                                                <img
                                                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=500&q=60"
                                                    alt="Program Explorer"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="p-5 flex-1 flex flex-col items-start">
                                                <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">Program explorer</h3>
                                                <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-1">
                                                    Explore programs by major and degree type!
                                                </p>
                                                <Link
                                                    to="/programs"
                                                    onClick={() => setActiveMenu(null)}
                                                    className="inline-block text-[#880e43] font-semibold text-sm hover:underline underline-offset-4 decoration-2 mt-auto"
                                                >
                                                    Find programs
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Tab Content Grid */}
                                    <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-2">
                                        {programsData[activeTab].map((column, colIndex) => (
                                            <div key={colIndex} className="space-y-3">
                                                {column.map((item, itemIndex) => (
                                                    <a
                                                        key={itemIndex}
                                                        href="#"
                                                        className="block text-[14px] text-gray-600 hover:text-teal-600 hover:bg-gray-50 px-2 py-1 -mx-2 rounded-md transition-colors"
                                                    >
                                                        {item}
                                                    </a>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Resources Megamenu */}
            {activeMenu === 'resources' && (
                <div className="hidden md:block absolute top-full left-1/2 -translate-x-1/2 w-[95vw] max-w-[1150px] bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] z-40 p-8 mt-2 animate-in fade-in slide-in-from-top-4 duration-200 border border-gray-100">
                    <div className="w-full">
                        <div className="flex flex-col lg:flex-row gap-12">

                            {/* Tabs & Content Container */}
                            <div className="flex-1">
                                {/* Tabs */}
                                <div className="flex items-center gap-8 border-b border-gray-100 mb-6 overflow-x-auto no-scrollbar">
                                    {Object.keys(resourcesData).map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveResourceTab(tab)}
                                            className={`pb-3 text-[15px] font-semibold relative transition-colors whitespace-nowrap ${activeResourceTab === tab
                                                ? 'text-[#880e43]'
                                                : 'text-gray-500 hover:text-gray-800'
                                                }`}
                                        >
                                            {tab}
                                            {activeResourceTab === tab && (
                                                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#880e43]"></div>
                                            )}
                                        </button>
                                    ))}
                                </div>

                                {/* Promo Card (Left) + Content Columns (Right) */}
                                <div className="flex flex-col lg:flex-row gap-8">
                                    {/* Promo Card Positioned Left as per image */}
                                    <div className="w-full lg:w-[280px] shrink-0">
                                        <div className="bg-[#e0f2f1] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                                            <div className="h-40 overflow-hidden bg-gray-200 relative">
                                                <img
                                                    src={resourcesData[activeResourceTab].promo.image}
                                                    alt={resourcesData[activeResourceTab].promo.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="p-5 flex-1 flex flex-col items-start">
                                                <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">{resourcesData[activeResourceTab].promo.title}</h3>
                                                <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-1">
                                                    {resourcesData[activeResourceTab].promo.text}
                                                </p>
                                                <a href="#" className="inline-block text-[#880e43] font-semibold text-sm hover:underline underline-offset-4 decoration-2 mt-auto">
                                                    {resourcesData[activeResourceTab].promo.linkText}
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Columns */}
                                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {resourcesData[activeResourceTab].columns.map((col, idx) => (
                                            <div key={idx}>
                                                <h4 className="font-bold text-gray-900 mb-4">{col.title}</h4>
                                                <ul className="space-y-3">
                                                    {col.items.map((item, itemIdx) => (
                                                        <li key={itemIdx}>
                                                            <a href="#" className="flex items-start text-sm text-gray-600 hover:text-teal-600 transition-colors group/item">
                                                                <span className="group-hover/item:underline">{item}</span>
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Language Modal */}
            {activeMenu === 'languages' && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/40 z-[60] backdrop-blur-sm"
                        onClick={() => setActiveMenu(null)}
                    ></div>

                    {/* Modal */}
                    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] max-w-[900px] bg-white rounded-xl shadow-2xl z-[70] p-8 max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold text-gray-900">Select your language</h2>
                            <button
                                onClick={() => setActiveMenu(null)}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <X className="w-5 h-5 text-gray-500" />
                            </button>
                        </div>

                        {/* Suggested Section */}
                        <div className="mb-8">
                            <h3 className="text-sm font-semibold text-gray-900 mb-3">Suggested for you</h3>
                            <button className="flex items-center justify-between px-4 py-3 bg-[#fce4ec] text-[#880e43] rounded-lg border border-[#f8bbd0] w-48 font-medium text-sm">
                                <span>English (US)</span>
                                <Check className="w-4 h-4" />
                            </button>
                        </div>

                        {/* All Languages */}
                        <div className="mb-8">
                            <h3 className="text-sm font-semibold text-gray-900 mb-4">All languages</h3>
                            <div className="grid grid-cols-3 gap-x-8 gap-y-2">
                                {languagesData.map((lang, index) => (
                                    <button
                                        key={index}
                                        className="flex items-center justify-between py-2 text-sm text-gray-600 hover:text-teal-600 group transition-colors text-left"
                                    >
                                        <span>{lang}</span>
                                        <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-teal-600" />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Local Sites */}
                        <div>
                            <h3 className="text-sm font-semibold text-gray-900 mb-3">Local sites</h3>
                            <a href="#" className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-teal-600 transition-colors">
                                <span>Deutsch (Deutschland)</span>
                                <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                        </div>
                    </div>
                </>
            )}

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full left-0 z-30 h-[calc(100vh-72px)] overflow-y-auto">
                    <div className="px-4 pt-2 pb-6 space-y-1">
                        {/* Programs Mobile */}
                        <div>
                            <button
                                onClick={() => toggleMenu('programs')}
                                className={`flex items-center justify-between w-full px-3 py-3 text-base font-medium rounded-lg transition-colors ${activeMenu === 'programs' ? 'bg-teal-50 text-teal-700' : 'text-gray-700 hover:bg-gray-50'}`}
                            >
                                <span className="flex items-center gap-3"><Compass className="w-5 h-5" /> Programs</span>
                                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${activeMenu === 'programs' ? 'rotate-180' : ''}`} />
                            </button>
                            {activeMenu === 'programs' && (
                                <div className="space-y-1 mt-1 mb-2 animate-in fade-in slide-in-from-top-2">
                                    {Object.keys(programsData).map((tab) => (
                                        <div key={tab}>
                                            <button
                                                onClick={() => setMobileActiveTab(mobileActiveTab === tab ? null : tab)}
                                                className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-600 hover:text-teal-600 pl-11"
                                            >
                                                {tab}
                                                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileActiveTab === tab ? 'rotate-180' : ''}`} />
                                            </button>
                                            {mobileActiveTab === tab && (
                                                <div className="bg-gray-50 rounded-lg mx-3 p-3 space-y-3 animate-in fade-in zoom-in-95">
                                                    {programsData[tab].flat().map((item, idx) => (
                                                        <a key={idx} href="#" className="block text-sm text-gray-500 hover:text-teal-600 transition-colors">
                                                            {item}
                                                        </a>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Resources Mobile */}
                        <div>
                            <button
                                onClick={() => toggleMenu('resources')}
                                className={`flex items-center justify-between w-full px-3 py-3 text-base font-medium rounded-lg transition-colors ${activeMenu === 'resources' ? 'bg-teal-50 text-teal-700' : 'text-gray-700 hover:bg-gray-50'}`}
                            >
                                <span className="flex items-center gap-3"><FileText className="w-5 h-5" /> Resources</span>
                                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${activeMenu === 'resources' ? 'rotate-180' : ''}`} />
                            </button>
                            {activeMenu === 'resources' && (
                                <div className="space-y-1 mt-1 mb-2 animate-in fade-in slide-in-from-top-2">
                                    {Object.keys(resourcesData).map((tab) => (
                                        <div key={tab}>
                                            <button
                                                onClick={() => setMobileActiveResourceTab(mobileActiveResourceTab === tab ? null : tab)}
                                                className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-600 hover:text-teal-600 pl-11"
                                            >
                                                {tab}
                                                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileActiveResourceTab === tab ? 'rotate-180' : ''}`} />
                                            </button>
                                            {mobileActiveResourceTab === tab && (
                                                <div className="bg-gray-50 rounded-lg mx-3 p-3 space-y-3 animate-in fade-in zoom-in-95">
                                                    {resourcesData[tab].columns.map(col => col.items).flat().map((item, idx) => (
                                                        <a key={idx} href="#" className="block text-sm text-gray-500 hover:text-teal-600 transition-colors">
                                                            {item}
                                                        </a>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="border-t border-gray-100 my-2"></div>
                        <Link to="/login" className="flex items-center gap-3 px-3 py-3 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-lg">
                            <ArrowRightToLine className="w-5 h-5" /> Sign in
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
