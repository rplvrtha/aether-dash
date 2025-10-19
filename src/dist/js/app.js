class App {
  constructor() {
    this.app = {
      name: "AetherDash",
      version: "1.0-rc",
    };
    this.sideBar = {
      isOpen: false,
      isCollapsed: localStorage.getItem("isCollapsed") === "true",
    };
    this.navBar = {
      profile: {
        isOpen: false,
      },
      notifications: {
        isOpen: false,
        items: [
          {
            id: 1,
            type: "comment",
            user: { name: "Budi Doremi" },
            content: "mengomentari postingan Anda.",
            time: "5 menit yang lalu",
          },
          {
            id: 2,
            type: "user",
            user: { name: "Jane Smith" },
            content: "mendaftar sebagai pengguna baru.",
            time: "1 jam yang lalu",
          },
          {
            id: 3,
            type: "server",
            user: { name: "System Alert" },
            content: "Server #3 mengalami overload.",
            time: "3 jam yang lalu",
          },
        ],
      },
    };
    this.flashMessage = [{ id: 1, text: "User baru telah mendaftar." }];
    this.modal = {
      isOpen: false,
    };
    this.isTransformed = false;
    this.activeTab = "details";
  }

  init() {
    this.$watch("isCollapsed", (val) =>
      localStorage.setItem("isCollapsed", val)
    );

    document.title = `${this.app.name} | Dashboard`;
  }

  toggleSidebarCollapse() {
    this.sideBar.isCollapsed = !this.sideBar.isCollapsed;
    this.isTransformed = !this.isTransformed;
  }

  toggleNotifyOpen() {
    this.navBar.notifications.isOpen = !this.navBar.notifications.isOpen;
    this.navBar.profile.isOpen = false;
  }

  toggleProfileOpen() {
    this.navBar.profile.isOpen = !this.navBar.profile.isOpen;
    this.navBar.notifications.isOpen = false;
  }

  /**
   * @param {number} id
   */
  removeNotification(id) {
    this.navBar.notifications.items = this.navBar.notifications.items.filter(
      (n) => n.id !== id
    );
  }
  removeFlash(id) {
    this.flashMessage = this.flashMessage.filter((n) => n.id !== id);
  }
}

const aether = new App();
