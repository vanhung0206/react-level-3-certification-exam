import { Typography } from "antd";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Link to="/exercise-1">
        <Typography.Title level={3}>Exercise 1</Typography.Title>
      </Link>
      <Link to="/exercise-2">
        <Typography.Title level={3}>Exercise 2</Typography.Title>
      </Link>
      <Link to="/exercise-3">
        <Typography.Title level={3}>Exercise 3</Typography.Title>
      </Link>
    </>
  );
};

export default Main;
