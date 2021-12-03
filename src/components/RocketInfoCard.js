import { Button } from "@mui/material";
import React from "react";
import classes from "./RocketInfoCard.module.css";
import { Link } from "react-router-dom";

const RocketInfoCard = ({
  image,
  name,
  details,
  link,
  video,
  launchDate,
  launchYear,
  rocketName,
  rocketType,
}) => {
  const date = new Date(launchDate);
  const month = date.getMonth();
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return (
    <div className={classes.rocketCard}>
      <Link to="/">
        <Button
          style={{
            margin: "20px",
          }}
          variant="contained"
        >
          Go back
        </Button>
      </Link>
      <div className={classes.rocketCardWrapper}>
        {image ? (
          <img
            className={classes.rocketCardImage}
            src={image}
            alt="rockets"
          ></img>
        ) : (
          ""
        )}
        <h1>Mission name: {name}</h1>
        <p>{details ? details : ""}</p>

        <a href={link} target="_blank" rel="noreferrer">
          {link && (
            <Button
              style={{
                fontSize: "16px",
                marginRight: "20px",
                marginBottom: "10px",
                textAlign: "center",
              }}
              variant="contained"
            >
              Article Link
            </Button>
          )}
        </a>
        {video && (
          <a href={video} target="_blank" rel="noreferrer">
            <Button
              style={{
                fontSize: "16px",
                marginRight: "20px",
                marginBottom: "10px",
              }}
              variant="contained"
              color="success"
            >
              Watch Video
            </Button>
          </a>
        )}

        <h4>
          Launch Date : {day}-{month + 1}-{launchYear} {hours}:{minutes}
        </h4>
        <h3>Rocket Name : {rocketName}</h3>
        <h3>Rocket Type : {rocketType}</h3>
      </div>
    </div>
  );
};

export default RocketInfoCard;
