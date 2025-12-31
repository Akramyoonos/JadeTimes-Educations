import React, { useState, useMemo } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProgramsSidebar from '../components/ProgramsDashboard/ProgramsSidebar';
import ProgramCard from '../components/ProgramsDashboard/ProgramCard';
import ProgramsFilterTags from '../components/ProgramsDashboard/ProgramsFilterTags';
import ProgramsPagination from '../components/ProgramsDashboard/ProgramsPagination';
import PopularPrograms from '../components/ProgramsDashboard/PopularPrograms';
import { programs } from '../data/ProgramsData';

const ProgramsDashboard = () => {
    // Filter Options State
    // Calculate dynamic filter options with counts
    const dynamicFilterOptions = useMemo(() => {
        const calculateCounts = (key) => {
            const counts = {};
            programs.forEach(p => {
                const val = p[key];
                if (val) {
                    counts[val] = (counts[val] || 0) + 1;
                }
            });
            return Object.entries(counts).map(([name, count]) => ({ name, count }));
        };

        const calculateDurationCounts = () => {
            const counts = { "< 1 year": 0, "1-2 years": 0, "3-4 years": 0, "4+ years": 0 };
            programs.forEach(p => {
                if (p.durationMonths < 12) counts["< 1 year"]++;
                else if (p.durationMonths >= 12 && p.durationMonths <= 24) counts["1-2 years"]++;
                else if (p.durationMonths > 24 && p.durationMonths <= 48) counts["3-4 years"]++;
                else if (p.durationMonths > 48) counts["4+ years"]++;
            });
            return Object.entries(counts).map(([name, count]) => ({ name, count }));
        };

        return {
            degreeType: {
                expanded: true,
                showAll: false,
                items: calculateCounts('degreeType')
            },
            fieldOfStudy: {
                expanded: true,
                showAll: false,
                items: calculateCounts('field')
            },
            location: {
                expanded: true,
                items: calculateCounts('country')
            },
            duration: {
                expanded: true,
                items: calculateDurationCounts()
            },
            studyPace: {
                expanded: true,
                items: calculateCounts('studyPace')
            },
            language: {
                expanded: true,
                items: calculateCounts('language')
            },
            studyFormat: {
                expanded: true,
                items: calculateCounts('format')
            },
            applicationDeadline: { expanded: true }
        };
    }, []);

    // Filter Options State
    const [filterOptions, setFilterOptions] = useState(dynamicFilterOptions);

    // Selected Filters State
    const [selectedFilters, setSelectedFilters] = useState({
        degreeType: [],
        fieldOfStudy: [],
        location: [],
        duration: [],
        studyPace: [],
        language: [],
        studyFormat: []
    });

    // Toggle Section Expansion
    const toggleSection = (key) => {
        setFilterOptions(prev => ({
            ...prev,
            [key]: { ...prev[key], expanded: !prev[key].expanded }
        }));
    };

    // Toggle Show More/Less
    const toggleShowMore = (key) => {
        setFilterOptions(prev => ({
            ...prev,
            [key]: { ...prev[key], showAll: !prev[key].showAll }
        }));
    };

    // Handle Checkbox Change
    const handleFilterChange = (category, value) => {
        setSelectedFilters(prev => {
            const current = prev[category];
            const updated = current.includes(value)
                ? current.filter(item => item !== value)
                : [...current, value];
            return { ...prev, [category]: updated };
        });
    };

    // Pagination State
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 5;

    // Filter Logic
    const filteredPrograms = useMemo(() => {
        const result = programs.filter(program => {
            // Degree Type
            if (selectedFilters.degreeType.length > 0 && !selectedFilters.degreeType.includes(program.degreeType)) {
                return false;
            }
            // Field of Study (Check main field or tags)
            if (selectedFilters.fieldOfStudy.length > 0) {
                const matchesField = selectedFilters.fieldOfStudy.includes(program.field);
                const matchesTags = program.tags.some(tag => selectedFilters.fieldOfStudy.includes(tag));
                if (!matchesField && !matchesTags) return false;
            }
            // Location (Country)
            if (selectedFilters.location.length > 0 && !selectedFilters.location.includes(program.country)) {
                return false;
            }
            // Duration
            if (selectedFilters.duration.length > 0) {
                const durationMatch = selectedFilters.duration.some(range => {
                    if (range === "< 1 year") return program.durationMonths < 12;
                    if (range === "1-2 years") return program.durationMonths >= 12 && program.durationMonths <= 24;
                    if (range === "3-4 years") return program.durationMonths > 24 && program.durationMonths <= 48;
                    if (range === "4+ years") return program.durationMonths > 48;
                    return false;
                });
                if (!durationMatch) return false;
            }
            // Study Pace
            if (selectedFilters.studyPace.length > 0 && !selectedFilters.studyPace.includes(program.studyPace)) {
                return false;
            }
            // Language
            if (selectedFilters.language.length > 0 && !selectedFilters.language.includes(program.language)) {
                return false;
            }
            // Study Format
            if (selectedFilters.studyFormat.length > 0 && !selectedFilters.studyFormat.includes(program.format)) {
                return false;
            }

            return true;
        });

        // Reset to page 1 when filters change
        return result;
    }, [selectedFilters]);

    // Reset page when filters change
    React.useEffect(() => {
        setCurrentPage(1);
    }, [selectedFilters]);

    // Pagination Logic
    const totalPages = Math.ceil(filteredPrograms.length / ITEMS_PER_PAGE);
    const displayedPrograms = filteredPrograms.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const clearFilters = () => {
        setSelectedFilters({
            degreeType: [],
            fieldOfStudy: [],
            location: [],
            duration: [],
            studyPace: [],
            language: [],
            studyFormat: []
        });
    };

    return (
        <div className="min-h-screen bg-[#F8F9FA] font-sans text-gray-700 flex flex-col">
            <Navbar />

            <div className="flex-grow">
                {/* Breadcrumb & Header */}
                <div className="bg-white border-b border-gray-200">
                    <div className="container mx-auto px-4 py-4">
                        <div className="text-xs text-gray-500 mb-2">
                            <span className="hover:text-teal-600 cursor-pointer">Home</span> &gt; <span className="text-gray-800 font-semibold">Programs</span>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">

                    <ProgramsSidebar
                        filterOptions={filterOptions}
                        selectedFilters={selectedFilters}
                        toggleSection={toggleSection}
                        toggleShowMore={toggleShowMore}
                        handleFilterChange={handleFilterChange}
                        clearFilters={clearFilters}
                    />

                    {/* Main Content */}
                    <main className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                            <h1 className="text-2xl font-bold text-gray-900">{filteredPrograms.length} Degree Programs</h1>
                            <div className="flex items-center gap-2 mt-4 md:mt-0 text-sm">
                                <span className="text-gray-600">Sort by:</span>
                                <select className="border border-gray-300 rounded px-2 py-1 bg-white focus:outline-none focus:ring-1 focus:ring-teal-500">
                                    <option>Best Match</option>
                                    <option>Popularity</option>
                                    <option>Duration</option>
                                </select>
                            </div>
                        </div>

                        {/* Filter Tags Row */}
                        <ProgramsFilterTags />

                        {/* Program List */}
                        {displayedPrograms.length > 0 ? (
                            <div className="space-y-6">
                                {displayedPrograms.map((program) => (
                                    <ProgramCard key={program.id} program={program} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">No programs found</h3>
                                <p className="text-gray-600">Try adjusting your filters to find more results.</p>
                                <button onClick={clearFilters} className="mt-4 text-teal-600 font-semibold hover:underline">Clear all filters</button>
                            </div>
                        )}

                        {/* Pagination */}
                        <ProgramsPagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={setCurrentPage}
                        />

                        {/* Popular Programs Lists */}
                        <PopularPrograms />

                    </main>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ProgramsDashboard;
