import { useState } from 'react'
import { Anchor, Avatar, Button, Card, Col, Descriptions, Divider, Empty, Form, Input, Layout, List, Menu, Modal, Row, Space, Steps, Table, Tag, TimePicker, Typography } from 'antd'
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import "./styles/dashboard.css"
import { HiOutlineHome } from 'react-icons/hi'
import { GrOrganization } from 'react-icons/gr'
import { BsPerson } from 'react-icons/bs'
import { FaUsers } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineMoneyCollect } from 'react-icons/ai'
// import Link from 'antd/es/typography/Link';
const { Link } = Anchor;
import { faker } from '@faker-js/faker'
import ButtonGroup from 'antd/es/button/button-group';
import dayjs from 'dayjs';


const generateData = () => {
  const dat = [];

  for(let i=0; i<34; i++){
    dat.push({
      id: faker.datatype.number(1000),
      name: faker.name.fullName(),
      email: faker.internet.email(),
      status: Math.random() > 0.5 ? true: false
    })
  }
  return dat
}

const data = generateData()

function App() {

  const [collapsed, setCollapsed] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <Layout className='container'>
      <Header
        style={{
          backgroundColor: "white"
        }}
      >
        <div style={{display: "flex", alignItems: "center"}}>
          <GiHamburgerMenu onClick={() => setCollapsed(!collapsed)} size={28} style={{ marginRight: 20 }} />
          <div className="brand"> Antd-Dashboard </div>
        </div>
      </Header>
      <Layout>
        <Sider collapsed={collapsed} theme='light'>
          <Menu 
            mode='inline'
            items = {[
              {
                label: "Home",
                key: "home",
                icon: <HiOutlineHome />,
                children: [
                  {
                    label: "Add profile",
                    key: "add_profile",
                    icon: <BsPerson />
                  },
                  {
                    label: 'All users',
                    key: "all_users",
                    icon: <FaUsers />
                  },
                ],
              },
              {
                label: "About",
                key: "about",
                icon: <GrOrganization />
              }
            ]}
          />
        </Sider>
        <Content className='content'>
          <Space direction="horizontal">
            {/* <Card>
              <Typography.Title>Sales</Typography.Title>
              <Typography.Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet risus feugiat in ante metus dictum at. Dui vivamus arcu felis bibendum ut tristique. Eu feugiat pretium nibh ipsum consequat nisl. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Amet venenatis urna cursus eget nunc scelerisque viverra mauris. Convallis tellus id interdum velit laoreet id donec ultrices.
              </Typography.Paragraph>
            </Card> */}
            <Card>
              <Space direction='horizontal'>
                <AiOutlineMoneyCollect />
                <small>Total Sales</small>
              </Space>
              <Typography.Title>$234344</Typography.Title>
            </Card>
            <Card>
              <Space direction='horizontal'>
                <AiOutlineMoneyCollect />
                <small>Total Sales</small>
              </Space>
              <Typography.Title>$234344</Typography.Title>
            </Card>
            <Card>
              <Space direction='horizontal'>
                <AiOutlineMoneyCollect />
                <small>Total Sales</small>
              </Space>
              <Typography.Title>$234344</Typography.Title>
            </Card>
            
          </Space>
          <Divider />

          <Card>
            <Button onClick={() => setModalOpen(true)}>Add User</Button>

            <Button
              danger
              type="primary"
              onClick={() => {
                Modal.confirm({
                  title: "Are u sure?",
                  content: "Bye"
                })
              }}
            >
              Delete
            </Button>

            {/* <List  
              bordered
              dataSource={data}
              renderItem={(item) => {
                return <List.Item>{item.name}</List.Item>
              }}
            /> */}
            <List  
              bordered
              dataSource={data.slice(0, 3)}
              renderItem={(item) => {
                return <List.Item>
                  <Descriptions title={"User Details"}>
                    <Descriptions.Item label={"Name"}>
                        {item.name}
                    </Descriptions.Item>
                    <Descriptions.Item label={"Email"}>
                        {item.email}
                    </Descriptions.Item>
                    <Descriptions.Item label={"Status"}>
                        {item.status ? "Active" : "Not Active"}
                    </Descriptions.Item>
                  </Descriptions>
                </List.Item>
              }}
            />

            <List>
              <List.Item>Hello</List.Item>
              <List.Item>Hello0</List.Item>
              <List.Item>Hello1</List.Item>
            </List>

            <Descriptions bordered title={"Users Data"}>
              <Descriptions.Item span={3} label={"Name"}>Jay</Descriptions.Item>
              <Descriptions.Item span={2} label={"Roll"}>43</Descriptions.Item>
              <Descriptions.Item span={2} label={"Address"}>xyz</Descriptions.Item>
              <Descriptions.Item span={2} label={"home"}>abc</Descriptions.Item>
            </Descriptions>
            <Form 
              onFinish={(values) => {
                console.log(values)
              }}
              layout='vertical'>
              <Empty />  
              <Avatar 
                size={"large"}
                src="https://d1fdloi71mui9q.cloudfront.net/C0tNgh8Sfq80BH4G5d7w_JtyQdSwH09L9z6by" />  
              <Form.Item name={"name"} label={"Name"}>
                <Input />
              </Form.Item>
              <Form.Item name={"email"} label={"Email"}>
                <Input type='email' />
              </Form.Item>
              <Form.Item>
                <TimePicker defaultValue={dayjs('13:30:56', 'HH:mm:ss')} />;
              </Form.Item>
              <Form.Item name={"password"} label={"Password"}>
                <Input type='password' />
              </Form.Item>
              <Form.Item>
                <Button htmlType='submit' type='primary'>Sign Up</Button>              </Form.Item>
            </Form>
          </Card>

          <Card>
            <Steps 
              current = {1}
              items = {[
                {
                  title: "Signup",
                  description: "Please Sign Up"
                },
                {
                  title: "Buy Subscription",
                  description: "Buy Some Subscription"
                },
                {
                  title: "Buy Subscription",
                  description: "Buy Some Subscription"
                }
              ]}
            />
          </Card>

          <Row gutter={10}>
            <Col span={6}>
              <Card>
                <Typography.Title>Something</Typography.Title>
              </Card>
            </Col>
            <Col span={18}>
              <Card>
                <Anchor>
                  <Link href="#test" title='link 1' />
                  <Link href="#test" title='link 2' />
                  <Link href="#test" title='link 3' />
                </Anchor>
              </Card>
            </Col>
          </Row>

          <Row gutter={10} style={{ marginTop: 10 }}>
            <Col span={18}>
              <Table dataSource={data} columns={[{
                dataIndex: "id",
                title: "ID",
                key: "id",
                fixed: true,
              },
              {
                dataIndex: "name",
                title: "name",
                key: "name"
              },
              {
                dataIndex: "email",
                title: "Email Id",
                key: "email" 
              },
              {
                dataIndex: "status",
                title: "Status",
                render: (val) => val ? <Tag>Active</Tag> : <Tag>Not Active</Tag>
              },
              {
                title: "Actions",
                render: () => {
                  return <ButtonGroup>
                          <Button>Edit</Button>
                          <Button type='primary' danger>Delete</Button>
                        </ButtonGroup>;
                },
              }
              ]}/>
            </Col>
          </Row>

        </Content>
      </Layout>
      <Modal
        open={modalOpen}
        onCancel={() => setModalOpen(false)} 
        title={"Add A New User"}>
        <Form>
          <Form.Item label={"Name"}>
            <Input />
          </Form.Item>
          <Form.Item label={"Email"}>
            <Input />
          </Form.Item>
        </Form>

      </Modal>
    </Layout>
  )
}

export default App


// gutter : for spacing

