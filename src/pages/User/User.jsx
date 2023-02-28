import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import UserHeader from "../../components/User/UserHeader";
import { UserContext } from "../../UserContext";
import Feed from "../Feed/Feed";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats";

function User() {
  const {data} = useContext(UserContext);
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route index element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
      </Routes>
    </section>
  );
}

export default User;
