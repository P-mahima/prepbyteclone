const express = require('express')
const app = express()
const connectToDB = require('./config/MongoBd')
const cors = require('cors')
const route = require('./route/route')

const stripe = require('stripe')(
    "sk_test_51O9j0iSBNg9h8aKNEXHw03uLbtaXLF20d0NyuHx1PhrmAnqaPhRgNmLIABfw2Up60FONiLKlp88VZoNoU9ys4gPm006b7yj3Sg"
  );





require('dotenv').config()
app.use(cors({
  origin: '*'
}))
app.use(express.json())
app.use('/user' , route)



app.get('/', (req, res) => res.send('Hello World!'))

const startConnection = async ()=>{
    try{
        app.listen(3005, () => console.log('server live in port 3005'))
        await connectToDB(process.env.MONGO_URL);
    }
    catch(err){
        console.log("error occured",err);
    }
}
startConnection();



//payment


app.post("/api/create-checkout-session", async (req, res) => {
    const { products } = req.body;
    console.log(products)
    const lineItems = products && products.map((product) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: product.name,
        },
        unit_amount:product.price * 100,
      },
      quantity: product.quantity,
    }));
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "https://654b4233521213046291b9c8--tangerine-cucurucho-ca9b76.netlify.app//dashboard",
      cancel_url: "https://654b4233521213046291b9c8--tangerine-cucurucho-ca9b76.netlify.app//cancel",
  
    });
    res.json({id:session.id})
  });

