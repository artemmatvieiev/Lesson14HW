import "document-register-element"

export default class NavLinkComponent extends HTMLLinkElement {
  static displayName = "navlink-component"
  static parentElement = "a"

  constructor(props) {
    super()

    const { customClass, innerText } = props
		if(customClass) 
    	this.classList.add("nav-item", "is-tab", customClass)
		else 
			this.classList.add("nav-item", "is-tab")
    this.innerText = innerText
  }
}

customElements.define(
  NavLinkComponent.displayName, 
  NavLinkComponent, 
  { extends: NavLinkComponent.parentElement }
)