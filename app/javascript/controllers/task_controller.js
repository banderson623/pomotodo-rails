import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="task"
export default class extends Controller {
    static targets = [ "progressBar", "duration" ]

  connect() {
    console.log('connected!')
  }

  start() {
    const progressBarElement = this.progressBarTarget;
    const durationElement = this.durationTarget;
    const duration = parseFloat(durationElement.getAttribute('data-duration'));
    const durationInSeconds = duration * 60;
    progressBarElement.style.transition = "width " + durationInSeconds + "s";
    progressBarElement.style.width = "100%";
  }
}
