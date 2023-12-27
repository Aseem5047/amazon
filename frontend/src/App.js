import React, { useEffect, lazy, Suspense } from 'react'
import './App.css';
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import { useDispatch } from 'react-redux'
import { auth } from './utils/Firebase'
import { setuser } from './redux/actions'
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import Loading from './components/Loading/Loading'
import { Footer } from './components/Footer/Footer';
import Menu from './components/Header/Menu';
import HeaderItems from './components/HeaderItems/HeaderItems';
import GetLocation from './components/GetLocation/GetLocation';
import NotFound from './NotFound/NotFound';
import Success from './pages/Success/Success';
import SingleProductScroll from './components/Advertisement/HorizontalScroll/SingleProductScroll';
import axios from 'axios';

const Home = lazy(() => import("./pages/Home/Home"))
const Login = lazy(() => import("./pages/Login/Login"))
const Register = lazy(() => import("./pages/Register/Register"))
const Checkout = lazy(() => import("./pages/Checkout/Checkout"))
const Payment = lazy(() => import("./pages/Payment/Payment/Payment"))
const Orders = lazy(() => import("./pages/Orders/Orders"))
const Prime = lazy(() => import("./pages/Prime/Prime"))
const Mobiles = lazy(() => import("./pages/Mobile & Computer Collection/MobileComputer/Mobile"))
const Electronics = lazy(() => import("./pages/Electronics/Electronics/Electronics"))
const NewReleases = lazy(() => import("./pages/NewReleases/Newreleases/NewReleases"))
const Fashion = lazy(() => import("./pages/Fashion/Fashion/Fashion"))
const SportsFitness = lazy(() => import("./pages/Sports & Fitness/SportsFitness/SportsFitness"))
const HomeKitchen = lazy(() => import("./pages/Home & kitchen/HomeKitchen/HomeKitchen"))
const EchoAlexa = lazy(() => import("./pages/Echo&Alexa/EchoAlexa/EchoAlexa"))
const Computers = lazy(() => import("./pages/Mobile & Computer Collection/MobileComputer/Computer"))
const BestSellers = lazy(() => import("./pages/BestSellerCollection/BestSellers/BestSellers"))
const SingleProduct = lazy(() => import("./pages/SingleProduct/SingleProduct"))
const AccountInfo = lazy(() => import("./pages/AccountInfo/AccountInfo"))

const promise = loadStripe("pk_test_51JovZySDBS9sTKNkxz3QCHZuKBEX0rgxy6T311FMKxhPjCFkgM5C5Gm7lQCMmy4rHZjgYDHcqS1llEZCJUBWCGc800W8a0799r");


function App() {

  let dispatch = useDispatch();

  useEffect(() => {

    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setuser(authUser))
      } else {
        dispatch(setuser(null))
      }
    })

  }, [dispatch])

  axios.defaults.baseURL = "https://amazonxxx.vercel.app/";
  // axios.defaults.baseURL = "http://localhost:5001";
  axios.defaults.withCredentials = true;

  return (
    <BrowserRouter>
      <div >
        <Switch>
          <Suspense fallback={<Loading />}>
            <Route exact path='/orders'>
              <Header />
              <HeaderItems />
              <Menu />
              <Orders />
              <Footer />
            </Route>

            <Route exact path='/account'>
              <Header />
              <HeaderItems />
              <Menu />
              <AccountInfo />
              <Footer />
            </Route>



            <Route exact path='/prime'>
              <Header />
              <HeaderItems />
              <Menu />
              <Prime />
              <Footer />
            </Route>

            <Route exact path='/payment'>
              <Header />
              <HeaderItems />
              <Menu />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
              <Footer />
            </Route>

            <Route exact path='/checkout'>
              <Header />
              <HeaderItems />
              <Menu />
              <Checkout />
              <Footer />
            </Route>

            <Route exact path='/product/:type/:id'>
              <Header />
              <HeaderItems />
              <Menu />
              <SingleProduct />
            </Route>

            <Route exact path='/AdvertiseProduct/:type/:id'>
              <Header />
              <HeaderItems />
              <Menu />
              <SingleProductScroll />
            </Route>

            <Route exact path='/register'>
              <Register />
            </Route>
            <Route exact path='/login'>
              <Login />
              <Footer />
            </Route>
            <Route exact path='/home'>
              <Header />
              <Menu />
              <HeaderItems />
              <Home />
              <Footer />
            </Route>
            <Route exact path='/'>
              <Header />
              <HeaderItems />
              <Menu />
              <Home />
              <Footer />
            </Route>
            <Route exact path='/explore'>
              <Header />
              <HeaderItems />
              <Menu />
              <GetLocation />
              <Footer />
            </Route>
            <Route exact path='/trending'>
              <Header />
              <HeaderItems />
              <Menu />
              <BestSellers />
              <Footer />
            </Route>
            <Route exact path='/mobiles'>
              <Header />
              <HeaderItems />
              <Menu />
              <Mobiles />
              <Footer />
            </Route>
            <Route exact path='/electronics'>
              <Header />
              <HeaderItems />
              <Menu />
              <Electronics />
              <Footer />
            </Route>
            <Route exact path='/newReleases'>
              <Header />
              <HeaderItems />
              <Menu />
              <NewReleases />
              <Footer />
            </Route>
            <Route exact path='/fashion'>
              <Header />
              <HeaderItems />
              <Menu />
              <Fashion />
              <Footer />
            </Route>
            <Route exact path='/sports&fitness'>
              <Header />
              <HeaderItems />
              <Menu />
              <SportsFitness />
              <Footer />
            </Route>
            <Route exact path='/home&kitchen'>
              <Header />
              <HeaderItems />
              <Menu />
              <HomeKitchen />
              <Footer />
            </Route>
            <Route exact path='/echo&alexa'>
              <Header />
              <HeaderItems />
              <Menu />
              <EchoAlexa />
              <Footer />
            </Route>
            <Route exact path='/computers'>
              <Header />
              <HeaderItems />
              <Menu />
              <Computers />
              <Footer />
            </Route>
            <Route exact path='/NotFound'>
              <Header />
              <HeaderItems />
              <Menu />
              <NotFound />
              <Footer />
            </Route>
            <Route exact path='/success'>
              <Header />
              <HeaderItems />
              <Menu />
              <Success />
              <Footer />
            </Route>
          </Suspense>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
