import statusCards from '../assets/JsonData/status-card-data.json'
import StatusCard from '../components/status-card/StatusCard'
import Chart from 'react-apexcharts'
import { Link } from 'react-router-dom'
import Table from '../components/table/Table'
import Badge from '../components/badge/Badge'

const chartOptions = {
    series: [{
        name: 'Online Customers',
        data: [40,70,20,90,36,80,91,60,27,39]
    },{
        name: 'Store Customers',
        data: [20,30,70,80,40,16,40,20,51,10]
    }],
    options: {
        color: ['#6ab04c', '#2980b9'],
        chart: {
            background: 'transparent'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        }
    }
}

const topCustomers = {
    head: [
        'user', 
        'total orders', 
        'total spending'
    ],
    body: [
        {
            username: 'gautam',
            order: '77',
            price: '$11,273',
        },
        {
            username: 'amulya',
            order: '120',
            price: '$10,827',
        },
        {
            username: 'piyush',
            order: '4',
            price: '$9,288',
        },
        {
            username: 'paras',
            order: '777',
            price: '$8,484',
        },
        {
            username: 'aman',
            order: '269',
            price: '$6,827',
        },
    ]
}

const renderCustomerHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderCustomerBody = (item, index) => (
    <tr key={index}>
        <td>{item.username}</td>
        <td>{item.order}</td>
        <td>{item.price}</td>
    </tr>
)

const latestCustomers = {
    head: [
        'order id',
        'user',
        'total price',
        'date',
        'status'
    ],
    body: [
        {
            id: '#2197',
            user: 'arsh',
            date: '17 Jun 2021',
            price: '$820',
            status: 'shipping'
        },
        {
            id: '#6666',
            user: 'rupesh',
            date: '21 Jul 2021',
            price: '$200',
            status: 'pending'
        },
        {
            id: '#6278',
            user: 'shaan',
            date: '28 Jul 2021',
            price: '$1,200',
            status: 'paid'
        },
        {
            id: '#7263',
            user: 'anurag',
            date: '2 Aug 2021',
            price: '$675',
            status: 'refund'
        },
        {
            id: '#9783',
            user: 'vishruti',
            date: '11 Aug 2021',
            price: '$215',
            status: 'paid'
        },
        
    ]
}

const orderStatus = {
    'shipping': 'primary',
    'pending': 'warning',
    'paid': 'success',
    'refund': 'danger'
}

const renderOrderHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderOrderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.user}</td>
        <td>{item.date}</td>
        <td>{item.price}</td>
        <td>
            <Badge 
                style = {orderStatus[item.status]}
                content = {item.status}
            />
        </td>
    </tr>
)

const Dashboard = () => {
    return (
        <div>
            <h2 className="page-header">DASHBOARD</h2>

                <div className="row">
                    <div className="col-6">
                        <div className="row">
                            {
                                statusCards.map((item, index) => (
                                    <div className="col-6">
                                        {/* status card */}
                                        <StatusCard 
                                            icon={item.icon}
                                            count={item.count}
                                            title={item.title}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card full-height">
                            {/* chart */}
                            <Chart 
                                options={chartOptions.options}
                                series={chartOptions.series}
                                type= 'line'
                                height= '100%'
                            />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <div className="card__header">
                                <h3>top customers</h3>
                            </div>
                            <div className="card__body">
                                <Table
                                    headData={topCustomers.head}
                                    renderHead = { (item,index) => renderCustomerHead(item,index)}
                                    bodyData={topCustomers.body}
                                    renderBody = { (item,index) => renderCustomerBody(item,index)}
                                />
                            </div>
                            <div className="card__footer">
                                <Link to='/'>View All</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="card">
                            <div className="card__header">
                                <h3>latest orders</h3>
                            </div>
                            <div className="card__body">
                                <Table
                                    headData={latestCustomers.head}
                                    renderHead = { (item,index) => renderOrderHead(item,index)}
                                    bodyData={latestCustomers.body}
                                    renderBody = { (item,index) => renderOrderBody(item,index)}
                                />
                            </div>
                            <div className="card__footer">
                                <Link to='/'>view all</Link>
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>
    )
}

export default Dashboard
