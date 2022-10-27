import './styles/PostContainer.css';

import Post from './Post';

const PostContainer = ({className, data}) => {
    //additional logic here

    return (
        <div className={`${className} post-container`} key={data.id}>
            <Post data={data}/>
        </div>
    )
}

export default PostContainer;