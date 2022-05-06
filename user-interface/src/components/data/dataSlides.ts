import { v4 as uuidv4 } from 'uuid';

export const dataSlider = [
    {
        id: uuidv4(),
        title: "Photo Pertama"
    },
    {
        id: uuidv4(),
        title: "Photo Kedua"
    },
    {
        id: uuidv4(),
        title: "Photo Ketiga"
    },
]

var data = [];
data.push(dataSlider)

console.log(data);
export default dataSlider;