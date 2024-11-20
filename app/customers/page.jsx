"use client";
import { useSelector } from "react-redux";

export default function Customers() {

    const customers = useSelector((state) => state.data.customers);

    return (
        <div>
            <h1 className="text-xl font-bold mb-4">Customers</h1>
            <table className="min-w-full bg-white rounded shadow">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border p-2">Name</th>
                        <th className="border p-2">Phone Number</th>
                        <th className="border p-2">Total Purchase Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {customers?.length > 0 ? (
                        customers.map((customer, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="border p-2">{customer.name}</td>
                                <td className="border p-2">{customer.phoneNumber}</td>
                                <td className="border p-2">₹{customer.totalPurchaseAmount.toFixed(2)}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7" className="border px-4 py-2 text-center">
                                No Customers available
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
