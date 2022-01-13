import { Element, SVGElementFactory } from "./svg";
import { type Point } from "./types";

export type Icon = {
  size: Point;
  render(factory: SVGElementFactory): Element;
};

export const drehleiter: Icon = {
  size: [35, 35],
  render: (factory) => factory.path("M1,34 L24,11 H34 V1 H24 V11"),
};

export const hebegeraet: Icon = {
  size: [20, 30],
  render: (factory) => factory.path("M1,30 v-29 h8 a5 5 0 0 0 10 0"),
};

export const raeumgeraet: Icon = {
  size: [30, 19],
  render: (factory) => factory.path("M0,9 h21 m0,-9 v14 l8,4"),
};

export const sprengmittel: Icon = {
  size: [16, 17],
  render: (factory) =>
    factory
      .g()
      .push(factory.circle([8, 9], 1).attr("fill", "black"))
      .push(factory.circle([8, 9], 7))
      .push(factory.path("M4,2.5 l-1,-2 M11.5,2.5 l1,-2")),
};

export const beleuchtung: Icon = {
  size: [15, 20],
  render: (factory) =>
    factory
      .g()
      .push(factory.path("M1,20 v-14 a5 5 0 0 1 10 0"))
      .push(factory.circle([11, 9], 3)),
};

export const bett: Icon = {
  size: [30, 18],
  render: (factory) =>
    factory.path("M1,0 v18 m0,-5 h28 m0,5 v-20 m0,15 c0,-8 -28,-8 -28,0"),
};

export const verpflegung: Icon = {
  size: [17.8, 20],
  render: (factory) => factory.path("M10,10 l6.36,-6.36 a9 9 0 1 0 0 12.72 z"),
};

export const verbrauchsgueter: Icon = {
  size: [18, 24],
  render: (factory) => factory.path("M7,24 v-14 l-7,-10 h18 l-7,10 v14"),
};

export const trinkwasser: Icon = {
  size: [28, 14],
  render: (factory) =>
    factory.path("M1,14 v-3 a7 7 0 0 1 7 -7 h20 m-15,-3 v7 m-4,-7 h8"),
};

export const brauchwasser: Icon = {
  size: [50, 17],
  render: (factory) =>
    factory.path("M1,9 c0,-10 16,-10 16,-1 0,10 16,10 16,1 0,-10 16,-10 16,0"),
};

export const elektrizitaet: Icon = {
  size: [17, 24],
  render: (factory) =>
    factory
      .g()
      .push(factory.path("M14.5,1 l-10,10 h10 l-10,10"))
      .push(factory.path("M4.5,21 l5,2 l-8,0 l2,-7 Z").attr("fill", "black")),
};

export const geraete: Icon = {
  size: [37, 14],
  render: (factory) =>
    factory.path("M6,7 l25,0 m6,-6 a6 6 0 0 0 0 12 M0,1 a6 6 0 0 1 0 12"),
};

export const sprengung: Icon = {
  size: [10, 17],
  render: (factory) =>
    factory.path("M1,1 c0,5 3,15 4,15 1,0 4,-10 4,-15 Z").attr("fill", "black"),
};
