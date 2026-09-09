//data fetching in next.js

import axios from "axios";


export default async function User(){

    const res = await axios.get("http://localhost:3000/api/v1/user/details")

    await new Promise(r=>setTimeout(r,5000));
    const data = res.data;

    return <div>
        USER PAGE
        {data.name}
        {data.email}

    </div>
}