import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import catchLinks from 'catch-links';

module.exports = React.createClass({
  propTypes: {
    route: React.PropTypes.object,
  },
  // contextTypes: {
  //   router: React.PropTypes.object.isRequired
  // },
  // componentDidMount() {
  //   const _this = this;
  //   catchLinks(this.refs.markdown, function (href) {
  //     _this.context.router.push(href);
  //   });
  // },

  render() {
    const post = this.props.route.page.data

    return (
      <DocumentTitle title={`${post.title} | ${config.siteTitle}`}>
        <div className="markdown">
          <h2>{post.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.body }} />
        </div>
      </DocumentTitle >
    )
  },
})
