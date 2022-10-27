import './styles/FeedContainer.css';

import Feed from './Feed';

const FeedContainer = ({className, posts}) => {
    return (
        <Feed className={className} posts={posts}/>
    )
}

export default FeedContainer;