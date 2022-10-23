import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="task"
export default class extends Controller {
    static targets = [ "progressBar", "duration" ]

  connect() {
  }

  start() {
    const progressBarElement = this.progressBarTarget;
    const durationElement = this.durationTarget;
    const duration = parseFloat(durationElement.getAttribute('data-duration'));
    const durationInSeconds = duration * 60;
    progressBarElement.style.transition = "width " + durationInSeconds + "s linear";
    progressBarElement.style.width = "100%";
  }
}
