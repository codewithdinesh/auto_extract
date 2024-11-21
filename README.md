#  AutoExtract : Automated Data Extraction and Invoice Management

This project is a **React application** that automates the extraction, processing, and management of invoice data from various file formats. The app organizes the extracted data into three main sections: **Invoices**, **Products**, and **Customers**. Real-time updates are achieved using **Redux**, ensuring consistent synchronization across all tabs.

## Features

### File Uploads
- Supports multiple file types:
  - **CSV Files**
  - **Excel Files**
  - **PDFs/Images**

### AI-Powered Data Extraction
Utilizes AI for extracting and structuring data into three tabs:
1. **Invoices**
   - Fields: Serial Number, Customer Name, Product Name, Quantity, Tax, Total Amount, Date.
2. **Products**
   - Fields: Product Name, Quantity, Unit Price, Tax, Price with Tax .
3. **Customers**
   - Fields: Customer Name, Phone Number, Total Purchase Amount.

## Project Structure

### Invoices Tab
Displays a table with columns:
- Serial Number
- Customer Name
- Product Name
- Quantity
- Tax
- Total Amount
- Date

### Products Tab
Displays a table with columns:
- Product Name
- Quantity
- Unit Price
- Tax
- Price with Tax
- Discount (optional)

### Customers Tab
Displays a table with columns:
- Customer Name
- Phone Number
- Total Purchase Amount

---

## AI Test Cases
This Application passes all the test case given.
- Invoice PDFs
- Invoice PDFs + Images
- Excel Files
- Excel Files (Multiple)
- Mixed File Types (PDF, Image, Excel)

---

## Tech Stack
- **Frontend**:  React, NextJs, Redux, and Tailwind CSS
- **AI Integration**: Google Gemini API
- **Backend**:Nextjs Server (Node based")
- **Deployment**: Vercel

---

## Live Preview
**Website**: [https://autoextract.vercel.app/](https://autoextract.vercel.app/)
