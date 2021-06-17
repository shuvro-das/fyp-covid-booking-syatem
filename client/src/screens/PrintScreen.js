import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";

import axios from "axios";

// import { useSelector } from "react-redux";
import saveAs from "file-saver";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 1000,
    minHeight: 400,
  },

  title: {
    fontSize: 25,
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
  button: {
    marginLeft: 350,
    backgroundColor: "#1C66C9",
    color: "white",
  },
});

function PrintScreen(props) {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);
  // const userSignin = useSelector((state) => state.userSignin);
  // const { userInfo } = userSignin;
  // userID = userInfo._id;
  // const dispatch = useDispatch();

  // const bookingDetails = useSelector((state) => state.bookingDetails);
  // const { booking } = bookingDetails;
  // console.log(booking._id);

  // useEffect(() => {
  //   dispatch(detailsBooking(bookingtId));
  //   console.log(bookingtId);
  // }, [dispatch, bookingtId]);
  // useEffect((id) => {
  //   axios.get(`http://localhost:5000/api/booking/sendsms/` + id).then((res) => {
  //     console.log(res);
  //     const URL = window.location.href;
  //     console.log(URL);
  //     setPosts(res.data);
  //   });
  // }, []);
  // try {
  //     const resp = await axios.post(
  //       "http://localhost:5000/api/booking/sendmsg",
  //       data
  //     );

  //     const bookingID = resp.data._id;
  //     props.history.push(`/printbooking/` + bookingID);
  //     console.log(resp.data._id);
  //   } catch (err) {
  //     // Handle Error Here
  //     console.error(err);
  //   }
  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:5000/api/booking/sendmsg/` + props.match.params.id)
  //     .then((res) => {
  //       console.log(res);
  //       // setPosts(res);
  //       // console.log(posts);
  //     });
  // }, [props.match.params.id]);
  // axios.get("http://localhost:5000/api/booking/fetch-pdf", {
  //     responseType: "blob",
  //   })
  // )
  // .then((res) => {
  //   const pdfBlob = new Blob([res.data], { type: "application/pdf" });
  //   saveAs(pdfBlob, "newPDf.pdf");
  // });

  // const sendGetRequest = async () => {
  //   try {
  //     const resp = await axios.get(
  //       `http://localhost:5000/api/booking/sendmsg/` + props.match.params.id
  //     );
  //     console.log(resp.data);
  //     console.log(resp.data._id);
  //     // console.log(resp.data);
  //     // setPosts(resp.data);
  //   } catch (err) {
  //     // Handle Error Here
  //     console.error(err);
  //   }
  // };

  // sendGetRequest();
  const downloadHandler = () => {
    axios
      .get("http://localhost:5000/api/booking/fetch-pdf", {
        responseType: "blob",
      })

      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });
        saveAs(pdfBlob, "newPDf.pdf");
      });
  };

  return (
    <div>
      {/* <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <td>{post.name}</td>
            <td>{post.hoslocation}</td>
          </li>
        ))}
      </ul> */}
      <div className="form-topview">
        <div className="form-maindiv">
          <Card className={classes.root}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Congratulations,Covid19 Vaccine Registration successful
              </Typography>

              <div className="form-midview">
                <p className="pnote">
                  <span className={classes.note}>Note: </span> Your Photo ID
                  will be verified at the time of your vaccination appointment.
                  Please provide the details <br />
                  <span className={classes.span}>
                    of the Photo ID you will carry for vaccination.Otherwise you
                    will not be eligible for vaccination.
                  </span>
                </p>
              </div>
              <div>
                <label />
                <button className={classes.button} onClick={downloadHandler}>
                  Download PDF
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default PrintScreen;
