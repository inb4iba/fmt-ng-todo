import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  tasks: string[] = [];
  taskInput = "";

  addTask() {
    if (this.taskInput) this.tasks.push(this.taskInput);
    this.taskInput = "";
  }

  updateStyle(event: any) {
    if (event.target.checked) event.target.nextSibling.classList = "lined";
    else event.target.nextSibling.classList = "";
  }
}
