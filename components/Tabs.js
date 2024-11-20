"use client"
import React from 'react';
import TabItem from './TabItem';
import InvoiceIcon from '@/lib/icons/InvoiceIocon';
import ProductIcon from '@/lib/icons/ProductIcon';
import UsersIcon from '@/lib/icons/UsersIcon';


const Tabs = () => {
    const tabs = [
        { title: 'Invoices', icon: <InvoiceIcon /> },
        { title: 'Products', icon: <ProductIcon /> },
        { title: 'Customers', icon: <UsersIcon /> },
    ];

    return (
        <div className=" flex  w-full justify-items-center justify-center">
            {tabs.map((tab, index) => (
                <TabItem key={index} title={tab.title} icon={tab.icon} />
            ))}
        </div>
    );
};

export default Tabs;