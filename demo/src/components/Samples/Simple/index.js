import React, { Component } from "react";
import Annotation from "../../../../../src";

import Root from "../../Root";
import img from "../../../img.jpeg";

export default class Simple extends Component {
  state = {
    annotations: [],
    annotation: {}
  };

  onChange = annotation => {
    this.setState({ annotation });
  };

  onSubmit = annotation => {
    const { geometry, data } = annotation;

    this.setState({
      annotation: {},
      annotations: this.state.annotations.concat({
        geometry,
        data: {
          ...data,
          id: Math.random()
        }
      })
    });
  };

  render() {
    const svgInline = `<svg height="100" width="500">
    <ellipse cx="240" cy="50" rx="220" ry="30" style="fill:yellow" />
    <ellipse cx="220" cy="50" rx="190" ry="20" style="fill:white" />
    Sorry, your browser does not support inline SVG.
  </svg>`;

    return (
      <Root>
        <h2>Example with an Inline SVG instead of an Image</h2>
        <Annotation
          src={img}
          inlineSvg={svgInline}
          alt="Two pebbles anthropomorphized holding hands"
          annotations={this.state.annotations}
          type={this.state.type}
          value={this.state.annotation}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          allowTouch
        />
      </Root>
    );
  }
}
