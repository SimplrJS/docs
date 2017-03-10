import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import catchLinks from 'catch-links';

module.exports = React.createClass({
  propTypes: {
    route: React.PropTypes.object,
  },
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  // componentDidMount() {
  //   const _this = this;
  //   catchLinks(this.refs.markdown, function (href) {
  //     _this.context.router.push(href);
  //   });
  // },

  render() {
    const post = this.props.route.page.data;
    let router = this.context.router;
    let routes = router.routes;
    let location = router.location;

    return (
      <DocumentTitle title={`${post.title} | ${config.siteTitle}`}>
        <div className="markdown">
          <h3>{post.title}</h3>
          <div dangerouslySetInnerHTML={{ __html: post.body }} />
        </div>
      </DocumentTitle >
    )
  },
});