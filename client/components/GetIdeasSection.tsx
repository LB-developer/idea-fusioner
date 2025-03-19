import { useState } from "react";
import { Idea } from "../../models/ideas";
import useGetIdeas from "../hooks/ideas";
import React from "react";

export default function GetIdeas() {
    const limit = 2
    const { data: ideas, isLoading, isError, error, refetch } = useGetIdeas(limit)

    if (isError) {
        console.error(error)
        return <p>Something went wrong...</p>
    }

    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {isError && <p>Something went wrong...</p>}
            {
                ideas?.map((idea: Idea) => <p key={idea.id}>{idea.idea}</p>)
            }
            <button
                onClick={() => refetch()}
            />
        </div>
    )
}
