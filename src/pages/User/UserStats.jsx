import React, { lazy, Suspense, useEffect } from "react";
import { STATS_GET } from "../../api";
import Head from "../../components/Helper/Head";
import Loading from "../../components/Helper/Loading";
import Error from "../../components/Helper/Error";
import useFetch from "../../Hooks/useFetch";
const UserStatsGraphs = lazy(() => import("./UserStatsGraphs"));

function UserStats() {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      const { response, json } = await request(url, options);
      console.log(response);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data) {
    return (
      <Suspense fallback={<div></div>}>
        <Head title="Estatísticas" />
        <UserStatsGraphs data={data} />
      </Suspense>
    );
  } else return null;
}

export default UserStats;
