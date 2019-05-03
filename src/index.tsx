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
      try {
        if (parent && parent.contains(el)) {
          parent.replaceChild(comm, el);
          ReactDOM.unmountComponentAtNode(el);
        }
      } catch (err) {
        console.error(err);
      }
    }
  }, []);

  return <span ref={ref} />;
};

export default HTMLComment;
