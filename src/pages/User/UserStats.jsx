import React, { useEffect } from "react";
import { STATS_GET } from "../../api";
import Head from "../../components/Helper/Head";
import Loading from "../../components/Helper/Loading";
import Error from "../../components/Helper/Error";
import useFetch from "../../Hooks/useFetch";
import UserStatsGraphs from "./UserStatsGraphs";

function UserStats() {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      const {response,json} = await request(url, options);
      console.log(response);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data) {
    return (
      <section>
        <Head title="Estatísticas" />
        <UserStatsGraphs data={data} />
      </section>
    );
  } else return null;
}

export default UserStats;
