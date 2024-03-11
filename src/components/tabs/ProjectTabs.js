import Tabs from "@/components/tabs/Tabs";
import {useCallback, useEffect, useState} from "react";

const ProjectTabs = ({ projectNav, setProjectNav }) => {
    const handleProjectNavigationClick = useCallback((projectNav) => {
        setProjectNav(projectNav);
    },[projectNav]);

    return(
        <Tabs>
            <Tabs.Tab active={projectNav === 0} onClick={() => handleProjectNavigationClick(0)}>
                <p>All projects</p>
            </Tabs.Tab>

            <Tabs.Tab active={projectNav === 1} onClick={() => handleProjectNavigationClick(1)}>
                <p>AI project</p>
            </Tabs.Tab>

            <Tabs.Tab active={projectNav === 2} onClick={() => handleProjectNavigationClick(2)}>
                <p>Project 2</p>
            </Tabs.Tab>

            <Tabs.Tab active={projectNav === 3} onClick={() => handleProjectNavigationClick(3)}>
                <p>Project 3</p>
            </Tabs.Tab>
        </Tabs>
    );
};

export default ProjectTabs;