export type SplitDirection = "horizontal" | "vertical";

export interface LeafNode<T> {
  type: "leaf";
  id: string;
  content: T | null;
  rect: Rect;
}

export interface BranchNode<T> {
  type: "branch";
  id: string;
  direction: SplitDirection;
  ratio: number; // 0–1, split point between children
  children: [TesseraNode<T>, TesseraNode<T>];
  rect: Rect;
}

export type TesseraNode<T> = LeafNode<T> | BranchNode<T>;

export interface Rect {
  x: number; // normalized 0–1
  y: number;
  width: number;
  height: number;
}

export interface TesseraState<T> {
  root: TesseraNode<T>;
  index: Map<string, TesseraNode<T>>;
  focusedId: string | null;
}
