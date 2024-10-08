import { User } from "..";
import "./style.css";

type DisplayUserProps = {
  user: User;
};

const DisplayUser = ({ user }: DisplayUserProps) => {
  const renderAddress = (user: User) => {
    const { address } = user;
    const addressArr: string[] = [];
    if (address.street) {
      addressArr.push(address.street);
    }
    if (address.suite) {
      addressArr.push(address.suite);
    }
    if (address.city) {
      addressArr.push(address.city);
    }
    if (address.zipcode) {
      addressArr.push(address.zipcode);
    }
    return addressArr.join(", ");
  };
  return (
    <div className="user-info">
      <h3>Selected User Info</h3>
      <p>
        <strong>Username:</strong> {user.username}
      </p>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Address:</strong> {renderAddress(user)}
      </p>
      <p>
        <strong>Phone:</strong> {user.phone}
      </p>
      <p>
        <strong>Website:</strong> {user.website}
      </p>
      <p>
        <strong>Company:</strong> {user.company?.name}
      </p>
    </div>
  );
};

export default DisplayUser;
