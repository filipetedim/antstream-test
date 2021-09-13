// Package dependencies
import { extendObservable } from 'mobx';

// Utils
import KEYS from '../utils/keys';

class InputStore {
  constructor() {
    extendObservable(this, {
      selectableComponents: [],
      currentRef: null,
      currentParent: null,
      // TODO: when press enter, give option to "LOCK" the parent container
      // and keep track of how many times enter has been pressed and keep an array [] of the
      // previous Refs where "enter" was pressed so we can return
    });
  }

  /**
   * Adds a new selectable component to the list.
   * If none exists, the app is booting, and actively selects the first one.
   */
  addComponent = (ref) => {
    if (this.selectableComponents.length === 0) {
      this.selectComponent(ref);
    }

    this.selectableComponents.push({ ref, rect: ref.current.getBoundingClientRect() });
  };

  /**
   * Selects the the element passed in as the current selectableComponent.
   * Before changing, removes the 'selectable-active' class from the previous one if it exists.
   */
  selectComponent = (ref) => {
    if (this.currentRef) {
      this.currentRef.current.className = this.currentRef.current.className.replace(
        ' selectable-active',
        ''
      );
    }

    this.currentRef = ref;
    const currentY = this.getY0(ref.current) - 90;
    const currentX = this.getX0(ref.current) - 180;

    ref.current.parentNode.scrollLeft = currentX;
    window.scroll({
      top: currentY,
      behavior: 'smooth',
    });

    ref.current.className += ' selectable-active';
  };

  /**
   * Adds the event listeners for keyboard strokes with arrows, ESC, and Enter.
   */
  addEventListeners = (document) => {
    document.addEventListener('keydown', (event) => {
      switch (event.keyCode) {
        case KEYS.ESCAPE_KEY:
          break;
        case KEYS.ARROW_UP:
          this.calculateRects();
          this.findClosestTop(this.currentRef);
          event.preventDefault();
          break;
        case KEYS.ARROW_LEFT:
          this.calculateRects();
          this.findClosestLeft(this.currentRef);
          event.preventDefault();
          break;
        case KEYS.ARROW_DOWN:
          this.calculateRects();
          this.findClosestDown(this.currentRef);
          event.preventDefault();
          break;
        case KEYS.ARROW_RIGHT:
          this.calculateRects();
          this.findClosestRight(this.currentRef);
          event.preventDefault();
          break;
        default:
          break;
      }
    });
  };

  /**
   * Adds the rects to every single component when re-rendered or a key is pressed.
   */
  calculateRects = () => {
    this.selectableComponents = this.selectableComponents.map((component) => {
      const rect = component.ref.current.getBoundingClientRect();
      return {
        ref: component.ref,
        rect,
      };
    });
  };

  /**
   * Util functions.
   */
  calcDistance = (x1, y1, x2, y2) => Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
  sortAsc = (prev, next) => prev.distance - next.distance;
  sortDesc = (prev, next) => next.distance - prev.distance;
  getX0 = (el) => el.offsetLeft + (el.offsetParent && this.getX0(el.offsetParent));
  getY0 = (el) => el.offsetTop + (el.offsetParent && this.getY0(el.offsetParent));

  /**
   * Finds the closest ref on the right.
   */
  findClosestRight = (currentRef, range) => {
    range = range || 20;
    const allowedRight = currentRef.current.parentNode.getAttribute('right') !== 'false';
    const selecRect = currentRef.current.getBoundingClientRect();

    // Search the next closest element
    let nextRef = this.selectableComponents
      .filter(
        ({ rect }) =>
          rect.top >= selecRect.top - range &&
          rect.top <= selecRect.top + range &&
          rect.left >= selecRect.right
      )
      .map(({ ref, rect }) => {
        if (ref.current === currentRef.current) return;
        const distance = this.calcDistance(selecRect.right, selecRect.top, rect.Left, rect.top);
        return { ref, rect, distance };
      })
      .sort(this.sortAsc)[0];

    // Search the far opposite side
    if (!nextRef && !allowedRight) {
      nextRef = this.selectableComponents
        .filter(
          ({ rect }) =>
            rect.top >= selecRect.top - range &&
            rect.top <= selecRect.top + range &&
            rect.right <= selecRect.left
        )
        .map(({ ref, rect }) => {
          if (ref.current === currentRef.current) return;
          const distance = this.calcDistance(selecRect.left, selecRect.top, rect.right, rect.top);
          return { ref, rect, distance };
        })
        .sort(this.sortDesc)[0];
    }

    // If none was found, widen the range
    if (!nextRef) {
      return this.findClosestRight(currentRef, range + 150);
    }

    this.selectComponent(nextRef.ref);
  };

  /**
   * Finds the closest ref on the Left.
   */
  findClosestLeft = (currentRef, range) => {
    range = range || 25;
    const allowedLeft = currentRef.current.parentNode.getAttribute('left') !== 'false';
    const selecRect = currentRef.current.getBoundingClientRect();

    // Search the next closest element
    let nextRef = this.selectableComponents
      .filter(
        ({ rect }) =>
          rect.top >= selecRect.top - range &&
          rect.top <= selecRect.top + range &&
          rect.right <= selecRect.left
      )
      .map(({ ref, rect }) => {
        if (ref.current === currentRef.current) return;
        const distance = this.calcDistance(selecRect.left, selecRect.top, rect.right, rect.top);
        return { ref, rect, distance };
      })
      .sort(this.sortAsc)[0];

    // Search the far opposite side
    if (!nextRef && !allowedLeft) {
      nextRef = this.selectableComponents
        .filter(
          ({ rect }) =>
            rect.top >= selecRect.top - range &&
            rect.top <= selecRect.bottom + range &&
            rect.left >= selecRect.right
        )
        .map(({ ref, rect }) => {
          if (ref.current === currentRef.current) return;
          const distance = this.calcDistance(selecRect.right, selecRect.top, rect.left, rect.top);
          return { ref, rect, distance };
        })
        .sort(this.sortDesc)[0];
    }

    // If none was found, widen the range
    if (!nextRef) {
      return this.findClosestLeft(currentRef, range + 150);
    }

    this.selectComponent(nextRef.ref);
  };

  /**
   * Finds the closest ref down.
   */
  findClosestDown = (currentRef, range) => {
    range = range || 150;
    const allowedDown = currentRef.current.parentNode.getAttribute('down') !== 'false';
    const selecRect = currentRef.current.getBoundingClientRect();

    // Search the next closest element
    let nextRef = this.selectableComponents
      .filter(
        ({ rect }) =>
          rect.left >= selecRect.left - range &&
          rect.left <= selecRect.left + range &&
          rect.top >= selecRect.bottom
      )
      .map(({ ref, rect }) => {
        if (ref.current === currentRef.current) return;
        const d1 = this.calcDistance(selecRect.left, selecRect.bottom, rect.left, rect.top);
        const d2 = this.calcDistance(selecRect.left, selecRect.bottom, rect.right, rect.top);
        return { ref, rect, distance: d1 < d2 ? d1 : d2 };
      })
      .sort(this.sortAsc)[0];

    // Search the far opposite side
    if (!nextRef && !allowedDown) {
      nextRef = this.selectableComponents
        .filter(
          ({ rect }) =>
            rect.left >= selecRect.left - range &&
            rect.left <= selecRect.left + range &&
            rect.bottom <= selecRect.top
        )
        .map(({ ref, rect }) => {
          if (ref.current === currentRef.current) return;
          const distance = this.calcDistance(selecRect.left, selecRect.top, rect.left, rect.bottom);
          return { ref, rect, distance };
        })
        .sort(this.sortDesc)[0];
    }

    // If none was found, widen the range
    if (!nextRef) {
      return this.findClosestDown(currentRef, range + 150);
    }

    this.selectComponent(nextRef.ref);
  };

  /**
   * Finds the closest ref on the top.
   */
  findClosestTop = (currentRef, range) => {
    range = range || 150;
    const allowedUp = currentRef.current.parentNode.getAttribute('up') !== 'false';
    const selecRect = currentRef.current.getBoundingClientRect();

    // Search the next closest element
    let nextRef = this.selectableComponents
      .filter(
        ({ rect }) =>
          rect.left >= selecRect.left - range &&
          rect.left <= selecRect.left + range &&
          rect.bottom <= selecRect.top
      )
      .map(({ ref, rect }) => {
        if (ref.current === currentRef.current) return;
        const d1 = this.calcDistance(selecRect.left, selecRect.top, rect.left, rect.bottom);
        const d2 = this.calcDistance(selecRect.left, selecRect.top, rect.right, rect.bottom);
        return { ref, rect, distance: d1 < d2 ? d1 : d2 };
      })
      .sort(this.sortAsc)[0];

    // Search the far opposite side
    if (!nextRef && !allowedUp) {
      nextRef = this.selectableComponents
        .filter(
          ({ rect }) =>
            rect.left >= selecRect.left - range &&
            rect.left <= selecRect.left + range &&
            rect.top >= selecRect.bottom
        )
        .map(({ ref, rect }) => {
          if (ref.current === currentRef.current) return;
          const distance = this.calcDistance(selecRect.left, selecRect.bottom, rect.left, rect.top);
          return { ref, rect, distance };
        })
        .sort(this.sortDesc)[0];
    }

    // If none was found, widen the range
    if (!nextRef) {
      return this.findClosestTop(currentRef, range + 150);
    }

    this.selectComponent(nextRef.ref);
  };
}

export default new InputStore();
