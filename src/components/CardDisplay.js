import { Fragment } from "react";
import spaceLogo from "../assets/SpaceX-Logo.png";
import MediaCard from "./MediaCard";
import noImage from "../assets/noimage.png";
import { Link } from "react-router-dom";

const CardDisplay = ({ data }) => {
  return (
    <Fragment>
      <img className="logo" src={spaceLogo} alt="space-logo" />
      <div className="grid-container">
        {data.launchesPast.map((data) => (
          <Link to={`rocket/${data.id}`} key={data.id}>
            <div className="grid-item">
              <MediaCard
                image={
                  data.links.flickr_images[0]
                    ? data.links.flickr_images[0]
                    : noImage
                }
                name={data.mission_name}
                details={data.details ? data.details : "No details avaliable"}
                onClick={data.links.wikipedia ? data.links.wikipedia : ""}
              />
            </div>
          </Link>
        ))}
      </div>
    </Fragment>
  );
};

export default CardDisplay;
