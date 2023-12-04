import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <table cellPadding="10" cellSpacing="10">
            <nav>
                <ul>
                    <td>
                        <Link to="/">Pealeht</Link>
                    </td>
                    <td>
                        <Link to="/Contact">Kontaktid</Link>
                    </td>
                </ul>
            </nav>

            <Outlet />
        </table>
    )
};

export default Layout;