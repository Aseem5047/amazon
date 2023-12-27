import { loadStripe } from "@stripe/stripe-js";
import { useSelector } from "react-redux";
import Review from "../Review";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'

const Checkout = () => {
    const { basket } = useSelector(state => state.data);

    let stripePromise;

    const getStripe = () => {
        if (!stripePromise) {
            stripePromise = loadStripe("pk_test_51JovZySDBS9sTKNkxz3QCHZuKBEX0rgxy6T311FMKxhPjCFkgM5C5Gm7lQCMmy4rHZjgYDHcqS1llEZCJUBWCGc800W8a0799r");
        }

        return stripePromise;
    };


    const handleCheckout = async () => {

        const stripe = await getStripe();

        const response = await fetch('https://amazonback.vercel.app/create-checkout-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(basket),
        });

        if (response.statusCode === 500) return;

        const data = await response.json(basket)
        console.log(data);


        stripe.redirectToCheckout({ sessionId: data.id })


    }

    return (
        <div style={{ width: "90vw", margin: "auto" }}>
            <Review />
            <button onClick={handleCheckout} className="btn" style={{ width: "7.5rem", padding: "10px", fontSize: "15px", display: "flex", alignItems: "center", margin: "20px auto", justifyContent: "center" }}> <ShoppingCartOutlinedIcon /> Checkout</button>
        </div >
    );
};

export default Checkout;
