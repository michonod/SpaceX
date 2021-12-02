import { useParams } from "react-router-dom";
import RocketInfoCard from "./RocketInfoCard";

const RocketInfo = ({ data }) => {
  const params = useParams();
  const id = 109 - +params.rocketId;
  console.log(id);
  console.log(data);
  const mappedDetail = data.launchesPast[id].details;
  const mappedName = data.launchesPast[id].mission_name;
  const mappedImages = data.launchesPast[id].links.flickr_images[0];
  const mappedLink = data.launchesPast[id].links.article_link;
  const videoLink = data.launchesPast[id].links.video_link;
  const launchDate = data.launchesPast[id].launch_date_utc;
  const launchYear = data.launchesPast[id].launch_year;
  const rocketName = data.launchesPast[id].rocket.rocket_name;
  const rocketType = data.launchesPast[id].rocket.rocket_type;

  return (
    <RocketInfoCard
      image={mappedImages ? mappedImages : ""}
      name={mappedName}
      details={mappedDetail ? mappedDetail : "No details avaliable"}
      link={mappedLink ? mappedLink : ""}
      video={videoLink ? videoLink : ""}
      launchDate={launchDate ? launchDate : ""}
      launchYear={launchYear ? launchYear : ""}
      rocketName={rocketName ? rocketName : ""}
      rocketType={rocketType ? rocketType : ""}
    />
  );
};

export default RocketInfo;
