import Navbar from '../components/Navbar/Navbar'
import '../styles/Root.css'
import Sidebar from '../components/Sidebar/Sidebar'
import { Helmet } from 'react-helmet';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div style={{ position: 'relative' }}>
            <Helmet>
                <title>YOOM - A workspace for your team, powered by Stream Chat and Clerk.</title>
                <meta name="description" content="A workspace for your team, powered by Stream Chat and Clerk." />
            </Helmet>
            <Navbar />

            <div style={{ display: 'flex'}}>
                <Sidebar />
                <section class='main__content'>
                    <div style={{ width: '100%' }}>
                        <Outlet />
                    </div>
                </section>
            </div>
        </div>
    )
}
export default Root
