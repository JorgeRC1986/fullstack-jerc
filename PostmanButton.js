// PostmanButton.js
import { useEffect } from 'react';

const PostmanButton = () => {
  useEffect(() => {
    (function (p, o, s, t, m, a, n) {
      !p[s] &&
        (p[s] = function () {
          (p[t] || (p[t] = [])).push(arguments);
        });
      !o.getElementById(s + t) &&
        o.getElementsByTagName('head')[0].appendChild(
          ((n = o.createElement('script')),
          (n.id = s + t),
          (n.async = 1),
          (n.src = m),
          n)
        );
    })(window, document, '_pm', 'PostmanRunObject', 'https://run.pstmn.io/button.js');
  }, []);

  return (
    <div
      className="postman-run-button"
      data-postman-action="collection/fork"
      data-postman-visibility="public"
      data-postman-var-1="3255167-ec29920d-aa1f-4beb-996c-4c68851ebe55"
      data-postman-collection-url="entityId=3255167-ec29920d-aa1f-4beb-996c-4c68851ebe55&entityType=collection&workspaceId=6b168dd0-867a-4925-bae5-df7722b7b72e"
    ></div>
  );
};

export default PostmanButton;
