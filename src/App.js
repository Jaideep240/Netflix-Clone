import React from "react";
import "./App.scss";
import Header from "./components/Header.js";
import HomeBanner from "./components/HomeBanner";
import Login from "./components/Login";
import Banner from "./components/Banner";
import List from "./components/List";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <React.Fragment>
              <Header />
              <HomeBanner />
            </React.Fragment>
          }
        />
        <Route
          path="/login"
          element={
            <React.Fragment>
              <Header />
              <Login />
            </React.Fragment>
          }
        />
        <Route
          path="/dashboard"
          element={
            <React.Fragment>
              <Header />
              <Banner />
              <List genre="Comedy" />
              <List genre="Adventure" />
              <List genre="Romance" />
              <List genre="Crime" />
              <List genre="Drama" />
              <List genre="Music" />
              <List genre="Fantasy" />
              <List genre="History" />
              <List genre="Thriller" />
              <List genre="Animation" />
              <List genre="Family" />
              <List genre="Sport" />
              <List genre="Film-Noir" />
              <List genre="Mystery" />
              <List genre="Western" />
              <List genre="Biography" />
              <List genre="Horror" />
              <List genre="Science Fiction" />
            </React.Fragment>
          }
        />
      </Routes>
    </React.Fragment>
  );
}

export default App;
