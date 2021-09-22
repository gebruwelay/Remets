import React, { useState } from 'react'
import Admin from '../Admin/Admin';
import Seller from '../Seller/Seller';

import './Sellers.css';



function Sellers() {
    // const headers = { "Access-Control-Allow-Origin": "*" };

    // const [sell, setsell] = useState([]);
    // useEffect(() => {
    //     //axios.get(API_URL,{headers})       
    //     axios.get('http://localhost:8080/posts', { headers })
    //         .then(response => {
    //             setsell([...response.data])
    //         }).catch(err => console.log("Error::" + err));
    // }, []);
    // const [selectedId, setSelectedId] = useState([]);

    const sellerList = [
        {
            id: "111",
            name: "Meti",
            phone: "+12335474659182"
        },
        {
            id: "112",
            name: "Tedros",
            phone: "+120976755482"
        },
        {
            id: "113",
            name: "Pascal",
            phone: "+8977645474659182"
        }
    ];
    // const postSelectedHandler = (id) => {
    //     setSelectedId(id);
    // }

    // <section>
    //             <FullPost
    //                 id={selectedId}
    //                 title={{ ...sell[selectedId - 1] }.title}
    //                 content={{ ...sell[selectedId - 1] }.content}
    //             />
    //         </section>
    const processedSellerList = sellerList.map((sell) => <Seller id={sell.id} name={sell.name} phone={sell.phone}></Seller>);

    return (
        <div>
            <section className="Sellers">
                {processedSellerList}
            </section>
        </div>

    )
}

export default Sellers;
