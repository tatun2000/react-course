import { TransitionGroup, CSSTransition } from "react-transition-group";
import PostItem from "./PostItem";
import React, { useRef } from "react";

const PostList = ({ posts, title, remove }) => {
    // Словарь для хранения ref по id поста
    const nodeRefs = useRef({});

    if (!posts.length) {
        return (
            <h1 style={{ textAlign: 'center' }}>
                Посты не найдены
            </h1>
        );
    }

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>{title}</h1>
            <TransitionGroup>
                {posts.map((post, index) => {
                    // Если ref для этого поста ещё нет → создаём
                    if (!nodeRefs.current[post.id]) {
                        nodeRefs.current[post.id] = React.createRef();
                    }

                    return (
                        <CSSTransition
                            key={post.id}
                            timeout={500}
                            classNames="post"
                            nodeRef={nodeRefs.current[post.id]} // передаём ref сюда
                        >
                            <div ref={nodeRefs.current[post.id]}>
                                <PostItem number={index + 1} post={post} remove={remove} />
                            </div>
                        </CSSTransition>
                    );
                })}
            </TransitionGroup>
        </div>
    );
};

export default PostList;