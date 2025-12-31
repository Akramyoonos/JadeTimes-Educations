import React from 'react';

const PopularPrograms = () => {
    // Data from the image
    const degreeTypes = [
        "Masters degrees", "Bachelor degrees", "Preparatory",
        "Doctoral Degrees", "Postgraduate", "Post Bachelors",
        "Masters in Business Administration", "Bachelors of Science", "Bachelors of Business Administration",
        "Masters of Science", "Bachelors of Arts", "Courses",
        "Business Studies", "Diplomas", "Certificates",
        "Doctors of Philosophy", "Doctors of Business Administration", "Masters of Arts",
        "Associates of Applied Science", "Graduate Certificates", "Associate Degrees",
        "Postgraduate Diplomas", "Advanced Diplomas", "Graduate Diplomas",
        "Postgraduate Certificates", "Master of Laws", "Doctor of Education",
        "Associates of Arts", "Juris Doctors", "Global MBA",
        "Summer Courses", "Foundation Year Programs", "1-year MBA",
        "Advanced Certificates", "Bachelors of Laws", "Undergraduate Certificates",
        "Associates of Science", "M.Ed. (Master of Education)", "Medical Studies",
        "Preparatory Program", "Graduate Pathways", "Masters of Legal Studies",
        "Pathway Program", "1-year EMBA", "A-levels",
        "Executive courses", "Master of Public Administration", "Doctors of Juridical Science"
    ];

    const studyFormats = [
        "On-Campus", "Distance Learning", "Blended"
    ];

    const locations = [
        "USA", "United Kingdom", "Australia",
        "Canada", "Spain", "Switzerland",
        "Germany", "United Arab Emirates", "France",
        "Italy", "South Africa", "Netherlands",
        "China", "Malaysia", "Belgium",
        "Brazil", "Japan", "Mexico",
        "Singapore", "Thailand", "Malta",
        "Colombia", "Denmark", "Portugal",
        "Finland", "Romania", "Czech Republic",
        "Hong Kong", "Poland", "Argentina",
        "Greece", "Ireland", "Lebanon",
        "Turkey", "Panama", "Cyprus",
        "Zambia", "India", "Hungary",
        "Saudi Arabia", "Austria", "Taiwan",
        "New Zealand", "Georgia", "Nigeria",
        "Norway", "South Korea", "Philippines",
        "Puerto Rico", "Costa Rica", "Luxembourg",
        "Latvia", "Sweden", "Bahrain",
        "Indonesia", "Morocco", "Egypt",
        "Israel", "Tunisia", "Oman",
        "Chile", "Kazakhstan", "Malawi",
        "Vietnam", "Algeria", "Ghana",
        "Guatemala", "Mauritius", "Peru",
        "Qatar", "Kenya", "Kuwait",
        "Lithuania", "Azerbaijan", "Jordan",
        "Namibia", "Rwanda", "Serbia",
        "Tanzania", "Albania", "Bosnia and Herzegovina",
        "Bulgaria", "French Guiana", "French Polynesia",
        "Guadeloupe (Fr.)", "Isle of Man", "Jamaica",
        "Martinique (Fr.)", "Reunion (Fr.)", "Slovenia",
        "Ukraine", "Andorra", "Estonia",
        "Eswatini", "Guyana", "Madagascar",
        "Zimbabwe", "Belize", "Benin",
        "Dominica"
    ];

    return (
        <div className="bg-[#F8F9FA] font-sans pb-8 mt-12">
            <div className="space-y-12">

                {/* Popular Degree Types */}
                <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Popular Administration Programs degree types</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
                        {degreeTypes.map((item, index) => (
                            <a key={index} href="#" className="text-sm text-gray-600 hover:text-teal-600 hover:underline">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Popular Study Format */}
                <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Popular study format</h3>
                    <div className="flex flex-col gap-2">
                        {studyFormats.map((item, index) => (
                            <a key={index} href="#" className="text-sm text-gray-600 hover:text-teal-600 hover:underline">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Popular Locations */}
                <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Popular locations</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
                        {locations.map((item, index) => (
                            <a key={index} href="#" className="text-sm text-gray-600 hover:text-teal-600 hover:underline">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Learn More Card */}
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Learn more about Administration degree programs</h3>
                    <div className="text-sm text-gray-600 space-y-4 leading-relaxed">
                        <p>
                            Studying administration degree programs equips you with a strong foundation in managing organizations and leading teams effectively. This field offers a blend of practical skills and theoretical knowledge, allowing you to understand various aspects of business operations and administration.
                        </p>
                        <p>
                            Through courses in organizational behavior, project management, and strategic planning, you'll develop crucial competencies such as decision-making, leadership, and resource allocation. Engaging in case studies and real-world projects helps refine your ability to analyze complex situations and implement effective solutions, Students build confidence as they navigate diverse perspectives and explore innovative strategies within their studies.
                        </p>
                        <p>
                            Graduates with administration degrees often pursue careers in management, human resources, and operations, where they play vital roles in guiding organizations toward their goals. With a focus on fostering critical thinking and adaptability, this discipline prepares you for a wide range of professional opportunities across various industries.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PopularPrograms;
