import React from 'react';

// Importing images
import bostonUni from '../assets/Images/boston_university_qoxffs.png';
import educations from '../assets/Images/Educations-40_cvcack.png';
import harvardBusiness from '../assets/Images/harvard_business_school_nlld20.png';
import hecParis from '../assets/Images/hec_paris_f7r1en.png';
import johnsHopkins from '../assets/Images/john_hopkins_huca3j.png';
import kingsCollege from '../assets/Images/kings_college_london_oupuea.png';
import nus from '../assets/Images/n_u_singapore_odfhwz.png';
import pekingUni from '../assets/Images/peking_university_i8otiq.png';
import stanford from '../assets/Images/stanford_gj8btj.png';
import tum from '../assets/Images/tech_uni_of_munich_fmuyy4.png';
import uBarcelona from '../assets/Images/u_o_barcelona_bmyicu.png';
import uBirmingham from '../assets/Images/u_o_birmingham_jcauxb.png';
import uBristol from '../assets/Images/u_o_bristol_pwoqhl.png';
import uManchester from '../assets/Images/u_o_manchester_jgnemp.png';
import uOxford from '../assets/Images/u_o_oxford_ku4ude.png';
import uAlicante from '../assets/Images/universiata_d_Alacant_zuma89.png';
import uCarlosMadrid from '../assets/Images/universidad_carlos_de_madrid_xcpf2d.png';
import uMurcia from '../assets/Images/universidad_de_murcia_mhagoz.png';
import uValladolid from '../assets/Images/universidad_de_Valladolid_ikyu4d.png';
import uSydney from '../assets/Images/university_of_sydney_vuktjo.png';
import usc from '../assets/Images/usc_notm3b.png';

const TrustedBy = () => {
    const universities = [
        { name: 'Boston University', logo: bostonUni },
        { name: 'Educations.com', logo: educations },
        { name: 'Harvard Business School', logo: harvardBusiness },
        { name: 'HEC Paris', logo: hecParis },
        { name: 'Johns Hopkins', logo: johnsHopkins },
        { name: 'Kings College London', logo: kingsCollege },
        { name: 'NUS', logo: nus },
        { name: 'Peking University', logo: pekingUni },
        { name: 'Stanford', logo: stanford },
        { name: 'TUM', logo: tum },
        { name: 'University of Barcelona', logo: uBarcelona },
        { name: 'University of Birmingham', logo: uBirmingham },
        { name: 'University of Bristol', logo: uBristol },
        { name: 'University of Manchester', logo: uManchester },
        { name: 'University of Oxford', logo: uOxford },
        { name: 'Universitat d\'Alacant', logo: uAlicante },
        { name: 'Universidad Carlos III de Madrid', logo: uCarlosMadrid },
        { name: 'Universidad de Murcia', logo: uMurcia },
        { name: 'Universidad de Valladolid', logo: uValladolid },
        { name: 'University of Sydney', logo: uSydney },
        { name: 'USC', logo: usc },
    ];

    return (
        <div className="bg-white py-5 border-b border-gray-100 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                <p className="text-center text-gray-600 text-[13px] font-semibold uppercase tracking-wider">
                    Trusted by 13,000+ universities worldwide
                </p>
            </div>

            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                <div className="flex items-center gap-16 md:gap-24 animate-marquee py-4 whitespace-nowrap">
                    {/* First Loop */}
                    {universities.map((uni, index) => (
                        <div key={`${uni.name}-${index}`} className="flex-shrink-0 flex items-center justify-center h-12 w-auto min-w-[100px]">
                            <img
                                src={uni.logo}
                                alt={uni.name}
                                className="h-full w-auto  opacity-100  hover:grayscale-0 hover:opacity-100 transition-all duration-300 max-h-10 md:max-h-12"
                            />
                        </div>
                    ))}
                    {/* Second Loop for seamless infinite scroll */}
                    {universities.map((uni, index) => (
                        <div key={`${uni.name}-duplicate-${index}`} className="flex-shrink-0 flex items-center justify-center h-12 w-auto min-w-[100px]">
                            <img
                                src={uni.logo}
                                alt={uni.name}
                                className="h-full w-auto object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 max-h-10 md:max-h-12"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrustedBy;
