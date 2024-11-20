
const mdTojson = (markdownJson) => {

    const jsonString = markdownJson
        .replace(/```json/g, '')
        .replace(/```/g, '');

    try {

        const jsonData = JSON.parse(jsonString);
        return jsonData;
    } catch (error) {
        console.error("Error parsing JSON:", error);
        return null;
    }
};

export default mdTojson;