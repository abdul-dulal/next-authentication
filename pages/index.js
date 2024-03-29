import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useSession, signOut } from "next-auth/react";
import { getUser } from "../lib/helper";
import Table from "../components/table";
import AddUserForm from "../components/addUser";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AddUserForm />
      <Table />
      <div>
        <h1>{session?.user.name}</h1>
        <h1>{session?.user.email}</h1>
        {session ? (
          <button
            className="h-10 w-32 border border-black"
            onClick={() => signOut()}
          >
            SignOut
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
