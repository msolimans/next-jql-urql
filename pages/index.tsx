import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useFetchProductsQuery } from "../generated/graphql";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [result] = useFetchProductsQuery();
  const { data, fetching, error } = result;

  if (fetching)
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  if (error) return <div>{error.message}</div>;
  if (!data) return <div>No data</div>;

  return (
    <div className={styles.container}>
      {data.products?.edges.map(({ node }) => (
        <div key={node.id}>
          <p>{node.name}</p>

          {node.thumbnail && <Image src={node.thumbnail.url} alt={node.name} width={200} height={200} />}
        </div>
      ))}
    </div>
  );
};

export default Home;
