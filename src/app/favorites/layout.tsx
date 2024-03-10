import React from "react";

export default function FavoritesLayout({
children,
}:{
    children: React.ReactNode
}) {
    return (
        <div>
            <div>
                {children}
            </div>
        </div>
    )
}