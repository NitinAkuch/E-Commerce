import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@mui/icons-material";

const SidebarContainer = styled.div`
  flex: 1;
  height: calc(100vh - 50px);
  background-color: rgb(251, 251, 255);
  position: sticky;
  top: 50px;
`;

const SidebarWrapper = styled.div`
  padding: 20px;
  color: #555;
`;

const SidebarMenu = styled.div`
  margin-bottom: 10px;
`;

const SidebarTitle = styled.h3`
  font-size: 13px;
  color: rgb(187, 186, 186);
`;

const SidebarList = styled.ul`
  list-style: none;
  padding: 5px;
`;

const SidebarLink = styled(Link)``;

const SidebarListItem = styled.li`
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 10px;
`;

const Sidebar = () => {
  return (
    <>
      <SidebarContainer>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarTitle>Dashboard</SidebarTitle>
            <SidebarList>
              <SidebarLink to="/">
                <SidebarListItem>
                  <LineStyle
                    style={{ marginRight: "5px", fontSize: "20px !important" }}
                  />
                  Home
                </SidebarListItem>
              </SidebarLink>
              <SidebarListItem>
                <Timeline
                  style={{ marginRight: "5px", fontSize: "20px !important" }}
                />
                Analytics
              </SidebarListItem>
              <SidebarListItem>
                <TrendingUp
                  style={{ marginRight: "5px", fontSize: "20px !important" }}
                />
                Sales
              </SidebarListItem>
            </SidebarList>
          </SidebarMenu>
          <SidebarMenu>
            <SidebarTitle>Quick Menu</SidebarTitle>
            <SidebarList>
              <SidebarLink to="users">
                <SidebarListItem>
                  <PermIdentity
                    style={{ marginRight: "5px", fontSize: "20px !important" }}
                  />
                  Users
                </SidebarListItem>
              </SidebarLink>
              <SidebarLink to="/products">
                <SidebarListItem>
                  <Storefront
                    style={{ marginRight: "5px", fontSize: "20px !important" }}
                  />
                  Products
                </SidebarListItem>
              </SidebarLink>
              <SidebarListItem>
                <AttachMoney
                  style={{ marginRight: "5px", fontSize: "20px !important" }}
                />
                Transactions
              </SidebarListItem>
              <SidebarListItem>
                <BarChart
                  style={{ marginRight: "5px", fontSize: "20px !important" }}
                />
                Reports
              </SidebarListItem>
            </SidebarList>
          </SidebarMenu>
          <SidebarMenu>
            <SidebarTitle>Notifications</SidebarTitle>
            <SidebarList>
              <SidebarListItem>
                <MailOutline
                  style={{ marginRight: "5px", fontSize: "20px !important" }}
                />
                Mail
              </SidebarListItem>
              <SidebarListItem>
                <DynamicFeed
                  style={{ marginRight: "5px", fontSize: "20px !important" }}
                />
                Feedback
              </SidebarListItem>
              <SidebarListItem>
                <ChatBubbleOutline
                  style={{ marginRight: "5px", fontSize: "20px !important" }}
                />
                Messages
              </SidebarListItem>
            </SidebarList>
          </SidebarMenu>
          <SidebarMenu>
            <SidebarTitle>Staff</SidebarTitle>
            <SidebarList>
              <SidebarListItem>
                <WorkOutline
                  style={{ marginRight: "5px", fontSize: "20px !important" }}
                />
                Manage
              </SidebarListItem>
              <SidebarListItem>
                <Timeline
                  style={{ marginRight: "5px", fontSize: "20px !important" }}
                />
                Analytics
              </SidebarListItem>
              <SidebarListItem>
                <Report
                  style={{ marginRight: "5px", fontSize: "20px !important" }}
                />
                Reports
              </SidebarListItem>
            </SidebarList>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
