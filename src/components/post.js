import React from "react";
import { Link } from "gatsby";
import { rhythm } from "../utils/typography"

import { PostDataList } from "./meta";

import { moduleColor } from "../utils/moduleColor"

const SinglePost = (props) => {
    return (
        <article key={props.slug} className="dark:bg-indigo-900 p-7 my-2 rounded-xl">
            <header>
              <h3 className="mt-0">
                <Link style={{ boxShadow: `none` }} to={props.slug} className={moduleColor(props.module)}>
                  {props.title}
                </Link>
              </h3>
              <PostDataList published={props.published} module={props.module} week={props.week}/>
            </header>
            <section>
              <p className="mb-0"
                dangerouslySetInnerHTML={{
                  __html: props.content,
                }}
              />
            </section>
          </article>
    )
}

export default SinglePost