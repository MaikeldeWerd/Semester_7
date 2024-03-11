import image from '/public/next.svg'

const LearningOutcomesConfig = {
    outcomes: [
        {
            title: 'test',
            sub_title: 'Learning outcome 1',
            lo_index: 1,
            project_index: 1,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aut consequatur consequuntur dignissimos, excepturi facilis hic ipsa, iure neque nihil nisi odio provident quam quis rem reprehenderit similique tempore totam.',
            image: {image},
            documents: [
                {
                    title: 'test 1',
                    texts: [
                        {
                            paragraph: 'test 2',
                        },
                        {
                            paragraph: 'test 3',
                        },
                        {
                            paragraph: 'test 4',
                        },
                    ],
                    button_text: 'Ga naar document',
                    button_link: '',
                    file: '',
                },
            ],
        },
        {
            title: 'test',
            sub_title: 'Learning outcome 2',
            lo_index: 2,
            project_index: 1,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aut consequatur consequuntur dignissimos, excepturi facilis hic ipsa, iure neque nihil nisi odio provident quam quis rem reprehenderit similique tempore totam.',
            image: {image},
            documents: [

            ],
        },
        {
            title: 'test',
            sub_title: 'Learning outcome 3',
            lo_index: 3,
            project_index: 2,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aut consequatur consequuntur dignissimos, excepturi facilis hic ipsa, iure neque nihil nisi odio provident quam quis rem reprehenderit similique tempore totam.',
            image: {image},
            documents: [

            ],
        },
    ],
};

export default LearningOutcomesConfig;