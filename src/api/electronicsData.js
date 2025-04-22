import computerData from './computersData';
import tvData from './tvData';

const combinedData = [...tvData, ...computerData];

// Add dynamic IDs
const electronicsData = combinedData.map((item, index) => ({
    ...item, // here each array of object will iterate
    id: index + 1 // it will override old id with new id Assign new sequential ID
}));

export default electronicsData;
