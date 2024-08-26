import { useSelector } from "react-redux"
import { Outlet, Navigate} from "react-router-dom";

export default function PrivateRoute() {
    const { curresntUser } =useSelector((state) => state.user)
  return  curresntUser ? <Outlet /> : <Navigate to = '/sign-in' />
}
