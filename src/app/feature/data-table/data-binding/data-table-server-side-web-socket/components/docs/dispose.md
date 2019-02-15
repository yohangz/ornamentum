  public dispose(): void {
    if (this.socket) {
      this.socket.complete();
    }

    if (this.socketSubscription) {
      this.socketSubscription.unsubscribe();
    }

    if (this.subject) {
      this.subject.unsubscribe();
    }
  }
