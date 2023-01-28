import { makeAutoObservable } from "mobx";
import { ID_ROUTES } from "@constants/declaration.js";
class HeaderModel {
  selectedHeader = ID_ROUTES.HOME;

  constructor(_menu) {
    makeAutoObservable(this);
  }

  setSelectedHeader = (_menu) => {
    this.selectedHeader = _menu;
  }
}
export default HeaderModel;
