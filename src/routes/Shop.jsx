import "./Shop.css"

// this could be a response from an API
const products = [
    {
        id: 1,
        name: "T-shirt",
        price: 100,
        image: "https://dummyimage.com/400x300",
    },
    {
        id: 2,
        name: "Shoes",
        price: 200,
        image: "https://dummyimage.com/400x300",
    },
    {
        id: 3,
        name: "Pants",
        price: 150,
        image: "https://dummyimage.com/400x300",
    },
    {
        id: 4,
        name: "Hat",
        price: 50,
        image: "https://dummyimage.com/400x300",
    },
    {
        id: 5,
        name: "Socks",
        price: 10,
        image: "https://dummyimage.com/400x300",
    },
];

export default function Shop() {
    return (
        <>
            <h2>Our Products</h2>
            <div className="products">
                {products.map(product => (
                    <div className="product" key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>Price: ${product.price}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
