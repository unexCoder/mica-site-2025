import styles from "../components/content.module.css";
import NavBar from "./NavBar";
import SmallCard from "./SmallCard";
import React from "react";
import { useHover } from "../hooks/useHover";

export default function MainContent() {

    const { hovered, hoverData, hoverContent,hoverProps } = useHover();

    return (
        <div className={styles.container}>
            <NavBar></NavBar>
            <div className={styles.cards} {...hoverProps}>
                <SmallCard title='evento' text="concierto en alemania"></SmallCard>
                <SmallCard title='evento' text="concierto en italia"></SmallCard>
                <SmallCard title='evento' text="concierto en alemaniaconcierto en alemaniaconcierto en alemaniaconcierto en alemaniaconcierto en alemaniaconcierto en" ></SmallCard>
                <SmallCard title='evento' text="concierto en alemania" ></SmallCard>
                <SmallCard title='evento' text="concierto en alemania" ></SmallCard>
                <SmallCard title='evento' text="concierto en alemania" ></SmallCard>
                <SmallCard title='evento' text="concierto en alemania "></SmallCard>
                <SmallCard title='evento' text="concierto en alemania" ></SmallCard>
                <SmallCard title='evento' text="concierto en alemania" ></SmallCard>
                <SmallCard title='evento' text="concierto en alemania" ></SmallCard>
                <SmallCard title='evento' text="concierto en alemania" ></SmallCard>
                <SmallCard title='evento' text="concierto en alemania" ></SmallCard>
                <SmallCard title='evento' text="concierto en alemania" ></SmallCard>
                <SmallCard title='evento' text="concierto en alemania" ></SmallCard>
                <SmallCard title='evento' text="concierto en alemania" ></SmallCard>
                <SmallCard title='evento' text="concierto en alemania" ></SmallCard>
                <SmallCard title='evento' text="concierto en alemania" ></SmallCard>

                
                <div
                    className={styles.hoverContainer}
                    style={{backgroundColor: hovered ? 'rgba(255,255,0,20%)' : "transparent"}}
                >
                    {hovered && (
                        <p>{ String.fromCharCode( hoverData.x % 255)}{hoverData.y}</p>
                    )}
                    {hovered && (
                        <div
                        style={{
                            background: "#fff0",
                            color: '#bfff00',
                            borderRadius: "3px",
                            display:'inline-block'
                        }}
                        >
                            <p style={{background:'#000',paddingInline:'4px'}} >{hoverContent}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}