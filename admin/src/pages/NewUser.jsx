import React from "react";
import styled from "styled-components";

const NewUserContainer = styled.div`
  flex: 4;
`;
const NewUserTitle = styled.h1``;
const NewUserForm = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const NewUserItem = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-right: 20px;
`;
const NewUserLabel = styled.label`
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
  color: rgb(151, 150, 150);
`;
const NewUserInput = styled.input`
  height: 20px;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
`;
const NewUserGender = styled.div``;
const NewUserSelect = styled.div`
  height: 40px;
  border-radius: 5px;
`;
const NewUserButton = styled.div`
  width: 200px;
  border: none;
  background-color: darkblue;
  color: white;
  padding: 7px 10px;
  font-weight: 600;
  border-radius: 10px;
  margin-top: 30px;
  cursor: pointer;
`;

const NewUser = () => {
  return (
    <NewUserContainer>
      <NewUserTitle>New User</NewUserTitle>
      <NewUserForm>
        <NewUserItem>
          <NewUserLabel>Username</NewUserLabel>
          <NewUserInput type="text" placeholder="Nitin" />
        </NewUserItem>
        <NewUserItem>
          <NewUserLabel>Fullname</NewUserLabel>
          <NewUserInput type="text" placeholder="Nitin Akuch" />
        </NewUserItem>
        <NewUserItem>
          <NewUserLabel>Email</NewUserLabel>
          <NewUserInput type="email" placeholder="nitin@gamil.com" />
        </NewUserItem>
        <NewUserItem>
          <NewUserLabel>Password</NewUserLabel>
          <NewUserInput type="password" placeholder="password" />
        </NewUserItem>
        <NewUserItem>
          <NewUserLabel>Phone</NewUserLabel>
          <NewUserInput type="text" placeholder="+91123456789" />
        </NewUserItem>
        <NewUserItem>
          <NewUserLabel>Address</NewUserLabel>
          <NewUserInput type="text" placeholder="Pune | India" />
        </NewUserItem>
        <NewUserItem>
          <NewUserLabel>Gender</NewUserLabel>
          <NewUserGender>
            <NewUserInput type="radio" name="gender" id="male" value="male" />
            <NewUserLabel for="male">Male</NewUserLabel>
            <NewUserInput
              type="radio"
              name="gender"
              id="female"
              value="female"
            />
            <NewUserLabel for="female">Female</NewUserLabel>
          </NewUserGender>
        </NewUserItem>
        <NewUserItem>
          <NewUserLabel>Active</NewUserLabel>
          <NewUserSelect name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </NewUserSelect>
        </NewUserItem>
        <NewUserButton>Create</NewUserButton>
      </NewUserForm>
    </NewUserContainer>
  );
};

export default NewUser;
