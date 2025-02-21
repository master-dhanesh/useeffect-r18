import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
    const [products, setproducts] = useState([]);

    const getdata = async () => {
        const { data } = await axios.get("https://fakestoreapi.com/products");
        setproducts(data);
    };

    useEffect(() => {
        // whatever we write here, react will call automatically when the component loads on the browser
        getdata();
    }, []);

    return (
        <div>
            <h1 className="text-center my-5 text-5xl text-red-400">
                Get Products
            </h1>

            <hr />
            <ul>
                {products.length > 0 ? (
                    products.map((p) => <li key={p.id}>{p.title}</li>)
                ) : (
                    <h1 className="text-5xl">Loading</h1>
                )}
            </ul>
        </div>
    );
};

export default App;
