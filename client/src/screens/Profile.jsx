import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import { useLocation } from "react-router-dom";

const Profile = () => {
  const [userInfo, setUserInfo] = useState(null);

  const { state } = useLocation();

  useEffect(() => {
    setUserInfo(state.user);

    // fetchUserInfo();
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <div className="p-4">
          <h2 className="text-2xl font-semibold mb-4">Profile</h2>
          {userInfo ? (
            <div>
              <p>
                <strong>UID:</strong> {userInfo.uid}
              </p>
              <p>
                <strong>Email:</strong> {userInfo.email}
              </p>
            </div>
          ) : (
            <p>Loading user information...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
