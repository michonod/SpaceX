import "./App.css";
import { useQuery, gql } from "@apollo/client";
import Loading from "./components/Loading";
import { Route, Switch, Redirect } from "react-router-dom";
import CardDisplay from "./components/CardDisplay";
import RocketInfo from "./components/RocketInfo";
import NotFound from "./components/NotFound";

const ALL_MISSIONS = gql`
  query GetLaunches {
    launchesPast {
      links {
        flickr_images
        video_link
        wikipedia
        article_link
      }
      details
      id
      mission_name
      rocket {
        rocket_name
        rocket_type
      }
      launch_year
      launch_date_utc
      is_tentative
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(ALL_MISSIONS);
  console.log(data);
  if (loading) return <Loading />;
  if (error) return <h1>Something went wrong...</h1>;

  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
      <Route path="/home">
        <CardDisplay data={data} />
      </Route>
      <Route path="/rocket/:rocketId">
        <RocketInfo data={data} />
      </Route>
      <Route path="/*">
        <NotFound />
      </Route>
    </Switch>
  );
}

export default App;
