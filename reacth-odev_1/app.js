import axios from "axios";

async function getUser(number){
    const {data}=await axios(`https://jsonplaceholder.typicode.com/users/${number}`)
    const {data:post}=await axios("https://jsonplaceholder.typicode.com/users/" + number)

    try{
        console.log(data,post)
    }catch(e){
        console.log(e);
        console.log("hata");
    }

}
export default getUser;