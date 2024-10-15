import express from "express";

const app = express();

app.get("/api/products", (req, res) => {
    const products = [
        {
            id: 1,
            name: "wooden table",
            price: 200,
            image: "https://images.pexels.com/photos/2829032/pexels-photo-2829032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 2,
            name: "glass table",
            price: 250,
            image: "https://images.pexels.com/photos/28936623/pexels-photo-28936623/free-photo-of-charming-riverside-outdoor-cafe-dining-setup.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 3,
            name: "wooden table",
            price: 350,
            image: "https://images.pexels.com/photos/298842/pexels-photo-298842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 4,
            name: "plastic table",
            price: 150,
            image: "https://images.pexels.com/photos/3581751/pexels-photo-3581751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 5,
            name: "fancy table",
            price: 300,
            image: "https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 6,
            name: "marble table",
            price: 200,
            image: "https://images.pexels.com/photos/2097118/pexels-photo-2097118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 7,
            name: "dining table",
            price: 250,
            image: "https://images.pexels.com/photos/930390/pexels-photo-930390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 8,
            name: "resturant table",
            price: 150,
            image: "https://images.pexels.com/photos/28898216/pexels-photo-28898216/free-photo-of-outdoor-cafe-brunch-scene-with-avocado-toast.jpeg"
        },
    ]

    // http://localhost:3000/api/products?search=metal
    if (req.query.search) {
        const filterProducts = products.filter(product =>
            product.name.includes(req.query.search)
        );
        res.send(filterProducts);
        return;
    }

    setTimeout(() => {
        res.send(products);
    }, 3000);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});