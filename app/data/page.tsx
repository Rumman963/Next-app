//data fetching in next.js

import axios from "axios";


export default async function User(){

    const res = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")

    await new Promise(r=>setTimeout(r,5000));
    const data = res.data;

    return <div>
        USER PAGE
        {data.name}
        {data.email}

    </div>
}