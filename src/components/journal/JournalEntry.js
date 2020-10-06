import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div 
                className="journal__entrypicture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://i.blogs.es/aa1b9a/luna-100mpx/450_1000.jpg)'
                }}
            ></div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    un nuevo dia
                </p>
                <p className="journal__entry-content">
                    Hermoso dia para cabezaear una balaaaaa
                </p>
            </div>
            <div className="journal__entry-date-box">
                    <span>Monday</span>
                    <h4>29</h4>
            </div>
        </div>
    )
}
