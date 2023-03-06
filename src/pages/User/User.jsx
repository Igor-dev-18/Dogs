import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Head from "../../components/Helper/Head";
import UserHeader from "../../components/User/UserHeader";
import { UserContext } from "../../UserContext";
import Feed from "../Feed/Feed";
import NotFound from "../NotFound/NotFound";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats";

function User() {
  const {data} = useContext(UserContext);
  return (
    <section className="container">
      <Head title="Minha Conta" />
      <UserHeader />
      <Routes>
        <Route index element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
}

export default User;
