"use client";

import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import RoverPhoto from "@/components/RoverPhoto/RoverPhoto";

const API_KEY = "rh1EIf1Dy4gAAQKSaeZcqdAFZYzGdq2qfPXrEwTe";

const NASA_URLs = {
  astronomyPicOfTheDay: `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`,
  marsRoverPhoto: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${API_KEY}`,
};

export const NasaCollaboration = () => {
  const [dailyImg, setDailyImg] = useState({});
  const [roverPhoto, setRoverPhoto] = useState({});

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
        </section>
        <section className="card">
          {roverPhoto?.photos?.length ? (
            <>
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
