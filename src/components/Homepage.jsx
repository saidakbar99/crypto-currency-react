import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'

import { useGetCryptoQuery } from '../services/cryptoApi'

const { Title } = Typography

export default function Homepage(){
    const { data, isFetching} = useGetCryptoQuery()
    console.log(data)

    return(
        <>
        <Title level={2} className='heading'>Global Crypto Stats</Title>
        <Row>
            <Col span={12}><Statistic title='Total Cryptocurrencies' value="5"/></Col>
            <Col span={12}><Statistic title='Total Exchanges' value="5"/></Col>
            <Col span={12}><Statistic title='Total Market Cap' value="5"/></Col>
            <Col span={12}><Statistic title='Total 24hr Volume' value="5"/></Col>
            <Col span={12}><Statistic title='Total Markets' value="5"/></Col>
        </Row>
        </>
    )
}