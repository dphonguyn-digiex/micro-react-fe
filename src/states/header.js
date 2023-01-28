import { makeAutoObservable } from "mobx";
import { ID_GUIDELINES } from "@constants";

class HeaderModel {
  selectedHeader = ID_GUIDELINES.HOME;

  constructor(_menu) {
    makeAutoObservable(this);
  }

  setSelectedHeader = (_menu) => {
    this.selectedHeader = _menu;
  }
}
export default HeaderModel;
