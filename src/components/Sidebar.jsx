import styled from 'styled-components'
import logo from '../assets/react.svg'
import {v} from '../styles/Variables'
import {
  AiOutlineLeft, 
  AiOutlineHome, 
  AiOutlineShopping, 
  AiOutlineUser, 
  AiOutlineBarChart,
  AiOutlinePieChart,
  AiOutlineSetting
} from 'react-icons/ai'
import { MdLogout } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from '../App'

export function Sidebar({ open, setOpen }) {
  const swapOpen = () => {
    setOpen(!open)
  }

  const {theme, setTheme} = useContext(ThemeContext)
  const swapTheme = () => {
    setTheme((theme) => (theme==='light'?'dark':'light'))
  }

  return (
    <Container isOpen={open} themeUse={theme}>
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
          <NavLink to={to} className={({isActive})=>`links${isActive?` active`:``}`}>
            <div className='linkIcon'>
              {icon}
            </div>
            { open && <span>{label}</span> }
          </NavLink>
        </div>
      ))}
      <Divider />
      {secondaryLinksArray.map(({icon, label, to}) => (
        <div className='linkContainer' key={label}>
          <NavLink to={to} className={({isActive})=>`links${isActive?` active`:``}`}>
            <div className='linkIcon'>
              {icon}
            </div>
            { open && <span>{label}</span> }
          </NavLink>
        </div>
      ))}
      <Divider />
      <div className='themeContent'>
        {open && <span className='titletheme'>Dark mode</span>}
        <div className='toggleContent'>
          <div className='grid theme-container'>
            <div className='content'>
              <div className='demo'>
                <label className='switch' istheme={theme}>
                  <input
                    istheme={theme}
                    type='checkbox'
                    className='theme-swither'
                    onClick={swapTheme}
                  ></input>
                  <span istheme={theme} className='slider round'></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
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
    label: 'Graphs',
    icon: <AiOutlineBarChart />,
    to: '/graphs'
  },
  {
    label: 'Charts',
    icon: <AiOutlinePieChart />,
    to: '/charts'
  }
];
const secondaryLinksArray = [
  {
    label: 'Settings',
    icon: <AiOutlineSetting />,
    to: '/settings'
  },
  {
    label: 'Exit',
    icon: <MdLogout />,
    to: '/exit'
  }
];
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
    background: ${(props) => props.theme.bgtotal};
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
      color: ${(props)=>props.theme.text};
      .linkIcon {
        padding: ${v.smSpacing} ${v.mdSpacing};
        display: flex;
        svg {
          font-size: 25px;
        }
      }
      &.active {
        .linkIcon {
          svg {
            color: ${(props)=>props.theme.bg4};
          }
        }
      }
    }
  }
  .themeContent {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .titletheme {
      display: block;
      padding: 10px;
      font-weight: 700;
      opacity: ${({ isOpen }) => (isOpen ? `1` : `0`)};
      transition: all 0.3s;
      white-space: nowrap;
      overflow: hidden;
    }
    .toggleContent {
      margin: ${({ isOpen }) => (isOpen ? `auto 40px` : `auto 15px`)};
      width: 36px;
      height: 20px;
      border-radius: 10px;
      transition: all 0.3s;
      position: relative;
      .theme-container {
        background-blend-mode: multiply, multiply;
        transition: 0.4s;
        .grid {
          display: grid;
          justify-items: center;
          align-content: center;
          height: 100vh;
          width: 100vw;
          font-family: 'Lato', sans-serif;
        }
        .demo {
          font-size: 32px;
          .switch {
            position: relative;
            display: inline-block;
            width: 60px;
            height: 34px;
            .theme-swither {
              opacity: 0;
              width: 0;
              height: 0;
              &:checked + .slider:before {
                left: 4px;
                content: '🌑';
                transform: translateX(26px);
              }
            }
            .slider {
              position: absolute;
              cursor: pointer;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: ${({ themeUse }) =>
                themeUse === 'light' ? v.lightcheckbox : v.checkbox};
              transition: 0.4s;
              &::before {
                position: absolute;
                content: '☀️';
                height: 0px;
                width: 0px;
                left: -10px;
                top: 16px;
                line-height: 0px;
                transition: 0.4s;
              }
              &.round {
                border-radius: 34px;
                &::before {
                  border-radius: 50%;
                }
              }
            }
          }
        }
      }
    }
  }
`;
const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${(props) => props.theme.bg3};
  margin: ${v.lgSpacing} 0;
`;
//#endregion