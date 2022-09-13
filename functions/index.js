const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
    "sk_test_51JovZySDBS9sTKNkPxVUAeBqLYkorrXjsoM6htb7HEGAjHQ97wYUjAHwi481BqRltfEfboRphjkmzmlurPdQys2400KEjJ2pJ6"
)

const app = express();

app.use(cors(true));

app.use(express.json());

app.get("/", (request, response) => response.status(200).send("Hello from Cloud"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "inr",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'T-shirt',
                    },
                    unit_amount: 2000,
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: 'https://example.com/success',
        cancel_url: 'https://example.com/cancel',
    });

    res.redirect(303, session.url);
});

exports.api = functions.https.onRequest(app);

