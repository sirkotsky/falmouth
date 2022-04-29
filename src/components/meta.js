import React from "react";
import { Link } from "gatsby";
import _ from "lodash"

import { moduleColor } from "../utils/moduleColor"

const PostDataList = (props) => {
    const color = props.module === "GDO710" ? "text-gray-400" : ""
    return (
        <div className="flex items-baseline mb-2">
                <div className="space-x-2 flex">
                    { props.module &&
                        <>
                            <div className="text-sm">
                                <Link to={'/module/'+_.kebabCase(props.module)} className={moduleColor(props.module)}>{props.module}</Link>
                            </div>
                        </>
                    }
                    { props.published &&
                        <>
                            <div className="text-base font-normal mx-2">·</div>
                            <div className="text-sm dark:text-gray-300 text-gray-500">
                                {props.published}
                            </div>
                        </>
                    }
                    { props.week &&
                        <>
                            <div className="text-base font-normal mx-2">·</div>
                            <div className="text-sm dark:text-gray-300 text-gray-500">
                                Week {props.week}
                            </div>
                        </>
                    }
                </div>
        </div>
    )
}

const PostMeta = (props) => {
    return (
        <div className="mt-12">
            
            <PostDataList week={props.week} module={props.module} domains={props.domains} category={props.category} />

            <h1 className="mt-3 mb-0">{props.title}</h1>
            <p className="mb-12 italic">{props.published}</p>

            <hr />

        </div>
    )
}

export { PostMeta, PostDataList }