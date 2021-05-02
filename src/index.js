import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./app/store";
import { Provider } from "react-redux";
// import db from "./firebase";
// import { movies } from "./disneyPlusMoviesData";

// movies.forEach(function (obj) {
//   db.collection("movies")
//     .add({
//       backgroundImg: obj.backgroundImg,
//       cardImg: obj.cardImg,
//       description: obj.description,
//       title: obj.title,
//       titleImg: obj.titleImg,
//       type: obj.type,
//     })
//     .then(function (docRef) {
//       console.log("Document written with ID: ", docRef.id);
//     })
//     .catch(function (error) {
//       console.error("Error adding document: ", error);
//     });
// });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
