import "document-register-element"
import ButtonComponent from "../Common/Button"

export default class BodyComponent extends HTMLDivElement {
  static displayName = "body-component"
  static parentElement = "div"

  constructor() {
    super()

    this.classList.add("hero-body")

		const bodyContainer = document.createElement("div")
		bodyContainer.classList.add("container", "has-text-centered")
		this.appendChild(bodyContainer)
		
		const bodyContainerColumnsCentered = document.createElement("div")
		bodyContainerColumnsCentered.classList.add("columns", "is-vcentered")
		bodyContainer.appendChild(bodyContainerColumnsCentered)
		
		const imageContainer = document.createElement("div")
		imageContainer.classList.add("column", "is-5")
		bodyContainerColumnsCentered.appendChild(imageContainer)

		const imageContainerFigure = document.createElement("figure")
		imageContainerFigure.classList.add("image", "is-4by3")
		imageContainer.appendChild(imageContainerFigure)

		const imageBody = new Image()
		imageBody.src = "http://placehold.it/800x600"
		imageBody.alt = "Description"
		imageContainerFigure.appendChild(imageBody)

		const titleContainer = document.createElement("div")
		titleContainer.classList.add("column", "is-6", "is-offset-1")
		bodyContainerColumnsCentered.appendChild(titleContainer)

		const titleBody = document.createElement("h1")
		titleBody.classList.add("title", "is-2")
		titleBody.innerText = "Superhero Scaffolding"
		titleContainer.appendChild(titleBody)

		const subtitleBody = document.createElement("h2")
		subtitleBody.classList.add("subtitle", "is-4")
		subtitleBody.innerText = "Let this cover page describe a product or service."
		titleContainer.appendChild(subtitleBody)

		const titleParagraph = document.createElement("p")
		titleParagraph.classList.add("has-text-centered")
		titleContainer.appendChild(titleParagraph)

		const titleBtn = new ButtonComponent({ 
			customClass: "is-large",
			innerText: "Learn more" 
		})
		titleParagraph.appendChild(titleBtn)
    
  }
}

customElements.define(
  BodyComponent.displayName,
  BodyComponent,
  { extends: BodyComponent.parentElement }
)