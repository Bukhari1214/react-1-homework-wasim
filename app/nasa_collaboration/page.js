"use client";

import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import RoverPhoto from "@/components/RoverPhoto/RoverPhoto";

// Read "/app/nasa_collaboration/README.md" for more info about the API_KEY
// You need a proper API_KEY for the requests to work
const API_KEY = "rh1EIf1Dy4gAAQKSaeZcqdAFZYzGdq2qfPXrEwTe";

const NASA_URLs = {
  astronomyPicOfTheDay: `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`,
  marsRoverPhoto: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${API_KEY}`,
};

export const NasaCollaboration = () => {
  const [dailyImg, setDailyImg] = useState({});
  const [roverPhoto, setRoverPhoto] = useState({});

  // TASK - React 1 week 3
  // fetch the extra data for NASA_URLs.astronomyPicOfTheDay and save it to the dailyImg state variable

  useEffect(() => {
    const fetchRoverPhotos = async () => {
      const roverPhotoResponse = await fetch(NASA_URLs.marsRoverPhoto).then(
        (response) => response.json()
      );
      setRoverPhoto(roverPhotoResponse);
    };

    const fetchDailyImage = async () => {
      const dailyImgResponse = await fetch(NASA_URLs.astronomyPicOfTheDay).then(
        (response) => response.json()
      );
      setDailyImg(dailyImgResponse);
    };

    fetchRoverPhotos();
    fetchDailyImage();
  }, []);

  console.log("dailyImg", dailyImg);
  console.log("roverPhoto", roverPhoto);

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Collaboration with NASA</h1>
        <section className="card">
          <h2>Astronomy Picture of the day</h2>
          <p>{dailyImg.title}</p>
          <p>{dailyImg.explanation}</p>
          <img
            src={dailyImg.url}
            alt={dailyImg.title}
            className={styles.nasaPicOfTheDayImg}
          />

          {/* TASK - React 1 week 3 */}
          {/* After fetching data from the NASA_URLs.astronomyPicOfTheDay url, display the returned data here */}
          {/* You should display the title, explanation, and the image using the url from the response */}
          {/* <img src={dailyImg.url}> */}
        </section>
        <section className="card">
          {/* TASK - React 1 week 3 */}
          {/* Iteratate over the roverPhoto?.photos array and display all the pictures! */}
          {roverPhoto?.photos?.length ? (
            <>
              {/* TASK - React 1 week 3 */}
              {/* Create a react component for the <RoverPhoto />, which should accept the following props */}
              {/* 1. src: source of the img (img_src in the data from the API) */}
              {/* 2. date: earth_date data coming from the API */}
              {/* 3. roverName: will be in the rover object - rover.name */}

              {/* TIPS: */}
              {/* If you don't know how the data looks like you can: */}
              {/* 1. use console.log() to write the data to the console */}
              {/* 2. use the network tab in the developer tab - https://developer.chrome.com/docs/devtools/network */}
              <div className={styles.roverCard}>
                {roverPhoto.photos.map((photo) => (
                  <RoverPhoto
                    key={photo.id}
                    date={photo.earth_date}
                    src={photo.img_src}
                    roverName={photo.rover.name}
                  />
                ))}
              </div>
            </>
          ) : (
            <p>Loading rover photos...</p>
          )}
        </section>
      </main>
    </div>
  );
};

export default NasaCollaboration;
