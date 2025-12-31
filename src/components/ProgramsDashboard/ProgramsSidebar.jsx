import React from 'react';
import { ChevronDown } from 'lucide-react';

const ProgramsSidebar = ({
    filterOptions,
    selectedFilters,
    toggleSection,
    toggleShowMore,
    handleFilterChange,
    clearFilters
}) => {
    return (
        <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="flex items-center justify-between mb-6">
                <h2 className="font-bold text-gray-900 text-lg">Filters</h2>
                <button onClick={clearFilters} className="text-sm text-gray-500 hover:text-teal-600">Clear</button>
            </div>

            {/* Degree Type */}
            <div className="border-t border-gray-200 py-4">
                <button
                    onClick={() => toggleSection('degreeType')}
                    className="flex items-center justify-between w-full font-bold text-gray-800 mb-3"
                >
                    <span>Degree type</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${filterOptions.degreeType.expanded ? 'rotate-180' : ''}`} />
                </button>
                {filterOptions.degreeType.expanded && (
                    <div className="space-y-2">
                        {filterOptions.degreeType.items
                            .slice(0, filterOptions.degreeType.showAll ? undefined : 5)
                            .map((item, idx) => (
                                <label key={idx} className="flex items-center justify-between text-sm group cursor-pointer">
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            className="rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                                            checked={selectedFilters.degreeType.includes(item.name)}
                                            onChange={() => handleFilterChange('degreeType', item.name)}
                                        />
                                        <span className="group-hover:text-teal-600">{item.name}</span>
                                    </div>
                                    <span className="text-gray-400 text-xs">{item.count}</span>
                                </label>
                            ))}
                        {filterOptions.degreeType.items.length > 5 && (
                            <button
                                onClick={() => toggleShowMore('degreeType')}
                                className="text-pink-600 text-sm font-medium mt-2 hover:underline focus:outline-none"
                            >
                                {filterOptions.degreeType.showAll ? "Show less -" : "Show more +"}
                            </button>
                        )}
                    </div>
                )}
            </div>

            {/* Field of Study */}
            <div className="border-t border-gray-200 py-4">
                <button
                    onClick={() => toggleSection('fieldOfStudy')}
                    className="flex items-center justify-between w-full font-bold text-gray-800 mb-3"
                >
                    <span>Field of study</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${filterOptions.fieldOfStudy.expanded ? 'rotate-180' : ''}`} />
                </button>
                {filterOptions.fieldOfStudy.expanded && (
                    <div className="space-y-2">
                        {filterOptions.fieldOfStudy.items
                            .slice(0, filterOptions.fieldOfStudy.showAll ? undefined : 5)
                            .map((item, idx) => (
                                <label key={idx} className="flex items-center justify-between text-sm group cursor-pointer">
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            className="rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                                            checked={selectedFilters.fieldOfStudy.includes(item.name)}
                                            onChange={() => handleFilterChange('fieldOfStudy', item.name)}
                                        />
                                        <span className="group-hover:text-teal-600">{item.name}</span>
                                    </div>
                                    <span className="text-gray-400 text-xs">{item.count}</span>
                                </label>
                            ))}
                        {filterOptions.fieldOfStudy.items.length > 5 && (
                            <button
                                onClick={() => toggleShowMore('fieldOfStudy')}
                                className="text-pink-600 text-sm font-medium mt-2 hover:underline focus:outline-none"
                            >
                                {filterOptions.fieldOfStudy.showAll ? "Show less -" : "Show more +"}
                            </button>
                        )}
                    </div>
                )}
            </div>

            {/* Location */}
            <div className="border-t border-gray-200 py-4">
                <button
                    onClick={() => toggleSection('location')}
                    className="flex items-center justify-between w-full font-bold text-gray-800 mb-3"
                >
                    <span>Location</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${filterOptions.location.expanded ? 'rotate-180' : ''}`} />
                </button>
                {filterOptions.location.expanded && (
                    <div className="space-y-2">
                        {filterOptions.location.items.map((item, idx) => (
                            <label key={idx} className="flex items-center justify-between text-sm group cursor-pointer">
                                <div className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        className="rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                                        checked={selectedFilters.location.includes(item.name)}
                                        onChange={() => handleFilterChange('location', item.name)}
                                    />
                                    <span className="group-hover:text-teal-600">{item.name}</span>
                                </div>
                                <span className="text-gray-400 text-xs">{item.count}</span>
                            </label>
                        ))}
                    </div>
                )}
            </div>

            {/* Duration */}
            <div className="border-t border-gray-200 py-4">
                <button
                    onClick={() => toggleSection('duration')}
                    className="flex items-center justify-between w-full font-bold text-gray-800 mb-3"
                >
                    <span>Duration</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${filterOptions.duration.expanded ? 'rotate-180' : ''}`} />
                </button>
                {filterOptions.duration.expanded && (
                    <div className="space-y-2 text-sm text-gray-600">
                        {filterOptions.duration.items.map((item, idx) => (
                            <label key={idx} className="flex items-center justify-between cursor-pointer group">
                                <div className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        className="rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                                        checked={selectedFilters.duration.includes(item.name)}
                                        onChange={() => handleFilterChange('duration', item.name)}
                                    />
                                    <span className="group-hover:text-teal-600">{item.name}</span>
                                </div>
                                <span className="text-gray-400 text-xs">{item.count}</span>
                            </label>
                        ))}
                    </div>
                )}
            </div>

            {/* Study Pace */}
            <div className="border-t border-gray-200 py-4">
                <button
                    onClick={() => toggleSection('studyPace')}
                    className="flex items-center justify-between w-full font-bold text-gray-800 mb-3"
                >
                    <span>Study pace</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${filterOptions.studyPace.expanded ? 'rotate-180' : ''}`} />
                </button>
                {filterOptions.studyPace.expanded && (
                    <div className="space-y-2 text-sm text-gray-600">
                        {filterOptions.studyPace.items.map((item, idx) => (
                            <label key={idx} className="flex items-center justify-between cursor-pointer group">
                                <div className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        className="rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                                        checked={selectedFilters.studyPace.includes(item.name)}
                                        onChange={() => handleFilterChange('studyPace', item.name)}
                                    />
                                    <span className="group-hover:text-teal-600">{item.name}</span>
                                </div>
                                <span className="text-gray-400 text-xs">{item.count}</span>
                            </label>
                        ))}
                    </div>
                )}
            </div>

            {/* Language */}
            <div className="border-t border-gray-200 py-4">
                <button
                    onClick={() => toggleSection('language')}
                    className="flex items-center justify-between w-full font-bold text-gray-800 mb-3"
                >
                    <span>Language</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${filterOptions.language.expanded ? 'rotate-180' : ''}`} />
                </button>
                {filterOptions.language.expanded && (
                    <div className="space-y-2 text-sm text-gray-600">
                        {filterOptions.language.items.map((item, idx) => (
                            <label key={idx} className="flex items-center justify-between cursor-pointer group">
                                <div className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        className="rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                                        checked={selectedFilters.language.includes(item.name)}
                                        onChange={() => handleFilterChange('language', item.name)}
                                    />
                                    <span className="group-hover:text-teal-600">{item.name}</span>
                                </div>
                                <span className="text-gray-400 text-xs">{item.count}</span>
                            </label>
                        ))}
                    </div>
                )}
            </div>

            {/* Study Format */}
            <div className="border-t border-gray-200 py-4">
                <button
                    onClick={() => toggleSection('studyFormat')}
                    className="flex items-center justify-between w-full font-bold text-gray-800 mb-3"
                >
                    <span>Study format</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${filterOptions.studyFormat.expanded ? 'rotate-180' : ''}`} />
                </button>
                {filterOptions.studyFormat.expanded && (
                    <div className="space-y-2 text-sm text-gray-600">
                        {filterOptions.studyFormat.items.map((item, idx) => (
                            <label key={idx} className="flex items-center justify-between cursor-pointer group">
                                <div className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        className="rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                                        checked={selectedFilters.studyFormat.includes(item.name)}
                                        onChange={() => handleFilterChange('studyFormat', item.name)}
                                    />
                                    <span className="group-hover:text-teal-600">{item.name}</span>
                                </div>
                                <span className="text-gray-400 text-xs">{item.count}</span>
                            </label>
                        ))}
                    </div>
                )}
            </div>

            {/* Application Deadline */}
            <div className="border-t border-gray-200 py-4">
                <button
                    onClick={() => toggleSection('applicationDeadline')}
                    className="flex items-center justify-between w-full font-bold text-gray-800 mb-3"
                >
                    <span>Application deadline</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${filterOptions.applicationDeadline.expanded ? 'rotate-180' : ''}`} />
                </button>
                {filterOptions.applicationDeadline.expanded && (
                    <div className="text-sm text-gray-600">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-4 h-4 rounded-full border border-gray-300"></div>
                            <span>Anytime</span>
                        </div>
                        <div className="relative">
                            <input type="date" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500" />
                        </div>
                    </div>
                )}
            </div>
        </aside>
    );
};

export default ProgramsSidebar;
