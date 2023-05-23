import React from 'react'
import { Button } from '../top-components/button/style'
import Desc from '../top-components/desc'
import Title from '../top-components/title'
import { ConnectMeStyle, Form, Input } from './style'

const ConnectMe = () => {
    return (
        <ConnectMeStyle>
            <Title margin={'20px auto'} title={'Мы Вам перезвоним'} />
            {/* <p className="des">Если у вас возникли какие-то вопросы или проблемы, заполните форму и мы Вам перезвоним.</p> */}
            <Desc margin={'10px auto'} width={'38%'} title={'Если у вас возникли какие-то вопросы или проблемы, заполните форму и мы Вам перезвоним.'} />
            <Form>
                <Input placeholder='Ваше имя' />
                <Input placeholder='Ваш Email' />
                <Button padding={'10px 70px'}>
                    Отправить
                </Button>
            </Form>
        </ConnectMeStyle>
    )
}

export default ConnectMe