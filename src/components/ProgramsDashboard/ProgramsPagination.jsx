import React from 'react';
import { ChevronDown } from 'lucide-react';

const ProgramsPagination = ({ currentPage, totalPages, onPageChange }) => {
    if (totalPages <= 1) return null;

    const pages = [];
    // Always show first page
    pages.push(1);

    // Calculate range
    let start = Math.max(2, currentPage - 1);
    let end = Math.min(totalPages - 1, currentPage + 1);

    if (start > 2) {
        pages.push('...');
    }

    for (let i = start; i <= end; i++) {
        pages.push(i);
    }

    if (end < totalPages - 1) {
        pages.push('...');
    }

    // Always show last page if more than 1 page
    if (totalPages > 1) {
        pages.push(totalPages);
    }

    return (
        <div className="flex justify-center items-center mt-12 gap-2">
            {/* Previous Button */}
            <button
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
                className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 hover:bg-gray-50 text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <ChevronDown className="w-4 h-4 rotate-90" />
            </button>

            {pages.map((page, index) => (
                <React.Fragment key={index}>
                    {page === '...' ? (
                        <span className="text-gray-400 px-2">...</span>
                    ) : (
                        <button
                            onClick={() => onPageChange(page)}
                            className={`w-8 h-8 flex items-center justify-center rounded border ${currentPage === page
                                ? 'border-gray-300 bg-black text-white font-bold'
                                : 'border-gray-300 hover:bg-gray-50 text-gray-600'
                                }`}
                        >
                            {page}
                        </button>
                    )}
                </React.Fragment>
            ))}

            {/* Next Button */}
            <button
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
                className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 hover:bg-gray-50 text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <ChevronDown className="w-4 h-4 -rotate-90" />
            </button>
        </div>
    );
};

export default ProgramsPagination;
