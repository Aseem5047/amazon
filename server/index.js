
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')

const dotenv = require('dotenv')
const app = express();
const stripe = require('stripe')('sk_test_51JovZySDBS9sTKNkPxVUAeBqLYkorrXjsoM6htb7HEGAjHQ97wYUjAHwi481BqRltfEfboRphjkmzmlurPdQys2400KEjJ2pJ6')

app.use(cors())
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", (request, response) => response.status(200).send("Hello from Cloud"));

app.post("/paymentIntent/create", async (request, response) => {
    const total = request.query.total;
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "inr",
    });

    response.status(201).send({
        clientSecret: paymentIntent,
    });
    console.log(paymentIntent);

});

app.post('/create-checkout-session', async (req, res) => {
    try {
        console.log(req.body);
        const params = {
            submit_type: 'pay',
            mode: 'payment',
            payment_method_types: ['card'],
            billing_address_collection: 'auto',
            shipping_address_collection: {
                allowed_countries: ['IN'],
            },
            shipping_options: [
                { shipping_rate: 'shr_1L0OzcSDBS9sTKNkp8fJsguc' },
                { shipping_rate: 'shr_1L0P16SDBS9sTKNkNdraQIII' },
            ],
            line_items: req.body.map((item) => {
                const img = item.image[0];
                const newImage = img.replace(item.image[1]);

                return {
                    price_data: {
                        currency: 'inr',
                        product_data: {
                            name: item.title,
                            images: [newImage],
                        },
                        unit_amount: item.price * 100,
                    },
                    adjustable_quantity: {
                        enabled: true,
                        minimum: 1,
                    },
                    quantity: 1
                }
            }),

            // success_url: `http://localhost:3000/success` || 'https://amazonxxx.vercel.app/success',
            // cancel_url: `http://localhost:3000/` || 'https://amazonxxx.vercel.app/' ,
            success_url: 'https://amazonxxx.vercel.app/success',
            cancel_url: 'https://amazonxxx.vercel.app/',
        }

        // Create Checkout Sessions from body params.
        const session = await stripe.checkout.sessions.create(params);

        res.status(200).json(session);
    } catch (err) {
        res.status(err.statusCode || 500).json(err.message);
    }
});

app.listen(5001, () => console.log(`Listening on port ${5001}`));