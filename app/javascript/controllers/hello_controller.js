import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    console.log('hello controller starting');
    // this.element.textContent = "Hello World!"
  }
}
