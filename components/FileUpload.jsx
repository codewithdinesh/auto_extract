"use client";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setData } from "@/lib/store/slices/dataSlice";
import DataDisplay from "./dataDisplay";

const FileUpload = () => {
    const dispatch = useDispatch();
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [uploadSuccess, setUploadSuccess] = useState(false);
    const [error, setError] = useState(null);

    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        setFiles(selectedFiles);
        setUploadSuccess(false);
        setError(null);
    };

    const handleFileUpload = async () => {
        if (files.length === 0) return;

        setLoading(true);
        setUploadSuccess(false);
        setError(null);

        const formData = new FormData();
        files.forEach((file) => formData.append("files", file));

        try {
            const response = await axios.post("/api/process", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            console.log("File uploaded successfully:", response.data);

            console.log("Data:", response.data);

            // check error status
            if (response.status !== 200) {
                setError("Error processing the file. Please try again.");
                return;
            }

            const result = response.data?.result;

            // Dispatch the data to Redux store
            dispatch(setData({
                invoices: result.invoices,
                products: result.products,
                customers: result.customers,
            }));

            setUploadSuccess(true);
        } catch (error) {
            console.error("Error processing file:", error);
            setError("Error processing the file. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-lg mx-auto p-4">
            <div className="mb-4">
                <input
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    className="border p-2 w-full rounded-md"
                />
            </div>

            <div>
                <button
                    onClick={handleFileUpload}
                    disabled={loading}  // Disable button while loading
                    className={`bg-blue-500 text-white px-6 py-3 rounded-md w-full ${loading ? "bg-blue-300 cursor-wait" : "hover:bg-blue-600"
                        }`}
                >
                    {loading ? (
                        <span className="flex justify-center items-center">
                            <svg
                                className="animate-spin h-5 w-5 mr-2"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path
                                    fill="currentColor"
                                    d="M4 12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2s-.9-2-2-2H6c-1.1 0-2 .9-2 2z"
                                ></path>
                            </svg>
                            Processing...
                        </span>
                    ) : (
                        "Upload"
                    )}
                </button>
            </div>

            {uploadSuccess && (
                <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md">
                    File uploaded successfully!
                </div>
            )}

            {error && (
                <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
                    {error}
                </div>
            )}

            <DataDisplay />
        </div>
    );
};

export default FileUpload;
