import * as React from "react";
import * as ReactDOM from "react-dom";

export type Props = { text: string };

const HTMLComment = ({ text }: Props) => {
  const ref = React.createRef<HTMLSpanElement>();

  React.useLayoutEffect(() => {
    if (ref.current) {
      let el: HTMLSpanElement = ref.current;
      const parent = el.parentNode;
      const comm = document.createComment(text);
      if (parent) {
        parent.replaceChild(comm, el);
      }
      ReactDOM.unmountComponentAtNode(el);
    }
  }, [ref, text]);

  return <span ref={ref} />;
};

export default HTMLComment;
