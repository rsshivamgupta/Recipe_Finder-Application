import Header from "../components/common/Header";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    // <div>Hello guys i'm Home</div>
    <Header title="Our Recipes" bbClass="bg-image">
      <Button content="Search Content" color="yellow" as={Link} to="/recipes" size="big"/>
    </Header>
  );
};

export default Home;
