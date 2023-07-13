import { ImSpoonKnife } from "react-icons/im";

export default function Header() {
  return (
    <header className="header">
      <div className="layer">
        <div className="containers">
          <nav className="logo-wrapper">
            <div className="logo">
              <ImSpoonKnife className="brand" />
            </div>
          </nav>
          <div className="header-text">
            <h1>Delicious Recipe</h1>
            <p>cooked food that makes you go wow...</p>
          </div>
        </div>
      </div>
    </header>
  );
}
