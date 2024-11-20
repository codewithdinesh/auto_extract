import Link from "next/link";

const Tabs = () => (
    <nav className="flex space-x-4 bg-white shadow p-4 rounded">
        <Link href="/invoices" className="text-blue-500 hover:underline">
            Invoices
        </Link>
        <Link href="/products" className="text-blue-500 hover:underline">
            Products
        </Link>
        <Link href="/customers" className="text-blue-500 hover:underline">
            Customers
        </Link>
    </nav>
);

export default Tabs;
