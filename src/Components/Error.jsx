import { useRouteError, Link } from "react-router";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return(
        <>
            <div>
                <h1>{err.status}, {err.data}</h1>
                <Link to='/'>Visit our Home Page</Link>
            </div>
        </>
    )
}

export default Error

export const RestaurantDetailsError = () => {
    return(
        <>
            <h1>We are sorry the Menu items for this Restaurant are closed!! Please Come again after some time......</h1>
        </>
    )
}