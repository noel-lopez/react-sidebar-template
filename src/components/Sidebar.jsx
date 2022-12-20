import styled from 'styled-components'
import logo from '../assets/react.svg'
import {v} from '../styles/Variables'
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'

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
    </Container>
  )
}

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
`