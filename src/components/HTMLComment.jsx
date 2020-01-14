import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const HTMLComment = ({ text }) => {
  const ref = React.createRef();

  React.useLayoutEffect(() => {
    if (ref.current) {
      let el = ref.current;
      const parent = el.parentNode;
      const comm = document.createComment(text);
      try {
        if (parent && parent.contains(el)) {
          parent.insertBefore(comm, el);
          ReactDOM.unmountComponentAtNode(parent);
        }
      } catch (err) {
        console.error(err);
      }
    }
  }, []);

  return <span ref={ref} style={{ display: 'none' }} />;
};

HTMLComment.propTypes = {
  text: PropTypes.string,
};

export default HTMLComment;
