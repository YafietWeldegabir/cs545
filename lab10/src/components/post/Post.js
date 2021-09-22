import React, {useContext} from 'react';
import { SelectedPostId } from '../../store/SelectedPostId';

import './Post.css';

const Post = (props) => {

    const { selectedPostId, setSelectedPostId } = useContext(SelectedPostId);
    const {id, title, author} = props;
    
    return(
    <article className="Post" onClick={()=>{
                console.log("ID = "+id);
                setSelectedPostId(id)
            }}>
        <h1>{title}</h1>
        <div className="Info">
            <div className="Author">{author}</div>
        </div>
    </article>
    );
}

export default Post;