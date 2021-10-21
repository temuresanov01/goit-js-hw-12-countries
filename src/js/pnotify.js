import { notice, error } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";

export function myNotice() {
  notice({
    text: "Too many matches found. Please enter a more specific query!",
  });
}

export function myError() {
  error({
    text: "There's no country with this name",
  });
}
