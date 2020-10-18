import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions/index';
import UserHeader from './UserHeader';

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPostsAndUsers();
    }

    renderList() {
        return this.props.posts.map(post => {
            return (
                <div className="ui items" key={post.id}>
                    <div className="item">
                        <i className="large left aligned icon user" />
                    </div>
                    <div className="content">
                        <h2>{post.title}</h2>
                        <div className="meta"></div>
                        <div className="description">
                            <p>{post.body}</p>
                        </div>
                        <div className="extra">
                            <UserHeader userId={post.userId} />
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        return <div className="ui relaxed divided list">{this.renderList()}</div>
    }
}

const mapStateToProps = (state) => {
    return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);