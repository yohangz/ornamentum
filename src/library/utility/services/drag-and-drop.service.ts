import { Injectable } from '@angular/core';

export type MoveHandler = (event: MouseEvent, dx: number, dy: number, x: number, y: number) => void;
export type UpHandler = (event: MouseEvent, x: number, y: number, moved: boolean) => void;

@Injectable()
export class DragAndDropService {
  public drag(event: MouseEvent, { move: move, up: up }: { move: MoveHandler, up?: UpHandler }) {
    const startX = event.pageX;
    const startY = event.pageY;
    let x = startX;
    let y = startY;
    let moved = false;

    const mouseMoveHandler = (mouseMoveEvent: MouseEvent) => {
      const dx = mouseMoveEvent.pageX - x;
      const dy = mouseMoveEvent.pageY - y;
      x = mouseMoveEvent.pageX;
      y = mouseMoveEvent.pageY;
      if (dx || dy) {
        moved = true;
      }

      move(mouseMoveEvent, dx, dy, x, y);

      mouseMoveEvent.preventDefault(); // to avoid text selection
    };

    const mouseUpHandler = (mouseUpEvent: MouseEvent) => {
      x = mouseUpEvent.pageX;
      y = mouseUpEvent.pageY;

      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);

      if (up) {
        up(mouseUpEvent, x, y, moved);
      }
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  }
}
