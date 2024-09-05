// statisticscards.jsx
import React from 'react';
import {
    BanknotesIcon,
    UserPlusIcon,
    UsersIcon,
    ChartBarIcon,
    BookOpenIcon,
} from "@heroicons/react/24/solid";

export const statisticscards = [
    // {
    //     color: "gray",
    //     icon: BanknotesIcon,
    //     title: "Today's Revenue",
    //     value: "$53k",
    //     footer: {
    //         color: "text-green-500",
    //         value: "+55%",
    //         label: "than last week",
    //     },
    // },
    {
        color: "gray",
        icon: BookOpenIcon,
        title: "Total Sales ",
        value: "2,300",
        footer: {
            color: "text-green-500",
            value: "+3%",
            label: "than last month",
        },
    },
    {
        color: "gray",
        icon: BookOpenIcon,
        title: "Sales in Month",
        value: "300",
        footer: {
            color: "text-red-500",
            value: "-2%",
            label: "than yesterday",
        },
    },
    {
        color: "gray",
        icon: ChartBarIcon,
        title: "Sales in week",
        value: "$103,430",
        footer: {
            color: "text-green-500",
            value: "+5%",
            label: "than yesterday",
        },
    },
];

export default statisticscards;
