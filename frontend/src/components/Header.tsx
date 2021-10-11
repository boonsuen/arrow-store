import styled from 'styled-components';
import Link from 'next/link';

const StyledHeader = styled.header`
  height: 88px;
  width: 100%;
  border-bottom: 1px solid rgb(0 0 0 / 10%);

  .header__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    & > * {
      flex: 1;
      display: flex;
      justify-content: center;

      &:first-child > ul {
        margin-right: auto;
      }
      &:last-child > div {
        margin-left: auto;
      }
    }
  }

  .header__logo-link {
    display: flex;

    span {
      font-size: 20px;
      letter-spacing: 3px;
    }
  }

  .nav {
    li {
      display: inline-block;
      list-style: none;
      &:not(:last-child) {
        margin-right: 31px;
      }
    }
    a {
      color: #0e131d;
      transition: color 0.3s;
      &:hover {
        color: #0066ff;
      }
    }
  }

  .header__menu > div {
    display: flex;
  }

  .header__cart {
    margin-left: 18px;
  }
`;

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <div className="header__wrapper container">
        <nav className="nav">
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/shop">
                <a>Shop</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
        <Link href="/">
          <a className="header__logo-link">
            <span>ARROW</span>
          </a>
        </Link>
        <div className="header__menu">
          <div>
            <Link href="/account">
              <a title="Your account">
                <svg
                  width="24"
                  height="24"
                  fill="#000000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 3.75a5.25 5.25 0 100 10.5 5.25 5.25 0 000-10.5zM5.25 9a6.75 6.75 0 1113.5 0 6.75 6.75 0 01-13.5 0z"
                  ></path>
                  <path
                    fillRule="evenodd"
                    d="M12 15.75a9.754 9.754 0 00-8.445 4.874.75.75 0 11-1.3-.75 11.254 11.254 0 0119.49 0 .75.75 0 01-1.3.75A9.754 9.754 0 0012 15.75z"
                  ></path>
                </svg>
              </a>
            </Link>
            <Link href="/cart">
              <div className="header__cart">
                <div className="current-menu-item">
                  <Link href="/cart">
                    <a
                      className="cart-contents"
                      title="View your shopping cart"
                    >
                      <span className="cart-count">
                        <i className="ws-svg-icon">
                          <svg
                            width="24"
                            height="24"
                            fill="#000000"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7.5 21.75a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM17.25 21.75a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                            <path
                              fillRule="evenodd"
                              d="M0 3a.75.75 0 01.75-.75h1.577A1.5 1.5 0 013.77 3.338L4.53 6h16.256a.75.75 0 01.72.956l-2.474 8.662a2.25 2.25 0 01-2.163 1.632H7.88a2.25 2.25 0 01-2.163-1.632l-2.47-8.645a.738.738 0 01-.01-.033l-.91-3.19H.75A.75.75 0 010 3zm4.959 4.5l2.201 7.706a.75.75 0 00.721.544h8.988a.75.75 0 00.72-.544L19.792 7.5H4.96z"
                            ></path>
                          </svg>
                        </i>
                        <span className="count-number">0</span>
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
