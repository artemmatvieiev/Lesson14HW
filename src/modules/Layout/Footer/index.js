import "document-register-element"


export default class FooterComponent extends HTMLDivElement {
  static displayName = "footer-component"
  static parentElement = "div"

  constructor(props) {
    super()
    
    this.classList.add("hero-foot")

    const footerContainer = document.createElement("div")
		footerContainer.classList.add("container")
		this.appendChild(footerContainer)
		
		const footerContainerTabs = document.createElement("div")
		footerContainerTabs.classList.add("tabs", "is-centered")
		footerContainer.appendChild(footerContainerTabs)

		const tabsList = document.createElement("ul")
		footerContainerTabs.appendChild(tabsList)

		const tabsListItem = document.createElement("li")
		tabsList.appendChild(tabsListItem)

		const tabsListItemLink = document.createElement("a")
		tabsListItemLink.innerText = "And this at the bottom"
		tabsListItem.appendChild(tabsListItemLink)
  }
}
customElements.define(
  FooterComponent.displayName, 
  FooterComponent, 
  { extends: FooterComponent.parentElement }
)