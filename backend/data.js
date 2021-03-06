import bcrypt from 'bcryptjs';
const data = {
    users: [
        {
            name:'Justin',
            email:'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,

        },
        {
            name:'Stephaine',
            email:'stephaine@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,

        },
        {
            name:'Allen',
            email:'allen@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,

        },

    ],
    products:[
        {
        
            name: 'Nike Slim Shirt',
            category: 'Shirts',
            image:'/images/p1.jpg',
            price: 120,
            countInStock:10,
            brand:'Nike',
            rating: 4.5,
            numReviews:10,
            description: 'high quality product',
        },
        {
            
            name: 'Adidas Fit Shirt',
            category: 'Shirts',
            image:'/images/p2.jpg',
            price: 120,
            countInStock:20,
            brand:'Adidas',
            rating: 4.0,
            numReviews:12,
            description: 'high quality product',
        },
        {
            
            name: 'Cucci Shirt',
            category: 'Shirts',
            image:'/images/p3.jpg',
            price: 220,
            countInStock:0,
            brand:'Cucci',
            rating: 4.8,
            numReviews:20,
            description: 'high quality product',
        },
        {
            
            name: 'Nike Slim Pant',
            category: 'Pants',
            image:'/images/p4.jpg',
            price: 78,
            countInStock:15,
            brand:'Nike',
            rating: 4.5,
            numReviews:14,
            description: 'high quality product',
        },
        {
            
            name: 'Puma Slim Pant',
            category: 'Pants',
            image:'/images/p5.jpg',
            price: 65,
            countInStock:5,
            brand:'Puma',
            rating: 4.5,
            numReviews:10,
            description: 'high quality product',
        },
        {
            
            name: 'Adidas Slim Pant',
            category: 'Pants',
            image:'/images/p6.jpg',
            price: 130,
            countInStock:5,
            brand:'Adidas',
            rating: 4.5,
            numReviews:15,
            description: 'high quality product',
        },
    ]
}
export default data;