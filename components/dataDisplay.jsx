"use client";
import { useSelector } from 'react-redux';

const DataDisplay = () => {
    const { invoices, products, customers } = useSelector((state) => state.data);

    if (invoices.length === 0) {
        return <div className="mt-4 text-gray-500">No data available</div>;
    }

    return (
        <div className="mt-6 space-y-4">
            <section>
                <h2 className="text-xl font-bold mb-2">Invoices</h2>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border p-2">Serial Number</th>
                                <th className="border p-2">Customer Name</th>
                                <th className="border p-2">Total Amount</th>
                                <th className="border p-2">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {invoices.map((invoice, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="border p-2">{invoice.serialNumber}</td>
                                    <td className="border p-2">{invoice.customerName}</td>
                                    <td className="border p-2">₹{invoice.totalAmount.toFixed(2)}</td>
                                    <td className="border p-2">{invoice.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            <section>
                <h2 className="text-xl font-bold mb-2">Products</h2>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border p-2">Name</th>
                                <th className="border p-2">Quantity</th>
                                <th className="border p-2">Unit Price</th>
                                <th className="border p-2">Tax</th>
                                <th className="border p-2">Price with Tax</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="border p-2">{product.name}</td>
                                    <td className="border p-2">{product.quantity}</td>
                                    <td className="border p-2">₹{product.unitPrice.toFixed(2)}</td>
                                    <td className="border p-2">₹{product.tax.toFixed(2)}</td>
                                    <td className="border p-2">₹{product.priceWithTax.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            <section>
                <h2 className="text-xl font-bold mb-2">Customers</h2>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border p-2">Name</th>
                                <th className="border p-2">Phone Number</th>
                                <th className="border p-2">Total Purchase Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers.map((customer, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="border p-2">{customer.name}</td>
                                    <td className="border p-2">{customer.phoneNumber}</td>
                                    <td className="border p-2">₹{customer.totalPurchaseAmount.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default DataDisplay;