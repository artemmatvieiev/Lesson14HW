import "document-register-element"
import HeaderComponent from "./Header"
import BodyComponent from "./Body"
import FooterComponent from "./Footer"

const headerComponent = new HeaderComponent()
const bodyComponent = new BodyComponent()
const footerComponent = new FooterComponent()

export default class LayoutContainer extends HTMLDivElement {
  static displayName = "layout-container"
  static parentElement = "section"

  constructor() {
    super()
		this.classList.add("hero",
											 "is-fullheight",
											 "is-default",
											 "is-bold")
    
    this.appendChild(headerComponent)
    this.appendChild(bodyComponent)
    this.appendChild(footerComponent)
  }
}

customElements.define(
  LayoutContainer.displayName, 
  LayoutContainer, 
  { extends: LayoutContainer.parentElement }
)