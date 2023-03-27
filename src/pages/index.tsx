import { type NextPage } from "next";
import Head from "next/head";
import { Header } from "~/components/Header";
import { TaskList } from "../components/TaskList";
import { TaskForm } from "~/components/TaskForm";
import { useSession } from "next-auth/react";

const Home: NextPage = () => {
  const { data: sessionData } = useSession();
  return (
    <>
      <Head>
        <title>Task Manager</title>
        <meta name="description" content="Task Manager" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        {sessionData ? (
          <div className="m-auto w-3/4">
            <TaskForm />
            <div className="card">
              <div className="card-body">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div>
                    <h2 className="font-bold">Completed Tasks</h2>
                    <TaskList status="completed" />
                  </div>
                  <div>
                    <h2 className="font-bold">Incomplete Tasks</h2>
                    <TaskList status="incomplete" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="center">
            <h3>Hi there! Please Login First 🖐️</h3>
          </div>
        )}
      </main>
    </>
  );
};

export default Home;
