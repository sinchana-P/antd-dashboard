import { useState } from 'react'
import { Button, Layout, Menu } from 'antd'
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import "./styles/dashboard.css"
import { HiOutlineHome } from 'react-icons/hi'
import { GrOrganization } from 'react-icons/gr'
import { BsPerson } from 'react-icons/bs'
import { FaUsers } from 'react-icons/fa'

function App() {

  return (
    <Layout className='container'>
      <Header
        style={{
          backgroundColor: "white"
        }}
      >
        <div className="brand">
          Antd-Dashboard
        </div>
      </Header>
      <Layout>
        <Sider theme='light'>
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
        <Content>Content</Content>
      </Layout>
    </Layout>
  )
}

export default App
