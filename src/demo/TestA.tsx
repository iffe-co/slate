import { useEffect } from 'react';
import { ReactEditor, RenderElementProps, useSlateStatic } from '@solidoc/slate-react';
import { Transforms, Node } from '@solidoc/slate';
import { createDraft, finishDraft } from 'immer';

export const TestA = (props: RenderElementProps) => {
  const { attributes, children, element } = props;
  const editor = useSlateStatic();
  const { checked } = element;

  const onClickSlate = () => {
    const path = ReactEditor.findPath(editor, element);
    const insertNode = { type: 'testp', children: [{ text: '我是slate insert' }] };
    Transforms.insertNodes(editor, insertNode, { at: path.concat(0) });
  };

  const onClickImmer = () => {
    const insertPath = [0, 0, 0];
    const insertNode = { type: 'testp', children: [{ text: 'immer insert' }] };

    editor.viewApply(() => {
      editor.children = createDraft(editor.children);
      const parent = Node.parent(editor, insertPath);
      parent.children.push(insertNode);
      editor.children = finishDraft(editor.children);
      editor.onChange();
    }, insertPath);
  };

  const onSetNode = () => {
    const path = ReactEditor.findPath(editor, element);
    Transforms.setNodes(editor, { checked: !checked }, { at: path });
  };

  useEffect(() => {
    console.info('组件加载了useEffect');
    return () => {
      console.info('组件卸载useEffect');
    };
  }, []);

  return (
    <div {...attributes}>
      <div>
        <div contentEditable={false} suppressContentEditableWarning>
          <button onClick={onClickSlate}>slate insert</button>
          <button onClick={onSetNode}>slate set</button>
          <button onClick={onClickImmer}>immer insert</button>
          {checked ? 'true' : 'false'}
        </div>
        <span>{children}</span>
      </div>
    </div>
  );
};
