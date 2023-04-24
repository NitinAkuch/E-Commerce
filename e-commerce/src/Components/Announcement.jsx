import React from "react";
import styled from "styled-components";
const OfferAnnounce = styled.div`
  background-color: #cde7f7;
  height: 45px;
  font-size: 22px;
  letter-spacing: 1px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Announcement = () => {
  return (
    <div>
      <OfferAnnounce>
        Announcement! Win Exciting Prize on the Shopping of Above 2000₹.
      </OfferAnnounce>
    </div>
  );
};

export default Announcement;
