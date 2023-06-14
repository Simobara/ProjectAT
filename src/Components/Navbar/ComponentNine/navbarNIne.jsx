import { Navbar } from 'responsive-navbar-react'
import 'responsive-navbar-react/dist/index.css'

const Home = () => {
    const props = {
        items: [
            {
                text: 'Home',
                link: '/'
            },
            {
                text: 'Doc',
                link: '/'
            },
            {
                text: 'Custom',
                link: '/'
            },
            {
                text: 'Contact',
                link: '/'
            }
        ],
        logo: {
            text: 'Responsive Navbar React'
        },
        style: {
            barStyles: {
                background: '#444'
            },
            sidebarStyles: {
                background: '#222',
                buttonColor: 'white'
            }
        }
    }
    return (
        <div className="home">
            <Navbar {...props} />
        </div>
    )
}