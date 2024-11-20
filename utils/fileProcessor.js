import fs from 'fs/promises';
import { convertExcelToCsv } from './convertExcel.js';

// Allowed MIME types
const allowedMimeTypes = [
    'application/pdf',
    'text/csv',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'image/png',
    'image/jpeg',
];

export const processFile = async (fileBuffer, mimeType) => {
    try {
        // Validate MIME type
        if (!allowedMimeTypes.includes(mimeType)) {
            console.log('Unsupported file type:', mimeType);
            return;
            // throw new Error(`Unsupported file type: ${mimeType}. Allowed types are ${allowedMimeTypes.join(', ')}`);
        }

        let fileData;

        // Process the file based on its MIME type
        if (mimeType === 'application/vnd.ms-excel' || mimeType === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
            const csvData = convertExcelToCsv(fileBuffer);
            fileData = Buffer.from(csvData, 'utf-8').toString('base64');
            mimeType = 'text/csv';
        } else {
            // const fileBuffer = await fs.readFile(filePath);
            fileData = fileBuffer.toString('base64');
        }

        return {
            // inlineData: {
            mimeType,
            data: fileData,
            // },
        };
    } catch (error) {
        console.error('Error processing file:', error);
        throw error;
    }
};
