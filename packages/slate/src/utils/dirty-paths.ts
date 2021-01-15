import { Editor, Path } from '..';
import { DIRTY_PATHS } from './weak-maps';

function getDirtyPaths(editor: Editor): Path[] {
  return DIRTY_PATHS.get(editor) ?? [];
}

function setDirtyPaths(editor: Editor, paths: Path[]) {
  DIRTY_PATHS.set(editor, paths);
}

export { getDirtyPaths, setDirtyPaths };
