"use client";
import { useSelector } from "react-redux";

export default function Invoices() {

    const invoices = useSelector((state) => state.data.invoices);

    return (
        <div>
            <h1 className="text-xl font-bold mb-4">Invoices</h1>
            <table className="min-w-full bg-white rounded shadow">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">Serial Number</th>
                        <th className="border px-4 py-2">Customer Name</th>
                        <th className="border px-4 py-2">Product Name</th>
                        <th className="border px-4 py-2">Quantity</th>
                        <th className="border px-4 py-2">Tax</th>
                        <th className="border px-4 py-2">Total Amount</th>
                        <th className="border px-4 py-2">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {invoices?.length > 0 ? (
                        invoices.map((invoice, index) => (
                            <tr key={index}>
                                <td className="border px-4 py-2">{invoice.serialNumber}</td>
                                <td className="border px-4 py-2">{invoice.customerName}</td>
                                <td className="border px-4 py-2">{invoice.productName || "N/A"}</td>
                                <td className="border px-4 py-2">{invoice.quantity}</td>
                                <td className="border px-4 py-2">{invoice.tax}</td>
                                <td className="border px-4 py-2">{invoice.totalAmount}</td>
                                <td className="border px-4 py-2">{invoice.date}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7" className="border px-4 py-2 text-center">
                                No invoices available
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
