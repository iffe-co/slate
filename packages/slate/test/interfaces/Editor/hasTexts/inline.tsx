/** @jsx jsx */
import { Editor } from '@solidoc/slate';
import { jsx } from '../../..';

export const input = (
  <editor>
    <block>
      one<inline>two</inline>three
    </block>
  </editor>
);
export const test = editor => {
  const inline = editor.children[0].children[1];
  return Editor.hasTexts(editor, inline);
};
export const output = true;
