import { Link } from "react-router-dom"

function NotFoundPage() {
    return (
        <div className="pt-10 text-3xl text-center text-red-600">
        <Link to="/">Go To Home Page </Link>
        </div>
    )
}

export default NotFoundPage
