import { useState } from "react";
import "./TwitterFollowCard.css";

const TwitterFollowCard = ({ userName, name, isFollowing }) => {
  const imgSrc = `https://unavatar.io/${userName}`;
  const [valueFollowing, updateFollowing] = useState(isFollowing);

  const text = valueFollowing ? "Siguiendo" : "Seguir";
  const buttonStyle = valueFollowing
    ? "tw-followCard-button is-Following"
    : "tw-followCard-button";

  const handleClick = () => {
    updateFollowing(!valueFollowing);
  };
  return (
    <article className="tw-follow-card">
      <header className="tw-followCard-header">
        <img className="tw-followCard-img" src={imgSrc} />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span>@{userName}</span>
        </div>
      </header>
      <aside className="tw-followCard-button">
        <button onClick={handleClick} className={buttonStyle}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
};

export default TwitterFollowCard;
