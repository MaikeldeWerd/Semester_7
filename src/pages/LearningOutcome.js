import {useRouter} from 'next/router';
import LearningOutcomesConfig from "@/configs/LearningOutcomesConfig";
import Layout from "@/components/layouts/Layout";
import Container from "@/components/layouts/Container";
import Panel from "@/components/panels/Panel";
import Button from "@/components/buttons/Button";
import Link from "next/link";

const LearningOutcome = () => {
    const router = useRouter();
    const {lo_index, project_index} = router.query;
    const selectedOutcome = LearningOutcomesConfig.outcomes.find(outcome => outcome.lo_index === parseInt(lo_index) && outcome.project_index === parseInt(project_index));

    return (
        <Layout>
            <Container>
                <div className={'grid grid-cols-2 gap-10'}>
                    <Panel>
                        <div className={'rounded-lg w-full overflow-hidden'}>
                            <img className={'w-full h-40'} src={selectedOutcome?.image} alt=""/>
                        </div>
                    </Panel>

                    <div className={'flex flex-col justify-between p-6'}>
                        <div className={'flex flex-col gap-2'}>
                            <h1 className={'text-2xl font-semibold'}>{selectedOutcome?.title}</h1>

                            <p className={'text-orange-500'}>{selectedOutcome?.sub_title}</p>
                        </div>

                        <p>{selectedOutcome?.description}</p>
                    </div>
                </div>
                <div className={'flex flex-col gap-10'}>
                    {selectedOutcome?.documents?.map((document, documentIdx) => {
                        return (
                            <div key={documentIdx} className={'grid grid-cols-2 gap-10'}>
                                <Panel>
                                    <iframe src={document.file}/>
                                </Panel>

                                <div className={'flex flex-col gap-4 p-6'}>
                                    <h1 className={'text-2xl font-semibold'}>{document?.title}</h1>

                                    {document?.texts?.map((text, textIdx) => {
                                        return (
                                            <p>{text?.paragraph}</p>
                                        )
                                    })}

                                    <Link href={document?.button_link}>
                                        <Button>
                                            <span>{document?.button_text}</span>
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </Container>
        </Layout>
    );
};

export default LearningOutcome;
