import LayoutContainer from "./modules/Layout"
import "./index.scss"

const onLoad = function () {
  document.body.appendChild(new LayoutContainer())
}
window.addEventListener("load", onLoad)