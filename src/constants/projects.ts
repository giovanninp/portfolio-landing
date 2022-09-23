import { imageType } from "../components/atoms/Badge"

type projectType = {
    name: string,
    description: string,
    badges: imageType[],
    platform: 'mobile' | 'desktop',
    projectId?: string,
    previews?: string[]
}

const projects: projectType[] = [
    {
        "name": "Train N Go Web",
        "description": "Plataforma unificada para academias de pequeno e médio porte.",
        "badges": [
            "react",
            "redux",
            "redux-saga",
            "styled-components"
        ],
        "platform": "desktop"
    },
    {
        "name": "Train N Go Mobile",
        "description": "Aplicação voltada para academias e seus alunos.",
        "badges": [
            "react",
            "expo",
            "redux",
            "redux-saga",
            "styled-components"
        ],
        "platform": "mobile"
    },
    {
        "name": "NoPique",
        "description": "Plataforma unificada para academias de pequeno e médio porte.",
        "badges": [
            "react",
            "expo",
            "redux",
            "redux-saga"
        ],
        "platform": "mobile"
    },
    {
        "name": "Eter",
        "description": "Projeto do grupo SUGAR da CESAR School, para a cachaçaria Sanhaçu.",
        "badges": [
            "react",
            "redux",
            "redux-saga",
            "styled-components"
        ],
        "platform": "mobile"
    },
    {
        "name": "Concretiza",
        "description": "Projeto voltado para o varejo de construção, no qual tem como proposta mudar o conceito de venda.",
        "badges": [
            "react",
            "expo",
            "redux",
            "redux-saga",
            "styled-components"
        ],
        "platform": "desktop"
    },
    {
        "name": "Evoé",
        "description": "Projeto desenvolvido pelo grupo Evoé, do CESAR School em junção com a La Ursa Tours.",
        "badges": [],
        "platform": "desktop"
    },
    {
        "name": "M.I.A.U",
        "description": "Projeto desenvolvido no CESAR Summer Job 2019.1. No qual, se baseia em uma plataforma de acompanhamento de unidades de consumo da rede Neoenergia.",
        "badges": [],
        "platform": "desktop"
    }
]

export default projects