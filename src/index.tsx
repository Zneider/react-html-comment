import * as React from "react";
import * as ReactDOM from "react-dom";

export type Props = { text: string };

const HTMLComment = ({ text }: Props) => {
  const ref = React.createRef<HTMLSpanElement>();

  React.useLayoutEffect(() => {
    if (ref.current) {
      let el: HTMLSpanElement = ref.current;
      ReactDOM.unmountComponentAtNode(el);
      el.outerHTML = `<!-- ${text} -->`;
    }
  }, [ref, text]);

  return <span ref={ref} />;
};

export default HTMLComment;
