import React from "react";
import { Link } from "gatsby";
import { rhythm } from "../utils/typography"

import { PostDataList } from "./meta";

import { moduleColor } from "../utils/moduleColor"

const SinglePost = (props) => {
    return (
        <article key={props.slug}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={props.slug} className={moduleColor(props.module)}>
                  {props.title}
                </Link>
              </h3>
              <PostDataList published={props.published} module={props.module} week={props.week}/>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: props.content,
                }}
              />
            </section>
          </article>
    )
}

export default SinglePost