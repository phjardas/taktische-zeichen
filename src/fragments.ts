import type { Point } from "./types";

export type Fragment = {
  id: string;
  label: string;
  content: string;
  size: Point;
};

export const fragments: Array<Fragment> = [
  {
    "id": "1.1",
    "label": "Taktische Formation",
    "size": [
      75,
      45
    ],
    "content": "<rect x=\"1\" y=\"1\" width=\"73\" height=\"43\" />"
  },
  {
    "id": "3.1.1",
    "label": "Brandbekämpfung",
    "size": [
      75,
      45
    ],
    "content": "<path d=\"M1,22.5 H74 M74,1 L50,22.5 L74,44\" />"
  },
  {
    "id": "3.1.6",
    "label": "Bergung",
    "size": [
      75,
      45
    ],
    "content": "<path d=\"M1,15 H15 A22.5 20 180 1 0 60 15 H74\" />"
  },
  {
    "id": "3.2.1",
    "label": "Rettungswesen, Sanitätswesen, Gesundheitswesen",
    "size": [
      75,
      45
    ],
    "content": "<path d=\"M1,22.5 H74 M37.5,1 V44\" />"
  },
  {
    "id": "6.1.1",
    "label": "Fahrzeug",
    "size": [
      75,
      55
    ],
    "content": "<path d=\"M1,44 V1 Q37.5,10 74,1 V44 Z\" />"
  },
  {
    "id": "6.1.2",
    "label": "Kraftfahrzeug landgebunden",
    "size": [
      75,
      65
    ],
    "content": "<path d=\"M1,44 V1 Q37.5,10 74,1 V44 Z\" />\n<circle cx=\"10\" cy=\"49\" r=\"5\" />\n<circle cx=\"65\" cy=\"49\" r=\"5\" />"
  },
  {
    "id": "6.1.3",
    "label": "Kraftfahrzeug geländegängig oder geländefähig",
    "size": [
      75,
      65
    ],
    "content": "<path d=\"M1,44 V1 Q37.5,10 74,1 V44 Z\" />\n<circle cx=\"10\" cy=\"49\" r=\"5\" />\n<circle cx=\"37.5\" cy=\"49\" r=\"5\" />\n<circle cx=\"65\" cy=\"49\" r=\"5\" />"
  }
];