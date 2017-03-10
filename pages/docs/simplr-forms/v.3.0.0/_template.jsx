import React from "react";

import "./template.scss";
const topGroup = undefined;
class SimplrForms300 extends React.Component {
    uniqueKeyValue = 0;
    get uniqueKey() {
        return this.uniqueKeyValue++;
    }

    renderNavigation(groups, groupName) {
        if (groupName == null) {
            groupName = topGroup;
        }
        let group = groups[groupName];

        if (group == null) {
            return null;
        }

        let lis = group.map(item => {
            let children = null;
            if (item.Group != null) {
                children = this.renderNavigation(groups, item.Group);
            }
            return (
                <li key={`navigation-${this.uniqueKey}`}>
                    {item.MenuTitle}
                    {children}
                </li>
            );
        });

        return (
            <ul key={`navigation-group-${this.uniqueKey}`}>
                {lis}
            </ul>
        );
    }

    render() {
        let menuItems = this.props.route.pages
            .filter(page => page.data.layout === "package-docs" &&
                page.data.packageName === "simplr-forms")
            .map(x => {
                return {
                    PackageName: x.data.packageName,
                    Title: x.data.title,
                    MenuTitle: x.data.menuTitle,
                    Group: x.data.group,
                    ParentGroup: x.data.parentGroup || topGroup
                };
            });

        let groups = {};
        for (let item of menuItems) {
            let g = groups[item.ParentGroup] = groups[item.ParentGroup] || [];
            g.push(item);
        }

        return (
            <div className="simplr-forms-3 content-page">
                <nav>
                    {this.renderNavigation(groups)}
                </nav>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default SimplrForms300;