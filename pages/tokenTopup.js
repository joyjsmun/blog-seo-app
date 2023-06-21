import { withPageAuthRequired } from "@auth0/nextjs-auth0"
import { Layout } from "../components/Layout"

export default function TokenTopup(){
    return(
        <div>
            TokenTopup
        </div>
    )
}

TokenTopup.getLayout = function getLayout(page,pageProps) {
    return <Layout {...pageProps}>{page}</Layout>
}

export const getServerSideProps = withPageAuthRequired(() => {
    return{
        props:{}
    }
})