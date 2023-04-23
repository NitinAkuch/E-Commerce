import React from "react";
import styled from "styled-components";
const OfferAnnounce = styled.div`
  background-color: #cde7f7;
  height: 15px;
  font-size: 12px;

  font-weight: bold;
  display: flex;
  justify-content: center;
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
