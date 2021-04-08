import { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useStoreContext } from "./GlobalStore";

function NavbarExtension() {

  const navExt = useRef(null);
  const [store, updateStore] = useStoreContext();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (store.openNavExt) setVisible(true);
    else if (visible && !store.openNavExt) {
      navExt.current.classList.add("nav-ext-close");
      setTimeout(() => { 
        navExt.current.classList.remove("nav-ext-close");
        setVisible(false);
      }, 290);
    }
    // eslint-disable-next-line
  }, [store.openNavExt])

  function closeExt() { updateStore({type:"toggle-nav-ext"}); }

  if (visible && store.winX < 800) return(
    <div className="navbar navbar-dark bg-dark nav-extend" ref={navExt}>
      <div className="container-fluid">
        <div className="navbar-nav col">
          <NavLink exact to="/" className="nav-link" activeClassName="disabled" onClick={closeExt}>Home</NavLink>
        </div>
      </div>
    </div>
  );
  else {
    return null;
  }

}

export default NavbarExtension;