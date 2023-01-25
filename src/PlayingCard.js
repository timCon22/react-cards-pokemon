import React from "react";
import backOfCard from "./back.png";
import "./PlayingCard.css"
import useFlip from "./hooks/useFlip";

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {

  const toggle = useFlip()

  return (
    <img
      src={toggle.isFacingUp ? front : back}
      alt="playing card"
      onClick={toggle.flipCard}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
