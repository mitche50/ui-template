import { action, extendObservable } from 'mobx';

class UiStateStore {
  public sidebarOpen!: boolean;

  constructor() {
    extendObservable(this, {
      sidebarOpen: false,
    });
  }

  openSidebar = action(() => {
    this.sidebarOpen = true;
  });

  closeSidebar = action(() => {
    this.sidebarOpen = false;
  });
}

export default UiStateStore;
