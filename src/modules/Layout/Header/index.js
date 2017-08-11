import "document-register-element"
import NavLinkComponent from "../Common/NavLink"
import ButtonComponent from "../Common/Button"

export default class HeaderComponent extends HTMLDivElement {
  static displayName = "header-component"
  static parentElement = "div"

  constructor() {
    super()
    
    this.classList.add("hero-head")

    const headerContainer = document.createElement("div")
		headerContainer.classList.add("container")
		this.appendChild(headerContainer)
		
		const headerNavigation = document.createElement("nav")
		headerNavigation.classList.add("nav", "has-shadow")
		headerContainer.appendChild(headerNavigation)

		const headerNavigationContainer = document.createElement("div")
		headerNavigationContainer.classList.add("container")
		headerNavigation.appendChild(headerNavigationContainer)

		const navigationLeft = document.createElement("div")
		navigationLeft.classList.add("nav-left")
		headerNavigationContainer.appendChild(navigationLeft)

		const LogoLink = document.createElement("a")
		LogoLink.classList.add("nav-item")
		LogoLink.setAttribute("href", "../index.html")
		navigationLeft.appendChild(LogoLink)

		const LogoImg = new Image()
		LogoImg.src = "https://raw.githubusercontent.com/dansup/bulma-templates/gh-pages/images/bulma.png"
		LogoImg.alt = "Description"
		LogoLink.appendChild(LogoImg)
		
		const navigationToggle = document.createElement("span")
		navigationToggle.classList.add("nav-toggle")
		headerNavigationContainer.appendChild(navigationToggle)

		const spanToggle1 = document.createElement("span")
		navigationToggle.appendChild(spanToggle1)	
		const spanToggle2 = document.createElement("span")
		navigationToggle.appendChild(spanToggle2)	
		const spanToggle3 = document.createElement("span")
		navigationToggle.appendChild(spanToggle3)


		const navigationRight = document.createElement("div")
		navigationRight.classList.add("nav-right", "nav-menu")
		headerNavigationContainer.appendChild(navigationRight)

		const homeNav = new NavLinkComponent({ 
			customClass: "is-active",
			innerText: "Home" 
		})
		navigationRight.appendChild(homeNav)

		const featuresNav = new NavLinkComponent({ 
			innerText: "Features" 
		})
		navigationRight.appendChild(featuresNav)

		const teamNav = new NavLinkComponent({ 
			innerText: "Team" 
		})
		navigationRight.appendChild(teamNav)

		const helpNav = new NavLinkComponent({ 
			innerText: "Help" 
		})
		navigationRight.appendChild(helpNav)

		const buttonsContainerNav = document.createElement("span")
		buttonsContainerNav.classList.add("nav-item")
		navigationRight.appendChild(buttonsContainerNav)

		const logInBtn = new ButtonComponent({
			innerText: "Log in" 
		})
		buttonsContainerNav.appendChild(logInBtn)

		const signUpBtn = new ButtonComponent({
			customClass: "is-info",
			innerText: "Sign up" 
		})
		buttonsContainerNav.appendChild(signUpBtn)
  }
}

customElements.define(
  HeaderComponent.displayName, 
  HeaderComponent, 
  { extends: HeaderComponent.parentElement }
)