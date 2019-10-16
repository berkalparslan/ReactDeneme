import axios from 'axios';

const url = "https://www.jsonbulut.com/json/";
const ref = "5380f5dbcc3b1021f93ab24c3a1aac24";

export async function getProduct( data ) {
    data["ref"] = ref;
    const uri = url + "product.php";
    console.log(JSON.stringify(data))
    console.log(uri)
    return await axios.get(uri, { params: data })
}