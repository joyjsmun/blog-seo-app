import { useUser } from "@auth0/nextjs-auth0/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image"
import Link from "next/link";
import { Logo } from "../Logo";
import { faAngry, faCake, faCoins, faSpinner } from "@fortawesome/free-solid-svg-icons";

export const Layout = ({children}) => {
    const {user} = useUser();
    return(
        <div className="grid grid-cols-[300px_1fr] h-screen max-h-screen" >
            <div className="bg-pink-500 flex flex-col text-white overflow-hidden">
                <div className="bg-blue-800 px-2 ">
                    <Logo />
                    <Link href="/post/new" className="btn">New Post</Link>
                    <Link href="/tokenTopup" className="block mt-2 text-center">
                        <FontAwesomeIcon icon={faCoins}  />
                        <span className="pl-1">0 token available</span></Link>
                </div>
                <div className="flex-1 overflow-auto bg-gradient-to-b from-blue-800 to-purple-800 ">
                    list of posts
                </div>
                <div className="bg-purple-800 flex items-center gap-2 border-t border-t-white/50 h-20 px-2">
                {!!user ? (
      <>
        <div className="min-w-[50px">
          <Image className="rounded-full" src={user.picture} alt={user.name} height={50} width={50} />
        </div>
        <div className="flex-1">
            <div className="font-bold">{user.email}</div>
        <Link className="text-sm" href="/api/auth/logout">Logout</Link>
        </div>
      </>
    ) : (
      <div>
      <Link href="/api/auth/login">Login</Link>
    </div>
    )}
                </div>
            </div>
          <div className="bg-blue-500">{children}</div>
        </div>
    )
}