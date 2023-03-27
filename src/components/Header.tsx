import { signIn, signOut, useSession } from "next-auth/react";

export const Header: React.FC = () => {
  const { data: sessionData } = useSession();
  const signInMsg = sessionData ? "Sign out" : "Sign in";
  const signInOrOut = sessionData ? () => void signOut() : () => void signIn();
  const username = sessionData && sessionData.user?.name;
  return (
    <>
      <div className="navbar bg-base-300">
        <div className="flex-1">
          <a className="btn-ghost btn text-xl normal-case">Tasker</a>
        </div>
        <div className="flex gap-4">
          {username}
          <button
            className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
            onClick={signInOrOut}
          >
            {signInMsg}
          </button>
        </div>
      </div>
    </>
  );
};
