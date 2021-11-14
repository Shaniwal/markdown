import React from "react";
import ReactMarkdown from "react-markdown";
import "./style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: "Welcome To MarkDown!!",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      markdown: e.target.value,
    });
  }

  render() {
    return (
      <div className="ui  placeholder segment" id="markdown-editor">
        <div className="ui two column stackable grid ">
          <div className="ui vertical divider"></div>
          <div className="column">
            <textarea
              id="editor"
              value={this.state.markdown}
              onChange={this.handleChange}
            />
          </div>

          <div className="column" id="preview">
            <ReactMarkdown>{this.state.markdown}</ReactMarkdown>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
