import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import axios from "axios";

import { useSelector } from "react-redux";

import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import Calender from "react-calendar";
// import moment from "moment";
// import Calendar from "react-input-calendar";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 1000,
    minHeight: 400,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    paddingLeft: 180,
  },

  pos: {
    marginBottom: 12,
  },
  span: {
    paddingLeft: 100,
  },
  note: {
    color: "red",
  },
});

function BookingScreen(props) {
  const classes = useStyles();
  const [name, setName] = useState("");

  const [mobilenumber, setMobilenumber] = useState("");
  const [photoidproof, setphotoidproof] = useState("");
  const [idproofnumber, setIdproofnumber] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [age, setAge] = useState("");
  const [sideinfo, setsideinfo] = useState("");

  const [hoslocation, setHoslocation] = useState("");
  const [dateinfo, setdateinfo] = useState(new Date());
  const [timeinfo, settimeinfo] = useState("");

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const user = userInfo._id;
  // console.log(userInfo._id);

  const submitHandler = async (e) => {
    e.preventDefault();

    const data = {
      name,
      mobilenumber,
      birthdate,
      age,
      user,
      photoidproof,
      idproofnumber,
      sideinfo,
      hoslocation,
      dateinfo,
      timeinfo,
    };
    try {
      const resp = await axios.post(
        "http://localhost:5000/api/booking/sendmsg",
        data
      );
      // .then(() =>
      //   axios.get("http://localhost:5000/api/booking/fetch-pdf", {
      //     responseType: "blob",
      //   })
      // )
      // .then((res) => {
      //   const pdfBlob = new Blob([res.data], { type: "application/pdf" });
      //   saveAs(pdfBlob, "newPDf.pdf");
      // });

      const bookingID = resp.data._id;
      props.history.push(`/printbooking/` + bookingID);
      console.log(resp.data._id);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };
  // const sendPostRequest = async () => {

  // }
  // sendPostRequest();
  // const bookingID;
  // axios
  //   .post("http://localhost:5000/api/booking/sendmsg", data)
  //   .then((res) => {
  //     setresponsedata(res);
  //     const bookingID = 64654;
  //     props.history.push(`/printbooking/` + bookingID);
  //     // axios.get("http://localhost:5000/api/booking/pdf", {
  //     //   responseType: "blob",
  //     // });
  //   })
  //   .catch((err) => {
  //     console.log("Error in CreateBook!");
  //   });

  return (
    <div className="form-topview">
      <div className="form-maindiv">
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Register For Covid19 Vaccination
            </Typography>

            <div className="form-midview">
              <p className="pnote">
                <span className={classes.note}>Note: </span> Your Photo ID will
                be verified at the time of your vaccination appointment. Please
                provide the details <br />
                <span className={classes.span}>
                  of the Photo ID you will carry for vaccination.Otherwise you
                  will not be eligible for vaccination.
                </span>
              </p>

              <form className="form" onSubmit={submitHandler}>
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    placeholder="Enter name"
                    required
                    onChange={(e) => setName(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="mobile">Mobile Number</label>
                  <input
                    type="text"
                    id="mobilenumber"
                    value={mobilenumber}
                    placeholder="Enter Mobile Number"
                    required
                    onChange={(e) => setMobilenumber(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="birthdate">Birth Date </label>
                  <input
                    type="text"
                    id="birthdate"
                    value={birthdate}
                    placeholder="DD.MM.YYYY"
                    required
                    onChange={(e) => setBirthdate(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="age">Age</label>
                  <input
                    type="text"
                    id="age"
                    value={age}
                    placeholder="Enter Age"
                    required
                    onChange={(e) => setAge(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="idproof">Photo ID Proof</label>
                  <select
                    id="photoidproof"
                    value={photoidproof}
                    onChange={(e) => setphotoidproof(e.target.value)}
                  >
                    <option value="">Select Photo ID Document</option>
                    <option value="Adhar Card">Adhar Card</option>
                    <option value="Pan Card">Pan Card</option>
                    <option value="Voter ID Card">Voter ID Card</option>
                    <option value="Passport Number (Indians)">
                      Passport Number (Indians)
                    </option>
                    <option value="Passport Number (Foreigners)">
                      Passport Number (Foreigners)
                    </option>
                  </select>
                  <input
                    type="text"
                    id="idproofnumber"
                    value={idproofnumber}
                    placeholder="Enter Photo ID Number"
                    required
                    onChange={(e) => setIdproofnumber(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="sidediseases">
                    Do you have any other diseases? if yes please mention here{" "}
                  </label>
                  <input
                    type="text"
                    id="sideinfo"
                    value={sideinfo}
                    placeholder="Mention Diseses"
                    onChange={(e) => setsideinfo(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="idproof">Vaccination Centers</label>
                  <select
                    id="hoslocation"
                    value={hoslocation}
                    onChange={(e) => setHoslocation(e.target.value)}
                  >
                    <option value="">Select Vaccination Centers. </option>
                    <option value="B.M. Birla Heart Research Centre.">
                      B.M. Birla Heart Research Centre.
                    </option>
                    <option value="Desun Hospital & Heart Institute.">
                      Desun Hospital & Heart Institute.
                    </option>
                    <option value="North City Hospital & Neuro Institute Pvt.">
                      North City Hospital & Neuro Institute Pvt.
                    </option>
                    <option value=" B. P. Poddar Hospitals & Medical Research Ltd.">
                      B. P. Poddar Hospitals & Medical Research Ltd.{" "}
                    </option>
                    <option value="Narayana Superspeciality Hospital.">
                      Narayana Superspeciality Hospital.
                    </option>
                    <option value="B.M.R.C. Hospitals Ltd.">
                      B.M.R.C. Hospitals Ltd.
                    </option>

                    <option value="Peerless Hospitex Hospital And Research Center Limited.">
                      Peerless Hospitex Hospital And Research Center Limited.
                    </option>
                    <option value="Ruby General Hospital.">
                      Ruby General Hospital.
                    </option>
                  </select>
                </div>
                <div>
                  <label htmlFor="dateinfo">Vaccination Date </label>
                  <DatePicker
                    selected={dateinfo}
                    onChange={(date) => setdateinfo(date)}
                  />
                </div>
                <div>
                  <label htmlFor="timeinfo">Time</label>
                  <select
                    id="timeinfo"
                    value={timeinfo}
                    onChange={(e) => settimeinfo(e.target.value)}
                  >
                    <option value="">Select vaccination Time </option>
                    <option value="10 AM to 11 AM">10 AM to 11 AM</option>
                    <option value="11 AM to 12 PM">11 AM to 12 PM</option>
                    <option value="12 PM to 1 PM">12 PM to 1 PM</option>
                    <option value="2 PM to 3 PM">2 PM to 3 PM</option>
                    <option value="4 PM to 5 PM">4 PM to 5 PM</option>
                  </select>
                </div>

                <div>
                  <label />
                  <button className="primary" type="submit">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default BookingScreen;
