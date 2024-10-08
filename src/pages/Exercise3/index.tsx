import { useEffect, useState } from "react";
import FilterDropdown from "./FilterDropdown";
import Loading from "../../components/Loading";
import "./style.css";
import DisplayUser from "./DisplayUser";

type Geo = {
  lat: string;
  lng: string;
};

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

const Exercise3 = () => {
  const [selectedUserByName, setSelectedUserByName] = useState<User | null>(
    null
  );
  const [selectedUserByEmail, setSelectedUserByEmail] = useState<User | null>(
    null
  );
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const users = await response.json();
        setUsers(users);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    };

    fetchData();
  }, []);

  const handleUserChangeByName = (user: User) => {
    setSelectedUserByName(user);
  };

  const handleUserChangeByEmail = (user: User) => {
    setSelectedUserByEmail(user);
  };

  if (loading) {
    return <Loading fullscreen />;
  }

  if (error) {
    return <div>Something went wrong</div>;
  }

  return (
    <div className="container">
      <h1>Auto-filter Dropdown Component</h1>
      <div className="select-zone">
        <div className="select-name">
          <h2>Select user by name</h2>
          <FilterDropdown
            data={users}
            labelKey="name"
            valueChange={handleUserChangeByName}
            placeholder="Enter name"
          />
          {selectedUserByName && <DisplayUser user={selectedUserByName} />}
        </div>
        <div className="select-address">
          <h2>Select user by email</h2>
          <FilterDropdown
            data={users}
            labelKey="email"
            valueChange={handleUserChangeByEmail}
            placeholder="Enter email"
          />
          {selectedUserByEmail && <DisplayUser user={selectedUserByEmail} />}
        </div>
      </div>
    </div>
  );
};

export default Exercise3;
