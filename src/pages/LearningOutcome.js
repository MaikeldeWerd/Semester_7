import { useRouter } from 'next/router';
import LearningOutcomesConfig from "@/configs/LearningOutcomesConfig";
import Layout from "@/components/layouts/Layout";
import Container from "@/components/layouts/Container";
import Panel from "@/components/panels/Panel";

const LearningOutcome = () => {
    const router = useRouter();
    const { lo_index, project_index } = router.query;
    const selectedOutcome = LearningOutcomesConfig.outcomes.find(outcome => outcome.lo_index === parseInt(lo_index) && outcome.project_index === parseInt(project_index));

    return (
        <Layout>
            <Container>
                <div className={'grid grid-cols-2 gap-10'}>
                    <Panel>

                    </Panel>

                    <div>
                        <h1>{selectedOutcome?.title}</h1>
                        <p>{selectedOutcome?.sub_title}</p>
                        <p>{selectedOutcome?.description}</p>
                    </div>
                </div>
            </Container>
        </Layout>
    );
};

export default LearningOutcome;
