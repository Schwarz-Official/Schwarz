import React, {useEffect, useState} from "react";
import {MegaMenu} from "../../layouts/MegaMenu";
import {Heading} from "../../components/Heading";
import {HorizontalTabsBar} from "../../components/HorizontalTabsBar";
import Model from "../../assets/svg/model";
import Texture from "../../assets/svg/texture";
import HDRI from "../../assets/svg/hdri";
import Rig from "../../assets/svg/rig";
import Addon from "../../assets/svg/addon";
import SearchBar from "../../components/SearchBar";
import {ModelsPage} from "./components/ModelsPage";
import {TexturesPage} from "./components/TexturesPage";
import {HDRIsPage} from "./components/HDRIsPage";
import {RigsPage} from "./components/RigsPage";
import {AddonsPage} from "./components/AddonsPage";
import {AnimatePresence, motion} from "framer-motion";
import {SubHeading} from "../../components/SubHeading";
import '../../assets/css/tabsbar.css'

const Store = ({ isAuthenticated, user }) => {
    const [activeTab, setActiveTab] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    const tabs = [
        { text: "Models", tagline:"Explore a collection of stable, high-quality 3D models in a variety of file formats " +
                "for every project.", icon: <Model width={"24px"} height={"24px"} /> },
        { text: "Textures", tagline:"Transform your creations with premium textures, available in all major formats to " +
                "suit your needs.", icon: <Texture width={"24px"} height={"24px"} /> },
        { text: "HDRIs", tagline:"Illuminate your scenes with stunning HDRI environments, compatible with a wide range " +
                "of 3D softwares.", icon: <HDRI width={"24px"} height={"24px"} /> },
        { text: "Rigs", tagline:"Animate with ease using versatile and robust rigs, designed for seamless integration " +
                "in any platform.", icon: <Rig width={"24px"} height={"24px"} /> },
        { text: "Addons", tagline:"Enhance your toolkit with powerful, reliable addons available for the most popular 3D " +
                "softwares for 3D design.", icon: <Addon width={"24px"} height={"24px"} /> },
    ];

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div>
                <MegaMenu classname={"z-10"}
                isAuthenticated={isAuthenticated} user={user} />
                <div className={"flex justify-between"}>
                    <HorizontalTabsBar classname={"w-3/4 bg-neutral-50 dark:bg-neutral-800 border-b border-b-neutral-200 dark:border-b-neutral-600"} tabs={tabs} activeTab={activeTab}
                                       setActiveTab={setActiveTab}/>
                    <div className={"w-1/4 bg-neutral-50 dark:bg-neutral-800 border-b border-b-neutral-200 dark:border-b-neutral-600 hidden md:flex md:items-center"}>
                        <SearchBar/>
                    </div>
                </div>
            </div>
            <div className={"w-full flex flex-col justify-center items-center"}>
                <AnimatePresence mode={"wait"}>
                    <motion.div
                        key={tabs[activeTab].text}
                        initial={{ opacity: 0, y: 35 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -35 }}
                        transition={{ duration: 0.25 }}
                    >
                        <Heading text={tabs[activeTab].text} classname={"text-6xl max-md:text-3xl dark:text-neutral-300 mt-16"} />
                    </motion.div>
                    <motion.div
                        key={tabs[activeTab].tagline}
                        initial={{ opacity: 0, y: 35 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -35 }}
                        transition={{ duration: 0.25, delay:0.2 }}
                    >
                        <SubHeading text={tabs[activeTab].tagline} classname={"mt-4 mx-8 text-lg text-neutral-400 dark:text-neutral-500 text-center"} />
                    </motion.div>
                </AnimatePresence>
                {tabs[activeTab].text === 'Models' && <ModelsPage />}
                {tabs[activeTab].text === 'Textures' && <TexturesPage />}
                {tabs[activeTab].text === 'HDRIs' && <HDRIsPage />}
                {tabs[activeTab].text === 'Rigs' && <RigsPage />}
                {tabs[activeTab].text === 'Addons' && <AddonsPage />}
            </div>
        </>
    );
};

export default Store;
