import bcrypt from 'bcryptjs';

const data={
    users:[
        {
            name:'Aditya',
            email:'admin@example.com',
            password:bcrypt.hashSync('1234',8),
            isAdmin:true,
        },

        {
            name:'John',
            email:'user@example.com',
            password:bcrypt.hashSync('1234',8),
            isAdmin:false,
        },

    ],
    products:[
        {
            name:'Amul Masti',
            category:'Frozen',
            image:'/images/p2.jpg',
            price:120,
            countInStock:10,
            brand:'Amul',
            rating:4.5,
            numReviews:10,
            Description:'high quality product',
        },
        {
            name:'Tetra Pack',
            category:'Dairy Products',
            image:'/images/p2.jpg',
            price:120,
            countInStock:20,
            brand:'Nike',
            rating:4.5,
            numReviews:10,
            Description:'high quality product',
        },
        {
            name:'',
            category:'Shirts',
            image:'/images/p1.jpg',
            price:120,
            countInStock:0,
            brand:'Nike',
            rating:4.5,
            numReviews:10,
            Description:'high quality product',
        },
        {
            name:'bread',
            category:'Shirts',
            image:'/images/p1.jpg',
            price:120,
            countInStock:1,
            brand:'Nike',
            rating:4.5,
            numReviews:10,
            Description:'high quality product',
        },
        {
            name:'confort',
            category:'Shirts',
            image:'/images/p1.jpg',
            price:120,
            countInStock:30,
            brand:'Nike',
            rating:4.5,
            numReviews:10,
            Description:'high quality product',
        },
    ]
}

export default data;