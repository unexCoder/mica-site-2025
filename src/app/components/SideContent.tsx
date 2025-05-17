"use client"
import styles from "../components/content.module.css";
import NavBar from "./NavBar";
import SmallCard from "./SmallCard";
import React from "react";
import { useHover } from "../hooks/useHover";
import data from "../../../data/db.json";
import Link from 'next/link'

export default function MainContent() {

    const { hovered, hoverData, hoverContent, hoverProps } = useHover();

    // Define the expected data structure
    interface Exhibition {
        id: number;
        title: string;
        host: string;
        date: string;
        link?: string;
        content?: boolean;
    }
    interface Workshop {
        id: number;
        title: string;
    }

    interface ExhibitionData {
        exhibitions: Exhibition[];
        performances: Exhibition[];
        residences: Exhibition[];
        collaborations: Exhibition[];
        talks: Exhibition[];
    }
    interface WorkshopData {
        workshops: Workshop[];
    }

    const exhibitionData: ExhibitionData = data; // Directly use the imported JSON data
    // const workshopData: WorkshopData = data.workshops; // Directly use the imported JSON data

    // sort data
    // const sortedData = eventData.events.sort((a, b) => 
    //     // b.title.localeCompare(a.title);
    //     b.id - a.id
    //   );

    return (
        <div className={styles.container}>
            <NavBar></NavBar>
            {/* Map over the JSON data to create Card components */}
            <div className={`${styles.cards} ${styles.sidecontainer}`} {...hoverProps}>

                {/* {sortedData.map((event) => (
                    <Link key={event.id} href={`/events/${event.id}`}>
                        <SmallCard
                            key={event.id}
                            title={event.title}
                            text={event.body}
                        />
                    </Link>                
                ))} */}

                <div id="exhibitions">
                    {exhibitionData.exhibitions.map((e) => (
                        <Link key={e.id} href={e.content ? `/events/${e.id}/${'exhibitions'}` : `${e.link}`}
                            target={e.content ? "_self" : "_blank"}
                            rel={e.content ? "noopener noreferrer" : undefined}>
                            <SmallCard
                                key={e.id}
                                title={e.title}
                                text={e.host +" "+ e.date}
                            />
                        </Link>
                    ))}
                </div>

                <div id="performances">
                    {exhibitionData.performances.map((e) => (
                        <Link key={e.id} href={e.content ? `/events/${e.id}/${'performances'}` : `${e.link}`} 
                            target={e.content ? "_self" : "_blank"}
                            rel={e.content ? "noopener noreferrer" : undefined}>
                            <SmallCard
                                key={e.id}
                                title={e.title}
                                text={e.host +" "+ e.date}
                            />
                        </Link>
                    ))}
                </div>

                <div id="residences">
                    {exhibitionData.residences.map((e) => (
                        <Link key={e.id} href={e.content ? `/events/${e.id}/${'residences'}` : `${e.link}`}
                            target={e.content ? "_self" : "_blank"}
                            rel={e.content ? "noopener noreferrer" : undefined}>
                            <SmallCard
                                key={e.id}
                                title={e.title}
                                text={e.host +" "+ e.date}
                            />
                        </Link>
                    ))}
                </div>

                <div id="collaborations">
                    {exhibitionData.collaborations.map((e) => (
                        <Link key={e.id} href={e.content ? `/events/${e.id}/${'collaborations'}` : `${e.link}`}
                            target={e.content ? "_self" : "_blank"}
                            rel={e.content ? "noopener noreferrer" : undefined}>
                            <SmallCard
                                key={e.id}
                                title={e.title}
                                text={e.host +" "+ e.date}
                            />
                        </Link>
                    ))}
                </div>

                <div id="talks">
                    {exhibitionData.talks.map((e) => (
                        <Link key={e.id} href={`/events/${e.id}/${'talks'}`}>
                            <SmallCard
                                key={e.id}
                                title={e.title}
                                text={e.host +" "+ e.date}
                            />
                        </Link>
                    ))}
                </div>

                <div id="workshops">
                    {data.workshops.map((e) => (
                        <Link key={e.id} href={`/events/${e.id}/${'workshops'}`}>
                            <SmallCard
                                key={e.id}
                                title={e.name}
                                text={e.subtitle}
                            />
                        </Link>
                    ))}
                </div>

                <div
                    className={styles.hoverContainer}
                    style={{ backgroundColor: hovered ? 'rgba(255,255,0,20%)' : "transparent" }}
                >
                    {hovered && (
                        <p>{String.fromCharCode(hoverData.x % 255)}{hoverData.y}</p>
                    )}
                    {hovered && (
                        <div
                            style={{
                                background: "#fff0",
                                color: '#bfff00',
                                borderRadius: "3px",
                                display: 'inline-block'
                            }}
                        >
                            <p style={{
                                background: '#000',
                                paddingInline: '4px'
                            }} >{hoverContent}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}