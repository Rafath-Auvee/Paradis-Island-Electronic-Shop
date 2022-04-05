import React from "react";

const Blog = () => {
  return (
    <div className="m-7">
      <div>
        <h1 className="font-bold text-lg flex justify-center mb-5">
          What is context API?
        </h1>
        <p className="text-justify">
          Context provides a way to pass data through the component tree without
          having to pass props down manually at every level.The React Context
          API is a way for a React app to effectively produce global variables
          that can be passed around. This is the alternative to "prop drilling"
          or moving props from grandparent to child to parent, and so on.
          Context is also touted as an easier, lighter approach to state
          management using Redux.React.createContext() is all you need. It
          returns a consumer and a provider. Provider is a component that as
          it's names suggests provides the state to its children. It will hold
          the "store" and be the parent of all the components that might need
          that store. Consumer as it so happens is a component that consumes and
          uses the state.
        </p>
      </div>
      <div>
        <h1 className="font-bold text-lg flex justify-center mb-5 mt-5">
          What is symantic tags?
        </h1>
        <p>
          One of the most important features of HTML5 is its semantics.Semantic
          HTML refers to syntax that makes the HTML more comprehensible by
          better defining the different sections and layout of web pages. It
          makes web pages more informative and adaptable, allowing browsers and
          search engines to better interpret content.HTML5 semantic tags define
          the purpose of the element. By using semantic markup, you help the
          browser understand the meaning of the content instead of just
          displaying it. By providing this extra level of clarity, HTML5
          semantic elements also help search engines to read the page and find
          the required information faster. For example header, nav, section,
          article, aside, and footer act more or less like div elements.
        </p>
      </div>
      <div>
        <h1 className="font-bold text-lg flex justify-center mb-5 mt-5">
          Inline block vs inline element
        </h1>
        <p>
          Inline-block: They consume the entire width available irrespective of
          their sufficiency. They always start in a new line and have top and
          bottom margins. It does not contain any other elements next to it.
        </p>
        <p>
          Inline-element: Inline elements occupy only enough width that is
          sufficient to it and allows other elements next to it which are
          inline. Inline elements don't start from a new line and don't have top
          and bottom margins as block elements have.
        </p>
      </div>
    </div>
  );
};

export default Blog;
