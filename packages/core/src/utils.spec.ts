import {
  calculateComponentPosition,
  resolvePadding,
  transformRect,
} from "./utils";

describe("utils", () => {
  describe("resolvePadding", () => {
    it("should resolve padding with arity 4", () => {
      expect(resolvePadding([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
    });

    it("should resolve padding with arity 3", () => {
      expect(resolvePadding([1, 2, 3])).toEqual([1, 2, 3, 2]);
    });

    it("should resolve padding with arity 2", () => {
      expect(resolvePadding([1, 2])).toEqual([1, 2, 1, 2]);
    });
  });

  describe("calculateComponentPosition", () => {
    it("should scale and center a non-covering component", () => {
      const position = calculateComponentPosition({
        parent: { size: [100, 100] },
        component: { size: [50, 40] },
      });
      expect(position).toEqual({ offset: [0, 10], scale: 2 });
    });

    it("should scale and center a covering component", () => {
      const position = calculateComponentPosition({
        parent: { size: [100, 100] },
        component: { size: [50, 40], cover: true },
      });
      expect(position).toEqual({ offset: [-12.5, 0], scale: 2.5 });
    });

    it("should scale and center a non-covering component with padding", () => {
      const position = calculateComponentPosition({
        parent: { size: [100, 100] },
        component: { size: [50, 40] },
        padding: [10, 20],
      });
      expect(position).toEqual({ offset: [20, 26], scale: 1.2 });
    });

    it("should scale and center a covering component with padding", () => {
      const position = calculateComponentPosition({
        parent: { size: [100, 100] },
        component: { size: [50, 40], cover: true },
        padding: [10, 20],
      });
      expect(position).toEqual({ offset: [0, 10], scale: 2 });
    });
  });

  describe("transformRect", () => {
    it("should apply the offset", () => {
      expect(
        transformRect(
          [
            [1, 2],
            [3, 4],
          ],
          { offset: [10, 20], scale: 1 }
        )
      ).toEqual([
        [11, 22],
        [13, 24],
      ]);
    });

    it("should apply the scale, keeping the position", () => {
      expect(
        transformRect(
          [
            [1, 2],
            [3, 4],
          ],
          { offset: [0, 0], scale: 2 }
        )
      ).toEqual([
        [1, 2],
        [5, 6],
      ]);
    });

    it("should apply scale and then offset", () => {
      expect(
        transformRect(
          [
            [1, 2],
            [3, 4],
          ],
          { offset: [10, 20], scale: 2 }
        )
      ).toEqual([
        [11, 22],
        [15, 26],
      ]);
    });
  });
});
