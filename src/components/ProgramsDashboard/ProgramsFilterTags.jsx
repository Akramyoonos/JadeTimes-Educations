import React from 'react';

const ProgramsFilterTags = () => {
    return (
        <div className="flex flex-wrap gap-2 mb-8">
            {/* Static tags for now, or could map selectedFilters */}
            <button className="px-4 py-1.5 bg-white border border-gray-200 rounded-full text-sm hover:bg-gray-50 transition-colors">Bachelor</button>
            <button className="px-4 py-1.5 bg-white border border-gray-200 rounded-full text-sm hover:bg-gray-50 transition-colors">Master</button>
            <button className="px-4 py-1.5 bg-white border border-gray-200 rounded-full text-sm hover:bg-gray-50 transition-colors">PhD</button>
            <button className="px-4 py-1.5 bg-white border border-gray-200 rounded-full text-sm hover:bg-gray-50 transition-colors">Scholarship</button>
            <button className="px-4 py-1.5 bg-white border border-gray-200 rounded-full text-sm hover:bg-gray-50 transition-colors">Online</button>
            <button className="px-4 py-1.5 bg-white border border-gray-200 rounded-full text-sm hover:bg-gray-50 transition-colors">USA</button>
        </div>
    );
};

export default ProgramsFilterTags;
