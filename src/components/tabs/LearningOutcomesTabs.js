import Tabs from "@/components/tabs/Tabs";
import {useCallback, useEffect, useState} from "react";

const LearningOutcomesTabs = ({ outcomeNav, setOutcomeNav }) => {
    const handleLearningOutcomeNavigationClick = useCallback((outcomeNav) => {
        setOutcomeNav(outcomeNav);
    },[outcomeNav]);

    return(
        <Tabs>
            <Tabs.Tab active={outcomeNav === 0} onClick={() => handleLearningOutcomeNavigationClick(0)}>
                <p>All learning outcomes</p>
            </Tabs.Tab>

            <Tabs.Tab active={outcomeNav === 1} onClick={() => handleLearningOutcomeNavigationClick(1)}>
                <p>Learning outcome 1</p>
            </Tabs.Tab>

            <Tabs.Tab active={outcomeNav === 2} onClick={() => handleLearningOutcomeNavigationClick(2)}>
                <p>Learning outcome 2</p>
            </Tabs.Tab>

            <Tabs.Tab active={outcomeNav === 3} onClick={() => handleLearningOutcomeNavigationClick(3)}>
                <p>Learning outcome 3</p>
            </Tabs.Tab>

            <Tabs.Tab active={outcomeNav === 4} onClick={() => handleLearningOutcomeNavigationClick(4)}>
                <p>Learning outcome 4</p>
            </Tabs.Tab>

            <Tabs.Tab active={outcomeNav === 5} onClick={() => handleLearningOutcomeNavigationClick(5)}>
                <p>Learning outcome 5</p>
            </Tabs.Tab>
        </Tabs>
    );
};

export default LearningOutcomesTabs;