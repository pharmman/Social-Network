import React from 'react';
import classes from './Post.module.css'

type PostPropsType = {
    messages: string
    likesCount: number
}

export function Post(props: PostPropsType) {


    return (
        <div className={classes.post__wrapper}>
            <div className={classes.avatar}>
                <img
                    src="https://cdn.vox-cdn.com/thumbor/yU7dbyR-N-m1lWDyLhaJPydUESg=/0x33:640x393/1600x900/cdn.vox-cdn.com/assets/1496753/stevejobs.jpg" alt='steve jobs' title={'Steve Jobs'}/>
            </div>
            <div className={classes.post}>
                {props.messages}
                <button disabled={true}>like</button>
            </div>
            <div>
                LikesCount: <span className={classes.likesCount}>{props.likesCount}</span>
            </div>

        </div>
    )
}