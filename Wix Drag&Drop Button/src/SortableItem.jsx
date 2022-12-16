import React, { useEffect, useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const SortableItem = (props) => {
    const [dj, setDj] = useState(props.big)
    useEffect(() => {
        setDj(!dj)
    }, [props.big])
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({ id: props.id });

    const itemStyle = {
        transform: CSS.Transform.toString(transform),
        transition,
        width: "50px",
        height: "35px",
        border: "1px solid gray",
        borderRadius: "5px",
        marginBottom: "3px",
        userSelect: "none",
        cursor: "grab",
        boxSizing: "border-box",
        padding: "1.1rem",
    };
    const itemStyle1 = {
        transform: CSS.Transform.toString(transform),
        transition,
        width: "180px",
        height: "35px",
        border: "1px solid gray",
        borderRadius: "5px",
        marginBottom: "3px",
        userSelect: "none",
        cursor: "grab",
        boxSizing: "border-box",
        paddingLeft: "1.1rem",

    };
    return <>
        {dj ? <input style={itemStyle} ref={setNodeRef} {...attributes} {...listeners} type="text" placeholder="T" />
            : <input style={itemStyle1} ref={setNodeRef} {...attributes} {...listeners} type="text" defaultValue="" placeholder="Type here.." />}
    </>
};

export default SortableItem;
