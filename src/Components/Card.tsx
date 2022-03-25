import * as React from "react";

type Props = {
  title: string;
  img: string;
  createdAt: string;
  link: string;
  author?: string;
  authorLink?: string;
};

const Card = (props: Props) => (
  <div className="p-card--highlighted p-card--top-higlight p-card--fill-height p-card--flex">
    <h5 className="p-text--weight-normal">CLOUD AND SERVER</h5>

    <hr className="separator--dotted" />
    <img
      className="p-card__image p-card--image-large"
      alt="fill-murray"
      src={props.img}
    />
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <h3>{props.title}</h3>
    </a>

    <div className="p-card--footer">
      {props.author && <p className="p-heading--4 p-text--style-italic">
        By{" "}
        <a href={props.authorLink} target="_blank" rel="noopener noreferrer">
          {props.author}
        </a>{" "}
        on {props.createdAt}
      </p>}

      <hr className="separator--dotted" />

      <h6 className="p-text--style-normal">Article</h6>
    </div>
  </div>
);

export default Card;
