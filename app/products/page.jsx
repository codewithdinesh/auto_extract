"use client";
import { useSelector } from "react-redux";

export default function Products() {

    const products = useSelector((state) => state.data.products);

    return (
        <div>
            <h1 className="text-xl font-bold mb-4">Customers</h1>
            <table className="min-w-full bg-white rounded shadow">
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

                    {products?.length > 0 ? (

                        products.map((product, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="border p-2">{product.name}</td>
                                <td className="border p-2">{product.quantity}</td>
                                <td className="border p-2">₹{product.unitPrice.toFixed(2)}</td>
                                <td className="border p-2">₹{product.tax.toFixed(2)}</td>
                                <td className="border p-2">₹{product.priceWithTax.toFixed(2)}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7" className="border px-4 py-2 text-center">
                                No Products available
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
