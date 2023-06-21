import { withPageAuthRequired } from "@auth0/nextjs-auth0/client"
import {Layout} from "../../components/Layout"

export default function NewPost(props){
    console.log("New Post Props",props)
    return(
        <div>
            New
        </div>
    )
}

NewPost.getLayout = function getLayout(page,pageProps) {
    return <Layout {...pageProps}>{page}</Layout>
}


// export const getServerSideProps = withPageAuthRequired(() => {
//     return{
//         props:{}
//     }
// })