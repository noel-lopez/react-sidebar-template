import styled from 'styled-components'
import logo from '../assets/react.svg'
import {v} from '../styles/Variables'
import {
  AiOutlineLeft, 
  AiOutlineHome, 
  AiOutlineShopping, 
  AiOutlineUser, 
  AiOutlineBarChart
} from 'react-icons/ai'
import { Link } from 'react-router-dom'

export function Sidebar({ open, setOpen }) {
  const swapOpen = () => {
    setOpen(!open)
  }

  return (
    <Container isOpen={open}>
      <button onClick={swapOpen} className='sidebarButton'>
        <AiOutlineLeft />
      </button>
      <div className='logo'>
        <div className='logoimg'>
          <img src={logo} />
        </div>
        <h2>
          sidebar
        </h2>
      </div>
      {linksArray.map(({icon, label, to}) => (
        <div className='linkContainer' key={label}>
          <Link to={to} className='links'>
            <div className='linkIcon'>
              {icon}
            </div>
            {
              open && (
                <span>{label}</span>
              )
            }
          </Link>
        </div>
      ))}
    </Container>
  )
}

//#region Data Links
const linksArray = [
  {
    label: 'Home',
    icon: <AiOutlineHome/>,
    to: '/'
  },
  {
    label: 'Products',
    icon: <AiOutlineShopping />,
    to: '/products'
  },
  {
    label: 'Users',
    icon: <AiOutlineUser />,
    to: '/users'
  },
  {
    label: 'Diagrams',
    icon: <AiOutlineBarChart />,
    to: '/products'
  },
  {
    label: 'Stats',
    icon: <AiOutlineBarChart />,
    to: '/products'
  }
]
//#endregion

//#region STYLED COMPONENTS
const Container = styled.div`
  background: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.text};
  position: sticky; /* flows with the parent to have his width */
  padding-top: 20px;
  .sidebarButton {
    position: absolute;
    top: ${v.xxlSpacing};
    right: -18px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${(props) => props.theme.bgtgright};
    box-shadow: 0 0 4px ${(props) => props.theme.bg3}, 0 0 7px ${(props) => props.theme.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s;
    transform: ${({isOpen}) => (isOpen?`initial`:`rotate(180deg)`)};
    border: none;
    letter-spacing: inherit;
    color: inherit;
    font-size: inherit;
    text-align: inherit;
    padding: 0;
    font-family: inherit;
    outline: none;
  }
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: ${v.lgSpacing};
    .logoimg {
      display: flex;
      img {
        max-width: 100%;
        height: auto;
      }
      cursor: pointer;
      transition: all 0.3s;
      transform: ${({isOpen}) => (isOpen?`scale(0.7)`:`scale(1.5)`)};
    }
    h2 {
      display: ${({isOpen}) => (isOpen?`block`:`none`)};
    }
  }
  .linkContainer {
    margin: 8px 0;
    padding: 0 15%;
    :hover{
      background: ${(props) => props.theme.bg3};
    }
    .links {
      display: flex;
      align-items: center;
      text-decoration: none;
      padding: calc(${v.smSpacing}-2px) 0;
      .linkIcon {
        padding: ${v.smSpacing} ${v.mdSpacing};
        display: flex;
        svg {
          font-size: 25px;
        }
      }
    }
  }
`
//#endregion