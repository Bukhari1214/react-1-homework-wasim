"use client";

import { useState } from "react";
import { PlanetWishlistItem } from "@/components/PlanetWishlistItem/PlanetWishlistItem";

import styles from "@/components/destination/destination.module.css";
import { AddWishlistItem } from "@/components/destination/AddWishlistItem";
import { destinationToGO } from "@/data/destonation";
import PlanetCard from "@/components/PlanetCard/PlanetCard";

export const Destinations = () => {
  const [selectedPlanets, onAddPlanet] = useState([]);
  const [selectedDestinationTogo, setSelectedDestinationTogo] = useState([]);

  const onAddOrRemovePlanet = (thumbnail, name) => {
    onAddPlanet((prev) => [
      ...prev,
      {
        thumbnail,
        name,
        id: generateRandomId(),
      },
    ]);
  };

  function addDestination(itemToGo) {
    console.log("itemToGo", itemToGo);
    setSelectedDestinationTogo((prev) =>
      prev.some((item) => item.id === itemToGo.id)
        ? prev.filter((item) => item.id !== itemToGo.id)
        : [...prev, itemToGo]
    );
  }

  function generateRandomId() {
    const text = ["a", "b", "c", "e", "f", "g"];
    let random = "";
    for (let i = 0; i < text.length; i++) {
      random = `${random}${text[i]}${Math.floor(Math.random() * text.length)}`;
    }
    return random;
  }

  const removeFromWishlist = (id) => {
    onAddPlanet((prev) => prev.filter((item) => item.id !== id));
  };

  console.log("selectedDestinationTogo", selectedDestinationTogo);

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Travel destinations</h1>
        <section className="card">
          <h2>Wishlist</h2>

          {selectedPlanets.length > 0 ? (
            <p>You have {selectedPlanets.length} in your wishlist</p>
          ) : (
            <p>{"No planets in wishlist :("}</p>
          )}

          <AddWishlistItem onAddWishlistItem={onAddOrRemovePlanet} />

          <h3>Your current wishlist</h3>
          <div className={styles.wishlistList}>
            <div>
              {selectedPlanets.length > 0 &&
                selectedPlanets.map((item) => (
                  <PlanetWishlistItem
                    key={item.id}
                    name={item.name}
                    onRemove={() => removeFromWishlist(item.id)}
                    thumbnail={item.thumbnail}
                  />
                ))}
            </div>
          </div>
        </section>
        <section className="card">
          <h2>Possible destinations</h2>

          {destinationToGO.length > 0 &&
            destinationToGO.map((item) => (
              <PlanetCard
                key={item.id}
                planetItem={item}
                onAddOrRemoveDestination={() => addDestination(item)}
                destinationTogo={selectedDestinationTogo}
              />
            ))}
        </section>
      </main>
    </div>
  );
};

export default Destinations;
