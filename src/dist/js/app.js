class App {
  constructor() {
    this.appName = "AetherDash";
    this.appVersion = "3.0";
    this.sidebarOpen = false;
    this.isSidebarCollapsed =
      localStorage.getItem("isSidebarCollapsed") === "true";
    this.dropdownProfileOpen = false;
    this.dropdownNotificationOpen = false;
    this.isModalOpen = false;
    this.activeTab = "details";
    this.notifications = [{ id: 1, text: "User baru telah mendaftar." }];
  }

  init() {
    this.$watch("isSidebarCollapsed", (val) =>
      localStorage.setItem("isSidebarCollapsed", val)
    );

    document.title = `Dasboard - ${this.appName}`;
  }

  toggleSidebarCollapse() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  /**
   * @param {number} id
   */
  removeNotification(id) {
    this.notifications = this.notifications.filter((n) => n.id !== id);
  }
}

const aether = new App();
