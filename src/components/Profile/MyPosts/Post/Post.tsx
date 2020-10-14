import React from 'react';
import classes from './Post.module.css'


export function Post() {
    return (
        <div className={classes.post__wrapper}>
            <div className={classes.avatar}>
                <img
                    src="https://cdn.vox-cdn.com/thumbor/yU7dbyR-N-m1lWDyLhaJPydUESg=/0x33:640x393/1600x900/cdn.vox-cdn.com/assets/1496753/stevejobs.jpg"
                    alt=""/>
            </div>
            <div className={classes.post}>
                post 1
                <div>like</div>
            </div>

        </div>
    )
}