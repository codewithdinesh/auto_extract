import React from 'react';
import Link from 'next/link';

const TabItem = ({ icon, title }) => {

    const link = `/${title.toLowerCase()}`;

    console.log(link);

    return (
        <Link href={link} >
            <div className="flex items-center justify-between p-4 outline-1 flex-1 px-9hover:bg-gray-200 bg-slate-50 rounded shadow  cursor-pointer">
                {/* Icon */}
                <div className="flex items-center">
                    <span className="w-6 h-6 text-black">{icon}</span>
                </div>

                {/* Title */}
                <div className="text-gray-800 font-medium text-sm mx-4">
                    {title}
                </div>
            </div>
        </Link>
    );
};

export default TabItem;
