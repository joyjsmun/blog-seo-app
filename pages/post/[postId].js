import { withPageAuthRequired } from "@auth0/nextjs-auth0"

export default function Post(){
    return(
        <div>
            Post Page
        </div>
    )
}

export const getServerSideProps = withPageAuthRequired(() => {
    return{
        props:{}
    }
})