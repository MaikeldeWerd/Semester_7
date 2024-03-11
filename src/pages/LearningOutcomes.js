import Layout from "@/components/layouts/Layout";
import Container from "@/components/layouts/Container";
import Panel from "@/components/panels/Panel";
import LearningOutcomesConfig from "@/configs/LearningOutcomesConfig";
import Link from "next/link";
import LearningOutcomesTabs from "@/components/tabs/LearningOutcomesTabs";
import {useEffect, useState} from "react";

const LearningOutcomes = () => {
    const [outcomeNav, setOutcomeNav] = useState(0);

    return (
        <Layout>
            <Container>
                <LearningOutcomesTabs outcomeNav={outcomeNav} setOutcomeNav={setOutcomeNav} />

                <div className={'grid grid-cols-3 gap-10'}>
                    {LearningOutcomesConfig?.outcomes?.filter(outcome => outcomeNav === 0 || outcome.lo_index === outcomeNav)?.map((outcome, outcomeIdx) => {
                        return (
                            <Link href={{ pathname: '/LearningOutcome', query: { lo_index: outcome.lo_index, project_index: outcome.project_index } }} key={outcomeIdx}>
                                <Panel>
                                    <div className={'rounded-lg w-full overflow-hidden'}>
                                        <img className={'w-full h-40'} src={outcome?.image} alt=""/>
                                    </div>

                                    <div className={'flex justify-between gap-2 w-full items-center'}>
                                        <h1 className={'text-2xl font-semibold'}>{outcome?.title}</h1>

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

export default LearningOutcomes;
