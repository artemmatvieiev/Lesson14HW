import "document-register-element"

export default class ButtonComponent extends HTMLLinkElement {
  static displayName = "button-component"
  static parentElement = "a"

  constructor(props) {
    super()

    const { customClass, innerText } = props
		if(customClass)
    	this.classList.add("button", customClass)
		else
			this.classList.add("button")
    this.innerText = innerText
  }
}

customElements.define(
  ButtonComponent.displayName, 
  ButtonComponent, 
  { extends: ButtonComponent.parentElement }
)