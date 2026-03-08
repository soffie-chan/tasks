import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<string>("💀");

    //EXTRA - Name of Holiday Prints
    function nameOfHoliday(holiday: string) {
        let holidayName = "";
        if (holiday === "💀") {
            holidayName = "Dia de Los Muertos, November 1st";
        } else if (holiday === "🥥") {
            holidayName = "Ugadi, March 19th";
        } else if (holiday === "🎊") {
            holidayName = "New Year's Day, January 1st";
        } else if (holiday === "✝️") {
            holidayName = "Christmas, December 25th";
        } else if (holiday === "🐣") {
            holidayName = "Easter, April 5th";
        }
        return <div>{holidayName}</div>;
    }

    function holidayByDate(holiday: string) {
        if (holiday === "💀") {
            setHoliday("🐣");
        } else if (holiday === "🥥") {
            setHoliday("✝️");
        } else if (holiday === "🎊") {
            setHoliday("🥥");
        } else if (holiday === "✝️") {
            setHoliday("💀");
        } else if (holiday === "🐣") {
            setHoliday("🎊");
        }
    }

    function holidayByAlphabet(holiday: string) {
        if (holiday === "💀") {
            setHoliday("✝️");
        } else if (holiday === "🥥") {
            setHoliday("🐣");
        } else if (holiday === "🎊") {
            setHoliday("🥥");
        } else if (holiday === "✝️") {
            setHoliday("🎊");
        } else if (holiday === "🐣") {
            setHoliday("💀");
        }
    }

    return (
        <div>
            <div>Holiday: {holiday}</div>
            {nameOfHoliday(holiday)}
            <div>
                <Button
                    onClick={() => {
                        holidayByAlphabet(holiday);
                    }}
                >
                    Advance by Alphabet
                </Button>
                <Button
                    onClick={() => {
                        holidayByDate(holiday);
                    }}
                >
                    Advance by Year
                </Button>
            </div>
        </div>
    );
}
