import Layout from "@/components/layouts/Layout";
import Container from "@/components/layouts/Container";
import Panel from "@/components/panels/Panel";
import LearningOutcomesConfig from "@/configs/LearningOutcomesConfig";
import Link from "next/link";
import LearningOutcomesTabs from "@/components/tabs/LearningOutcomesTabs";
import {useEffect, useState} from "react";
import ProjectTabs from "@/components/tabs/ProjectTabs";

const Projects = () => {
    const [projectNav, setProjectNav] = useState(0);

    return (
        <Layout>
            <Container>
                <ProjectTabs projectNav={projectNav} setProjectNav={setProjectNav} />

                <div className={'grid grid-cols-3 gap-10'}>
                    {LearningOutcomesConfig?.outcomes?.filter(outcome => projectNav === 0 || outcome.project_index === projectNav)?.map((outcome, outcomeIdx) => {
                        return (
                            <Link href={outcome.route}>
                                <Panel key={outcomeIdx}>
                                    <div className={'rounded-lg w-full overflow-hidden'}>
                                        <img className={'w-full h-40'} src={outcome?.image} alt=""/>
                                    </div>

                                    <div className={'flex justify-between gap-2 w-full items-center'}>
                                        <h1 className={'text-2xl '}>{outcome?.title}</h1>

                                        <p className={'text-orange-500'}>{outcome?.sub_title}</p>
                                    </div>

                                    <p className={'w-full text-center'}>{outcome?.description}</p>
                                </Panel>
                            </Link>
                        )
                    })}
                </div>
            </Container>
        </Layout>
    );
}

export default Projects;
