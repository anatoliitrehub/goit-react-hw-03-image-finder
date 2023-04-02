
import axios from "axios";
const BASE_URL = "https://pixabay.com/api/";
const persKey = "34290470-a2b94d46dcf87b0f2ce65c820";


async function FormApi(query,page,per_page) {
return await axios.get(`${BASE_URL}?q=${query}&page=${page}&key=${persKey}&image_type=photo&orientation=horizontal&per_page=${per_page}`).then(data=>{
    console.log(data)
    return data})




}

export default FormApi;