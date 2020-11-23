import { ReactEditor, RenderElementProps, useSlateStatic } from '@solidoc/slate-react';
import { Transforms } from '@solidoc/slate';

export const TestP = (props: RenderElementProps) => {
  const { attributes, children, element } = props;
  const editor = useSlateStatic();
  const { checked } = element;

  const onClick = () => {
    const path = ReactEditor.findPath(editor, element);
    Transforms.setNodes(editor, { checked: !checked }, { at: path });
  };

  return (
    <div {...attributes}>
      <div>
        <div contentEditable={false} suppressContentEditableWarning>
          <button onClick={onClick}>testp按钮</button>
          {checked ? 'true' : 'false'}
        </div>
        <span>{children}</span>
      </div>
    </div>
  );
};
