import { useState } from 'react'
import { Button, Card, Layout, Menu, Space, Typography } from 'antd'
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import "./styles/dashboard.css"
import { HiOutlineHome } from 'react-icons/hi'
import { GrOrganization } from 'react-icons/gr'
import { BsPerson } from 'react-icons/bs'
import { FaUsers } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineMoneyCollect } from 'react-icons/ai'

function App() {

  const [collapsed, setCollapsed] = useState(false)

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
        </Content>
      </Layout>
    </Layout>
  )
}

export default App
