import { TesseraNode, TesseraState } from "./types";

interface CreateWorkspaceOptions<T> {
  root?: TesseraNode<T>;
  focusedId?: string | null;
  generateId?: () => string;
}

export function createWorkspace<T>(
  options: CreateWorkspaceOptions<T> = {},
): TesseraState<T> {
  const generateId = options.generateId ?? (() => crypto.randomUUID());
  const root = options.root ?? {
    type: "leaf" as const,
    id: generateId(),
    content: null,
    rect: { x: 0, y: 0, width: 1, height: 1 },
  };
  return {
    root,
    index: new Map<string, TesseraNode<T>>(),
    focusedId: null,
  };
}
