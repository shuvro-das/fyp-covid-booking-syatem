// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import "./App.css";
// import Navbar from "./screens/Navbar";
// import Booking from "./screens/pages/Booking";
// import AboutUs from "./screens/pages/AboutUs";
// import Home from "./screens/pages/Home";
// import Footer from "./screens/pages/Footer/Footer";
// import RegisterScreen from "./screens/RegisterScreen";
// import SigninScreen from "./screens/SignInScreen";

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Switch>
//         <Route path="/" exact component={Home} />
//         <Route path="/register" exact component={RegisterScreen} />
//         <Route path="/signin" exact component={SigninScreen} />
//         <Route path="/Booking" exact component={Booking} />
//         <Route path="/AboutUs" exact component={AboutUs} />
//       </Switch>
//       <Footer />
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Link, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute.js";
import { signout } from "./actions/UserAction.js";
import BookingScreen from "./screens/BookingScreen.js";
import HomeScrren from "./screens/HomeScrren.js";
import PrintScreen from "./screens/PrintScreen.js";
import RegisterScreen from "./screens/RegisterScreen.js";
import AdminRouter from "./components/AdminRoute.js";

// import HomeScreen from "./screens/HomeScreen";

import SigninScreen from "./screens/SignInScreen.js";
import VaccineScreen from "./screens/VaccineScreen.js";
import AdminBookingList from "./screens/AdminBookingList.js";

function App() {
  // ai code tai dekh.ai project sudu user.
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              VaxPush
            </Link>
          </div>
          <div>
            <Link to="/vaccine">Vaccine Details</Link>
            <Link to="/booking">Booking</Link>

            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{" "}
                </Link>
                <ul className="dropdown-content">
                  {/* <li>
                    <Link to="/profile">User Profile</Link>
                  </li> */}
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/bookinglist">Booking List</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
        <main>
          <Route path="/" exact component={HomeScrren}></Route>
          <Route path="/vaccine" component={VaccineScreen}></Route>

          {/* <Route path="/booking" component={BookingScreen}></Route> */}
          <PrivateRoute path="/booking" component={BookingScreen} />
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/printbooking/:id" component={PrintScreen}></Route>
          <AdminRouter path="/bookinglist" component={AdminBookingList} />
        </main>
        {/* <Footer></Footer> */}
        <footer className="row center">
          <div>All right reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
